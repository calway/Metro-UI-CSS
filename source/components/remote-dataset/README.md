# Remote Dataset

The Remote Dataset component provides a way to fetch and display data from a remote API with built-in pagination, sorting, and searching capabilities. It's designed to handle large datasets efficiently by loading data in chunks.

## Dependencies

- Pagination component

## Usage

### Basic Usage

```html
<div data-role="remote-dataset" 
     data-url="api/data" 
     data-search-url="api/search"
     data-rows="10"
     data-template="myTemplateFunction">
</div>
```

### Template Function

The template function is used to render each item in the dataset:

```javascript
function myTemplateFunction(item) {
    return `
        <div class="custom-item">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
}
```

### Sort Rules

Sort rules define how data can be sorted:

```html
<div data-role="remote-dataset" 
     data-url="api/data" 
     data-sort-rules="name:asc:Name:mif-sort-alpha-asc,date:desc:Date:mif-calendar">
</div>
```

Each sort rule is defined in the format: `field:order:label:icon`

### Real-World Example

```html
<div data-role="remote-dataset"
     data-caption="Products"
     data-offset-key="skip"
     data-data-key="products"
     data-url='https://dummyjson.com/products'
     data-search-url='https://dummyjson.com/products/search'
     data-search-key="q"
     data-template="datasetTemplate"
     data-cls-body="row"
     data-cls-item="cell-ld-6 cell-md-4"
     data-cls-pagination="mt-4 d-flex flex-justify-center"
     data-sort="rating:desc"
     data-sort-rules="price:asc:Price:<span class='mif-arrow-up'>,price:desc:Price:<span class='mif-arrow-down'>,rating:desc:By rating:<span class='mif-star-empty'>"
></div>

<script>
    function datasetTemplate(data) {
        return data ? `
        <div class="card p-4 h-100">
            <div class="product-image"><img src="${data.thumbnail}" alt="${data.title}"/></div>
            <div class="product-title">${data.title}</div>
            <div>
                <span class="product-brand bg-sand">${data.brand ? data.brand : 'Noname'}</span>
            </div>
            <div><span class="product-desc">${data.description}</span></div>
            <div class="row mt-auto">
                <div class="cell-4">
                    <div class="product-price"><span class="">$${data.price}</span></div>
                </div>
                <div class="cell-8">
                    <div class="product-rating text-right">
                        <input data-role="rating" data-static="true" data-value="${data.rating}" data-stared-color="#f2c313" data-message="(${data.rating})"/>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row gap-2 mt-4">
                <button class="button success">Buy <span class="mif-add-shopping-cart icon"></span></button>
                <button class="ml-auto button square outline fg-orange"><span class="mif-star-empty"></span></button>
                <button class="button info">Details</button>
            </div>
        </div>   
        ` : ``;
    }
</script>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Caption for the dataset |
| `url` | string | "" | URL for fetching data |
| `searchUrl` | string | "" | URL for searching data (if different from main URL) |
| `method` | string | "GET" | HTTP method for requests (GET, POST, etc.) |
| `limit` | number | 10 | Number of items to fetch per page |
| `offset` | number | 0 | Starting offset for fetching data |
| `sort` | string | "" | Default sort field and order (format: "field:order") |
| `limitKey` | string | "limit" | Query parameter name for limit |
| `offsetKey` | string | "offset" | Query parameter name for offset |
| `searchKey` | string | "query" | Query parameter name for search term |
| `totalKey` | string | "total" | Response property name for total count |
| `dataKey` | string | "data" | Response property name for data array |
| `sortKey` | string | "sortBy" | Query parameter name for sort field |
| `orderKey` | string | "order" | Query parameter name for sort order |
| `shortPagination` | boolean | false | Whether to use short pagination (just prev/next) or full pagination |
| `rows` | number | 10 | Default number of rows to display |
| `rowsSteps` | string | "10,25,50,100" | Available options for rows per page (comma-separated) |
| `sortRules` | string | "" | Rules for sorting data (format: "field:order:label:icon,...") |
| `showSearch` | boolean | true | Whether to show search control |
| `showOrder` | boolean | true | Whether to show order control |
| `showRowsCount` | boolean | true | Whether to show rows count control |
| `template` | function | "" | Template function for rendering items |
| `clsBody` | string | "" | Additional CSS class for the dataset body |
| `clsItem` | string | "" | Additional CSS class for dataset items |
| `clsPagination` | string | "" | Additional CSS class for pagination |
| `clsSearchBlock` | string | "" | Additional CSS class for search block |
| `clsOrderBlock` | string | "" | Additional CSS class for order block |
| `clsRowsCountBlock` | string | "" | Additional CSS class for rows count block |

## API Methods

The Remote Dataset component doesn't expose any public API methods beyond the standard component methods.

## Events

| Event | Description |
| ----- | ----------- |
| `onLoad` | Triggered when data is loaded, allows transforming the response |
| `onDrawRow` | Triggered when a row is drawn |
| `onDrawCell` | Triggered when a cell is drawn |
| `onDatasetCreate` | Triggered when the dataset is created |

## API Response Format

The component expects the API response to be in the following format:

```json
{
  "total": 100,
  "data": [
    { "id": 1, "name": "Item 1", "description": "Description 1" },
    { "id": 2, "name": "Item 2", "description": "Description 2" },
    ...
  ]
}
```

The property names can be customized using the `totalKey` and `dataKey` parameters.

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--remote-dataset-gap` | 10px | 10px | Gap between elements in the dataset |

### Example of Custom Styling

```css
.custom-dataset {
    --remote-dataset-gap: 20px;
}

.custom-dataset .dataset-item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    transition: box-shadow 0.3s ease;
}

.custom-dataset .dataset-item:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

```html
<div data-role="remote-dataset" class="custom-dataset" data-url="api/data">
</div>
```

## Available CSS Classes

### Base Classes
- `.remote-dataset` - Main container class
- `.dataset-body` - Container for dataset items
- `.dataset-item` - Individual dataset item
- `.dataset-load-more` - Container for load more button
- `.dataset-pagination` - Container for pagination controls

### Service Block Classes
- `.service-block` - Container for service controls (search, order, rows count)
- `.search-block` - Container for search input
- `.order-block` - Container for order select
- `.count-block` - Container for rows count select
- `.hide-block` - Utility class to hide blocks

## Component Structure

The Remote Dataset component has the following structure:

```html
<div class="remote-dataset">
    <!-- Service controls (search, order, rows count) -->
    <div class="service-block">
        <div class="search-block">
            <!-- Search input -->
        </div>
        <div class="order-block">
            <!-- Order select -->
        </div>
        <div class="count-block">
            <!-- Rows count select -->
        </div>
    </div>

    <!-- Dataset content -->
    <div class="dataset-body">
        <!-- Dataset items rendered using template -->
        <div class="dataset-item"></div>
        <div class="dataset-item"></div>
        ...
    </div>

    <!-- Load more button -->
    <div class="dataset-load-more">
        <button class="button large cycle link load-more-button">
            <span class="icon">⟳</span>
            Load More
        </button>
    </div>

    <!-- Pagination -->
    <div class="dataset-pagination"></div>
</div>
```

## Best Practices

- Always provide a meaningful template function to render items
- Use appropriate sort rules that make sense for your data
- Consider using the `onLoad` event to transform API responses if they don't match the expected format
- Set appropriate row counts based on the size and complexity of your items
- Use custom styling to make the dataset match your application's design
- When working with large datasets, consider using pagination instead of the "load more" approach
- Test your implementation with different screen sizes to ensure responsive behavior
