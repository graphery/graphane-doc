---
outline: deep
---

# External Data

In production content publishing environments or when accessing remote servers, the `g-data`
component with the `src` and `type` attributes becomes invaluable in indicating the source of the
data. By utilizing these attributes, developers can seamlessly incorporate external data into their
visualization.

```html

<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-data src="/data.csv" type="csv"></g-data>
</g-svg>
```

<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-data src="/data.csv" type="csv"></g-data>
</g-svg>

The method to include external SVG template is through the `g-svg` component's `src` property. This
feature allows developers to reference an external source, providing flexibility and convenience in
managing resources.

```html

<g-svg src="/circles.svg">
  <g-data src="/data.csv" type="csv"></g-data>
</g-svg>
```

<g-svg src="/circles.svg">
  <g-data src="/data.csv" type="csv"></g-data>
</g-svg>

To streamline the process further, it is even possible to forego the explicit use of the g-data
component. Instead, designer and developers can directly include the `data-src` and `data-type`
properties within the `g-svg` component itself. By doing so, the component will automatically
generate the necessary `g-data` component transparently, simplifying the overall structure of the
code.

```html

<g-svg src="/circles.svg" data-src="/data.csv" data-type="csv"></g-svg>
```

<g-svg src="/circles.svg" data-src="/data.csv" data-type="csv"></g-svg>


