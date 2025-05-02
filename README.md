# Nomi Key Helper

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
![Status: Stable](https://img.shields.io/badge/status-stable-brightgreen)

A Chrome extension that enhances text inputs with IDE-style bracket completion and smart navigation.

## Features

- **Auto-Completion** for:
  - Parentheses: `(` → `()`
  - Brackets: `[` → `[]`
  - Quotes: `"` → `""`
  - Asterisks: `*` → `**`
  - Underscores: `_` → `__`

- **Smart Navigation**:
  - Press `Tab` to jump past closing brackets
  - Automatic deletion of bracket pairs with `Backspace`/`Delete`

- **Visual Feedback**:
  - Light green background on focus (`#e6ffe6`)
  - Yellow highlight when between brackets (`#ffffcc`)

## Installation

1. Download the extension files
2. In Chrome:
   - Go to `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension folder

## Configuration

Edit in `content.js`:
```javascript
const BRACKET_PAIRS = {
  '(': ')',
  '[': ']',
  '"': '"',
  '*': '*',
  '_': '_'
  // Remove lines to disable specific pairs
};
