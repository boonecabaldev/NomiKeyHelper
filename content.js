// Updated color scheme
const FOCUS_BG_COLOR = '#b8e6b8';  // Very light green
const BRACKET_BG_COLOR = '#ffffcc'; // Light yellow (unchanged)
const TEXT_COLOR = '#003300';       // Very dark green (unchanged)
const PLACEHOLDER_COLOR = '#b3d9b3'; // Medium-light green

// Track original styles for restoration
const originalStyles = new WeakMap();

// Bracket pairs configuration
const BRACKET_PAIRS = {
  '(': ')',
  '[': ']',
  '{': '}',
  '"': '"',
  '*': '*',
  '_': '_'
};

// Initialize extension
document.addEventListener('focusin', handleFocusIn);
document.addEventListener('focusout', handleFocusOut);

function handleFocusIn(event) {
  const target = event.target;
  if (isTextInput(target)) {
    // Save original styles
    originalStyles.set(target, {
      backgroundColor: target.style.backgroundColor,
      color: target.style.color,
      placeholderColor: getComputedStyle(target).getPropertyValue('--placeholder-color')
    });

    // Apply focus styles
    target.style.backgroundColor = FOCUS_BG_COLOR;
    target.style.color = TEXT_COLOR;
    target.style.setProperty('--placeholder-color', PLACEHOLDER_COLOR);
    
    // Add event listeners
    target.addEventListener('input', handleInput);
    target.addEventListener('keydown', handleKeyDown);
  }
}

function handleFocusOut(event) {
  const target = event.target;
  if (isTextInput(target)) {
    // Restore original styles
    const styles = originalStyles.get(target);
    if (styles) {
      target.style.backgroundColor = styles.backgroundColor;
      target.style.color = styles.color;
      target.style.setProperty('--placeholder-color', styles.placeholderColor);
    }
    
    // Remove event listeners
    target.removeEventListener('input', handleInput);
    target.removeEventListener('keydown', handleKeyDown);
  }
}

function handleInput(event) {
  const target = event.target;
  const value = target.value;
  const pos = target.selectionStart;
  
  // Get inserted character
  const insertedChar = value[pos - 1];
  
  if (BRACKET_PAIRS[insertedChar] && target.selectionStart === target.selectionEnd) {
    const closingChar = BRACKET_PAIRS[insertedChar];
    
    // Special handling for same-character pairs
    if (insertedChar === closingChar) {
      // Don't auto-close if:
      // 1. Next character is already the closing char
      // 2. Previous character is the same (avoid triples)
      if (value[pos] !== insertedChar && value[pos - 2] !== insertedChar) {
        insertClosingBracket(target, pos, closingChar);
      }
    } else {
      // Normal different-character pairs
      insertClosingBracket(target, pos, closingChar);
    }
  }
  
  updateBracketHighlighting(target);
}

function insertClosingBracket(target, pos, closingChar) {
  const value = target.value;
  target.value = value.substring(0, pos) + closingChar + value.substring(pos);
  target.selectionStart = pos;
  target.selectionEnd = pos;
}

function handleKeyDown(event) {
  const target = event.target;
  
  // Add this early in the function to skip single-quote handling
  const pressedChar = event.key;
  if (pressedChar === "'") return; // Skip all single-quote processing
  
  // Handle backspace for bracket pairs
  if (event.key === 'Backspace') {
    const value = target.value;
    const pos = target.selectionStart;
    
    if (pos === target.selectionEnd) {
      const charBefore = value[pos - 1];
      const charAfter = value[pos];
      
      // Check if we're deleting one of a pair
      if (BRACKET_PAIRS[charBefore] && BRACKET_PAIRS[charBefore] === charAfter) {
        // Delete both characters
        target.value = value.substring(0, pos - 1) + value.substring(pos + 1);
        target.selectionStart = pos - 1;
        target.selectionEnd = pos - 1;
        event.preventDefault();
        updateBracketHighlighting(target);
        return;
      }
    }
  }
  
  // Handle delete for bracket pairs
  if (event.key === 'Delete') {
    const value = target.value;
    const pos = target.selectionStart;
    
    if (pos === target.selectionEnd) {
      const charBefore = value[pos];
      const charAfter = value[pos + 1];
      
      if (BRACKET_PAIRS[charBefore] && BRACKET_PAIRS[charBefore] === charAfter) {
        // Delete both characters
        target.value = value.substring(0, pos) + value.substring(pos + 2);
        target.selectionStart = pos;
        target.selectionEnd = pos;
        event.preventDefault();
        updateBracketHighlighting(target);
        return;
      }
    }
  }
  
  // Handle Tab key behavior
  if (event.key === 'Tab') {
    if (isCursorInsideBrackets(target)) {
      const closingPos = findClosingBracketPosition(target);
      if (closingPos !== -1) {
        const newCursorPos = closingPos + 2;
        const value = target.value;
        
        // Ensure we have enough characters after the closing bracket
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
    // Allow normal tab behavior if not inside brackets
  }
  
  updateBracketHighlighting(target);
}

function isCursorInsideBrackets(target) {
  const pos = target.selectionStart;
  const value = target.value;
  
  for (const [open, close] of Object.entries(BRACKET_PAIRS)) {
    if (open === close) {
      // Special handling for same-character pairs like "", '', **
      let countBefore = 0;
      for (let i = 0; i < pos; i++) {
        if (value[i] === open) countBefore++;
      }
      
      // If odd number before cursor, we're inside a pair
      if (countBefore % 2 === 1) {
        let countAfter = 0;
        for (let i = pos; i < value.length; i++) {
          if (value[i] === close) {
            countAfter++;
            break; // Found closing character
          }
        }
        if (countAfter > 0) return true;
      }
    } else {
      // Normal different-character pairs
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
      // Handle same-character pairs
      let count = 0;
      for (let i = 0; i < pos; i++) {
        if (value[i] === open) count++;
      }
      
      if (count % 2 === 1) {
        // Find the next occurrence of the same character
        for (let i = pos; i < value.length; i++) {
          if (value[i] === close) {
            return i;
          }
        }
      }
    } else {
      // Handle different-character pairs
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
  if (isCursorInsideBrackets(target)) {
    target.style.backgroundColor = '#ffffcc';
  } else {
    target.style.backgroundColor = '#7fbf7f';
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