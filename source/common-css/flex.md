# Flexbox Utilities (flex.less)

This file provides a comprehensive set of utility classes for creating flexible layouts using CSS Flexbox in Metro UI.

## Overview

The `flex.less` file defines a wide range of CSS classes that implement all aspects of the Flexbox layout model. These utilities make it easy to create responsive, flexible layouts without writing custom CSS.

## Display Classes

These classes set the display property to create flex containers:

| Class | Description |
|-------|-------------|
| `.d-flex` | Creates a block-level flex container |
| `.d-inline-flex` | Creates an inline-level flex container |

## Flex Container Properties

### Flex Direction

Controls the direction of flex items within a container:

| Class | Description |
|-------|-------------|
| `.flex-row` | Items are placed in a row (default) |
| `.flex-row-reverse` | Items are placed in a row in reverse order |
| `.flex-column` | Items are placed in a column |
| `.flex-column-reverse` | Items are placed in a column in reverse order |

### Flex Wrap

Controls whether flex items wrap onto multiple lines:

| Class | Description |
|-------|-------------|
| `.flex-nowrap` | Items will not wrap (default) |
| `.flex-wrap` | Items will wrap onto multiple lines if needed |
| `.flex-wrap-reverse` | Items will wrap onto multiple lines in reverse order |

### Gap

Controls the spacing between flex items:

| Class | Description |
|-------|-------------|
| `.gap-0` through `.gap-12` | Sets gap between items from 0px to 48px (in increments of 4px) |

### Justify Content

Controls alignment of items along the main axis:

| Class | Description |
|-------|-------------|
| `.flex-justify-start` | Items are packed at the start of the container |
| `.flex-justify-end` | Items are packed at the end of the container |
| `.flex-justify-center` | Items are centered along the line |
| `.flex-justify-between` | Items are evenly distributed with the first item at the start and the last at the end |
| `.flex-justify-around` | Items are evenly distributed with equal space around them |
| `.flex-justify-evenly` | Items are evenly distributed with equal space between them |

*Note: There are also longer-form classes like `.flex-justify-content-start` that do the same thing.*

### Align Items

Controls alignment of items along the cross axis:

| Class | Description |
|-------|-------------|
| `.flex-align-start` | Items are aligned at the start of the cross axis |
| `.flex-align-end` | Items are aligned at the end of the cross axis |
| `.flex-align-center` | Items are centered along the cross axis |
| `.flex-align-baseline` | Items are aligned by their baselines |
| `.flex-align-stretch` | Items are stretched to fill the container (default) |

*Note: There are also longer-form classes like `.flex-align-items-start` that do the same thing.*

### Align Content

Controls alignment of lines within a multi-line flex container:

| Class | Description |
|-------|-------------|
| `.flex-align-content-start` | Lines are packed at the start of the container |
| `.flex-align-content-end` | Lines are packed at the end of the container |
| `.flex-align-content-center` | Lines are centered in the container |
| `.flex-align-content-between` | Lines are evenly distributed with the first at the start and the last at the end |
| `.flex-align-content-around` | Lines are evenly distributed with equal space around them |
| `.flex-align-content-evenly` | Lines are evenly distributed with equal space between them |
| `.flex-align-content-stretch` | Lines stretch to fill the container (default) |

## Flex Item Properties

### Order

Controls the order in which flex items appear:

| Class | Description |
|-------|-------------|
| `.order-0` through `.order-24` | Sets the order of a flex item from 0 to 24 |

### Align Self

Overrides the container's align-items property for specific items:

| Class | Description |
|-------|-------------|
| `.flex-align-self-auto` | Uses the parent container's align-items value |
| `.flex-align-self-start` | Item is aligned at the start of the cross axis |
| `.flex-align-self-end` | Item is aligned at the end of the cross axis |
| `.flex-align-self-center` | Item is centered along the cross axis |
| `.flex-align-self-baseline` | Item is aligned by its baseline |
| `.flex-align-self-stretch` | Item is stretched to fill the container |

### Justify Self

Controls alignment of a specific item along the main axis:

| Class | Description |
|-------|-------------|
| `.flex-justify-self-auto` | Uses the parent container's justify-items value |
| `.flex-justify-self-start` | Item is aligned at the start of the main axis |
| `.flex-justify-self-end` | Item is aligned at the end of the main axis |
| `.flex-justify-self-center` | Item is centered along the main axis |
| `.flex-justify-self-stretch` | Item is stretched to fill the container |

### Flex Grow and Shrink

Controls how flex items grow and shrink:

| Class | Description |
|-------|-------------|
| `.flex-grow > *` | All child items can grow (flex-grow: 1) |
| `.flex-no-grow > *` | Child items cannot grow (flex-grow: 0) |
| `.flex-shrink > *` | All child items can shrink (flex-shrink: 1) |
| `.flex-no-shrink > *` | Child items cannot shrink (flex-shrink: 0) |
| `.flex-grow-self` | Applied to an item to make it grow |
| `.flex-no-grow-self` | Applied to an item to prevent it from growing |
| `.flex-shrink-self` | Applied to an item to make it shrink |
| `.flex-no-shrink-self` | Applied to an item to prevent it from shrinking |

### Equal Width Items

| Class | Description |
|-------|-------------|
| `.flex-equal-items` | Makes all child items have equal width (flex: 1) |

## Positioning Shortcuts

| Class | Description |
|-------|-------------|
| `.flex-right` | Pushes an item to the right (margin-left: auto) |
| `.flex-left` | Pushes an item to the left (margin-right: auto) |
| `.flex-top` | Pushes an item to the top (margin-bottom: auto) |
| `.flex-bottom` | Pushes an item to the bottom (margin-top: auto) |
| `.flex-center` | Centers items both horizontally and vertically |

## Responsive Variants

All of the above classes have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

For example:
- `.d-flex-md` - Creates a flex container on medium screens and above
- `.flex-column-lg` - Applies column direction on large screens and above
- `.flex-justify-center-xl` - Centers items on extra-large screens and above

Where `{breakpoint}` can be: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`

## Usage Examples

### Basic Flex Container

```html
<div class="d-flex">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Responsive Direction

```html
<!-- Row on small screens, column on medium screens and above -->
<div class="d-flex flex-row flex-column-md">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Alignment and Justification

```html
<!-- Center items both horizontally and vertically -->
<div class="d-flex flex-center" style="height: 200px;">
    <div>Centered Content</div>
</div>

<!-- Distribute items evenly with space between -->
<div class="d-flex flex-justify-between">
    <div>Left</div>
    <div>Middle</div>
    <div>Right</div>
</div>
```

### Item Ordering

```html
<div class="d-flex">
    <div class="order-3">Appears third</div>
    <div class="order-1">Appears first</div>
    <div class="order-2">Appears second</div>
</div>
```

### Equal Width Items

```html
<div class="d-flex flex-equal-items">
    <div>Equal</div>
    <div>Equal</div>
    <div>Equal</div>
</div>
```

### Pushing Items

```html
<div class="d-flex">
    <div>Left</div>
    <div class="flex-right">Right</div>
</div>
```

### Responsive Layouts

```html
<div class="d-flex flex-column flex-row-lg">
    <div class="order-2 order-1-lg">First on large screens, second on small screens</div>
    <div class="order-1 order-2-lg">Second on large screens, first on small screens</div>
</div>
```

## Best Practices

1. Start with the basic container class (`.d-flex` or `.d-inline-flex`) before adding other flex utilities.
2. Use responsive variants to create layouts that adapt to different screen sizes.
3. For complex layouts, combine flex utilities with other Metro UI classes like spacing and sizing utilities.
4. Use `.flex-center` for the common pattern of centering content both horizontally and vertically.
5. Use `.flex-equal-items` when you want all items to have equal width regardless of their content.
6. Use the positioning shortcuts (`.flex-right`, `.flex-left`, etc.) to push items to different sides of the container.