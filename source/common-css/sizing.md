# Sizing Utilities (sizing.less)

This file provides utility classes for controlling the width and height of elements in Metro UI.

## Overview

The `sizing.less` file defines CSS classes for setting element dimensions using various units (percentages, viewport units) and constraints (min, max). These utilities make it easy to create responsive layouts with precisely sized elements.

## Basic Sizing Classes

### Auto Sizing

| Class | Description |
|-------|-------------|
| `.w-auto` | Sets `width: auto` |
| `.h-auto` | Sets `height: auto` |

### Breakpoint-Based Width

These classes set the width to match specific breakpoints:

| Class | Description |
|-------|-------------|
| `.w-xs` | Sets width to the extra small breakpoint value |
| `.w-sm` | Sets width to the small breakpoint value |
| `.w-md` | Sets width to the medium breakpoint value |
| `.w-lg` | Sets width to the large breakpoint value |
| `.w-xl` | Sets width to the extra large breakpoint value |
| `.w-xxl` | Sets width to the double extra large breakpoint value |
| `.w-xxxl` | Sets width to the triple extra large breakpoint value |

## Percentage-Based Sizing

These classes set width or height as a percentage of the parent container:

| Class | Description |
|-------|-------------|
| `.w-0` | Sets `width: 0%` |
| `.w-25` | Sets `width: 25%` |
| `.w-50` | Sets `width: 50%` |
| `.w-75` | Sets `width: 75%` |
| `.w-100` | Sets `width: 100%` |
| `.h-0` | Sets `height: 0%` |
| `.h-25` | Sets `height: 25%` |
| `.h-50` | Sets `height: 50%` |
| `.h-75` | Sets `height: 75%` |
| `.h-100` | Sets `height: 100%` |

*Note: The actual percentage values may include more options depending on the `@percents` variable defined in the framework.*

## Viewport-Based Sizing

These classes set width or height as a percentage of the viewport:

| Class | Description |
|-------|-------------|
| `.w-25-vw` | Sets `width: 25vw` (25% of viewport width) |
| `.w-50-vw` | Sets `width: 50vw` (50% of viewport width) |
| `.w-75-vw` | Sets `width: 75vw` (75% of viewport width) |
| `.w-100-vw` | Sets `width: 100vw` (100% of viewport width) |
| `.h-25-vh` | Sets `height: 25vh` (25% of viewport height) |
| `.h-50-vh` | Sets `height: 50vh` (50% of viewport height) |
| `.h-75-vh` | Sets `height: 75vh` (75% of viewport height) |
| `.h-100-vh` | Sets `height: 100vh` (100% of viewport height) |

## Min and Max Constraints

These classes set minimum or maximum dimensions:

| Class | Description |
|-------|-------------|
| `.w-min-0` through `.w-min-100` | Sets `min-width` from 0% to 100% |
| `.h-min-0` through `.h-min-100` | Sets `min-height` from 0% to 100% |
| `.w-max-0` through `.w-max-100` | Sets `max-width` from 0% to 100% |
| `.h-max-0` through `.h-max-100` | Sets `max-height` from 0% to 100% |

## Responsive Variants

All sizing classes have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

For example:
- `.w-50-md` - Sets width to 50% on medium screens and above
- `.h-100-lg` - Sets height to 100% on large screens and above
- `.w-auto-xl` - Sets width to auto on extra large screens and above

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

## Usage Examples

### Basic Width and Height

```html
<!-- Full-width element -->
<div class="w-100">This element is 100% wide</div>

<!-- Half-width element -->
<div class="w-50">This element is 50% wide</div>

<!-- Full-height element -->
<div class="h-100">This element is 100% tall</div>
```

### Viewport-Based Sizing

```html
<!-- Full viewport width -->
<div class="w-100-vw">This element is as wide as the viewport</div>

<!-- Half viewport height -->
<div class="h-50-vh">This element is half as tall as the viewport</div>
```

### Min and Max Constraints

```html
<!-- Element with maximum width -->
<div class="w-max-75">
    This element will be at most 75% wide
</div>

<!-- Element with minimum height -->
<div class="h-min-50">
    This element will be at least 50% tall
</div>
```

### Responsive Sizing

```html
<!-- Element that's full-width on small screens, half-width on medium screens -->
<div class="w-100 w-50-md">
    This element adapts its width based on screen size
</div>

<!-- Element with auto height by default, 100% height on large screens -->
<div class="h-auto h-100-lg">
    This element adapts its height based on screen size
</div>
```

### Combining with Other Utilities

```html
<!-- Centered, half-width container with maximum width constraint -->
<div class="w-50 w-max-500 mx-auto">
    Centered content with controlled width
</div>

<!-- Full-height sidebar that becomes auto height on small screens -->
<div class="h-100 h-auto-xs">
    Sidebar content
</div>
```

## Best Practices

1. **Responsive Design**: Use responsive variants to create layouts that adapt to different screen sizes.

2. **Viewport Units**: Be cautious with viewport units (vw, vh) as they can cause layout issues on mobile devices with dynamic toolbars.

3. **Percentage Heights**: Remember that percentage heights only work if the parent element has a defined height.

4. **Max-Width for Readability**: Use max-width constraints for text containers to maintain readability on large screens.

5. **Combining Utilities**: These sizing utilities work well with other Metro UI utilities:
   - Use with margin utilities (like `.mx-auto`) for centering
   - Use with display utilities for responsive layouts
   - Use with flex utilities for more complex layouts

## Common Patterns

### Responsive Container

```html
<div class="w-100 w-max-1200 mx-auto px-4">
    <!-- Content is full-width but maxes out at 1200px and stays centered -->
</div>
```

### Card Grid

```html
<div class="d-flex flex-wrap">
    <div class="w-100 w-50-md w-33-lg p-2">Card 1</div>
    <div class="w-100 w-50-md w-33-lg p-2">Card 2</div>
    <div class="w-100 w-50-md w-33-lg p-2">Card 3</div>
</div>
```

### Full-Height App Layout

```html
<div class="h-100-vh d-flex flex-column">
    <header class="h-auto">Header</header>
    <main class="h-100">Main content (fills available space)</main>
    <footer class="h-auto">Footer</footer>
</div>
```