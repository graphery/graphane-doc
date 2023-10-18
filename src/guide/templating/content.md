---
outline: deep
---

# Adding Content

The `g-content` directive in Graphane is a feature that enables you to incorporate content from
data into various elements such as `text`, `tspan`, and other elements within an SVG document.

This directive provides the flexibility to dynamically generate and populate the SVG based on the
provided data. When the SVG is rendered, the directive will be processed, and the specified content
will be inserted in the appropriate locations.

The `g-content` directive supports both text and SVG source code as the content source. This means
that you can populate the target elements with either plain text or dynamically generate SVG code,
giving you a wide range of possibilities for data-driven visualizations or custom designs.

```html {7,11}
<g-template data="title: 'hello', description: 'simple example'">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="green"/>
    <text style="font-size:20px; fill:white"
          x="5" 
          y="40" 
          g-content="data.title"></text>
    <text style="font-size:12px; fill:white"
          x="5" 
          y="65" 
          g-content="data.description"></text>
  </svg>
</g-template>
```

<g-template data="title: 'hello', description: 'simple example'">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="green"/>
    <text style="font-size:20px; fill:white"
          x="5" 
          y="40" 
          g-content="data.title" ></text>
    <text style="font-size:12px; fill:white"
          x="5" 
          y="65" 
          g-content="data.description"></text>
  </svg>
</g-template>
