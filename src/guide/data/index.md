---
outline: deep
---

# Data

The data used into the template is located into the `.data` property of `<g-composer></g-composer>`
component. The component acts as a bridge between the data and the template engine, facilitating the
seamless integration of data updates with the visual output. When the data changes, the framework
automatically updates the corresponding elements, ensuring that the view accurately reflects the
latest information.

The `.data` property provides a convenient interface for managing the data. You can easily add,
remove, or modify data points (at first level or in deep), triggering immediate updates to the
visual representation. This flexibility allows for agile development and rapid iteration, as
developers can experiment with different datasets and instantly observe the visual impact.

You can load the data with several methods:

- directly with the [`.data` property](property.md).
- with a simple key-value expression into the [`data` attribute](attribute.md).
- with `<script type="data"></script>` with [data embebed](embebed.md).
- with the `data-src` attribute or `<script type="data" src="resource"></script>`
  for [load a resource](external.md) with JSON or CSV format.

