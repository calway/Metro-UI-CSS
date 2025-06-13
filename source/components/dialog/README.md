# Dialog Component

The Dialog component provides a customizable modal dialog box for displaying messages, alerts, confirmations, or custom content. It supports various configurations, including custom buttons, overlay options, and positioning.

## Dependencies

The Dialog component depends on:
- Button component
- Colors CSS
- Farbe module

## Usage

### Basic Dialog

```html
<!-- Basic dialog with title and content -->
<div id="myDialog" class="dialog" data-role="dialog">
    <div class="dialog-title">Dialog Title</div>
    <div class="dialog-content">
        This is the dialog content.
    </div>
    <div class="dialog-actions">
        <button class="button js-dialog-close">OK</button>
    </div>
</div>

<!-- JavaScript to open the dialog -->
<script>
    Metro.getPlugin('#myDialog', 'dialog').open();
</script>
```

### Creating Dialog Programmatically

```javascript
// Create a dialog with JavaScript
const dialog = Metro.dialog.create({
    title: "Important Message",
    content: "<p>This is an important message.</p>",
    actionsAlign: "center",
    overlayClickClose: true
});
```

### Dialog with Custom Buttons

```javascript
Metro.dialog.create({
    title: "Confirmation",
    content: "Are you sure you want to proceed?",
    customButtons: [
        {
            text: "Yes, proceed",
            cls: "button-success",
            onclick: function() {
                console.log("User confirmed");
                this.close();
            }
        },
        {
            text: "Cancel",
            cls: "button-alert",
            onclick: function() {
                console.log("User cancelled");
                this.close();
            }
        }
    ]
});
```

## Plugin Parameters

The Dialog component accepts the following configuration options:

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `closeButton` | boolean | `false` | Show close button in the top-right corner |
| `leaveOverlayOnClose` | boolean | `false` | Keep overlay when dialog is closed |
| `toTop` | boolean | `false` | Position dialog at the top of the screen |
| `toBottom` | boolean | `false` | Position dialog at the bottom of the screen |
| `title` | string | `""` | Dialog title text |
| `content` | string/element | `""` | Dialog content (HTML string or DOM element) |
| `customButtons` | array | `null` | Array of custom button objects with text, cls, and onclick properties |
| `actionsAlign` | string | `"right"` | Alignment of action buttons ("left", "center", "right") |
| `defaultActions` | boolean | `true` | Show default action buttons |
| `defaultActionButtons` | string | `"ok,cancel,help"` | Comma-separated list of default buttons to show |
| `overlay` | boolean | `true` | Show overlay behind dialog |
| `overlayColor` | string | `"#000000"` | Color of the overlay |
| `overlayAlpha` | number | `0.5` | Opacity of the overlay (0-1) |
| `overlayClickClose` | boolean | `false` | Close dialog when clicking on overlay |
| `width` | string | `"auto"` | Width of the dialog |
| `height` | string | `"auto"` | Height of the dialog |
| `closeAction` | boolean | `true` | Enable close action on buttons with js-dialog-close class |
| `clsDialog` | string | `""` | Additional CSS class for dialog element |
| `clsTitle` | string | `""` | Additional CSS class for title element |
| `clsContent` | string | `""` | Additional CSS class for content element |
| `clsAction` | string | `""` | Additional CSS class for actions container |
| `clsDefaultAction` | string | `""` | Additional CSS class for default action buttons |
| `clsOverlay` | string | `""` | Additional CSS class for overlay |
| `autoHide` | number | `0` | Auto-hide dialog after specified milliseconds (0 = no auto-hide) |
| `removeOnClose` | boolean | `false` | Remove dialog from DOM when closed |
| `show` | boolean | `false` | Show dialog immediately after initialization |

## Events

| Event | Description |
| -------- | ----------- |
| `onOk` | Triggered when OK button is clicked |
| `onCancel` | Triggered when Cancel button is clicked |
| `onHelp` | Triggered when Help button is clicked |
| `onShow` | Triggered when dialog is shown |
| `onHide` | Triggered when dialog is hidden |
| `onOpen` | Triggered when dialog is opened |
| `onClose` | Triggered when dialog is closed |
| `onDialogCreate` | Triggered when dialog is created |

### Example with Events

```html
<div id="myDialog" data-role="dialog" 
     data-on-ok="console.log('OK clicked')"
     data-on-cancel="console.log('Cancel clicked')"
     data-on-open="console.log('Dialog opened')">
    <div class="dialog-title">Dialog with Events</div>
    <div class="dialog-content">This dialog has event handlers.</div>
    <div class="dialog-actions">
        <button class="button js-dialog-close">OK</button>
        <button class="button js-dialog-close">Cancel</button>
    </div>
</div>
```

## API Methods

### open()
Opens the dialog.

```javascript
Metro.getPlugin('#myDialog', 'dialog').open();
```

### close()
Closes the dialog.

```javascript
Metro.getPlugin('#myDialog', 'dialog').close();
```

### toggle()
Toggles the dialog between open and closed states.

```javascript
Metro.getPlugin('#myDialog', 'dialog').toggle();
```

### isOpen()
Returns true if the dialog is open.

```javascript
const isOpen = Metro.getPlugin('#myDialog', 'dialog').isOpen();
```

### setContent(content)
Sets the dialog content.

```javascript
Metro.getPlugin('#myDialog', 'dialog').setContent('New content');
```

### setTitle(title)
Sets the dialog title.

```javascript
Metro.getPlugin('#myDialog', 'dialog').setTitle('New Title');
```

### setPosition()
Recalculates and sets the dialog position.

```javascript
Metro.getPlugin('#myDialog', 'dialog').setPosition();
```

### show(callback)
Shows the dialog and executes callback.

```javascript
Metro.getPlugin('#myDialog', 'dialog').show(() => {
    console.log('Dialog shown');
});
```

### hide(callback)
Hides the dialog and executes callback.

```javascript
Metro.getPlugin('#myDialog', 'dialog').hide(() => {
    console.log('Dialog hidden');
});
```

### Static Methods

The Dialog component also provides static methods through the `Metro.dialog` object:

#### open(el, content, title)
Opens an existing dialog with optional new content and title.

```javascript
Metro.dialog.open('#myDialog', 'New content', 'New title');
```

#### close(el)
Closes the specified dialog.

```javascript
Metro.dialog.close('#myDialog');
```

#### toggle(el)
Toggles the specified dialog.

```javascript
Metro.dialog.toggle('#myDialog');
```

#### isOpen(el)
Checks if the specified dialog is open.

```javascript
const isOpen = Metro.dialog.isOpen('#myDialog');
```

#### remove(el)
Removes the specified dialog from DOM after closing.

```javascript
Metro.dialog.remove('#myDialog');
```

#### create(options)
Creates and returns a new dialog with the specified options.

```javascript
const dialog = Metro.dialog.create({
    title: 'Dialog Title',
    content: 'Dialog content',
    closeButton: true
});
```

## Styling with CSS Variables

The Dialog component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--dialog-border-radius` | 6px | 6px | Border radius of the dialog |
| `--dialog-background` | #f7f8fa | #2b2d30 | Background color of the dialog |
| `--dialog-color` | #191919 | #dbdfe7 | Text color of the dialog |
| `--dialog-border-color` | #aaaaaa | #414245 | Border color of the dialog |
| `--dialog-closer-background` | inherit | inherit | Background color of the close button |
| `--dialog-closer-color` | inherit | inherit | Text color of the close button |
| `--dialog-closer-background-hover` | var(--color-alert) | var(--color-alert) | Background color of the close button on hover |
| `--dialog-closer-color-hover` | var(--color-light) | var(--color-light) | Text color of the close button on hover |

### Example of Custom Styling

```css
/* Custom styling for dialogs */
.custom-dialog {
    --dialog-background: #e3f2fd;
    --dialog-color: #0d47a1;
    --dialog-border-color: #2196f3;
    --dialog-border-radius: 12px;
}
```

## Available CSS Classes

### Base Classes
- `.dialog` - Main container class for the dialog
- `.dialog-title` - Class for the dialog title section
- `.dialog-content` - Class for the dialog content section
- `.dialog-actions` - Class for the dialog actions/buttons section
- `.closer` - Class for the close button in the top-right corner

### Modifier Classes
- `.text-left` - Aligns dialog actions to the left
- `.text-center` - Centers dialog actions
- `.text-right` - Aligns dialog actions to the right

### Color Classes
The dialog supports accent color classes that change the border and title background:
- `.primary`, `.secondary`, `.success`, `.alert`, `.warning`, `.yellow`, `.info`, `.light`

```css
/* Example of using color classes */
<div id="colorDialog" class="dialog success" data-role="dialog">
    <!-- This dialog will have success color styling -->
</div>
```

## Additional Information

- The dialog can be positioned in the center (default), top, or bottom of the screen
- Dialogs can be created programmatically or from existing HTML elements
- The component supports both light and dark themes
- Custom buttons can be added with custom styling and click handlers
- The dialog can be configured to close automatically after a specified time
- The overlay can be customized with different colors and opacity levels
