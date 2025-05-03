let isEnabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isEnabled: true });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle") {
    toggleExtension();
  }
});

chrome.action.onClicked.addListener(() => {
  toggleExtension();
});

function toggleExtension() {
  isEnabled = !isEnabled;
  chrome.storage.sync.set({ isEnabled }, () => {
    // Send message after storage is updated
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
  });
  
  chrome.action.setTitle({
    title: `Nomi Key Helper: ${isEnabled ? 'ON' : 'OFF'}`
  });
}