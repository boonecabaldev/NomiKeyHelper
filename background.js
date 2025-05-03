let isEnabled = false; // Default state set to false

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isEnabled: false }); // Set initial stored state to false
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    toggleExtension();
  }
});

chrome.action.onClicked.addListener(() => {
  toggleExtension();
});

function toggleExtension() {
  isEnabled = !isEnabled;
  chrome.storage.sync.set({ isEnabled });
  
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { 
          action: "toggle", 
          isEnabled 
        });
      }
    });
  });
  
  chrome.action.setTitle({
    title: `Nomi Key Helper: ${isEnabled ? 'ON' : 'OFF'}`
  });
}