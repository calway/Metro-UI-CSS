# Image Utilities (images.less)

This file provides a comprehensive set of utility classes for styling and manipulating images in Metro UI.

## Overview

The `images.less` file defines CSS classes for responsive images, image containers, thumbnails, overlays, and image transformations. These utilities make it easy to create visually appealing image presentations with minimal custom CSS.

## CSS Variables

The file defines several CSS variables that control the appearance of images and their containers:

| Variable | Light Theme | Dark Theme | Description |
|----------|-------------|------------|-------------|
| `--thumb-background` | rgba(255,255,255,.8) | rgba(0,0,0,.8) | Background color for thumbnails |
| `--img-overlay-background` | rgba(70, 140, 255, .7) | rgba(70, 140, 255, .7) | Background color for image overlays |
| `--img-overlay-color` | #ffffff | #ffffff | Text color for image overlays |
| `--img-border-radius` | 6px | 6px | Border radius for images |

## Basic Image Classes

### Responsive Images

| Class | Description |
|-------|-------------|
| `.img-fluid` | Makes an image responsive (100% width, auto height) |
| `.img-thumbnail` | Adds padding, border, and background to an image |
| `.img-container` | Creates a container for images with additional features |

## Image Container

The `.img-container` class provides a versatile container for images with several features:

### Basic Container

```html
<div class="img-container">
    <img src="image.jpg" alt="Description">
</div>
```

### Image with Overlay

The `.image-overlay` class creates a hover effect that displays content over the image:

```html
<div class="img-container">
    <img src="image.jpg" alt="Description">
    <div class="image-overlay">
        <h3>Image Title</h3>
        <p>Image description or additional information</p>
    </div>
</div>
```

### Thumbnail with Title and Description

The `.thumbnail` modifier adds a title and description area to the image container:

```html
<div class="img-container thumbnail">
    <div class="title">Image Title</div>
    <img src="image.jpg" alt="Description">
    <div class="description">Detailed description of the image</div>
</div>
```

## Figure Element Styling

The file also provides styling for the HTML5 `<figure>` element:

```html
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption</figcaption>
</figure>
```

## Image Transformations

| Class | Description |
|-------|-------------|
| `.flip-image-horizontal` | Flips an image horizontally (mirror effect) |
| `.flip-image-vertical` | Flips an image vertically (upside down) |
| `.flip-image` | Flips an image both horizontally and vertically |

Example:
```html
<img src="image.jpg" alt="Description" class="flip-image-horizontal">
```

## Object-Fit Utilities

These classes control how an image fits within its container:

| Class | Description |
|-------|-------------|
| `.fit-cover` | Image covers the entire container while maintaining aspect ratio (may crop) |
| `.fit-contain` | Image is scaled to fit entirely within the container (may leave empty space) |
| `.fit-fill` | Image is stretched to fill the container (may distort) |
| `.fit-scale-down` | Image is scaled down to fit the container (like contain, but never scales up) |
| `.fit-none` | Image is not resized |

Example:
```html
<div style="width: 300px; height: 200px;">
    <img src="image.jpg" alt="Description" class="fit-cover">
</div>
```

## Overlay Effects

The `.image-overlay` class creates a hover effect with these features:

1. Background color overlay appears on hover
2. Decorative borders animate in from the edges
3. Text content becomes visible

The overlay is designed to work on both hover-capable devices and touch devices (using `:active` for touch).

## CSS Properties

### Base Image Properties

```css
.img-container, .img-fluid, .img-thumbnail {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    vertical-align: middle;
    background-color: transparent;
    transition: all .3s ease-in-out;
    overflow: hidden;
    border-radius: var(--img-border-radius);
}
```

### Thumbnail Properties

```css
.img-thumbnail {
    padding: .25rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--thumb-background);
}
```

## Usage Examples

### Basic Responsive Image

```html
<img src="image.jpg" alt="Description" class="img-fluid">
```

### Image Thumbnail

```html
<img src="image.jpg" alt="Description" class="img-thumbnail">
```

### Image Container with Overlay

```html
<div class="img-container">
    <img src="image.jpg" alt="Description">
    <div class="image-overlay">
        <h3>Beautiful Landscape</h3>
        <p>A stunning view of mountains and lakes</p>
    </div>
</div>
```

### Thumbnail with Title and Description

```html
<div class="img-container thumbnail">
    <div class="title">Mountain View</div>
    <img src="mountain.jpg" alt="Mountain landscape">
    <div class="description">A beautiful mountain landscape captured at sunset</div>
</div>
```

### Combining Multiple Image Utilities

```html
<div class="img-container">
    <img src="image.jpg" alt="Description" class="fit-cover flip-image-horizontal">
    <div class="image-overlay">
        <h3>Flipped Image</h3>
        <p>This image is horizontally flipped and covers its container</p>
    </div>
</div>
```

## Best Practices

1. **Responsive Images**: Use `.img-fluid` or `.img-container` for responsive images that scale with their container.

2. **Image Overlays**: Keep overlay content concise and ensure sufficient contrast between the overlay background and text.

3. **Thumbnails**: Use the `.thumbnail` class for image galleries or when you need to display a collection of images with titles and descriptions.

4. **Object-Fit**: Choose the appropriate object-fit utility based on your specific needs:
   - `.fit-cover` for background-like images where some cropping is acceptable
   - `.fit-contain` for product images or logos where the entire image must be visible
   - `.fit-fill` only when stretching is acceptable

5. **Accessibility**: Always include meaningful `alt` attributes on images for screen readers and ensure sufficient color contrast for overlay text.