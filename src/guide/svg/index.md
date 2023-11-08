# Introduction

**Graphane** includes a powerful API to simplify the construction and manipulation of SVG graphics
from Javascript. The API is very close to the SVG structure. It is straightforward to use. If you
know the SVG format, you know Graphane API. If you learn Graphane API, you learn SVG format.

Graphane simplifies the creation and manipulation through very light methods that fit SVG
DOM attributes, properties, and methods.

```js
$.svg.viewBox(0, 0, 100, 100).width('100px').height('100px');
const rect = $.svg.add('rect').x(10).y(10).width(90).height(90).fill('#f06');
```

The result is an entirely valid SVG that can be used without limitations as part of the HTML DOM.

```xml
<svg viewBox="0 0 100 100" width="100px" height="100px">
  <rect x="10" y="10" width="90" height="90" fill="#f06"></rect>
</svg>
```

## API style: method chaining

In Graphane SVG, all are methods; thus, when you want to work with SVG attributes or properties, you
must use methods. For example, set an `id` to an SVG element is `element.id('unique_id')` and for
getting this identification it is necessary to use `element.id()`.

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

**Note**: chained call is possible when calling setter methods. When a getter method (then 
returns a value) is called, the value property is returned, amd it is impossible to do more chained
calls.

## Use from methods and from outside the component

You can access the SVG with the Graphane API from the methods included in the component with 
`$. svg`.

You can also access it from outside the component with the `.svg` property that the component
exposes for use from Javascript.