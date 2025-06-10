# Table Component

The Table Component is a powerful and feature-rich data table for displaying, sorting, filtering, and manipulating tabular data. It supports pagination, searching, responsive layouts, and various styling options.

## Dependencies

- Metro UI Core
- DOM utilities

## Usage

### Basic Usage

```html
<table class="table" data-role="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>30</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

### Loading Data from Source

```html
<table class="table striped row-hover border responsive-md"
       data-role="table"
       data-caption="Table caption"
       data-rows="10"
       data-source="data/table.json">
    <thead></thead>
    <tbody></tbody>
</table>
```

### Advanced Configuration

```html
<table class="table striped row-hover border responsive-md fixed-header"
       data-role="table"
       data-caption="Table caption"
       data-rows="10"
       data-rows-steps="5, 10, 50, 100"
       data-show-activity="false"
       data-source="data/table.json"
       data-show-skip="true"
       data-pagination-wrapper="#pagination"
       data-check="true"
       data-horizontal-scroll="true">
    <thead></thead>
    <tbody></tbody>
</table>
<div id="pagination"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | String | "" | Table caption |
| `cardMode` | String | "" | Card mode for responsive tables |
| `useCurrentSlice` | Boolean | false | Use current slice for operations |
| `showInspectorButton` | Boolean | false | Show inspector button |
| `inspectorButtonIcon` | String | "🔧" | Icon for inspector button |
| `horizontalScroll` | Boolean | false | Enable horizontal scrolling |
| `horizontalScrollStop` | String | null | Breakpoint to stop horizontal scrolling |
| `check` | Boolean | false | Enable row selection with checkboxes |
| `checkType` | String | "checkbox" | Type of check control (checkbox or radio) |
| `checkColIndex` | Number | 0 | Index for check column |
| `checkName` | String | null | Name for check inputs |
| `checkStoreKey` | String | "TABLE:$1:KEYS" | Storage key for checked items |
| `rownum` | Boolean | false | Show row numbers |
| `rownumTitle` | String | "#" | Title for rownum column |
| `filters` | Object | null | Filters for data |
| `filtersOperator` | String | "and" | Operator for filters (and/or) |
| `head` | Array | null | Table header data |
| `body` | Array | null | Table body data |
| `source` | String | null | Data source URL |
| `static` | Boolean | false | Static table mode |
| `searchMinLength` | Number | 1 | Minimum length for search |
| `searchThreshold` | Number | 500 | Threshold for search |
| `searchFields` | String | null | Fields to search in |
| `showRowsSteps` | Boolean | true | Show rows steps control |
| `showSearch` | Boolean | true | Show search control |
| `showTableInfo` | Boolean | true | Show table information |
| `showPagination` | Boolean | true | Show pagination |
| `paginationShortMode` | Boolean | true | Use short pagination mode |
| `showActivity` | Boolean | true | Show activity indicator |
| `muteTable` | Boolean | true | Mute table during operations |
| `showSkip` | Boolean | false | Show skip control |
| `rows` | Number | 10 | Rows per page |
| `rowsSteps` | String | "10,25,50,100" | Steps for rows selector |
| `staticView` | Boolean | false | Static view mode |
| `viewSaveMode` | String | "client" | Mode for saving view options |
| `viewSavePath` | String | "TABLE:$1:OPTIONS" | Path for saving view options |
| `sortDir` | String | "asc" | Default sort direction |
| `decimalSeparator` | String | "." | Decimal separator for numbers |
| `thousandSeparator` | String | "," | Thousand separator for numbers |
| `tableRowsCountTitle` | String | null | Title for rows count control |
| `tableSearchTitle` | String | null | Title for search control |
| `tableSearchPlaceholder` | String | "" | Placeholder for search input |
| `tableInfoTitle` | String | null | Title for table info |
| `paginationPrevTitle` | String | null | Title for pagination prev button |
| `paginationNextTitle` | String | null | Title for pagination next button |
| `allRecordsTitle` | String | null | Title for all records option |
| `inspectorTitle` | String | null | Title for inspector |
| `tableSkipTitle` | String | null | Title for skip control |
| `emptyTableTitle` | String | null | Title for empty table |
| `activityType` | String | "atom" | Type of activity indicator |
| `activityStyle` | String | "color" | Style of activity indicator |
| `activityTimeout` | Number | 100 | Timeout for activity indicator |

## API Methods

The Table Component provides the following methods:

### `reload()`

Reloads the table data from the source.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.reload();
```

### `setData(data)`

Sets new data for the table.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.setData([
    [1, "John", 30],
    [2, "Jane", 25]
]);
```

### `setHeadData(data)`

Sets new header data for the table.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.setHeadData([
    {
        name: "id",
        title: "ID",
        sortable: true
    },
    {
        name: "name",
        title: "Name",
        sortable: true
    }
]);
```

### `setSource(source)`

Sets a new data source URL for the table.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.setSource('data/new-table-data.json');
```

### `getSelectedItems()`

Returns an array of selected items.

```javascript
const table = Metro.getPlugin('#table', 'table');
const selectedItems = table.getSelectedItems();
```

### `getStoredKeys()`

Returns an array of stored keys.

```javascript
const table = Metro.getPlugin('#table', 'table');
const keys = table.getStoredKeys();
```

### `getFilters()`

Returns the current filters.

```javascript
const table = Metro.getPlugin('#table', 'table');
const filters = table.getFilters();
```

### `getFilterOperator()`

Returns the current filter operator.

```javascript
const table = Metro.getPlugin('#table', 'table');
const operator = table.getFilterOperator();
```

### `setFilter(filter)`

Sets a filter for the table.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.setFilter({
    field: "name",
    operator: "contains",
    value: "John"
});
```

### `setFilters(filters)`

Sets multiple filters for the table.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.setFilters([
    {
        field: "name",
        operator: "contains",
        value: "John"
    },
    {
        field: "age",
        operator: ">",
        value: 25
    }
]);
```

### `setFilterOperator(operator)`

Sets the filter operator.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.setFilterOperator("or");
```

### `clearFilter()`

Clears all filters.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.clearFilter();
```

### `search(val)`

Searches the table for the specified value.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.search("John");
```

### `clearSearch()`

Clears the search.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.clearSearch();
```

### `openInspector()`

Opens the inspector.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.openInspector();
```

### `closeInspector()`

Closes the inspector.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.closeInspector();
```

### `toggleInspector()`

Toggles the inspector.

```javascript
const table = Metro.getPlugin('#table', 'table');
table.toggleInspector();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onTableCreate` | Triggered when the table is created |
| `onDataLoad` | Triggered when data is loaded |
| `onDataLoaded` | Triggered when data is loaded completely |
| `onDataLoadError` | Triggered when data loading fails |
| `onDataSave` | Triggered when data is saved |
| `onDataSaveError` | Triggered when data saving fails |
| `onDrawCell` | Triggered when a cell is drawn |
| `onAppendRow` | Triggered when a row is appended |
| `onAppendRows` | Triggered when multiple rows are appended |
| `onSearch` | Triggered when search is performed |
| `onRowClick` | Triggered when a row is clicked |
| `onRowDblClick` | Triggered when a row is double-clicked |
| `onCellClick` | Triggered when a cell is clicked |
| `onCellDblClick` | Triggered when a cell is double-clicked |
| `onCheckClick` | Triggered when a check is clicked |
| `onCheckDraw` | Triggered when a check is drawn |
| `onCheckDrawAll` | Triggered when all checks are drawn |
| `onSortStart` | Triggered when sorting starts |
| `onSortStop` | Triggered when sorting stops |
| `onSortItemSwitch` | Triggered when sort items are switched |
| `onSearch` | Triggered when search is performed |
| `onRowsCountChange` | Triggered when rows count changes |
| `onFilterCreate` | Triggered when a filter is created |
| `onFilterItemCreate` | Triggered when a filter item is created |
| `onDataFiltered` | Triggered when data is filtered |
| `onTableCreate` | Triggered when the table is created |
| `onSkip` | Triggered when skip is performed |
| `onPage` | Triggered when page is changed |
| `onPagination` | Triggered when pagination is created |
| `onHeadDraw` | Triggered when head is drawn |
| `onBodyDraw` | Triggered when body is drawn |
| `onFootDraw` | Triggered when foot is drawn |
| `onTableDraw` | Triggered when table is drawn |
| `onInspectorOpen` | Triggered when inspector is opened |
| `onInspectorClose` | Triggered when inspector is closed |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--table-inspector-border-radius` | 10px | 10px | Border radius for inspector |
| `--table-head-font-size` | 14px | 14px | Font size for table header |
| `--table-caption-font-size` | 16px | 16px | Font size for table caption |
| `--table-footer-font-size` | 14px | 14px | Font size for table footer |
| `--table-body-font-size` | 16px | 16px | Font size for table body |
| `--table-border-radius` | 6px | 6px | Border radius for table |
| `--table-border-color` | #e8e8e8 | #4a4d51 | Border color for table |
| `--table-color` | #191919 | #dbdfe7 | Text color for table |
| `--table-background` | transparent | transparent | Background color for table |
| `--table-header-background` | #fafafa | #1b1b1e | Background color for table header |
| `--table-header-color` | #191919 | #efefef | Text color for table header |
| `--table-sortable-background` | #e8e8e8 | #26282e | Background color for sortable columns |
| `--table-sortable-color` | #000000 | #ffffff | Text color for sortable columns |
| `--table-selected-background` | #d4e2ff | #2e436e | Background color for selected rows/cells |
| `--table-selected-color` | #000000 | #ffffff | Text color for selected rows/cells |
| `--table-striped-background` | #f8f8f8 | #26282e | Background color for striped rows |
| `--table-hover-background` | #eaeaea | #323437 | Background color for hover state |
| `--table-hover-color` | #191919 | #ffffff | Text color for hover state |
| `--table-inspector-background` | #ffffff | #26282e | Background color for inspector |
| `--table-inspector-border-color` | #e8e8e8 | #4a4d51 | Border color for inspector |
| `--table-inspector-color` | #191919 | #dbdfe7 | Text color for inspector |

### Example of Custom Styling

```css
.my-custom-table {
    --table-border-color: #007bff;
    --table-header-background: #0056b3;
    --table-header-color: #ffffff;
    --table-hover-background: #e6f2ff;
    --table-hover-color: #0056b3;
}
```

## Available CSS Classes

### Base Classes
- `.table` - Base class for tables
- `.table-container` - Container for tables
- `.table-component` - Component container for tables

### Table Style Modifiers
- `.striped` - Creates striped rows
- `.inverse-striped` - Creates inverse striped rows
- `.row-hover` - Adds hover effect to rows
- `.cell-hover` - Adds hover effect to cells
- `.table-border` - Adds border to the table
- `.cell-border` - Adds borders to cells
- `.row-border` - Adds borders to rows
- `.fixed-layout` - Sets table-layout to fixed
- `.fixed-header` - Makes the header sticky

### Size Modifiers
- `.subcompact` - Makes the table very compact
- `.compact` - Makes the table compact
- `.normal-{breakpoint}` - Normal size at specified breakpoint
- `.compact-{breakpoint}` - Compact size at specified breakpoint
- `.subcompact-{breakpoint}` - Subcompact size at specified breakpoint

### Responsive Modifiers
- `.responsive-{breakpoint}` - Makes the table responsive at specified breakpoint
- `.horizontal-scroll` - Enables horizontal scrolling

### Component Parts
- `.table-top` - Top section of the table component
- `.table-bottom` - Bottom section of the table component
- `.table-info` - Information section
- `.table-pagination` - Pagination section
- `.table-skip` - Skip section
- `.table-progress` - Progress indicator
- `.table-inspector` - Inspector panel
- `.table-form` - Form for editing

### Cell and Row States
- `.selected` - Selected state for rows or cells
- `.sortable-column` - Sortable column
- `.sort-asc` - Ascending sort indicator
- `.sort-desc` - Descending sort indicator
- `.check-cell` - Cell for checkboxes
- `.rownum-cell` - Cell for row numbers
- `.hidden` - Hidden element