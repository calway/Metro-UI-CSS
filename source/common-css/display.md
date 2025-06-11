# Display Utilities (display.less)

This file provides utility classes for controlling element visibility and display properties in Metro UI.

## Overview

The `display.less` file defines CSS classes that allow you to control how elements are displayed and whether they are visible. It includes both standard display utilities and responsive variants that apply at different breakpoints.

## Visibility Classes

These classes control the CSS `visibility` property:

| Class | Description |
|-------|-------------|
| `.visible` | Makes an element visible (`visibility: visible !important`) |
| `.no-visible` | Hides an element but preserves its space in the layout (`visibility: hidden !important`) |

## Display Classes

These classes control the CSS `display` property:

| Class | Description |
|-------|-------------|
| `.d-none` | Hides an element completely (`display: none !important`) |
| `.d-block` | Displays an element as a block-level element (`display: block !important`) |
| `.d-inline` | Displays an element as an inline element (`display: inline !important`) |
| `.d-inline-block` | Displays an element as an inline-block element (`display: inline-block !important`) |
| `.d-table` | Displays an element as a table (`display: table !important`) |
| `.d-table-row` | Displays an element as a table row (`display: table-row !important`) |
| `.d-table-cell` | Displays an element as a table cell (`display: table-cell !important`) |

## Responsive Variants

All of the above classes have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

### Responsive Visibility Classes

| Class | Description |
|-------|-------------|
| `.visible-{breakpoint}` | Makes an element visible at the specified breakpoint |
| `.no-visible-{breakpoint}` | Hides an element (preserving its space) at the specified breakpoint |

### Responsive Display Classes

| Class | Description |
|-------|-------------|
| `.d-none-{breakpoint}` | Hides an element at the specified breakpoint |
| `.d-block-{breakpoint}` | Displays an element as a block at the specified breakpoint |
| `.d-inline-{breakpoint}` | Displays an element as inline at the specified breakpoint |
| `.d-inline-block-{breakpoint}` | Displays an element as inline-block at the specified breakpoint |
| `.d-table-{breakpoint}` | Displays an element as a table at the specified breakpoint |
| `.d-table-row-{breakpoint}` | Displays an element as a table row at the specified breakpoint |
| `.d-table-cell-{breakpoint}` | Displays an element as a table cell at the specified breakpoint |

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

## Usage Examples

### Basic Display Control

```html
<!-- Hide an element -->
<div class="d-none">This element is not displayed</div>

<!-- Display as block -->
<span class="d-block">This span is displayed as a block element</span>

<!-- Display as inline-block -->
<div class="d-inline-block">This div is displayed as an inline-block element</div>
```

### Visibility Control

```html
<!-- Hide an element but preserve its space -->
<div class="no-visible">
    This element is hidden but still takes up space in the layout
</div>

<!-- Make an element visible -->
<div class="visible">This element is explicitly visible</div>
```

### Responsive Display

```html
<!-- Element is hidden on small screens, displayed as block on medium screens and above -->
<div class="d-none d-block-md">
    This content is hidden on small screens but visible on medium screens and above
</div>

<!-- Element is displayed as block on small screens, inline-block on large screens -->
<div class="d-block d-inline-block-lg">
    This element changes its display property at different screen sizes
</div>
```

### Responsive Visibility

```html
<!-- Element is visible on small screens, hidden on medium screens and above -->
<div class="visible no-visible-md">
    This content is visible on small screens but hidden on medium screens and above
</div>
```

### Table Display

```html
<!-- Creating a custom table layout -->
<div class="d-table">
    <div class="d-table-row">
        <div class="d-table-cell">Cell 1</div>
        <div class="d-table-cell">Cell 2</div>
    </div>
    <div class="d-table-row">
        <div class="d-table-cell">Cell 3</div>
        <div class="d-table-cell">Cell 4</div>
    </div>
</div>
```

## Difference Between `.d-none` and `.no-visible`

- `.d-none` (`display: none`) completely removes the element from the layout flow. The element takes up no space.
- `.no-visible` (`visibility: hidden`) hides the element but preserves its space in the layout. The element is invisible but still affects the layout.

## Best Practices

1. Use `.d-none` when you want to completely remove an element from the layout.
2. Use `.no-visible` when you want to hide an element but maintain its space in the layout.
3. Use responsive variants to create layouts that adapt to different screen sizes.
4. Combine these utilities with other Metro UI classes for more complex responsive behaviors.