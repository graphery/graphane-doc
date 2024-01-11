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
  <script type="methods"></script>
</g-composer>
```

The component `g-composer` can include:

- The [template](template.md) that defines the SVG powered by directives.

- The [data](data.md) in format CSV, JSON or JSON5.

- Optionally, can include [methods](methods.md) with Javascript function to manage events and
  data transformation.

You can link them as external resources. To link external resources, you can use the following
attributes of the `g-composer` component:

- The `svg-src` attribute specifies the path to the SVG template.
- The `data-src` attribute indicates the location of the data source.
- The `methods-src` attribute indicates the location of methods.

```html {2-4}
<g-composer
  svg-src="/svg/circles.svg"
  data-src="/data/circles.json"
  methods-src="/methods/circles.js">
</g-composer>
```

<g-composer style="width: 100px"
  svg-src="../../svg/circles.svg"
  data-src="../../data/circles.json"
  methods-src="../../methods/circles.js"></g-composer>
<p style="font-size: small">click add circles, ctrl+click reduces circles</p>
