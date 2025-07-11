# Remote Dataset

A powerful component for displaying remote data with built-in pagination, search, sorting, and filtering capabilities. The Remote Dataset component fetches data from a remote API endpoint and provides a flexible interface for displaying and interacting with the data.

## Dependencies

- Pagination component (automatically included)

## Usage

### Basic Usage

```html
<div data-role="remote-dataset"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-on-draw-entry="drawEntry">
</div>
```

### Advanced Configuration

```html
<div data-role="remote-dataset"
     data-caption="Products List"
     data-url="https://api.example.com/products"
     data-url-search="https://api.example.com/products/search"
     data-key-data="products"
     data-key-total="total"
     data-key-limit="limit"
     data-key-offset="skip"
     data-key-sort="sortBy"
     data-key-order="order"
     data-key-search="q"
     data-limit="12"
     data-rows-steps="6,12,24,48"
     data-sort="name:asc"
     data-sort-rules="name:asc:Name A-Z,name:desc:Name Z-A,price:asc:Price Low-High,price:desc:Price High-Low"
     data-cls-body="row gap-4"
     data-cls-pagination="d-flex flex-justify-center mt-4"
     data-on-draw-entry="drawProductEntry">
</div>
```

### JavaScript Initialization

```javascript
const dataset = Metro.makePlugin("#myDataset", "remote-dataset", {
    url: "https://api.example.com/data",
    keyData: "items",
    limit: 10,
    onDrawEntry: function(entry, index, body) {
        // Custom entry rendering logic
        $(body).append(`<div class="data-item">${entry.name}</div>`);
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Caption text displayed above the dataset |
| `url` | string | "" | Primary API endpoint URL for fetching data |
| `urlSearch` | string | "" | Alternative API endpoint URL for search operations |
| `method` | string | "GET" | HTTP method for API requests |
| `limit` | number | 10 | Number of items to fetch per request |
| `offset` | number | 0 | Starting offset for data fetching |
| `sort` | string | "" | Default sorting field and order (format: "field:order") |
| `keyLimit` | string | "" | Query parameter name for limit |
| `keyOffset` | string | "" | Query parameter name for offset |
| `keyTotal` | string | "" | Response field name containing total count |
| `keyData` | string | "" | Response field name containing data array |
| `keySort` | string | "" | Query parameter name for sort field |
| `keyOrder` | string | "" | Query parameter name for sort order |
| `keySearch` | string | "q" | Query parameter name for search term |
| `shortPagination` | boolean | false | Use simplified pagination (prev/next only) |
| `rows` | number | 10 | Default number of rows per page |
| `rowsSteps` | string | "10,25,50,100" | Available options for rows per page |
| `sortRules` | string | "" | Available sorting options (format: "field:order:label:icon") |
| `showServiceBlock` | boolean | true | Show the service block with controls |
| `quickSearch` | boolean | true | Enable quick search functionality |
| `selectOrder` | boolean | true | Show sorting dropdown |
| `selectCount` | boolean | true | Show rows count dropdown |
| `showPagination` | boolean | true | Show pagination controls |
| `params` | object | null | Additional query parameters |
| `clsBody` | string | "" | CSS classes for the dataset body |
| `clsPagination` | string | "" | CSS classes for pagination |
| `clsSearchBlock` | string | "" | CSS classes for search block |
| `clsOrderBlock` | string | "" | CSS classes for order block |
| `clsRowsCountBlock` | string | "" | CSS classes for rows count block |

## API Methods

+ `addParam(key, value)` - Add a single query parameter for API requests.
+ `addParams(params)` - Add multiple query parameters from an object.
+ `clearParams()` - Remove all custom query parameters.
+ `load(append)` - Reload data from the API. Set `append` to `true` to append to existing data.
+ `destroy()` - Remove the component and clean up resources.

#### Example of Method Usage

```javascript
const dataset = Metro.getPlugin('#myDataset', 'remote-dataset');

// Add single parameter
dataset.addParam('category', 'electronics');

// Add multiple parameters
dataset.addParams({
    minPrice: 100,
    maxPrice: 500,
    inStock: true
});

// Reload data with new parameters
dataset.load();

// Clear all custom parameters
dataset.clearParams();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeLoad` | Fired before making API request. Receives URL and component instance. Should return modified URL. |
| `onLoad` | Fired after receiving API response. Receives response data and component instance. Should return processed data. |
| `onDrawEntry` | Fired for each data entry to render. Receives entry data, index, and body element. |
| `onDatasetCreate` | Fired when the component is fully initialized. |

### Event Usage Examples

```javascript
// Using data attributes
<div data-role="remote-dataset"
     data-on-before-load="beforeLoadHandler"
     data-on-load="loadHandler"
     data-on-draw-entry="drawEntryHandler">
</div>

// JavaScript event handlers
function beforeLoadHandler(url, component) {
    console.log('Loading from:', url);
    return url + '&timestamp=' + Date.now();
}

function loadHandler(data, component) {
    console.log('Data loaded:', data);
    return data; // Return processed data
}

function drawEntryHandler(entry, index, body) {
    const html = `
        <div class="data-entry">
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
        </div>
    `;
    $(body).append(html);
}
```

## Styling with CSS Variables

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `--remote-dataset-gap` | 10px | Gap spacing for dataset elements |

### Example of Custom Styling

```css
#myDataset {
    --remote-dataset-gap: 20px;
}
```

## Available CSS Classes

### Base Classes
- `.remote-dataset` - Main container class
- `.dataset-entry` - Container for dataset entries
- `.dataset-body` - Container for data items
- `.dataset-caption` - Caption text styling
- `.dataset-pagination` - Pagination container
- `.dataset-load-more` - Load more button container

### Service Block Classes
- `.service-block` - Container for search, sorting, and count controls
- `.search-block` - Search input container
- `.order-block` - Sorting dropdown container
- `.count-block` - Rows count dropdown container

### Pagination Classes
- `.short-pagination` - Simple prev/next pagination style

## API Response Format

The component expects API responses in a specific format:

```json
{
    "products": [
        {
            "id": 1,
            "title": "Product Name",
            "description": "Product description",
            "price": 99.99
        }
    ],
    "total": 100,
    "skip": 0,
    "limit": 10
}
```

Configure the response field mapping using the `key*` parameters:
- `keyData`: Field containing the data array ("products" in example)
- `keyTotal`: Field containing total count ("total" in example)
- `keyLimit`: Query parameter for limit
- `keyOffset`: Query parameter for offset

## Additional Notes

- The component automatically handles URL encoding for query parameters
- Search functionality requires minimum 3 characters and includes 300ms debounce
- Sorting rules format: "field:order:label:icon" separated by commas
- The `onDrawEntry` callback is required for rendering data items
- Use `urlSearch` parameter for different search endpoints
- Component supports both full pagination and simple prev/next navigation

## Best Practices

- Always implement the `onDrawEntry` callback to define how data should be displayed
- Use appropriate `key*` parameters to match your API response structure
- Implement error handling in `onBeforeLoad` and `onLoad` callbacks
- Use CSS classes parameters (`cls*`) to integrate with your design system
- Consider using `shortPagination` for mobile-friendly interfaces
- Implement proper loading states and error messages in your entry rendering logic