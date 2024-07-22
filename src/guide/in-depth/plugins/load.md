---
outline: deep
---

# Load

If you need to load a plugin, commonly you can charge it from the `g-component` body or globally as
a script.

## Load from the component

```html
<g-composer>
  <script type="plugin" src="<plugin-file>"></script>
</g-composer>
```


## Load as global script

It is important to load the plugin after the component loading.

```html
<head>
  <script src="https://cdn.graphery.online/graphane/0.1.0-alpha/component/composer.js"></script>
  <script src="<plugin-file>"></script>
</head>
```

## Plugins available 

You can see the [Plugin Catalog](../../../plugins/) 