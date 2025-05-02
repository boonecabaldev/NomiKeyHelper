function showOverlayMessage(message) {
  const overlay = document.createElement('div');
  overlay.className = 'green-overlay';
  overlay.textContent = message;
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.remove();
  }, 1500);
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

function handleKeydown(event) {
  const key = event.key;
  if (['(', ')', '*', 'Tab'].includes(key)) {
    let displayKey = key === 'Tab' ? 'Tab key pressed' : `${key} key pressed`;
    showOverlayMessage(displayKey);
  }
}

function attachHandlers(el) {
  el.addEventListener('focus', handleFocus);
  el.addEventListener('blur', handleBlur);
  el.addEventListener('keydown', handleKeydown);
}

// Attach to all inputs and textareas on the page
document.querySelectorAll('input[type="text"], textarea').forEach(attachHandlers);
