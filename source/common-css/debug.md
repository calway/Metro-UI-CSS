# Debug Utilities (debug.less)

This file provides a simple utility class for debugging element boundaries in Metro UI.

## Overview

The `debug.less` file defines a single CSS class that helps visualize element boundaries during development. This is particularly useful when troubleshooting layout issues or when you need to see the exact dimensions of elements on a page.

## Available Classes

| Class | Description |
|-------|-------------|
| `.debug` | Adds a red dotted outline to elements and ensures minimum dimensions |

## CSS Properties

The `.debug` class applies the following CSS properties:

```css
.debug {
    outline: 1px dotted red !important;
    min-width: 1px;
    min-height: 1px;
}
```

- The `outline` property adds a visible red dotted border around the element without affecting its dimensions (unlike `border`).
- The `min-width` and `min-height` properties ensure that even empty elements have at least 1px of size, making them visible.
- The `!important` flag ensures that the outline is applied even if other styles would normally override it.

## Usage Examples

### Basic Usage

```html
<!-- Add the debug class to any element to visualize its boundaries -->
<div class="debug">
    This element has a red dotted outline
</div>

<!-- Useful for debugging layout issues -->
<div class="row debug">
    <div class="cell debug">Cell 1</div>
    <div class="cell debug">Cell 2</div>
</div>
```

### Temporary Debugging

You can add the `.debug` class temporarily during development to help visualize layout issues:

```html
<div class="container debug">
    <header class="debug">Header</header>
    <main class="debug">
        <section class="debug">Section 1</section>
        <section class="debug">Section 2</section>
    </main>
    <footer class="debug">Footer</footer>
</div>
```

### Debugging with JavaScript

You can also add the `.debug` class dynamically using JavaScript for on-demand debugging:

```javascript
// Add debug outlines to all divs
document.querySelectorAll('div').forEach(el => el.classList.add('debug'));

// Add debug outline to a specific element
document.getElementById('problem-element').classList.add('debug');
```

## Best Practices

1. Use the `.debug` class only during development and remove it before production.
2. Apply it to specific elements you're troubleshooting rather than to the entire page.
3. Consider creating a global debug mode that can be toggled on/off:

```javascript
// Toggle debug mode
function toggleDebugMode() {
    document.body.classList.toggle('debug-mode');
}

// In your CSS
.debug-mode * {
    outline: 1px dotted red !important;
    min-width: 1px;
    min-height: 1px;
}
```

4. Remember that the `.debug` class uses `!important`, which may override other styles. This is intentional for debugging but should be used with caution.