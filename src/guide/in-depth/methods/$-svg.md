---
outline: deep
---

# `$.svg`

You can access the **SVG Graphane Object** from the methods with `$.svg`. The `$` object is
accesible from the `<script type="methods"></script>` content as a global variable.

In **SVG Graphane Object** all are methods; thus, when you want to work with SVG attributes or
properties, you must use methods. For example, set an `id` to an SVG element is
`element.id('unique_id')` and for getting this identification it is necessary to use `element.id()`.

Graphane dynamically constructs the methods, which can chain together to make successive calls. Each
call returns the original object and can include one call after another.

```js
$.svg
 .width('100%')
 .height('100%');
$.svg.add('rect')
 .x(10)
 .y(10)
 .width(90)
 .height(90)
 .fill('#f06');
```

**Note**: chained call is possible when calling setter methods. When a getter method (then returns a
value) is called, the value property is returned, amd it is impossible to do more chained calls.

> You can see [Explore SVG](../../svg/index.md) and the [SVG Graphane Object Reference](../../../reference/svg/lib/index.md).