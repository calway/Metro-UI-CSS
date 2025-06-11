# Spacing Utilities (spacing.less)

This file provides utility classes for controlling margins and padding in Metro UI.

## Overview

The `spacing.less` file defines CSS classes for adding or removing space around elements using margin and padding properties. These utilities follow a consistent naming convention and scale, making it easy to apply spacing in a standardized way throughout your application.

## Naming Convention

The spacing utilities follow this naming pattern:

```
{property}{sides}-{size}
```

Where:
- `{property}` is either `m` (for margin) or `p` (for padding)
- `{sides}` is either:
  - Empty (applies to all sides)
  - `t` (top)
  - `r` (right)
  - `b` (bottom)
  - `l` (left)
  - `x` (left and right)
  - `y` (top and bottom)
- `{size}` is a number from 0 to 20, or `auto` for automatic margins

## Auto Margin Utilities

These classes set margins to `auto`, which is useful for centering elements:

| Class | Description |
|-------|-------------|
| `.mx-auto` | Centers an element horizontally (sets left and right margins to auto) |
| `.my-auto` | Centers an element vertically (sets top and bottom margins to auto) |
| `.ml-auto` | Pushes an element to the right (sets left margin to auto) |
| `.mr-auto` | Pushes an element to the left (sets right margin to auto) |
| `.mt-auto` | Pushes an element to the bottom (sets top margin to auto) |
| `.mb-auto` | Pushes an element to the top (sets bottom margin to auto) |

## Zero Spacing Utilities

These classes remove spacing by setting margin or padding to zero:

| Class | Description |
|-------|-------------|
| `.m-0` | Removes margin on all sides |
| `.mt-0` | Removes top margin |
| `.mr-0` | Removes right margin |
| `.mb-0` | Removes bottom margin |
| `.ml-0` | Removes left margin |
| `.mx-0` | Removes horizontal margins (left and right) |
| `.my-0` | Removes vertical margins (top and bottom) |
| `.p-0` | Removes padding on all sides |
| `.pt-0` | Removes top padding |
| `.pr-0` | Removes right padding |
| `.pb-0` | Removes bottom padding |
| `.pl-0` | Removes left padding |
| `.px-0` | Removes horizontal padding (left and right) |
| `.py-0` | Removes vertical padding (top and bottom) |

## Positive Spacing Utilities

These classes add spacing using a consistent scale. The actual size depends on the framework's configuration variables (`@mpStep` and `@mpUnit`), but typically each step represents 4px or 0.25rem.

### Margin Utilities

| Class | Description |
|-------|-------------|
| `.m-1` through `.m-20` | Adds margin on all sides (from smallest to largest) |
| `.mt-1` through `.mt-20` | Adds top margin |
| `.mr-1` through `.mr-20` | Adds right margin |
| `.mb-1` through `.mb-20` | Adds bottom margin |
| `.ml-1` through `.ml-20` | Adds left margin |
| `.mx-1` through `.mx-20` | Adds horizontal margins (left and right) |
| `.my-1` through `.my-20` | Adds vertical margins (top and bottom) |

### Padding Utilities

| Class | Description |
|-------|-------------|
| `.p-1` through `.p-20` | Adds padding on all sides (from smallest to largest) |
| `.pt-1` through `.pt-20` | Adds top padding |
| `.pr-1` through `.pr-20` | Adds right padding |
| `.pb-1` through `.pb-20` | Adds bottom padding |
| `.pl-1` through `.pl-20` | Adds left padding |
| `.px-1` through `.px-20` | Adds horizontal padding (left and right) |
| `.py-1` through `.py-20` | Adds vertical padding (top and bottom) |

## Negative Margin Utilities

These classes add negative margins, which can be useful for overlapping elements or adjusting layouts:

| Class | Description |
|-------|-------------|
| `.mt-1-minus` through `.mt-20-minus` | Adds negative top margin |
| `.mr-1-minus` through `.mr-20-minus` | Adds negative right margin |
| `.mb-1-minus` through `.mb-20-minus` | Adds negative bottom margin |
| `.ml-1-minus` through `.ml-20-minus` | Adds negative left margin |

## Responsive Variants

All spacing classes have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

For example:
- `.mx-auto-md` - Centers horizontally on medium screens and above
- `.p-4-lg` - Adds padding level 4 on large screens and above
- `.mt-0-xl` - Removes top margin on extra large screens and above

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

## Usage Examples

### Margin Examples

```html
<!-- Add margin to all sides -->
<div class="m-4">This element has margin level 4 on all sides</div>

<!-- Add different margins to different sides -->
<div class="mt-2 mb-4 mx-3">
    This element has different margins on each side
</div>

<!-- Center an element horizontally -->
<div class="mx-auto" style="width: 200px;">
    This element is centered horizontally
</div>

<!-- Push elements apart -->
<div class="d-flex">
    <div class="mr-auto">Pushed to the left</div>
    <div>Pushed to the right</div>
</div>

<!-- Negative margin to overlap elements -->
<div class="position-relative">
    <div class="mt-4-minus">
        This element overlaps the element above it
    </div>
</div>
```

### Padding Examples

```html
<!-- Add padding to all sides -->
<div class="p-4">This element has padding level 4 on all sides</div>

<!-- Add padding only horizontally -->
<div class="px-3">
    This element has horizontal padding but no vertical padding
</div>

<!-- Add padding only vertically -->
<div class="py-5">
    This element has vertical padding but no horizontal padding
</div>

<!-- Different padding on different sides -->
<div class="pt-2 pb-4 pl-3 pr-1">
    This element has different padding on each side
</div>
```

### Responsive Spacing

```html
<!-- Element with no margin on small screens, but margin on medium screens and above -->
<div class="m-0 m-3-md">
    This element's margin changes based on screen size
</div>

<!-- Element with different padding at different breakpoints -->
<div class="p-2 p-3-sm p-4-md p-5-lg">
    This element's padding increases as the screen gets larger
</div>

<!-- Centered on medium screens and above, but not on small screens -->
<div class="mx-0 mx-auto-md" style="width: 75%;">
    This element is centered only on medium screens and above
</div>
```

## Best Practices

1. **Consistent Spacing**: Use these utilities instead of custom margins and paddings to maintain consistent spacing throughout your application.

2. **Responsive Spacing**: Use responsive variants to adjust spacing based on screen size, typically increasing spacing on larger screens.

3. **Avoid Custom Styles**: Instead of writing custom CSS for spacing, use these utility classes to keep your code clean and maintainable.

4. **Combine with Other Utilities**: These spacing utilities work well with other Metro UI utilities:
   - Use with display utilities for responsive layouts
   - Use with flex utilities for spacing flex items
   - Use with position utilities for precise positioning

5. **Negative Margins**: Use negative margins sparingly and only when necessary, as they can cause unexpected layout issues.

## Common Patterns

### Card with Consistent Padding

```html
<div class="p-4">
    <h3 class="mt-0 mb-3">Card Title</h3>
    <p class="mb-4">Card content goes here...</p>
    <button class="mt-2">Action</button>
</div>
```

### Responsive Container with Padding

```html
<div class="container mx-auto px-2 px-4-md">
    <!-- Content is centered with increasing horizontal padding on larger screens -->
</div>
```

### Spaced List Items

```html
<ul class="p-0">
    <li class="mb-2">First item</li>
    <li class="mb-2">Second item</li>
    <li class="mb-2">Third item</li>
    <li>Last item</li>
</ul>
```

### Stacked Elements with Consistent Spacing

```html
<div class="mb-4">First section</div>
<div class="mb-4">Second section</div>
<div class="mb-4">Third section</div>
<div>Last section</div>
```