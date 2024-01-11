---
outline: deep
---

# Load - plugin

This plugin allows to dynamically load resources in the SVG, commonly other SVGs.

## Load

To load the plugin from the `g-composer` component we must use the URL:

- ```https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/load.js```

```html
<g-composer>
  <script type="plugin"
          src="https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/load.js">
  </script>
</g-composer>
```

## Use

### directive

```g-load```

### helper

```$$.svg()```

### event

```load```