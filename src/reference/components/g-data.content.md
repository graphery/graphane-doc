---
outline: deep
---

# `<g-data type="type">content</g-data>`

- **Content**: data embebed

- **Formats**:

    - `csv`: coma separate values format.

    - `json`: Javascript Object Notation format.

    - `js`: it is very similar to JSON, but is not necessary quote the regular keys and accept values
      as Date, Map, Set, etc.

## Example

```html
<g-svg>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y"
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <g-data type="json">
  [
    {"x": 20, "y": 20, "radix": 20, "color": "red"},
    {"x": 45, "y": 45, "radix": 30, "color": "blue"},
    {"x": 80, "y": 80, "radix": 10, "color": "green"}
  ]
  </g-data>
</g-svg>
```

<g-svg>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y" 
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <g-data type="json">
  [
    {"x": 20, "y": 20, "radix": 20, "color": "red"},
    {"x": 45, "y": 45, "radix": 30, "color": "blue"},
    {"x": 80, "y": 80, "radix": 10, "color": "green"}
  ]
  </g-data>
</g-svg>
