# Float Utilities (float.less)

This file provides utility classes for controlling the float behavior of elements in Metro UI.

## Overview

The `float.less` file defines CSS classes that allow you to float elements left or right, clear floats, and control float behavior responsively across different screen sizes.

## Available Classes

### Float Direction

| Class | Alternative | Description |
|-------|-------------|-------------|
| `.float-left` | `.place-left` | Floats an element to the left |
| `.float-right` | `.place-right` | Floats an element to the right |
| `.float-none` | `.place-none`, `.no-float` | Removes float from an element |

### Clearing Floats

| Class | Description |
|-------|-------------|
| `.clear-float` | Clears floats (applies the clearfix technique) |

## Responsive Variants

All float classes have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

For example:
- `.float-left-md` - Floats an element left on medium screens and above
- `.float-right-lg` - Floats an element right on large screens and above
- `.float-none-xl` - Removes float on extra-large screens and above

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

## Usage Examples

### Basic Float

```html
<!-- Float elements left and right -->
<div class="clear-float">
    <div class="float-left">Floated left</div>
    <div class="float-right">Floated right</div>
</div>
```

### Responsive Float

```html
<!-- Float left on small screens, right on medium screens and above -->
<div class="float-left float-right-md">
    This element floats left on small screens and right on medium screens and above
</div>

<!-- Float right on all screens except large, where it doesn't float -->
<div class="float-right float-none-lg">
    This element floats right except on large screens
</div>
```

### Clearing Floats

```html
<div>
    <div class="float-left">Floated left</div>
    <div class="float-right">Floated right</div>
    <div class="clear-float"></div>
    <div>This content appears below the floated elements</div>
</div>
```

### Using Alternative Class Names

```html
<!-- Using the place-* alternative class names -->
<div class="clear-float">
    <div class="place-left">Floated left</div>
    <div class="place-right">Floated right</div>
</div>
```

## Best Practices

1. **Modern Alternatives**: Consider using Flexbox or Grid layouts instead of floats for complex layouts, as they provide more control and are designed specifically for layout purposes.

2. **Clearing Floats**: Always clear floats to prevent layout issues. Use the `.clear-float` class on a container or after floated elements.

3. **Responsive Design**: Use the responsive variants to create layouts that adapt to different screen sizes.

4. **Class Naming**: Both `.float-*` and `.place-*` class names are available and do the same thing. Choose one naming convention and use it consistently in your project.

5. **Combining with Other Utilities**: Float utilities can be combined with other Metro UI utilities like spacing and sizing for more complex layouts.

## Notes

- Float utilities are still useful for specific cases like wrapping text around images, but modern layout techniques like Flexbox and Grid are generally preferred for overall page layout.
- The `.clear-float` class uses the clearfix technique to ensure that containers properly encompass floated children.