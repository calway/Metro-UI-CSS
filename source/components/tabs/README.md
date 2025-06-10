# Tabs Component

The Tabs Component provides a way to organize content into multiple tabs, allowing users to switch between different sections of content within the same area of a page.

## Dependencies

- Metro UI Core
- DOM Library

## Usage

### Basic Usage

```html
<ul data-role="tabs">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>
<div class="tabs-targets">
    <div id="tab1">Content for Tab 1</div>
    <div id="tab2">Content for Tab 2</div>
    <div id="tab3">Content for Tab 3</div>
</div>
```

### With Options

```html
<ul data-role="tabs" 
    data-expand="true"
    data-update-uri="true"
    data-type="pills"
    data-position="top"
    data-align="center">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>
```

### Linked Tabs

You can link multiple tab components to synchronize their tab switching:

```html
<ul id="tabs1" data-role="tabs" data-link="engine">
    <li><a href="#npm_1">npm</a></li>
    <li><a href="#pnpm_1">pnpm</a></li>
</ul>

<ul id="tabs2" data-role="tabs" data-link="engine">
    <li><a href="#npm_2">npm</a></li>
    <li><a href="#pnpm_2">pnpm</a></li>
</ul>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `tabsDeferred` | Number | 0 | Deferred initialization time in milliseconds |
| `expand` | Boolean | false | Whether to expand tabs in mobile view |
| `expandPoint` | String | null | Media breakpoint at which tabs expand (e.g., "md") |
| `type` | String | "default" | Tab style type: "default", "text", "group", "pills" |
| `updateUri` | Boolean | false | Update browser URL hash when switching tabs |
| `position` | String | "top" | Position of tabs: "top", "bottom", "left", "right" |
| `align` | String | "left" | Alignment of tabs: "left", "center", "right" |
| `link` | String | "" | Link tabs with the same link value to synchronize tab switching |
| `clsTabs` | String | "" | Additional CSS class for tabs container |
| `clsTabsList` | String | "" | Additional CSS class for tabs list |
| `clsTabsListItem` | String | "" | Additional CSS class for tabs list items |
| `clsTabsListItemActive` | String | "" | Additional CSS class for active tabs list item |

## API Methods

### next()
Move to the next tab.

```javascript
const tabs = Metro.getPlugin('#myTabs', 'tabs');
tabs.next();
```

### prev()
Move to the previous tab.

```javascript
const tabs = Metro.getPlugin('#myTabs', 'tabs');
tabs.prev();
```

### open(tab)
Open a specific tab. The tab parameter can be:
- A number (starting from 1) to open a tab by index
- A jQuery object representing the tab element
- A DOM element representing the tab

```javascript
const tabs = Metro.getPlugin('#myTabs', 'tabs');
tabs.open(1);        // Open first tab
tabs.open($('#tab')); // Open tab by jQuery object
```

### openByTarget(target)
Open a tab by its target ID.

```javascript
const tabs = Metro.getPlugin('#myTabs', 'tabs');
tabs.openByTarget('#tab1');
```

### openByIndex(index)
Open a tab by its zero-based index.

```javascript
const tabs = Metro.getPlugin('#myTabs', 'tabs');
tabs.openByIndex(0); // Open first tab
```

## Events

| Event | Description |
| ----- | ----------- |
| `onTab` | Triggered when a tab is clicked |
| `onTabOpen` | Triggered when a tab is opened |
| `onTabClose` | Triggered when a tab is closed |
| `onBeforeTab` | Triggered before a tab is opened (return false to prevent opening) |
| `onTabsCreate` | Triggered when the tabs component is created |

### Example of Event Usage

```html
<ul data-role="tabs"
    data-on-tab="console.log('tab clicked')"
    data-on-tab-open="console.log('tab opened')"
    data-on-tab-close="console.log('tab closed')">
    <!-- tabs content -->
</ul>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--tabs-border-radius` | 6px | 6px | Border radius for tabs |
| `--tabs-border-radius-pills` | 16px | 16px | Border radius for pills-style tabs |
| `--tabs-background` | var(--default-background) | var(--default-background) | Background color for tabs container |
| `--tabs-color` | var(--default-color) | var(--default-color) | Text color for tabs container |
| `--tabs-hamburger-background` | transparent | transparent | Background color for hamburger menu in mobile view |
| `--tabs-hamburger-color` | #000000 | #ffffff | Color for hamburger menu in mobile view |
| `--tabs-item-background` | var(--default-background) | var(--default-background) | Background color for tab items |
| `--tabs-item-color` | var(--default-color) | var(--default-color) | Text color for tab items |
| `--tabs-item-background-hover` | #f5f8fe | #26282e | Background color for tab items on hover |
| `--tabs-item-color-hover` | var(--default-color) | var(--default-color) | Text color for tab items on hover |
| `--tabs-item-background-active` | #eaeaea | #4a4d51 | Background color for active tab items |
| `--tabs-item-color-active` | var(--default-color) | var(--default-color) | Text color for active tab items |
| `--tabs-item-marker-active` | #2bcc19 | #4fff39 | Color for active tab marker |
| `--tabs-item-icon-background` | #ffffff | #343637 | Background color for tab item icons |
| `--tabs-item-icon-color` | #000000 | #ffffff | Color for tab item icons |

### Example of Custom Styling

```css
.my-custom-tabs {
    --tabs-border-radius: 10px;
    --tabs-item-background-active: #007bff;
    --tabs-item-color-active: #ffffff;
    --tabs-item-marker-active: #ff9900;
}
```

## Available CSS Classes

### Base Classes
- `.tabs` - Main container class
- `.tabs-list` - Class for the tabs list (ul element)
- `.tabs-targets` - Container for tab content

### Position Classes
- `.tabs-top` - Tabs positioned at the top
- `.tabs-bottom` - Tabs positioned at the bottom
- `.tabs-left` - Tabs positioned at the left
- `.tabs-right` - Tabs positioned at the right

### Type Classes
- `.tabs-default` - Default tabs style
- `.tabs-text` - Text-only tabs style
- `.tabs-group` - Group-style tabs
- `.tabs-pills` - Pills-style tabs

### Alignment Classes
- `.align-left` - Align tabs to the left
- `.align-center` - Align tabs to the center
- `.align-right` - Align tabs to the right

### State Classes
- `.active` - Active tab
- `.expand` - Expanded tabs in mobile view
- `.tabs-expand` - Container with expanded tabs