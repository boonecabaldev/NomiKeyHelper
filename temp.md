 ToDo

This document describes a subset of the functionality of the NomiKeyHelper Chrome browser extension.

> **NOTE:** The following table details the resulting text plus the position of the cursor after a key is pressed, as well as the highlight state Highlighted (H) or Not Highlighted (NH). In the Result Text & Cursor State column, a '_' represents the position of the cursor.

## Happy Day Scenarios

### Scenario

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_)' | N |
| 2. | 'X' | '(X_)' | Y |
| 3. | Tab | '(X) _' | N |
| 4. | Backspace | '(X)_' | N |
| 5. | Backspace | '(X_' | N |
| 6. | ')' | '(X)_' | N |

## BUGS

In the current state of this extension does not successfully produce the following results. Fix the bugs in both of the following scenarios:

### Scenario 1.

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_) ' | Y |
| 2. | 'X' | '(X_) ' | Y |
| 3. | Enter | N/A | N |

### Scenario 2.

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_) ' | Y |
| 2. | Delete | '(_' | N |
| 3. | ')' | '(_) ' | Y |

### Scenario 3. 

I'm using a chat program where you enter text and then press Enter to submit the message. This is what is supposed to happen:

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |


### Scenario 4.

I'm using a chat program where you enter text and then press Enter to submit the message. This is what is supposed to happen:

|Step #|Key Pressed|Result Text & Cursor State|Textbox Highlighted?|
|--|--|--|--|
| 0. |  | '' | N |
| 1. | '(' | '(_)' | N |
| 2. | 'X' | '(X_)' | Y |
| 3. | Enter | '' | N |

After pressing Enter in the above scenario, the textbox clears but remains highlighted. Remember that if it is ever the case that the cursor is not enclosed in bracket characters, then the textbox should be unhighlighted. This includes the case where the user clicks in or out of the textbox.