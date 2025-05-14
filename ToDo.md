
# ToDo

This document describes a subset of the functionality of the NomiKeyHelper Chrome browser extension.

> **NOTE:** The following table details the resulting text plus the position of the cursor after a key is pressed, as well as the highlight state Highlighted (H) or Not Highlighted (NH). In the Result Text & Cursor State column, a '_' represents the position of the cursor.

## BUGS

### Scenario

I'm using a chat program where you enter text and then press Enter to submit the message. This is what is supposed to happen:

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_)' | Y |
| 2. | 'X' | '(X_)' | Y |
| 3. | Backspace | '(X)_' | N |

Ensure that this extension conforms to/passes the above scenario.

Currently, the extension is producing the following bad behavior:

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_)' | Y |
| 2. | 'X' | '(X_)' | Y |
| 3. | Backspace | '(_))' | N |