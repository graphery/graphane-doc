---
outline: deep
---

# Graphane Extensibility

Graphane is extensible by plugins. These can extend the standard Graphane functionality according to
the needs. There are some plugins available with Graphane, but it is also possible to create your
own custom plugin.

## How to use a plugin

To load a plugin from Graphane Composer we will use `<script type="plugin" src="..."></script>`.
The `src` attribute must include the URL to the plugin Javascript file.

## Plugins available

::: info [Shapes](./catalog/shapes.md)

Create new shapes in a `<path>` element.
:::
