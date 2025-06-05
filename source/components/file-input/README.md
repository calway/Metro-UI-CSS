# File Input Component

The File Input component provides a customizable interface for file selection in web applications. It offers three different modes: standard input, button, and drop zone, allowing for flexible integration into various UI designs.

## Dependencies

- Input Common component
- Button component

## Usage

### Basic Usage

```html
<!-- Standard input mode -->
<input type="file" data-role="file-input">

<!-- Button mode -->
<input type="file" data-role="file-input" data-mode="button">

<!-- Drop zone mode -->
<input type="file" data-role="file-input" data-mode="drop-zone">
```

### With Custom Labels

```html
<!-- With custom label -->
<input type="file" data-role="file-input" data-label="Upload Document">

<!-- With custom button title -->
<input type="file" data-role="file-input" data-button-title="Browse Files">

<!-- With custom drop zone title -->
<input type="file" data-role="file-input" data-mode="drop-zone" data-drop-title="Drop your files here">
```

### Multiple File Selection

```html
<!-- Multiple file selection -->
<input type="file" multiple data-role="file-input">

<!-- Multiple file selection with custom selected files text -->
<input type="file" multiple data-role="file-input" data-files-selected-title="{n} files ready to upload">
```

### With Additional Styling

```html
<!-- Small input variant -->
<input type="file" data-role="file-input" class="input-small">

<!-- With RTL support -->
<input type="file" data-role="file-input" dir="rtl">

<!-- With custom CSS classes -->
<input type="file" data-role="file-input" data-cls-component="custom-file" data-cls-button="custom-button">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| fileDeferred | number | 0 | Deferred initialization time in milliseconds |
| label | string | "" | Label text for the input |
| mode | string | "input" | Component mode: "input", "button", or "drop-zone" |
| buttonTitle | string | "" | Text for the select files button (defaults to "Choose file" if empty) |
| filesSelectedTitle | string | "" | Text template for selected files count (use {n} as placeholder for number of files) |
| dropTitle | string | "" | Text for the drop zone (defaults to "Drop files here" if empty) |
| dropIcon | string | "📥" | Icon for the drop zone |
| clearButtonIcon | string | "❌" | Icon for the clear button |
| prepend | string | "" | HTML to prepend to the input |
| clsComponent | string | "" | Additional CSS class for the component |
| clsPrepend | string | "" | Additional CSS class for the prepend element |
| clsButton | string | "" | Additional CSS class for the button |
| clsCaption | string | "" | Additional CSS class for the caption |
| clsLabel | string | "" | Additional CSS class for the label |
| onSelect | function | Metro.noop | Callback function triggered when files are selected |
| onFileCreate | function | Metro.noop | Callback function triggered when the component is created |

## API Methods

+ `clear()` - Clears the selected files.
+ `disable()` - Disables the component.
+ `enable()` - Enables the component.
+ `toggleState()` - Toggles between enabled and disabled states.
+ `toggleDir()` - Toggles RTL direction.

```javascript
const fileInput = Metro.getPlugin("#myFileInput", "file");
fileInput.clear();
```


## Events

| Event | Description |
| --- | --- |
| onSelect | Triggered when files are selected |
| onFileCreate | Triggered when the component is created |

## Styling with CSS Variables

### Light Theme Variables

| Variable | Default (Light) | Description |
| --- | --- | --- |
| `--file-height` | 36px | Height of the file input component |
| `--file-button-background` | #ebebeb | Background color of the button |
| `--file-button-background-hover` | #dadada | Background color of the button on hover |
| `--file-button-color` | #191919 | Text color of the button |
| `--file-drop-zone-border-size` | 4px | Border size of the drop zone |
| `--file-drop-zone-border-type` | dashed | Border type of the drop zone |
| `--file-drop-zone-border-color` | #858585 | Border color of the drop zone |
| `--file-drop-zone-background` | #f5f5f5 | Background color of the drop zone |
| `--file-drop-zone-color` | #191919 | Text color of the drop zone |
| `--file-drop-zone-hover-color` | darken(#3A3A3A, 20%) | Border color of the drop zone on hover |
| `--file-drop-zone-drop-color` | #94ff6a | Border color of the drop zone when files are being dropped |

### Dark Theme Variables

| Variable | Default (Dark) | Description |
| --- | --- | --- |
| `--file-button-background` | #3a3b40 | Background color of the button |
| `--file-button-background-hover` | #484850 | Background color of the button on hover |
| `--file-button-color` | #f3fcff | Text color of the button |
| `--file-drop-zone-border-size` | 4px | Border size of the drop zone |
| `--file-drop-zone-border-type` | dashed | Border type of the drop zone |
| `--file-drop-zone-border-color` | #858585 | Border color of the drop zone |
| `--file-drop-zone-background` | #2b2d30 | Background color of the drop zone |
| `--file-drop-zone-color` | #dbdfe7 | Text color of the drop zone |
| `--file-drop-zone-hover-color` | #dbdfe7 | Border color of the drop zone on hover |
| `--file-drop-zone-drop-color` | #94ff6a | Border color of the drop zone when files are being dropped |

### Example of Custom Styling

```css
/* Custom styling for file input */
.custom-file-input {
    --file-button-background: #2196F3;
    --file-button-background-hover: #1976D2;
    --file-button-color: white;
    --file-drop-zone-border-color: #2196F3;
    --file-drop-zone-background: #E3F2FD;
}
```

## Available CSS Classes

### Base Classes
- `.file` - Applied to the component in standard input mode
- `.file-button` - Applied to the component in button mode
- `.drop-zone` - Applied to the component in drop zone mode

### State Classes
- `.disabled` - Applied when the component is disabled
- `.focused` - Applied when the component has focus
- `.drop-on` - Applied to the drop zone when files are being dragged over it

### Modifier Classes
- `.rtl` - Applied for right-to-left text direction
- `.input-small` - Applied for a smaller version of the file input

## Best Practices

1. Use clear and descriptive labels to indicate what type of files should be uploaded
2. Provide feedback to users when files are selected
3. Use the appropriate mode based on your UI requirements:
   - Standard input mode for forms
   - Button mode for cleaner interfaces
   - Drop zone mode for bulk file uploads
4. Consider using multiple file selection for user convenience when appropriate
5. Implement proper validation for file types and sizes
6. Ensure the component is accessible and can be navigated via keyboard