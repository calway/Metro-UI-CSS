# Font Base Settings (font.less)

This file defines the base font settings and typography foundation for Metro UI.

## Overview

The `font.less` file establishes the core font configuration for the Metro UI framework. It includes a custom font definition, CSS variables for font properties, and basic font styling for the HTML and body elements.

## Custom Fonts

The file includes a custom font definition:

| Font | Description |
|------|-------------|
| `digital` | A digital-style font embedded as a data URI, useful for displays that mimic digital readouts |

## CSS Variables

The file defines several CSS variables that control the base typography of the framework:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--font-name` | -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif | The primary font stack used throughout the framework |
| `--font-symbol` | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" | Font stack for symbols and emoji |
| `--font-size` | 1rem | Base font size |
| `--line-height` | 1.5 | Base line height |
| `--font-style` | normal | Base font style |
| `--font-weight` | 400 | Base font weight (normal) |

## Base Element Styling

The file applies basic font styling to the HTML and body elements:

### HTML Element

```css
html {
    font-family: var(--font-name);
    font-size: 100%;
}
```

This sets the base font family and ensures that 1rem equals the user's preferred font size.

### Body Element

```css
body {
    font-family: var(--font-name);
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-style: var(--font-style);
    font-weight: var(--font-weight);
}
```

This applies all the base font variables to the body element, establishing the default typography for the entire document.

## Usage

The settings in this file serve as the foundation for all text in a Metro UI application. You typically don't need to interact with this file directly, but you can customize the typography by overriding the CSS variables:

```css
:root {
    --font-name: 'Your Custom Font', sans-serif;
    --font-size: 1.1rem;
    --line-height: 1.6;
    --font-weight: 300;
}
```

## Using the Digital Font

The included digital font can be used by applying its font-family:

```css
.digital-display {
    font-family: "digital", monospace;
}
```

This is useful for creating elements that mimic digital displays, such as counters, timers, or numeric readouts.

## System Font Stack

The default font stack (`--font-name`) uses system fonts, which provides several benefits:

1. **Performance**: No external font files need to be downloaded
2. **Native Look**: UI elements match the user's operating system
3. **Accessibility**: System fonts are optimized for readability on their respective platforms

The specific fonts in the stack are chosen to provide the best native font on each major operating system:

- `-apple-system`, `BlinkMacSystemFont`: macOS and iOS
- `"Segoe UI"`: Windows
- `"Roboto"`: Android
- `"Ubuntu"`: Ubuntu Linux
- `"Helvetica Neue", sans-serif`: Fallbacks for other systems

## Best Practices

1. **Maintain Consistency**: Use the provided CSS variables for font properties throughout your application to maintain a consistent look and feel.

2. **Responsive Typography**: Consider using relative units (rem) for font sizes to ensure text scales appropriately with user preferences.

3. **Custom Fonts**: If you need to use custom fonts, consider adding them to your project and updating the `--font-name` variable rather than overriding font-family properties throughout your CSS.

4. **Accessibility**: Ensure that any custom font choices maintain good readability and meet accessibility standards for contrast and legibility.