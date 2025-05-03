// State management
let isEnabled = true;
const originalStyles = new WeakMap();
const trackedElements = new WeakMap();
let currentlyFocusedElement = null;

const BRACKET_PAIRS = {
  '(': ')', '[': ']', '{': '}', '"': '"', '*': '*', '_': '_'
};
const FOCUS_BG_COLOR = '#b8e6b8';
const BRACKET_BG_COLOR = '#ffffcc';
const TEXT_COLOR = '#003300';
const PLACEHOLDER_COLOR = '#b3d9b3';

// Remove the initial updateIndicator() call completely
chrome.storage.sync.get(['isEnabled'], (result) => {
  isEnabled = result.isEnabled !== false;
  if (isEnabled) {
    initializeEventListeners();
    if (document.activeElement && isTextInput(document.activeElement)) {
      handleFocusIn({ target: document.activeElement });
    }
  }
});

// Modified message listener
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggle") {
    isEnabled = message.isEnabled;
    
    // Only show indicator if explicitly requested
    if (message.showIndicator) {
      updateIndicator();
    }
    
    // Rest of your toggle handling logic...
    const activeElement = document.activeElement;
    const isActiveTextInput = activeElement && isTextInput(activeElement);
    
    if (isEnabled) {
      initializeEventListeners();
      if (isActiveTextInput) {
        currentlyFocusedElement = activeElement;
        trackedElements.set(activeElement, {
          input: handleInput,
          keydown: handleKeyDown
        });
        activeElement.addEventListener('input', handleInput);
        activeElement.addEventListener('keydown', handleKeyDown);
        applyFocusStyles(activeElement);
        updateBracketHighlighting(activeElement);
      }
    } else {
      if (currentlyFocusedElement) {
        restoreOriginalStyles(currentlyFocusedElement);
        currentlyFocusedElement.removeEventListener('input', handleInput);
        currentlyFocusedElement.removeEventListener('keydown', handleKeyDown);
        trackedElements.delete(currentlyFocusedElement);
      }
      removeAllEventListeners();
      currentlyFocusedElement = null;
    }
  } else if (message.action === 'insertTerm' && isEnabled) {
    // Handle term insertion from popup
    if (currentlyFocusedElement && isTextInput(currentlyFocusedElement)) {
      insertText(currentlyFocusedElement, message.term);
    }
  }
});

// Create and style status indicator
const indicator = document.createElement('div');
indicator.id = 'nomi-key-helper-indicator';
document.body.appendChild(indicator);

let hideTimeout;

function updateIndicator() {
  if (hideTimeout) clearTimeout(hideTimeout);
  
  indicator.textContent = `Nomi Key Helper ${isEnabled ? 'ON' : 'OFF'}`;
  indicator.className = isEnabled ? 'on' : 'off';
  
  void indicator.offsetWidth;
  indicator.classList.add('show');
  
  hideTimeout = setTimeout(() => {
    indicator.classList.remove('show');
    indicator.classList.add('hide');
    setTimeout(() => {
      indicator.classList.remove('hide');
    }, 500);
  }, 5000);
}

// Event listener management
function initializeEventListeners() {
  document.addEventListener('focusin', handleFocusIn);
  document.addEventListener('focusout', handleFocusOut);
}

function removeAllEventListeners() {
  document.removeEventListener('focusin', handleFocusIn);
  document.removeEventListener('focusout', handleFocusOut);
  
  // Clean up all element listeners and restore styles
  for (const [element, listeners] of trackedElements) {
    element.removeEventListener('input', listeners.input);
    element.removeEventListener('keydown', listeners.keydown);
    restoreOriginalStyles(element);
  }
  trackedElements.clear();
}

function handleFocusIn(event) {
  const target = event.target;
  currentlyFocusedElement = target;
  
  if (!isEnabled) return;
  
  if (isTextInput(target)) {
    trackedElements.set(target, {
      input: handleInput,
      keydown: handleKeyDown
    });
    
    applyFocusStyles(target);
    
    target.addEventListener('input', handleInput);
    target.addEventListener('keydown', handleKeyDown);
  }
}

function handleFocusOut(event) {
  const target = event.target;
  currentlyFocusedElement = null;
  
  if (isTextInput(target)) {
    restoreOriginalStyles(target);
    target.removeEventListener('input', handleInput);
    target.removeEventListener('keydown', handleKeyDown);
    trackedElements.delete(target);
  }
}

function applyFocusStyles(element) {
  originalStyles.set(element, {
    backgroundColor: element.style.backgroundColor,
    color: element.style.color,
    placeholderColor: getComputedStyle(element).getPropertyValue('--placeholder-color')
  });

  element.style.backgroundColor = FOCUS_BG_COLOR;
  element.style.color = TEXT_COLOR;
  element.style.setProperty('--placeholder-color', PLACEHOLDER_COLOR);
}

function restoreOriginalStyles(element) {
  const styles = originalStyles.get(element);
  if (styles) {
    element.style.backgroundColor = styles.backgroundColor;
    element.style.color = styles.color;
    element.style.setProperty('--placeholder-color', styles.placeholderColor);
  } else {
    // Fallback to default styles if no original styles were stored
    element.style.backgroundColor = '';
    element.style.color = '';
    element.style.setProperty('--placeholder-color', '');
  }
}

// Insert text into the active text element
function insertText(element, term) {
  if (!isEnabled || !isTextInput(element)) return;

  if (element.isContentEditable) {
    // For contenteditable elements
    document.execCommand('insertText', false, term);
  } else if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
    // For textarea and input elements
    const start = element.selectionStart;
    const end = element.selectionEnd;
    const text = element.value;
    const newText = text.substring(0, start) + term + text.substring(end);
    element.value = newText;
    // Move cursor to after inserted term
    element.selectionStart = element.selectionEnd = start + term.length;
  }
  // Trigger input event to notify listeners
  element.dispatchEvent(new Event('input', { bubbles: true }));
  // Update bracket highlighting after insertion
  updateBracketHighlighting(element);
}

// Core functionality functions
function handleInput(event) {
  if (!isEnabled) return;
  
  const target = event.target;
  const value = target.value;
  const pos = target.selectionStart;
  const insertedChar = value[pos - 1];
  
  if (BRACKET_PAIRS[insertedChar] && target.selectionStart === target.selectionEnd) {
    const closingChar = BRACKET_PAIRS[insertedChar];
    
    if (insertedChar === closingChar) {
      if (value[pos] !== insertedChar && value[pos - 2] !== insertedChar) {
        insertClosingBracket(target, pos, closingChar);
      }
    } else {
      insertClosingBracket(target, pos, closingChar);
    }
  }
  
  updateBracketHighlighting(target);
}

function handleKeyDown(event) {
  if (!isEnabled) return;
  
  const target = event.target;
  
  if (event.key === 'Backspace') {
    const value = target.value;
    const pos = target.selectionStart;
    
    if (pos === target.selectionEnd) {
      const charBefore = value[pos - 1];
      const charAfter = value[pos];
      
      if (BRACKET_PAIRS[charBefore] && BRACKET_PAIRS[charBefore] === charAfter) {
        target.value = value.substring(0, pos - 1) + value.substring(pos + 1);
        target.selectionStart = pos - 1;
        target.selectionEnd = pos - 1;
        event.preventDefault();
        updateBracketHighlighting(target);
        return;
      }
    }
  }
  
  if (event.key === 'Delete') {
    const value = target.value;
    const pos = target.selectionStart;
    
    if (pos === target.selectionEnd) {
      const charBefore = value[pos];
      const charAfter = value[pos + 1];
      
      if (BRACKET_PAIRS[charBefore] && BRACKET_PAIRS[charBefore] === charAfter) {
        target.value = value.substring(0, pos) + value.substring(pos + 2);
        target.selectionStart = pos;
        target.selectionEnd = pos;
        event.preventDefault();
        updateBracketHighlighting(target);
        return;
      }
    }
  }
  
  if (event.key === 'Tab') {
    if (isCursorInsideBrackets(target)) {
      const closingPos = findClosingBracketPosition(target);
      if (closingPos !== -1) {
        const newCursorPos = closingPos + 2;
        const value = target.value;
        
        if (newCursorPos > value.length) {
          target.value = value + ' '.repeat(newCursorPos - value.length);
        }
        
        target.selectionStart = newCursorPos;
        target.selectionEnd = newCursorPos;
        event.preventDefault();
        updateBracketHighlighting(target);
        return;
      }
    }
  }
  
  updateBracketHighlighting(target);
}

// Helper functions
function insertClosingBracket(target, pos, closingChar) {
  const value = target.value;
  target.value = value.substring(0, pos) + closingChar + value.substring(pos);
  target.selectionStart = pos;
  target.selectionEnd = pos;
}

function isCursorInsideBrackets(target) {
  const pos = target.selectionStart;
  const value = target.value;
  
  for (const [open, close] of Object.entries(BRACKET_PAIRS)) {
    if (open === close) {
      let countBefore = 0;
      for (let i = 0; i < pos; i++) {
        if (value[i] === open) countBefore++;
      }
      
      if (countBefore % 2 === 1) {
        let countAfter = 0;
        for (let i = pos; i < value.length; i++) {
          if (value[i] === close) {
            countAfter++;
            break;
          }
        }
        if (countAfter > 0) return true;
      }
    } else {
      let openCount = 0;
      let closeCount = 0;
      
      for (let i = 0; i < pos; i++) {
        if (value[i] === open) openCount++;
        if (value[i] === close) closeCount++;
      }
      
      if (openCount > closeCount) {
        for (let i = pos; i < value.length; i++) {
          if (value[i] === close) {
            return true;
          }
        }
      }
    }
  }
  
  return false;
}

function findClosingBracketPosition(target) {
  const pos = target.selectionStart;
  const value = target.value;
  
  for (const [open, close] of Object.entries(BRACKET_PAIRS)) {
    if (open === close) {
      let count = 0;
      for (let i = 0; i < pos; i++) {
        if (value[i] === open) count++;
      }
      
      if (count % 2 === 1) {
        for (let i = pos; i < value.length; i++) {
          if (value[i] === close) {
            return i;
          }
        }
      }
    } else {
      let balance = 0;
      for (let i = 0; i < pos; i++) {
        if (value[i] === open) balance++;
        if (value[i] === close) balance--;
      }
      
      if (balance > 0) {
        for (let i = pos; i < value.length; i++) {
          if (value[i] === open) balance++;
          if (value[i] === close) balance--;
          
          if (balance === 0) {
            return i;
          }
        }
      }
    }
  }
  
  return -1;
}

function updateBracketHighlighting(target) {
  if (!isEnabled) return;
  
  if (isCursorInsideBrackets(target)) {
    target.style.backgroundColor = BRACKET_BG_COLOR;
  } else {
    target.style.backgroundColor = FOCUS_BG_COLOR;
  }
}

function isTextInput(element) {
  return (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search' || 
          element.type === 'email' || element.type === 'password' || !element.type)) ||
         element.tagName === 'TEXTAREA' ||
         (element.isContentEditable && element.getAttribute('role') === 'textbox');
}

// Inject CSS for placeholder styling
const style = document.createElement('style');
style.textContent = `
  input::placeholder, textarea::placeholder {
    color: var(--placeholder-color, inherit) !important;
    opacity: 1 !important;
  }
  
  [contenteditable][role="textbox"]:empty::before {
    color: var(--placeholder-color, inherit) !important;
    opacity: 1 !important;
  }
`;
document.head.appendChild(style);

// Initial update
updateIndicator();