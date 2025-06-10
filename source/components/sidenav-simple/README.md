# Sidenav Simple

A compact, icon-based side navigation menu that can expand to show titles. This component provides a clean, space-efficient navigation solution that can be used in various layouts.

## Dependencies

This component has no JavaScript dependencies as it's purely CSS-based.

## Usage

### Basic Usage

```html
<ul class="sidenav-simple">
    <li>
        <a href="#">
            <span class="icon mif-home"></span>
            <span class="title">Home</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-cog"></span>
            <span class="title">Settings</span>
        </a>
    </li>
    <li class="active">
        <a href="#">
            <span class="icon mif-user"></span>
            <span class="title">Profile</span>
        </a>
    </li>
</ul>
```

### With Responsive Expansion

```html
<ul class="sidenav-simple sidenav-simple-expand-md">
    <li>
        <a href="#">
            <span class="icon mif-home"></span>
            <span class="title">Home</span>
        </a>
    </li>
    <li class="active">
        <a href="#">
            <span class="icon mif-cog"></span>
            <span class="title">Settings</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-user"></span>
            <span class="title">Profile</span>
        </a>
    </li>
</ul>
```

### With RTL Support

```html
<ul class="sidenav-simple" dir="rtl">
    <li>
        <a href="#">
            <span class="icon mif-home"></span>
            <span class="title">Home</span>
        </a>
    </li>
    <li class="active">
        <a href="#">
            <span class="icon mif-cog"></span>
            <span class="title">Settings</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-user"></span>
            <span class="title">Profile</span>
        </a>
    </li>
</ul>
```

## Styling with CSS

### CSS Variables

This component doesn't use CSS variables directly, but it uses Metro UI's color variables from the LESS files.

### Available CSS Classes

#### Base Classes
- `.sidenav-simple` - The main container class for the side navigation

#### Modifiers
- `.sidenav-simple-expand-sm` - Expands the navigation on small screens and larger (≥576px)
- `.sidenav-simple-expand-md` - Expands the navigation on medium screens and larger (≥768px)
- `.sidenav-simple-expand-lg` - Expands the navigation on large screens and larger (≥992px)
- `.sidenav-simple-expand-xl` - Expands the navigation on extra-large screens and larger (≥1200px)
- `.sidenav-simple-expand-xxl` - Expands the navigation on extra-extra-large screens and larger (≥1452px)

#### Element Classes
- `.active` - Applied to the `<li>` element to indicate the current active menu item
- `.icon` - Applied to the element containing the icon
- `.title` - Applied to the element containing the menu item title

## Component Structure

The component has a simple structure:

```
ul.sidenav-simple
  └── li
       └── a
            ├── span.icon
            └── span.title
```

## Styling Details

- **Default width**: 52px (collapsed)
- **Expanded width**: 220px
- **Item height**: 52px
- **Background color**: Light theme background
- **Hover state**: Light hover background
- **Active state**: Cyan background with white text

## RTL Support

For right-to-left languages, add the `dir="rtl"` attribute to the `.sidenav-simple` element. This will adjust the positioning of icons and text accordingly.

## Complete Example

```html
<style>
    .sidenav-container {
        height: 100vh;
    }
</style>

<div class="sidenav-container">
    <ul class="sidenav-simple sidenav-simple-expand-lg">
        <li>
            <a href="#">
                <span class="icon mif-home"></span>
                <span class="title">Home</span>
            </a>
        </li>
        <li class="active">
            <a href="#">
                <span class="icon mif-cog"></span>
                <span class="title">Settings</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="icon mif-user"></span>
                <span class="title">Profile</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="icon mif-bell"></span>
                <span class="title">Notifications</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="icon mif-exit"></span>
                <span class="title">Logout</span>
            </a>
        </li>
    </ul>
</div>
```

This example creates a simple side navigation that expands on large screens to show both icons and titles.
