---
outline: deep
---

# Methods

When the imperative model is not enough, you can use Javascript functions. The Graphane template
component can be manage functions for complex algorithm, data manipulation or event handling.

You can load the method with several methods:

- with `<script type="methods"></script>` with the [code embebed](embebed.md).
- with the `methods-src` attribute or `<script type="methods" src="resource"></script>`
  for [load a resource](external.md) with the Javascript functions.
- directly with the [`.methods` property](property.md).

## Restricted access

In Graphane template, the methods are sandboxed and have limited access to other functions or
libraries. This restricted access ensures a secure and predictable environment for evaluating
functions within the component. You can use global objects and functions, to made dynamic imports
and use `$` for access to template component elements as [$.svg](svg-access.md) and 
[$.data](./$.data.md).