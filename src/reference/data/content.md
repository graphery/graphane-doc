---
outline: deep
---

# Data content

- **Content**: data

- **Formats**:

    - `CSV`: coma separate values format.

    - `JSON`: Javascript Object Notation format.

    - `JS`: it is very similar to JSON, but is not necessary quote the regular keys and accept 
      values
      as Date, Map, Set, etc.

## Example

```html
<g-composer>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y"
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <script type="data">
  [
    {"x": 20, "y": 20, "radix": 20, "color": "red"},
    {"x": 45, "y": 45, "radix": 30, "color": "blue"},
    {"x": 80, "y": 80, "radix": 10, "color": "green"}
  ]
  </script>
</g-composer>
```

<g-composer>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y" 
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <g-script type="data">
  [
    {"x": 20, "y": 20, "radix": 20, "color": "red"},
    {"x": 45, "y": 45, "radix": 30, "color": "blue"},
    {"x": 80, "y": 80, "radix": 10, "color": "green"}
  ]
  </g-script>
</g-composer>
