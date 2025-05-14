
# ToDo

This document describes a subset of the functionality of the NomiKeyHelper Chrome browser extension.

> **NOTE:** The following table details the resulting text plus the position of the cursor after a key is pressed, as well as the highlight state, Highlighted (H) or Not Highlighted (NH). In the Result Text & Cursor State column, a '_' represents the cursor's position.

## BUGS

### Scenario

Ensure the following scenario happens:

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_) ' | Y |
| 2. | 'X' | '(X_) ' | Y |
| 3. | Tab | '(X) _' | N |
| 4. | Left | '(X)_ ' | N |
| 5. | Left | '(X_) ' | Y |
| 6. | Tab | '(X) _' | N |

Respect all whitespace in table.

Problem: After arrowing left over two characters, and then pressing Tab, the cursor is placed after the next ')'. it needs to be one space beyond the next ')'.