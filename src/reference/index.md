---
outline: deep
---

# Composer

The following is a description of the API of `g-composer` component of Graphane.
This component is the main element for generating graphics using a declarative SVG template and
reactive data.

## Content

With embebed elements, this is its anatomy:

```html
<g-composer>
  <svg>                         
    ...
  </svg>
  <script type="data" src="...">          
    ...
  </script>
  <script type="methods" src="..."> 
    ...
  </script>
</g-composer>
```

- [`svg`](svg/index.md) - SVG template.
- [`script type="data"`](data/index.md) - JSON o CSV content.
- [`script type="methods"`](methods/index.md) - Javascript with functions.

## Attributes

With linked elements, this is its anatomy:

```html
<g-composer
  svg-src="..."            
  data-src="..."           
  methods-src="..."      
></g-composer>
```

- [`svg-src`](svg/src.md) - SVG template.
- [`data-src`](data/src.md) - JSON o CSV resource.
- [`methods-src`](methods/src.md) - Javascript with functions.

Optionally, is possible to use a `data` attribute for simple data:

- [`data`](data/attribute.md) - data with format key-value separated with `;` or  `,`.

## Properties

The componente has these properties:

- [`.svg`](svg/property.md) - reference to the [wrapped SVG](svg/lib/) rendered.
- [`.data`](data/property.md) - the data object. If the data is changed, the 
  template is updated.
- [`.methods`](methods/property.md) - all functions defined with `script 
  type="methods"` or `methods-src`.
