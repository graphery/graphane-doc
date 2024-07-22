---
outline: deep
---

# Graphane Extensibility

Graphane is extensible by plugins. These can extend the standard Graphane functionality according to
the needs. There are some plugins available with Graphane, but it is also possible to create your
own custom plugin.

## Plugins available

::: info [Shapes](./catalog/shapes.md)

Create new shapes in a `<path>` element.
:::


::: info [Load](./catalog/load.md)

Load external resources and include in the SVG.
:::

::: info [Observe Resize](./catalog/observe-resize.md)

Add `resize` event to the SVG
:::

::: info [Non Scaling Size](./catalog/non-scaling-size.md)

Keep the size and/or the stroke width to elements when the SVG is resized.
:::

## Build your custom plugin

Can you get more info about the plugin in the [In Depth Guide](../guide/in-depth/plugins/)