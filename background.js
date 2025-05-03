let isEnabled = true;

// Initialize without showing indicator
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isEnabled: true });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle") {
    handleToggle(true); // true means show indicator
  }
});

chrome.action.onClicked.addListener(() => {
  handleToggle(true); // true means show indicator
});

function handleToggle(showIndicator) {
  chrome.storage.sync.get(['isEnabled'], (result) => {
    const currentState = result.isEnabled !== false; // Default to true
    const newState = !currentState;
    isEnabled = newState;
    
    chrome.storage.sync.set({ isEnabled: newState }, () => {
      updateExtensionState(newState, showIndicator);
    });
  });
}

function updateExtensionState(enabled, showIndicator = false) {
  // Update browser action
  chrome.action.setTitle({
    title: `Nomi Key Helper: ${enabled ? 'ON' : 'OFF'}`
  });

  // Broadcast to tabs
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { 
          action: "toggle", 
          isEnabled: enabled,
          showIndicator: showIndicator
        }).catch(() => {});
      }
    });
  });
}

// Keep background alive
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "keepAlive") {
    setTimeout(() => port.disconnect(), 250e3);
  }
});