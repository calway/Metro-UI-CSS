# Input Mask Component

The Input Mask component provides a way to enforce a specific format for user input in text fields. It helps ensure data consistency by applying a predefined pattern to the input, making it ideal for phone numbers, dates, credit card numbers, and other formatted data entry.

## Dependencies

This component requires:
- Metro UI core
- Input component
- DOM utilities
- Hooks

## Usage

### Basic Usage

```html
<!-- Basic usage with a phone number mask -->
<input data-role="input, input-mask" data-mask="+1 (___) ___-____">

<!-- Date mask -->
<input data-role="input, input-mask" data-mask="__/__/____" placeholder="DD/MM/YYYY">

<!-- Custom mask with different placeholder -->
<input data-role="input, input-mask" data-mask="ISBN ___-__-____-___-_" data-mask-placeholder="#">
```

### Advanced Usage

```html
<!-- Phone number with fixed country code and editable start position -->
<input type="text"
       data-role="input, input-mask"
       data-mask="+38 (___) ___-____"
       data-mask-editable-start="5"
       data-mask-pattern="\d"
       data-label="Phone number:"
>

<!-- Credit card number with custom placeholder -->
<input type="text"
       data-role="input, input-mask"
       data-mask="**** **** **** ****"
       data-mask-placeholder="*"
       data-mask-pattern="\d"
       data-label="Credit card:"
>

<!-- Custom mask with character transformation -->
<input type="text"
       data-role="input, input-mask"
       data-mask="____-_AB_-_CD_-____"
       data-mask-pattern="\w"
       data-label="Custom:"
       data-on-char="transformChar"
>
```

```javascript
// Character transformation function
function transformChar(char) {
    return char.toUpperCase();
}
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `maskPattern` | String | "." | Regular expression pattern for allowed characters |
| `mask` | String | null | The mask pattern to apply to the input (required) |
| `maskPlaceholder` | String | "_" | Character used as a placeholder for editable positions |
| `maskEditableStart` | Number | 0 | Position where editable characters start |
| `thresholdInterval` | Number | 300 | Interval in milliseconds for cursor positioning |
| `onChar` | Function | Metro.noop | Callback function triggered when a character is entered |
| `onInputMaskCreate` | Function | Metro.noop | Callback function triggered when the component is created |

## API Methods

### destroy()
Removes the input mask functionality from the element and restores its original state.

```javascript
// Get the component instance
const inputMask = Metro.getPlugin('#myInput', 'input-mask');

// Destroy the component
inputMask.destroy();
```

## JavaScript Usage

### Initialization

```javascript
// Initialize with JavaScript
const inputMask = Metro.makePlugin('#myInput', 'input-mask', {
    mask: "+1 (___) ___-____",
    maskPlaceholder: "_",
    maskPattern: "\\d",
    onChar: function(char) {
        // Validate or transform the character
        return char.toUpperCase();
    }
});
```

### Global Setup

```javascript
// Global setup for all input-mask components
Metro.inputMaskSetup({
    maskPlaceholder: "#",
    thresholdInterval: 500
});
```

## Events

| Event | Description |
| ----- | ----------- |
| `onInputMaskCreate` | Triggered when the component is created |
| `onChar` | Triggered when a character is entered, allows for character transformation |

### Event Subscription

You can subscribe to events using the Metro UI event system:

```javascript
// Listen for component creation
$(document).on("input-mask-create", function(event, component) {
    console.log("Input mask created for:", component.element);
});
```

## Styling

The Input Mask component doesn't have specific styling of its own. It inherits styles from the Input component. Refer to the Input Common component documentation for styling options.

## Best Practices

1. Always provide a clear mask pattern that matches the expected input format
2. Use `data-mask-pattern` to restrict input to specific character types:
   - `\d` for digits only
   - `\w` for alphanumeric characters
   - Custom patterns for specific requirements
3. Consider using a different placeholder character if "_" conflicts with your data
4. Set `data-mask-editable-start` when parts of the mask should not be editable (like country codes)
5. Provide visual cues or helper text to show users the expected format
6. For complex input patterns, consider adding example text in a label or placeholder
7. Use the `onChar` callback for additional validation or character transformation
8. Test your masks with different input scenarios to ensure they work as expected