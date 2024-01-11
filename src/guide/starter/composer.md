---
outline: deep
---

# Composer

Graphane is based on the custom tag `<g-composer></g-composer>`, the main web component than include
all other elements.

```html
<g-composer>
  <template></template>
  <script type="data"></script>
</g-composer>
```

The component `g-composer` can include:

- The [template](template.md) that defines the SVG powered by directives.

- The [data](data.md) in format CSV, JSON or JSON5.

- Optionally, can include [methods](methods.md) with Javascript function to manage events and
  data transformation.
