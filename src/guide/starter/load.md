---
outline: deep
---

# Load

To get started, you need to include the Graphane in your HTML page. This can be done by adding a
script tag with the source pointing to the component file into the CDN:

```html

<script src="https://cdn.graphery.online/graphane/0.1.0-alpha/component/composer.js"></script>
```

::: details Understanding the CDN path

This is the detailed description of each URL part:

```
https://cdn.graphery.online/graphane/0.1.0-alpha/component/composer.js
|-----|--------------------|--------|-----------|---------|-----------|
   |            |               |         |          |          |-----> filename
   |            |               |         |          |----------------> kind
   |            |               |         |---------------------------> version
   |            |               |-------------------------------------> package
   |            |-----------------------------------------------------> domain
   |------------------------------------------------------------------> protocol
```

:::

Graphane runs dynamically in the browser, and does not require compiling or transpiling at
development time.
