---
outline: deep
---

# Graphane Components

## Load

All components included in Graphane are loaded via:

```html

<script src="https://cdn.Graphane.online/svg/2.0.0.beta.3/component/gsvg.js"></script>
```

## `g-svg`

Once the file is loaded, there are three new custom tags available in the browser:

- `<g-svg></g-svg>` is the main component form a declarative SVG template for build a graph from
  data.

Within the `<g-svg></g-svg>` custom tag we can include other components or to be configured with
attributes.

### Example with embebed components

The complete embebed structured is:

```html

<g-svg>

  <!-- template -->
  <template>
    <svg viewBox="0 0 100 100" id="svg">
      <defs g-for="value of data">
        <circle :cx="value.cx"
                :cy="value.cy"
                r="25"
                :fill="color(value.cx)">
        </circle>
      </defs>
      <text x="50" y="12">circles</text>
    </svg>
  </template>

  <!-- data -->
  <g-data type="json">[
    {"cx": 25, "cy": 25},
    {"cx": 50, "cy": 50},
    {"cx": 75, "cy": 75}
    ]
  </g-data>

  <!-- methods -->
  <g-methods>
    function color (value) {
    if (value >= 75) {
    return 'blue';
    }
    if (value >= 50) {
    return 'green';
    }
    return 'red';
    }
  </g-methods>

</g-svg>
```

### Example with attributes

The same with external resource references is:

```html
<g-svg template-src="template.svg"
       data-src="circles.json" data-type="json"
       methods-src="colors.js"></g-svg>
```


## SVG Template

[`<svg></svg>`](./templating/index)

It is the template, i.e., an HTML Template within an SVG with new directives that allow rendering
the final graph from the data. Alternatively you can use the `src` attribute of `g-svg` with a path
to an SVG template file.

## Data

[`<g-data></g-data>`](./data/index)

This custom tag provides the data to the `g-svg` component. Alternatively you can use the `data-src`
and `data-type` attributes of `g-svg` with the path to the file with the data and the data
forma (`json`, `csv`, or `js`).

## Methods

[`<g-methods></g-methods>`](./methods/index)

This custom tag provides javascript functions to the `g-svg` component. Alternatively you can use
the `methods-src` attribute of `g-svg` with the path to a Javascript file with functions.

