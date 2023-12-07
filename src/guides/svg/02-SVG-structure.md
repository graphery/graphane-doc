---
outline: deep
---

# SVG structure

The `$.svg` is a reference to the SVG root and returns an object with a Graphane wrapper over it.
You can use this root to nest other elements, define its coordinate system, or establish other
configuration parameters. In all our examples, we will show the SVG code and the equivalent call
with Graphane.

## The viewBox

The `viewBox` defines the internal position and dimensions of an $.svg. The view box need four
parameters: `min-x`, `min-y`, `width`, `height`. These numbers specify a rectangle that is mapped
within the internal boundaries associated with the SVG element. All measures of nested elements take
these dimensions as a reference. Calling this method without parameters returns the current view box
value.

::: code-group

```svg
<svg viewBox="0 0 100 100"></svg>
```

```js
$.svg.viewBox(0, 0, 100, 100);
```

:::

## width and height

These attributes define the viewport, that is, the image's size in the HTML page where they will be
embedded. The horizontal length is defined with `width` and the vertical length is defined
with `height`.

::: code-group

```svg
<svg width="100" height="100"></svg>
```

```js
$.svg.width(100).height(100);
```

:::

It's also possible to define these values by CSS using `width` and `height`.

::: code-group

```svg
<svg style="width: 100px; height: 100px"></svg>
```

```js
$.svg
  .style.width('100px')
  .style.height('100px');
```

:::


## Nested elements

Inside the `<svg></svg>` you can include other SVG tags for create the graphic.

With Javascript, you add elements wit the method `.add()` passing as a parameter the name of the
element that we want to create. This method returns an object which we can use to set up all the
characteristics of the element we have created.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="50" fill="#f06"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const circle = $.svg.add('circle').cx(50).cy(50).r(50).fill('#f06');
```

:::

<svg viewBox="0,0,100,100" width="75" height="75">
  <circle cx="50" cy="50" r="50" fill="#f06"/>
</svg>

The SVG format nests its elements by creating a structure of elements that are contained within one
another. 

In Javascript, all objects returned by `.add()` can contain other objects by calling their `.add()`
method. For example, we can create a `g` (group) element and include it inside a `circle`.

::: code-group

```svg
<svg viewBox="0,0,100,100" width="75" height="75">
    <g fill="#f06">
        <circle cx="50" cy="50" r="50"/>
    </g>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const g      = $.svg.add('g').fill('#f06');
const circle = g.add('circle').cx(50).cy(50).r(50);
```

:::

<svg viewBox="0,0,100,100" width="75" height="75">
    <g fill="#f06">
        <circle cx="50" cy="50" r="50"/>
    </g>
</svg>
