function showOverlayMessage(message) {
  const overlay = document.createElement('div');
  overlay.className = 'green-overlay';
  overlay.textContent = message;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 1500);
}

function handleFocus(event) {
  const el = event.target;
  el.classList.add('text-focus-highlight');
  el.dataset.originalStyle = el.getAttribute('style') || '';
}

function handleBlur(event) {
  const el = event.target;
  el.classList.remove('text-focus-highlight');
  el.setAttribute('style', el.dataset.originalStyle);
}

function handleKeyDown(event) {
  const el = event.target;
  const key = event.key;
  
  if (!['(', ')', '*', 'Tab', 'Backspace'].includes(key)) return;
  
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const value = el.value;

  if (key === '(') {
    event.preventDefault();
    showOverlayMessage('( key pressed');

    if (value[start] !== '(') {
      const before = value.slice(0, start);
      const after = value.slice(end);
      el.value = before + '()' + after;
      el.setSelectionRange(start + 1, start + 1); // Move cursor between parentheses
    }
    // else: do nothing if cursor is already on '('
  }

  else if (key === ')') {
    event.preventDefault();
    showOverlayMessage(') key pressed');

    if (value[start] !== ')') {
      const before = value.slice(0, start);
      const after = value.slice(end);
      el.value = before + ')' + after;
      el.setSelectionRange(start + 1, start + 1);
    }
    // else: do nothing if on ')'
  }

  else if (key === 'Backspace') {
    const charBefore = value[start - 1];
    const charAt = value[start];

    // Backspace over ')'
    if (charAt === ')') {
      event.preventDefault();
      let left = value.slice(0, start).lastIndexOf('(');
      let right = value.indexOf(')', start);

      if (left !== -1 && right !== -1) {
        const newVal = value.slice(0, left) + value.slice(left + 1, right) + value.slice(right + 1);
        el.value = newVal;
        el.setSelectionRange(left, left);
      }
    }

    // Backspace over '('
    else if (charAt === '(') {
      event.preventDefault();
      let right = value.indexOf(')', start);
      if (right !== -1) {
        const newVal = value.slice(0, start) + value.slice(start + 1, right) + value.slice(right + 1);
        el.value = newVal;
        el.setSelectionRange(start, start);
      }
    }
  }

  else if (key === 'Tab') {
    showOverlayMessage('Tab key pressed');
  }

  else if (key === '*') {
    showOverlayMessage('* key pressed');
  }
}

function attachHandlers(el) {
  el.addEventListener('focus', handleFocus);
  el.addEventListener('blur', handleBlur);
  el.addEventListener('keydown', handleKeyDown);
}

// Attach to all inputs and textareas
document.querySelectorAll('input[type="text"], textarea').forEach(attachHandlers);
