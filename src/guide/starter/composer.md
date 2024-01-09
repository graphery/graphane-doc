---
outline: deep
---

# Composer

By leveraging the web component Graphane Composer, you can enhance your content with visually
compelling graphics and visualizations without requiring extensive code modifications or specific
framework dependencies.

Graphane is based on `<g-composer></g-composer>` tag, the main component than include all other
elements.

```html

<g-composer>
  <template></template>
  <script type="data"></script>
</g-composer>
```

The custom element `g-composer` includes to children:

- The first element is the [template](template.md) that included the SVG powered by directives.

- The second element is the [data](data.md) in CSV, JSON or JSON5 format.

- Optionally, we can include [methods](methods.md) with Javascript function to manage events and
  data transformation.
