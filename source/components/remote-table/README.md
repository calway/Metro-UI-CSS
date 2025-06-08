# Remote Table Component

The Remote Table component provides a way to fetch and display tabular data from a remote API with built-in pagination, sorting, and searching capabilities. It's designed to handle large datasets efficiently by loading data in chunks and displaying it in a structured table format.

## Dependencies

- Table component (styles)
- Pagination component

## Usage

### Basic Usage

```html
<div data-role="remote-table" 
     data-url="api/data" 
     data-search-url="api/search"
     data-rows="10"
     data-fields="id,name,email,phone"
     data-captions="ID,Name,Email,Phone"
     data-sortable-fields="name,email">
</div>
```

### Additional Configurations

```html
<div id="userTable" data-role="remote-table" 
     data-url="api/users" 
     data-search-url="api/users/search"
     data-rows="25"
     data-fields="id,name,email,role,status"
     data-captions="ID,Name,Email,Role,Status"
     data-sortable-fields="name,email,role"
     data-col-size="50px,200px,250px,100px,100px"
     data-sort="name"
     data-sort-order="asc"
     data-cls-table="striped bordered">
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| caption | string | "" | Caption for the table |
| url | string | "" | URL for fetching data |
| searchUrl | string | "" | URL for searching data (if different from main URL) |
| method | string | "GET" | HTTP method for requests (GET, POST, etc.) |
| limit | number | 10 | Number of items to fetch per page |
| offset | number | 0 | Starting offset for fetching data |
| fields | string | "" | Fields to display in the table (comma-separated) |
| sortableFields | string | "" | Fields that can be sorted (comma-separated) |
| colSize | string | "" | Column sizes (comma-separated, e.g., "100px,200px,auto") |
| sort | string | "" | Default sort field |
| sortOrder | string | "asc" | Default sort order (asc or desc) |
| captions | string | null | Custom captions for table headers (comma-separated) |
| limitKey | string | "limit" | Query parameter name for limit |
| offsetKey | string | "offset" | Query parameter name for offset |
| searchKey | string | "query" | Query parameter name for search term |
| totalKey | string | "total" | Response property name for total count |
| dataKey | string | "data" | Response property name for data array |
| sortKey | string | "sortBy" | Query parameter name for sort field |
| orderKey | string | "order" | Query parameter name for sort order |
| shortPagination | boolean | false | Whether to use short pagination (just prev/next) or full pagination |
| rows | number | 10 | Default number of rows to display |
| rowsSteps | string | "10,25,50,100" | Available options for rows per page (comma-separated) |
| clsTable | string | "" | Additional CSS class for the table |
| clsPagination | string | "" | Additional CSS class for pagination |

## API Methods

+ `_loadData()` - Loads data from the remote API based on current settings.
+ `_createEntries()` - Creates table entries from the loaded data.
+ `destroy()` - Removes the component from the DOM.

#### Example of Method Usage
```javascript
const table = Metro.getPlugin('#myTable', 'remote-table');
// Note: Most methods are internal and not meant to be called directly
```

## Events

| Event | Description |
| --- | --- |
| onLoad | Triggered when data is loaded, allows transforming the response |
| onDrawRow | Triggered when a row is drawn |
| onDrawCell | Triggered when a cell is drawn |
| onDrawHeadCell | Triggered when a header cell is drawn |
| onTableCreate | Triggered when the table is created |

## Styling with CSS Variables

The Remote Table component doesn't define specific CSS variables. It inherits styles from the Table component.

## Available CSS Classes

### Base Classes
- `.remote-table` - The main container class for the component
- `.table-entry` - Container for the table and search controls
- `.search-block` - Container for search input and rows count selector
- `.table-pagination` - Container for pagination controls

### Structure
The Remote Table component has the following structure:

```html
<div class="table-component remote-table">
    <!-- Search and rows count controls -->
    <div class="table-entry">
        <div class="search-block row">
            <div class="cell-sm-10">
                <!-- Search input -->
            </div>
            <div class="cell-sm-2">
                <!-- Rows count select -->
            </div>
        </div>
        
        <!-- Table -->
        <table class="table">
            <caption>Table Caption</caption>
            <thead>
                <tr class="table-header">
                    <th class="sortable-column">Column 1</th>
                    <th class="sortable-column">Column 2</th>
                    ...
                </tr>
            </thead>
            <tbody>
                <tr class="table-row">
                    <td>Data 1</td>
                    <td>Data 2</td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>
    
    <!-- Pagination -->
    <div class="table-pagination"></div>
</div>
```

## API Response Format

The component expects the API response to be in the following format:

```json
{
  "total": 100,
  "data": [
    { "id": 1, "name": "John Doe", "email": "john@example.com", "phone": "123-456-7890" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "phone": "098-765-4321" },
    ...
  ]
}
```

The property names can be customized using the `totalKey` and `dataKey` parameters.

## Customizing Cell Rendering

You can customize how cells are rendered using the `onDrawCell` event:

```javascript
Metro.init(function(){
    var table = Metro.getPlugin('#myTable', 'remote-table');
    table.options.onDrawCell = function(cell, value, field, item, index) {
        // Customize cell based on field or value
        if (field === 'status') {
            if (value === 'active') {
                $(cell).addClass('bg-green fg-white');
            } else {
                $(cell).addClass('bg-red fg-white');
            }
        }
        
        // Format currency
        if (field === 'price') {
            $(cell).html('$' + parseFloat(value).toFixed(2));
        }
    };
});
```

## Customizing Header Cell Rendering

You can customize how header cells are rendered using the `onDrawHeadCell` event:

```javascript
Metro.init(function(){
    var table = Metro.getPlugin('#myTable', 'remote-table');
    table.options.onDrawHeadCell = function(cell, caption, field, index, sortable, sorted, order) {
        // Add icons or custom styling to header cells
        if (sortable) {
            var icon = sorted ? (order === 'asc' ? '↑' : '↓') : '↕';
            $(cell).append(' ' + icon);
        }
    };
});
```

## Custom Styling Example

```css
.custom-table.remote-table .table {
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 8px;
    overflow: hidden;
}

.custom-table.remote-table .table th {
    background-color: #3498db;
    color: white;
    font-weight: bold;
}

.custom-table.remote-table .table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.custom-table.remote-table .table tr:hover {
    background-color: #e0f7fa;
}
```

```html
<div data-role="remote-table" class="custom-table" data-url="api/data">
</div>
```

## Best Practices

1. Specify the fields you want to display using the `fields` parameter to limit data transfer
2. Provide custom captions with the `captions` parameter for better readability
3. Use the `sortableFields` parameter to enable sorting for relevant columns
4. Use the `onDrawCell` event to format data appropriately (dates, currency, etc.)
5. Use the `colSize` parameter to control column widths for better layout
6. Consider using the `clsTable` parameter to apply Metro UI table styles (striped, bordered, etc.)
7. Set appropriate row counts based on the complexity of your data