# Embed Utilities (embed.less)

This file provides utility classes for creating responsive embedded content containers in Metro UI.

## Overview

The `embed.less` file defines CSS classes that help create responsive containers for embedded content such as videos, maps, and iframes. These containers maintain specific aspect ratios while resizing with the viewport, ensuring that embedded content displays properly on all screen sizes.

## Available Classes

### Main Container Class

| Class | Description |
|-------|-------------|
| `.embed-container` | Creates a responsive container for embedded content with a default 16:9 aspect ratio |

### Aspect Ratio Modifier Classes

| Class | Description | Aspect Ratio |
|-------|-------------|--------------|
| `.size-21x9` | Ultra-widescreen aspect ratio | 21:9 |
| `.size-16x9` | Standard widescreen aspect ratio (default) | 16:9 |
| `.size-4x3` | Standard fullscreen aspect ratio | 4:3 |
| `.size-1x1` | Square aspect ratio | 1:1 |

## How It Works

The `.embed-container` class uses the "padding-top" technique to maintain aspect ratios:

1. The container has `position: relative` and `width: 100%`
2. A pseudo-element (::before) with a percentage-based `padding-top` creates the aspect ratio
3. Embedded elements inside the container are positioned absolutely to fill the container

This approach ensures that embedded content maintains its aspect ratio regardless of the viewport size.

## Supported Elements

The following elements are automatically styled when placed inside an `.embed-container`:

- `<iframe>`
- `<object>`
- `<embed>`
- `<video>`
- Elements with class `.embed-item`

These elements will be positioned to fill the entire container while maintaining the specified aspect ratio.

## Usage Examples

### Basic Embed Container (16:9)

```html
<!-- Default 16:9 aspect ratio container -->
<div class="embed-container">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
```

### Different Aspect Ratios

```html
<!-- 21:9 ultra-widescreen aspect ratio -->
<div class="embed-container size-21x9">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>

<!-- 4:3 standard fullscreen aspect ratio -->
<div class="embed-container size-4x3">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>

<!-- 1:1 square aspect ratio -->
<div class="embed-container size-1x1">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
```

### Embedding Google Maps

```html
<div class="embed-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zNDUnMzAuNiJOIDczwrA1OSczMC4wIlc!5e0!3m2!1sen!2sus!4v1234567890" allowfullscreen></iframe>
</div>
```

### Embedding Videos

```html
<div class="embed-container">
    <video controls>
        <source src="video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

### Using with Custom Elements

```html
<div class="embed-container">
    <div class="embed-item">
        <!-- Any custom content that should fill the container -->
    </div>
</div>
```

## CSS Properties

The `.embed-container` class applies the following CSS properties:

```css
.embed-container {
    position: relative;
    display: block;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.embed-container::before {
    padding-top: 56.25%; /* 16:9 aspect ratio (9/16 = 0.5625 = 56.25%) */
    display: block;
    content: "";
}

.embed-container iframe,
.embed-container object,
.embed-container embed,
.embed-container video,
.embed-container .embed-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
```

## Best Practices

1. Always include the `.embed-container` class on the parent element of your embedded content.
2. Choose the appropriate aspect ratio modifier class based on the content you're embedding.
3. For YouTube videos, use the embed URL format (youtube.com/embed/VIDEO_ID) rather than the standard URL.
4. For responsive designs, you may want to place the `.embed-container` inside another container with width constraints.
5. If you need a custom aspect ratio not provided by the default classes, you can create your own using the same technique.