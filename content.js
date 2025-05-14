// content.js - Refactored with proper test exposure
(function () {
  class NomiKeyHelper {
    constructor() {
      this.isEnabled = true;
      this.originalStyles = new WeakMap();
      this.trackedElements = new WeakMap();
      this.currentlyFocusedElement = null;
      this.indicator = null;
      this.hideTimeout = null;

      this.BRACKET_PAIRS = {
        "(": ")",
        "[": "]",
        "{": "}",
        '"': '"',
        "*": "*"
      };
      this.FOCUS_BG_COLOR = "#b8e6b8";
      this.BRACKET_BG_COLOR = "#ffffcc";
      this.TEXT_COLOR = "#003300";
      this.PLACEHOLDER_COLOR = "#336633";
    }

    // Initialization
    initialize() {
      this.createIndicator();
      this.initializeEventListeners();

      chrome.storage.sync.get(["isEnabled"], (result) => {
        this.isEnabled = result.isEnabled !== false;
        if (this.isEnabled) {
          if (document.activeElement && this.isTextInput(document.activeElement)) {
            this.handleFocusIn({ target: document.activeElement });
          }
        }
      });

      chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    }

    // Core functionality
    handleInput(event) {
      if (!this.isEnabled) return;

      const target = event.target;
      const value = target.value;
      const pos = target.selectionStart;
      const insertedChar = value[pos - 1];

      if (this.BRACKET_PAIRS[insertedChar] && target.selectionStart === target.selectionEnd) {
        const closingChar = this.BRACKET_PAIRS[insertedChar];

        if (insertedChar === closingChar) {
          if (value[pos] !== insertedChar && value[pos - 2] !== insertedChar) {
            this.insertClosingBracket(target, pos, closingChar);
          }
        } else {
          this.insertClosingBracket(target, pos, closingChar);
        }
      }

      this.updateBracketHighlighting(target);
    }

    handleKeyDown(event) {
      if (!this.isEnabled) return;

      const target = event.target;
      const value = target.value;
      const pos = target.selectionStart;

      if (event.key === "Tab") {
        if (this.isCursorInsideBrackets(target)) {
          const closingPos = this.findClosingBracketPosition(target);
          if (closingPos !== -1) {
            let newValue = value;

            if (value.substring(closingPos, closingPos + 2) !== ") ") {
              newValue = value.substring(0, closingPos + 1) + " " + value.substring(closingPos + 1);
            }

            target.value = newValue;
            target.selectionStart = closingPos + 2;
            target.selectionEnd = closingPos + 2;
            event.preventDefault();
            this.updateBracketHighlighting(target);
            return;
          }
        }
      }

      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        setTimeout(() => {
          this.updateBracketHighlighting(target);
        }, 0);
      }

      if (event.key === "Backspace") {
        const value = target.value;
        const pos = target.selectionStart;

        if (pos === target.selectionEnd) {
          const charBefore = value[pos - 1];
          const charAfter = value[pos];

          if (
            charBefore &&
            charAfter &&
            !this.BRACKET_PAIRS[charBefore] &&
            !Object.values(this.BRACKET_PAIRS).includes(charBefore)
          ) {
            target.value = value.substring(0, pos - 1) + value.substring(pos);
            target.selectionStart = pos - 1;
            target.selectionEnd = pos - 1;
            event.preventDefault();
            this.updateBracketHighlighting(target);
            return;
          }

          if (this.BRACKET_PAIRS[charBefore] && this.BRACKET_PAIRS[charBefore] === charAfter) {
            target.value = value.substring(0, pos - 1) + value.substring(pos + 1);
            target.selectionStart = pos - 1;
            target.selectionEnd = pos - 1;
            event.preventDefault();
            this.updateBracketHighlighting(target);
            return;
          }
        }
      }

      if (event.key === "Delete") {
        const value = target.value;
        const pos = target.selectionStart;

        if (pos === target.selectionEnd) {
          const charAtPos = value[pos];
          const charAfter = value[pos + 1];

          if (charAtPos && this.BRACKET_PAIRS[charAtPos] && this.BRACKET_PAIRS[charAtPos] === charAfter) {
            target.value = value.substring(0, pos) + value.substring(pos + 2);
            target.selectionStart = target.selectionEnd = pos;
            event.preventDefault();
            this.updateBracketHighlighting(target);
            return;
          }
        }
      }

      if (event.key === "Enter") {
        setTimeout(() => {
          this.updateBracketHighlighting(target);
        }, 0);
      }

      this.updateBracketHighlighting(target);
    }

    // Helper methods
    insertClosingBracket(target, pos, closingChar) {
      const value = target.value;
      target.value = value.substring(0, pos) + closingChar + value.substring(pos);
      target.selectionStart = pos;
      target.selectionEnd = pos;
    }

    isCursorInsideBrackets(target) {
      const pos = target.selectionStart;
      const value = target.value;

      for (const [open, close] of Object.entries(this.BRACKET_PAIRS)) {
        if (open === close) {
          let countBefore = 0;
          for (let i = 0; i < pos; i++) {
            if (value[i] === open) countBefore++;
          }
          if (countBefore % 2 === 1) return true;
        } else {
          let balance = 0;
          for (let i = 0; i < pos; i++) {
            if (value[i] === open) balance++;
            if (value[i] === close) balance--;
          }
          if (balance > 0) return true;
        }
      }
      return false;
    }

    findClosingBracketPosition(target) {
      const pos = target.selectionStart;
      const value = target.value;

      for (const [open, close] of Object.entries(this.BRACKET_PAIRS)) {
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

    updateBracketHighlighting(target) {
      if (!this.isEnabled || !target) return;

      const pos = target.selectionStart;
      const value = target.value;

      let isBetweenBrackets = false;
      for (const [open, close] of Object.entries(this.BRACKET_PAIRS)) {
        if (open === close) {
          let count = 0;
          for (let i = 0; i < pos; i++) {
            if (value[i] === open) count++;
          }
          if (count % 2 === 1) {
            isBetweenBrackets = true;
            break;
          }
        } else {
          let balance = 0;
          for (let i = 0; i < pos; i++) {
            if (value[i] === open) balance++;
            if (value[i] === close) balance--;
          }
          if (balance > 0) {
            const closingPos = this.findClosingBracketPosition(target);
            if (closingPos !== -1 && pos <= closingPos) {
              isBetweenBrackets = true;
              break;
            }
          }
        }
      }

      target.style.backgroundColor = isBetweenBrackets ? this.BRACKET_BG_COLOR : this.FOCUS_BG_COLOR;
    }

    isTextInput(element) {
      return (
        (element.tagName === "INPUT" &&
          (element.type === "text" ||
            element.type === "search" ||
            element.type === "email" ||
            element.type === "password" ||
            !element.type)) ||
        element.tagName === "TEXTAREA" ||
        (element.isContentEditable && element.getAttribute("role") === "textbox")
      );
    }

    // DOM manipulation methods
    createIndicator() {
      this.indicator = document.createElement("div");
      this.indicator.id = "nomi-key-helper-indicator";
      document.body.appendChild(this.indicator);

      const style = document.createElement("style");
      style.textContent = `
      input::placeholder, textarea::placeholder {
        color: var(--placeholder-color, inherit) !important;
        opacity: 1 !important;
      }
      
      [contenteditable][role="textbox"]:empty::before {
        color: var(--placeholder-color, inherit) !important;
        opacity: 1 !important;
      }

      input[type="text"], 
      input[type="search"], 
      input[type="email"], 
      input[type="password"], 
      textarea {
        caret-color: #2E7D32 !important;
      }

      [contenteditable][role="textbox"] {
        caret-color: #2E7D32 !important;
      }
    `;
      document.head.appendChild(style);
    }

    updateIndicator() {
      if (this.hideTimeout) clearTimeout(this.hideTimeout);

      this.indicator.textContent = `Nomi Key Helper ${this.isEnabled ? "ON" : "OFF"}`;
      this.indicator.className = this.isEnabled ? "on" : "off";

      void this.indicator.offsetWidth;
      this.indicator.classList.add("show");

      this.hideTimeout = setTimeout(() => {
        this.indicator.classList.remove("show");
        this.indicator.classList.add("hide");
        setTimeout(() => {
          this.indicator.classList.remove("hide");
        }, 500);
      }, 5000);
    }

    // Event handling
    initializeEventListeners() {
      document.addEventListener("focusin", this.handleFocusIn.bind(this));
      document.addEventListener("focusout", this.handleFocusOut.bind(this));

      document.addEventListener("click", (event) => {
        if (this.isTextInput(event.target)) {
          setTimeout(() => {
            this.updateBracketHighlighting(event.target);
          }, 0);
        }
      });

      document.addEventListener("selectionchange", () => {
        if (this.currentlyFocusedElement && this.isTextInput(this.currentlyFocusedElement)) {
          setTimeout(() => {
            this.updateBracketHighlighting(this.currentlyFocusedElement);
          }, 0);
        }
      });
    }

    handleFocusIn(event) {
      const target = event.target;
      this.currentlyFocusedElement = target;

      if (!this.isEnabled) return;

      if (this.isTextInput(target)) {
        this.trackedElements.set(target, {
          input: this.handleInput.bind(this),
          keydown: this.handleKeyDown.bind(this)
        });

        this.applyFocusStyles(target);

        target.addEventListener("input", this.handleInput.bind(this));
        target.addEventListener("keydown", this.handleKeyDown.bind(this));
      }
    }

    handleFocusOut(event) {
      const target = event.target;
      this.currentlyFocusedElement = null;

      if (this.isTextInput(target)) {
        this.restoreOriginalStyles(target);
        target.removeEventListener("input", this.handleInput.bind(this));
        target.removeEventListener("keydown", this.handleKeyDown.bind(this));
        this.trackedElements.delete(target);
      }
    }

    applyFocusStyles(element) {
      this.originalStyles.set(element, {
        backgroundColor: element.style.backgroundColor,
        color: element.style.color,
        placeholderColor: getComputedStyle(element).getPropertyValue("--placeholder-color")
      });

      element.style.backgroundColor = this.FOCUS_BG_COLOR;
      element.style.color = this.TEXT_COLOR;
      element.style.setProperty("--placeholder-color", this.PLACEHOLDER_COLOR);
    }

    restoreOriginalStyles(element) {
      const styles = this.originalStyles.get(element);
      if (styles) {
        element.style.backgroundColor = styles.backgroundColor;
        element.style.color = styles.color;
        element.style.setProperty("--placeholder-color", styles.placeholderColor);
      } else {
        element.style.backgroundColor = "";
        element.style.color = "";
        element.style.setProperty("--placeholder-color", "");
      }
    }

    handleMessage(message) {
      if (message.action === "toggle") {
        this.isEnabled = message.isEnabled;

        if (message.showIndicator) {
          this.updateIndicator();
        }

        const activeElement = document.activeElement;
        const isActiveTextInput = activeElement && this.isTextInput(activeElement);

        if (this.isEnabled) {
          this.initializeEventListeners();
          if (isActiveTextInput) {
            this.currentlyFocusedElement = activeElement;
            this.trackedElements.set(activeElement, {
              input: this.handleInput.bind(this),
              keydown: this.handleKeyDown.bind(this)
            });
            activeElement.addEventListener("input", this.handleInput.bind(this));
            activeElement.addEventListener("keydown", this.handleKeyDown.bind(this));
            this.applyFocusStyles(activeElement);
            this.updateBracketHighlighting(activeElement);
          }
        } else {
          if (this.currentlyFocusedElement) {
            this.restoreOriginalStyles(this.currentlyFocusedElement);
            this.currentlyFocusedElement.removeEventListener("input", this.handleInput.bind(this));
            this.currentlyFocusedElement.removeEventListener("keydown", this.handleKeyDown.bind(this));
            this.trackedElements.delete(this.currentlyFocusedElement);
          }
          this.removeAllEventListeners();
          this.currentlyFocusedElement = null;
        }
      } else if (message.action === "insertTerm" && this.isEnabled) {
        if (this.currentlyFocusedElement && this.isTextInput(this.currentlyFocusedElement)) {
          this.insertText(this.currentlyFocusedElement, message.term);
        }
      }
    }

    removeAllEventListeners() {
      document.removeEventListener("focusin", this.handleFocusIn.bind(this));
      document.removeEventListener("focusout", this.handleFocusOut.bind(this));

      for (const [element, listeners] of this.trackedElements) {
        element.removeEventListener("input", listeners.input);
        element.removeEventListener("keydown", listeners.keydown);
        this.restoreOriginalStyles(element);
      }
      this.trackedElements.clear();
    }

    // Test helper methods
    simulateKeyPress(element, key) {
      const event = new KeyboardEvent("keydown", { key });
      element.dispatchEvent(event);

      if (key.length === 1) {
        // Regular character
        const start = element.selectionStart;
        const end = element.selectionEnd;
        const value = element.value;

        element.value = value.substring(0, start) + key + value.substring(end);
        element.selectionStart = element.selectionEnd = start + 1;

        const inputEvent = new Event("input", { bubbles: true });
        element.dispatchEvent(inputEvent);
      }

      setTimeout(() => {
        this.updateBracketHighlighting(element);
      }, 0);
    }

    simulateBackspace(element) {
      const start = element.selectionStart;
      const end = element.selectionEnd;
      const value = element.value;

      if (start === end && start > 0) {
        element.value = value.substring(0, start - 1) + value.substring(end);
        element.selectionStart = element.selectionEnd = start - 1;
      } else if (start !== end) {
        element.value = value.substring(0, start) + value.substring(end);
        element.selectionStart = element.selectionEnd = start;
      }

      const event = new KeyboardEvent("keydown", { key: "Backspace" });
      element.dispatchEvent(event);

      const inputEvent = new Event("input", { bubbles: true });
      element.dispatchEvent(inputEvent);

      this.updateBracketHighlighting(element);
    }

    simulateDelete(element) {
      const start = element.selectionStart;
      const end = element.selectionEnd;
      const value = element.value;

      if (start === end && start < value.length) {
        element.value = value.substring(0, start) + value.substring(start + 1);
        element.selectionStart = element.selectionEnd = start;
      } else if (start !== end) {
        element.value = value.substring(0, start) + value.substring(end);
        element.selectionStart = element.selectionEnd = start;
      }

      const event = new KeyboardEvent("keydown", { key: "Delete" });
      element.dispatchEvent(event);

      const inputEvent = new Event("input", { bubbles: true });
      element.dispatchEvent(inputEvent);

      this.updateBracketHighlighting(element);
    }

    simulateEnter(element) {
      const event = new KeyboardEvent("keydown", { key: "Enter" });
      element.dispatchEvent(event);

      setTimeout(() => {
        this.updateBracketHighlighting(element);
      }, 0);
    }

    simulateTab(element) {
      const event = new KeyboardEvent("keydown", { key: "Tab" });
      element.dispatchEvent(event);

      setTimeout(() => {
        this.updateBracketHighlighting(element);
      }, 0);
    }

    getHighlightState(element) {
      return element.style.backgroundColor === this.BRACKET_BG_COLOR ? "Y" : "N";
    }
  }

  // Initialize the extension
  const nomiKeyHelper = new NomiKeyHelper();
  nomiKeyHelper.initialize();

  // For testing purposes, expose the class to the window object
  if (typeof window !== "undefined") {
    window.NomiKeyHelper = NomiKeyHelper;
  }
})();

// Test Scenario 1
function testScenario1() {
  const helper = new NomiKeyHelper();
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.focus(); // Ensure the input has focus

  // Helper function to format assertion messages
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
    console.log(`✓ ${message}`);
  }

  try {
    // Step 0
    assert(
      input.value === "" && helper.getHighlightState(input) === "N",
      "Step 0: Initial state is empty and not highlighted"
    );

    // Step 1
    helper.simulateKeyPress(input, "(");
    assert(
      input.value === "() " && helper.getHighlightState(input) === "Y",
      'Step 1: After "(" should be "() " and highlighted'
    );

    // Step 2
    helper.simulateKeyPress(input, "X");
    assert(
      input.value === "(X) " && helper.getHighlightState(input) === "Y",
      'Step 2: After "X" should be "(X) " and highlighted'
    );

    // Step 3
    helper.simulateEnter(input);
    assert(helper.getHighlightState(input) === "N", "Step 3: After Enter should not be highlighted");

    console.log("✅ Scenario 1 passed all tests");
  } catch (error) {
    console.error("❌ Scenario 1 failed:", error.message);
  } finally {
    document.body.removeChild(input);
  }
}

// Test Scenario 2
function testScenario2() {
  const helper = new NomiKeyHelper();
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.focus(); // Ensure the input has focus

  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
    console.log(`✓ ${message}`);
  }

  try {
    // Step 0
    assert(
      input.value === "" && helper.getHighlightState(input) === "N",
      "Step 0: Initial state is empty and not highlighted"
    );

    // Step 1
    helper.simulateKeyPress(input, "(");
    assert(
      input.value === "() " && helper.getHighlightState(input) === "Y",
      'Step 1: After "(" should be "() " and highlighted'
    );

    // Step 2
    helper.simulateDelete(input);
    assert(
      input.value === "(" && helper.getHighlightState(input) === "N",
      'Step 2: After Delete should be "(" and not highlighted'
    );

    // Step 3
    helper.simulateKeyPress(input, ")");
    assert(
      input.value === "() " && helper.getHighlightState(input) === "Y",
      'Step 3: After ")" should be "() " and highlighted'
    );

    console.log("✅ Scenario 2 passed all tests");
  } catch (error) {
    console.error("❌ Scenario 2 failed:", error.message);
  } finally {
    document.body.removeChild(input);
  }
}

