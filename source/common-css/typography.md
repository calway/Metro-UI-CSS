# Typography Utilities (typography.less)

This file provides comprehensive typography styling and utility classes for Metro UI.

## Overview

The `typography.less` file defines CSS classes and styles for controlling text appearance, including font sizes, weights, alignments, transformations, and special text elements. These utilities help create consistent typography throughout your application.

## CSS Variables

### Heading Sizes

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--h1-size` | 2rem | Font size for h1 headings |
| `--h2-size` | 1.5rem | Font size for h2 headings |
| `--h3-size` | 1.25rem | Font size for h3 headings |
| `--h4-size` | 1rem | Font size for h4 headings |
| `--h5-size` | 0.875rem | Font size for h5 headings |
| `--h6-size` | 0.75rem | Font size for h6 headings |

### Font Weights

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--base-text-weight-ultralight` | 100 | Ultralight font weight |
| `--base-text-weight-light` | 300 | Light font weight |
| `--base-text-weight-normal` | 400 | Normal font weight |
| `--base-text-weight-medium` | 500 | Medium font weight |
| `--base-text-weight-semibold` | 600 | Semibold font weight |

### Special Element Styling

| Variable | Light Theme | Dark Theme | Description |
|----------|-------------|------------|-------------|
| `--mark-background` | #a6d2ff | #c0c0c0 | Background color for `<mark>` elements |
| `--mark-color` | #191919 | #000000 | Text color for `<mark>` elements |
| `--code-background` | #99a1b31a | #2b2d30 | Background color for `<code>` elements |
| `--code-color` | #191919 | #b3b3aa | Text color for `<code>` elements |
| `--kbd-background` | #004D6FFF | #004D6FFF | Background color for `<kbd>` elements |
| `--kbd-color` | #ffffff | #ffffff | Text color for `<kbd>` elements |

## Font Weight Utilities

### Named Weight Classes

| Class | Description |
|-------|-------------|
| `.text-ultralight` | Sets font weight to ultralight (100) |
| `.text-light` | Sets font weight to light (300) |
| `.text-normal` | Sets font weight to normal (400) |
| `.text-medium` | Sets font weight to medium (500) |
| `.text-bold` | Sets font weight to semibold (600) |

### Numeric Weight Classes

| Class | Description |
|-------|-------------|
| `.text-weight-1` | Sets font weight to 100 |
| `.text-weight-2` | Sets font weight to 200 |
| `.text-weight-3` | Sets font weight to 300 |
| `.text-weight-4` | Sets font weight to 400 |
| `.text-weight-5` | Sets font weight to 500 |
| `.text-weight-6` | Sets font weight to 600 |
| `.text-weight-7` | Sets font weight to 700 |
| `.text-weight-8` | Sets font weight to 800 |
| `.text-weight-9` | Sets font weight to 900 |
| `.text-weight-10` | Sets font weight to 1000 |

## Heading and Display Classes

### Display Classes

Large, eye-catching text styles for hero sections and major headings:

| Class | Font Size | Font Weight |
|-------|-----------|-------------|
| `.display4` | 112px | 200 |
| `.display3` | 56px | 400 |
| `.display2` | 48px | 400 |
| `.display1` | 36px | 400 |

### Heading Classes

Standard heading styles that can be applied to any element:

| Class | Font Size | Font Weight |
|-------|-----------|-------------|
| `.h1`, `h1` | 2rem | 600 |
| `.h2`, `h2` | 1.5rem | 600 |
| `.h3`, `h3` | 1.25rem | 600 |
| `.h4`, `h4` | 1rem | 600 |
| `.h5`, `h5` | 0.875rem | 600 |
| `.h6`, `h6` | 0.75rem | 600 |

### Alternative Heading Classes

Additional heading styles with specific sizes and weights:

| Class | Font Size | Font Weight |
|-------|-----------|-------------|
| `.leader` | 48px | 300 |
| `.sub-leader` | 38px | 400 |
| `.header` | 30px | 500 |
| `.sub-header` | 24px | 500 |
| `.alt-header` | 20px | 500 |
| `.sub-alt-header` | 16px | 500 |

## Text Size Utilities

| Class | Font Size | Font Weight | Description |
|-------|-----------|-------------|-------------|
| `.text-small` | 12px | 400 | Small text |
| `.text-secondary` | 14px | 400 | Secondary text |
| `.text-leader` | 24px | 300 | Large lead paragraph text with increased line height |
| `.text-leader2` | 20px | 300 | Medium lead paragraph text with increased line height |
| `.text-muted` | - | - | Text with muted color (uses `--body-color-secondary`) |

## Text Transformation Utilities

| Class | Description |
|-------|-------------|
| `.text-upper` | Transforms text to uppercase |
| `.text-lower` | Transforms text to lowercase |
| `.text-cap` | Capitalizes the first letter of each word |

## Text Alignment Utilities

| Class | Description |
|-------|-------------|
| `.text-left` | Aligns text to the left |
| `.text-right` | Aligns text to the right |
| `.text-center` | Centers text |
| `.text-just` | Justifies text |
| `.text-ellipsis` | Truncates text with an ellipsis when it overflows |

## Text Style Utilities

| Class | Description |
|-------|-------------|
| `.text-italic` | Applies italic style |
| `.text-oblique` | Applies oblique style |
| `.text-overline` | Adds a line above the text |
| `.text-linethrough` | Adds a line through the text |
| `.text-underline` | Adds a line below the text |
| `.text-underover` | Adds lines both above and below the text |
| `.no-decor` | Removes text decoration |

## Vertical Alignment Utilities

| Class | Description |
|-------|-------------|
| `.va-top` | Aligns to the top |
| `.va-bottom` | Aligns to the bottom |
| `.va-baseline` | Aligns to the baseline |
| `.va-middle` | Aligns to the middle |
| `.va-sub` | Aligns as subscript |
| `.va-super` | Aligns as superscript |
| `.va-text-top` | Aligns to the text top |
| `.va-text-bottom` | Aligns to the text bottom |

## Font Size Modifiers

### Reduce Font Size

| Class | Description |
|-------|-------------|
| `.reduce-1` | Reduces font size to 0.9em |
| `.reduce-2` | Reduces font size to 0.8em |
| `.reduce-3` | Reduces font size to 0.7em |
| `.reduce-4` | Reduces font size to 0.6em |
| `.reduce-5` | Reduces font size to 0.5em |
| `.reduce-6` | Reduces font size to 0.4em |
| `.reduce-7` | Reduces font size to 0.3em |
| `.reduce-8` | Reduces font size to 0.2em |
| `.reduce-9` | Reduces font size to 0.1em |

### Enlarge Font Size

| Class | Description |
|-------|-------------|
| `.enlarge` | Sets font size to 1em |
| `.enlarge-1` | Enlarges font size to 1.1em |
| `.enlarge-2` | Enlarges font size to 1.2em |
| `.enlarge-3` | Enlarges font size to 1.3em |
| `.enlarge-4` | Enlarges font size to 1.4em |
| `.enlarge-5` | Enlarges font size to 1.5em |
| `.enlarge-6` | Enlarges font size to 1.6em |
| `.enlarge-7` | Enlarges font size to 1.7em |
| `.enlarge-8` | Enlarges font size to 1.8em |
| `.enlarge-9` | Enlarges font size to 1.9em |
| `.enlarge-2x` | Enlarges font size to 2em |
| `.enlarge-3x` | Enlarges font size to 3em |
| `.enlarge-4x` | Enlarges font size to 4em |

## Special Text Utilities

| Class | Description |
|-------|-------------|
| `.wrap-long` | Forces long words to break and wrap |
| `.error` | Adds a red wavy underline to indicate an error |
| `.mono` | Sets font to monospace |
| `.indent` | Indents the first line of text |
| `.indent-letter` | Creates a drop cap effect (enlarged first letter) |

## Element Styling

The file also provides styling for various HTML text elements:

### Links (`<a>`)

Links are styled with:
- Color: `--link-color`
- No text decoration by default
- Hover color: `--link-color-hover`
- Hover text decoration: underline

### Abbreviations (`<abbr>`)

Abbreviations are styled with:
- No text decoration
- Dotted bottom border
- Help cursor

### Code Elements (`<code>`, `<kbd>`, `<pre>`)

Code elements are styled with:
- Monospace font
- 13px font size
- Specific background and text colors
- Rounded corners
- Padding for inline code and kbd elements

### Mark Element (`<mark>`)

Highlighted text is styled with:
- Background color: `--mark-background`
- Text color: `--mark-color`
- Small padding

### Blockquotes (`<blockquote>`)

Blockquotes are styled with:
- Left border
- Padding
- Special styling for the `.right-side` variant with right border

### Horizontal Rule (`<hr>`)

Horizontal rules are styled with:
- Color: `--border-color`
- Height: 2px (default), 1px (`.thin`), or 3px (`.fat`)

## Responsive Variants

Many typography utilities have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

For example:
- `.text-center-md` - Centers text on medium screens and above
- `.text-upper-lg` - Transforms text to uppercase on large screens and above
- `.enlarge-2-xl` - Enlarges font size to 1.2em on extra large screens and above

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

## Usage Examples

### Headings and Display Text

```html
<!-- Display text for hero sections -->
<h1 class="display3">Welcome to Our Site</h1>

<!-- Standard headings -->
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>

<!-- Heading classes applied to non-heading elements -->
<div class="h3">This looks like an h3</div>

<!-- Alternative heading styles -->
<div class="leader">Large Leader Text</div>
<div class="sub-leader">Slightly Smaller Leader</div>
```

### Text Styles and Weights

```html
<!-- Font weights -->
<p class="text-light">Light weight text</p>
<p class="text-bold">Bold text</p>
<p class="text-weight-7">Very bold text (700)</p>

<!-- Text styles -->
<p class="text-italic">Italic text</p>
<p class="text-underline">Underlined text</p>

<!-- Text transformations -->
<p class="text-upper">This will be uppercase</p>
<p class="text-cap">This will capitalize each word</p>
```

### Text Alignment

```html
<!-- Text alignment -->
<p class="text-left">Left-aligned text</p>
<p class="text-center">Centered text</p>
<p class="text-right">Right-aligned text</p>

<!-- Responsive alignment -->
<p class="text-center text-left-md">
    Centered on small screens, left-aligned on medium screens and above
</p>
```

### Special Elements

```html
<!-- Code and keyboard elements -->
<p>Use the <code>console.log()</code> method to debug.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>

<!-- Marked text -->
<p>This is <mark>highlighted</mark> text.</p>

<!-- Blockquote -->
<blockquote>
    This is a blockquote.
    <small>- Author Name</small>
</blockquote>

<!-- Right-aligned blockquote -->
<blockquote class="right-side">
    This is a right-aligned quote.
    <small>Author Name</small>
</blockquote>
```

### Font Size Modifiers

```html
<!-- Reducing font size -->
<p>Normal text with <span class="reduce-2">smaller text</span> inside.</p>

<!-- Enlarging font size -->
<p>Normal text with <span class="enlarge-2">larger text</span> inside.</p>

<!-- Very large text -->
<span class="enlarge-3x">3x Larger</span>
```

## Best Practices

1. **Consistent Headings**: Use the standard heading classes (h1-h6 or .h1-.h6) for document structure and SEO.

2. **Responsive Typography**: Use responsive variants to adjust text alignment and size based on screen size.

3. **Semantic HTML**: Use the appropriate HTML elements (`<code>`, `<kbd>`, `<mark>`, etc.) with these utility classes for better accessibility.

4. **Font Size Modifiers**: Use relative size modifiers (`.reduce-*`, `.enlarge-*`) rather than fixed sizes to maintain proper scaling.

5. **Text Wrapping**: Use `.wrap-long` for content that might contain very long words or URLs to prevent layout issues.

6. **Vertical Rhythm**: Maintain consistent spacing between text elements for better readability.