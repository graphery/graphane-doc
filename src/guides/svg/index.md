# Introduction

This guide will show us the capabilities of Scalable Vector Graphics, commonly known as SVG. This
format is based on XML and is natively supported by browsers, not only as image format of the `img`
tag, also as part of the page content. In fact, the browser supports several namespaces, not only in
HTML, also support MathML for mathematical formulas and SVG for representing vector graphics.

Knowing the capabilities of SVG is essential to get the most out of Graphane. If you have not
mastered the SVG format, we invite you to discover its full potential in this introductory guide.
There are very good books and tutorials on this type of graphics on the Internet, we invite you to
consult to expand your knowledge after reviewing this guide.

## How use the SVG Graphane

**Graphane** uses the SVG format and powers them by means of directives that allow you to define the
graphical elements and their characteristics by means of the data. Also, **Graphane** includes a
powerful API to simplify the construction and manipulation of SVG graphics from Javascript. The API
is very close to the SVG structure.

### Template way

The standard SVG format is enhanced with **attribute-based directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development.

The directives than extend the SVG format are:

- [`g-bind`](../in-depth/templating/binding.md) (or the shorthand `:`): dynamically bind values to
  attributes and styles.
- [`g-for`](../in-depth/templating/lists.md): render the element `defs` multiple times based on the
  data.
- [`g-if`](../in-depth/templating/conditional.md): show an element conditionally.
- [`g-content`](../in-depth/templating/content.md): update the element content.
- [`g-on`](../in-depth/templating/events.md) (or the shorthand `@`): attach an event listener to the
  element.

After the `g-composer` template engine has processed the directives the result is a fully valid SVG
that is natively displayed by the browser.

### API way

You can access the **SVG Graphane API** from the methods included in the component with `$.svg`.
The `$` object is accesible from the `<script type="methods"></script>` content as a global
variable. You can also access it from outside the component with the `.svg` property that
the `g-component`
exposes for use from external Javascript.

In **SVG Graphane API** all are methods; thus, when you want to work with SVG attributes or
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

