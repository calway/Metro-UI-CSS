# Select

The Select component provides an enhanced replacement for the standard HTML select element with features like filtering, multiple selection, remote data sources, and customizable styling.

## Dependencies

- Metro UI Core
- Metro UI Dropdown component

## Usage

### Basic Usage

```html
<select data-role="select">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

### With Icons

```html
<select data-role="select">
    <option data-icon="<span class='mif-rocket'>" value="rocket">Rocket</option>
    <option data-icon="<span class='mif-star-empty'>" value="star">Star</option>
    <option data-icon="<img src='images/icon.svg' alt=''/>" value="custom">Custom Icon</option>
</select>
```

### Multiple Selection

```html
<select data-role="select" multiple data-clear-button="true">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

### With Option Groups

```html
<select data-role="select" data-show-group-name="true">
    <optgroup label="Group 1">
        <option value="1-1">Option 1.1</option>
        <option value="1-2">Option 1.2</option>
    </optgroup>
    <optgroup label="Group 2">
        <option value="2-1">Option 2.1</option>
        <option value="2-2">Option 2.2</option>
    </optgroup>
</select>
```

### With Filtering

```html
<select data-role="select" data-filter="true" data-filter-placeholder="Search...">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

### With Remote Data Source

```html
<select data-role="select" 
        data-source="/api/data" 
        data-source-method="GET" 
        data-source-type="json">
</select>
```

### Different Sizes

```html
<select data-role="select" class="input-small">
    <!-- options -->
</select>

<select data-role="select" class="input-medium">
    <!-- options -->
</select>

<select data-role="select" class="input-large">
    <!-- options -->
</select>
```

### With Placeholder

```html
<select data-role="select" data-use-placeholder="true" data-placeholder="Select an option">
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</select>
```

### With Prepend/Append Text

```html
<select data-role="select" data-prepend="Select:">
    <!-- options -->
</select>

<select data-role="select" data-append="Required">
    <!-- options -->
</select>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `id` | string | "" | The ID for the select element |
| `label` | string | "" | Label text for the select |
| `size` | string | "normal" | Size of the select. Possible values: "small", "medium", "normal", "large" |
| `selectDeferred` | number | 0 | Delay before initialization in milliseconds |
| `clearButton` | boolean | false | Show clear button |
| `clearButtonIcon` | string | "❌" | Icon for clear button |
| `usePlaceholder` | boolean | false | Use placeholder text |
| `placeholder` | string | "" | Placeholder text |
| `addEmptyValue` | boolean | false | Add empty value option |
| `emptyValue` | string | "" | Value for empty option |
| `duration` | number | 0 | Duration of dropdown animation |
| `prepend` | string | "" | Text to prepend to the select |
| `append` | string | "" | Text to append to the select |
| `filterPlaceholder` | string | "" | Placeholder for filter input |
| `filter` | boolean | false | Show filter input |
| `dropHeight` | number | 200 | Maximum height of dropdown |
| `dropWidth` | number | null | Width of dropdown (null = auto) |
| `dropFullSize` | boolean | false | Make dropdown full width |
| `openMode` | string | "auto" | Dropdown open mode |
| `showGroupName` | boolean | false | Show group name in selected item |
| `shortTag` | boolean | true | Limit tag width to 120px |
| `source` | string | null | URL for remote data source |
| `sourceMethod` | string | "GET" | HTTP method for remote data source |
| `sourceType` | string | "json" | Data type for remote data source |
| `filterSource` | string | null | URL for filter remote data source |
| `filterThreshold` | number | 500 | Debounce threshold for filter input |
| `clsSelect` | string | "" | Additional CSS class for select element |
| `clsSelectInput` | string | "" | Additional CSS class for select input |
| `clsPrepend` | string | "" | Additional CSS class for prepend element |
| `clsAppend` | string | "" | Additional CSS class for append element |
| `clsOption` | string | "" | Additional CSS class for option elements |
| `clsOptionActive` | string | "" | Additional CSS class for active option |
| `clsOptionGroup` | string | "" | Additional CSS class for option group |
| `clsDropList` | string | "" | Additional CSS class for dropdown list |
| `clsDropContainer` | string | "" | Additional CSS class for dropdown container |
| `clsSelectedItem` | string | "" | Additional CSS class for selected item |
| `clsSelectedItemAction` | string | "" | Additional CSS class for selected item action |
| `clsLabel` | string | "" | Additional CSS class for label |
| `clsGroupName` | string | "" | Additional CSS class for group name |
| `clsFilterInput` | string | "" | Additional CSS class for filter input |

## API Methods

+ `disable()` - Disables the select component
+ `enable()` - Enables the select component
+ `toggleState()` - Toggles between enabled and disabled states
+ `reset(toDefault)` - Resets the select to default or empty state. If `toDefault` is true, resets to default selected options
+ `getSelected()` - Returns an array of selected values
+ `val(val)` - Gets or sets the selected value(s). For multiple selects, pass an array of values
+ `data(options, selected, delimiter)` - Sets the options data. `options` can be a string of HTML, an object with key-value pairs, or a complex object with nested groups
+ `addOption(val, title, selected)` - Adds a single option to the select
+ `addOptions(values)` - Adds multiple options to the select. `values` can be an array or object
+ `removeOption(val)` - Removes an option with the specified value
+ `removeOptions(values)` - Removes multiple options with the specified values
+ `fetch(source, options, clearOptions)` - Fetches options from a remote source

## Events

| Event | Description |
| ----- | ----------- |
| `onClear` | Fired when the select is cleared |
| `onChange` | Fired when the selection changes |
| `onUp` | Fired when the dropdown is closed |
| `onDrop` | Fired when the dropdown is opened |
| `onItemSelect` | Fired when an item is selected |
| `onItemDeselect` | Fired when an item is deselected |
| `onSelectCreate` | Fired when the select is created |
| `onData` | Callback for processing data from remote source |

## Styling with CSS Variables

### Light Theme Variables (Default)

| Variable | Default (Light) | Description |
| -------- | --------------- | ----------- |
| `--select-focus-color` | rgba(light-gray, 0.45) | Focus outline color |
| `--select-disabled-color` | #ccc | Color for disabled state |
| `--select-options-background` | #ffffff | Background color for options list |
| `--select-options-color` | #191919 | Text color for options list |
| `--select-option-background` | transparent | Background color for option |
| `--select-option-color` | inherit | Text color for option |
| `--select-option-background-hover` | rgba(29,29,29,0.1) | Background color for option on hover |
| `--select-option-color-hover` | inherit | Text color for option on hover |
| `--select-option-background-selected` | #e8e8e8 | Background color for selected option |
| `--select-option-color-selected` | #191919 | Text color for selected option |
| `--select-button-background` | transparent | Background color for buttons |
| `--select-button-color` | #191919 | Text color for buttons |
| `--select-button-background-hover` | transparent | Background color for buttons on hover |
| `--select-button-color-hover` | #191919 | Text color for buttons on hover |
| `--select-dropdown-toggle-color` | #191919 | Color for dropdown toggle |
| `--select-group-title-background` | #f6f7f8 | Background color for group titles |
| `--select-group-title-color` | #646464 | Text color for group titles |
| `--select-item-group-title-background` | transparent | Background color for selected item group titles |
| `--select-item-group-title-color` | #ccc | Text color for selected item group titles |
| `--select-tag-background` | #f6f7f8 | Background color for tags (multiple select) |
| `--select-tag-color` | #191919 | Text color for tags |
| `--select-tag-button-background` | #f6f7f8 | Background color for tag buttons |
| `--select-tag-button-color` | #191919 | Text color for tag buttons |
| `--select-border-radius` | 4px | Border radius for select elements |

### Dark Theme Variables

| Variable | Dark Mode | Description |
| -------- | --------- | ----------- |
| `--select-focus-color` | rgba(light-gray, 0.2) | Focus outline color |
| `--select-disabled-color` | #ccc | Color for disabled state |
| `--select-options-background` | #2b2d30 | Background color for options list |
| `--select-options-color` | #dbdfe7 | Text color for options list |
| `--select-option-background` | transparent | Background color for option |
| `--select-option-color` | inherit | Text color for option |
| `--select-option-background-hover` | #43454a | Background color for option on hover |
| `--select-option-color-hover` | #ffffff | Text color for option on hover |
| `--select-option-background-selected` | #43454a | Background color for selected option |
| `--select-option-color-selected` | #ffffff | Text color for selected option |
| `--select-button-background` | transparent | Background color for buttons |
| `--select-button-color` | #dbdfe7 | Text color for buttons |
| `--select-button-background-hover` | transparent | Background color for buttons on hover |
| `--select-button-color-hover` | #ffffff | Text color for buttons on hover |
| `--select-dropdown-toggle-color` | #ffffff | Color for dropdown toggle |
| `--select-group-title-background` | #1e1f22 | Background color for group titles |
| `--select-group-title-color` | #646464 | Text color for group titles |
| `--select-item-group-title-background` | transparent | Background color for selected item group titles |
| `--select-item-group-title-color` | #646464 | Text color for selected item group titles |
| `--select-tag-background` | #2b2d30 | Background color for tags (multiple select) |
| `--select-tag-color` | #dbdfe7 | Text color for tags |
| `--select-tag-button-background` | #2b2d30 | Background color for tag buttons |
| `--select-tag-button-color` | #dbdfe7 | Text color for tag buttons |

## Available CSS Classes

### Base Classes
- `.select` - Main container class
- `.select-input` - Input field class
- `.option-list` - Options list class
- `.drop-container` - Dropdown container class
- `.tag` - Tag class for multiple selection

### Size Modifiers
- `.small` - Small size
- `.medium` - Medium size
- `.large` - Large size

### State Modifiers
- `.focused` - Focused state
- `.disabled` - Disabled state
- `.active` - Active option
- `.multiple` - Multiple selection mode

### Special Modifiers
- `.pill-input` - Pill-shaped input
- `.no-icons` - Hide icons
- `.drop-full-size` - Full-width dropdown
- `.rtl` - Right-to-left text direction

### Example of Custom Styling

```css
/* Custom styling example */
.my-custom-select {
    --select-border-radius: 8px;
    --select-option-background-selected: #007bff;
    --select-option-color-selected: white;
    --select-tag-background: #e9f5ff;
    --select-tag-color: #007bff;
}
```