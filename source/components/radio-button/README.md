# Radio Button Component

The Radio Button component provides a group of buttons where only one can be active at a time, similar to radio inputs but with a button-like appearance. It's ideal for toggle selections in a compact, visually appealing format.

## Dependencies

- Metro UI Core
- DOM library

## Usage

### Basic Usage

```html
<!-- Basic radio button group -->
<div data-role="radio-button">
    <button class="button active">Option 1</button>
    <button class="button">Option 2</button>
    <button class="button">Option 3</button>
</div>
```

### With Icons

```html
<!-- Radio button group with icons -->
<div data-role="radio-button">
    <button class="button active"><span class="mif-home"></span></button>
    <button class="button"><span class="mif-heart"></span></button>
    <button class="button"><span class="mif-star"></span></button>
</div>
```

### With Text and Icons

```html
<!-- Radio button group with text and icons -->
<div data-role="radio-button">
    <button class="button active"><span class="mif-home"></span> Home</button>
    <button class="button"><span class="mif-heart"></span> Favorites</button>
    <button class="button"><span class="mif-star"></span> Starred</button>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `onRadioButtonCreate` | function | `Metro.noop` | Callback function triggered when the component is created |

## JavaScript Usage

```javascript
// Initialize with JavaScript
const radioButton = Metro.makePlugin('#myRadioButton', 'radio-button', {
    onRadioButtonCreate: function() {
        console.log("Radio button group created!");
    }
});

// Global setup
Metro.radioButtonSetup({
    onRadioButtonCreate: function() {
        console.log("All radio button groups created!");
    }
});
```

## API Methods

### destroy()
Destroys the component and removes it from the DOM.

```javascript
const radioButton = Metro.getPlugin('#myRadioButton', 'radio-button');
radioButton.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onRadioButtonCreate` | Triggered when the radio button component is created |
| `change` | Triggered when a button in the group is selected, providing the selected button as a parameter |

### Example of Event Usage

```javascript
const radioButton = Metro.getPlugin('#myRadioButton', 'radio-button');
radioButton.element.on('change', function(e, data) {
    console.log("Selected button:", data.button);
});
```

## Styling with CSS Variables

The Radio Button component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--rb-group-background` | #dadee9 | #545957 | Background color of the button group |
| `--rb-group-color` | #7e7e77 | #bdc5d2 | Text color of the button group |
| `--rb-item-background` | #ffffff | #2c2f2e | Background color of the active button |
| `--rb-item-color` | #191919 | #ffffff | Text color of the active button |
| `--rb-item-hover` | hsl(7, 100%, 68%) | hsl(7, 100%, 68%) | Hover color for buttons |

### Example of Custom Styling

```css
/* Custom styling for a specific radio button group */
#myCustomRadioButton {
    --rb-group-background: #e3f2fd;
    --rb-group-color: #2196f3;
    --rb-item-background: #2196f3;
    --rb-item-color: #ffffff;
    --rb-item-hover: #64b5f6;
}
```

## Available CSS Classes

### Base Classes
- `.radio-button` - Main container class for the radio button component
- `.button` - Class for individual buttons within the group
- `.active` - Class applied to the currently selected button

## Best Practices

1. Use radio buttons when users need to select one option from a small set of mutually exclusive choices
2. Keep button labels short and descriptive
3. Use icons to enhance visual recognition when appropriate
4. Ensure there is always one button selected by default (with the `.active` class)
5. Use consistent styling across your application for all radio button groups
6. Consider using icons alone for very compact interfaces, but ensure they are intuitive