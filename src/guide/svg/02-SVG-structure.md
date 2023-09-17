---
outline: deep
---

# SVG structure

The function `gySVG()` creates an SVG root and returns an object with a Graphane wrapper over
it. You can use this root to nest other elements, define its coordinate system, or establish other
configuration parameters.

::: code-group

```svg
<svg></svg>
```

```js
const svg = gSVG();
```

:::

You can use `viewBox` to defines the graphic's internal canvas, `width`, `height` to define the
size, etc.

## The viewBox

The `viewBox` defines the internal position and dimensions of an SVG. The view box need four
parameters: `min-x`, `min-y`, `width`, `height`. These numbers specify a rectangle that is mapped
within the internal boundaries associated with the SVG element. All measures of nested elements take
these dimensions as a reference. Calling this method without parameters returns the current view box
value.

::: code-group

```svg
<svg viewBox="0 0 100 100"></svg>
```

```js
const svg = gSVG().viewBox(0, 0, 100, 100);
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
const svg = gySVG().width(100).height(100);
```

:::

It's also possible to define these values by CSS using `width` and `height`.

::: code-group

```svg
<svg style="width: 100px; height: 100px"></svg>
```

```js
const svg = gySVG()
  .style.width('100px')
  .style.height('100px');
```

:::

## Include into HTML

Your can include the SVG within the HTML page because the browser known how to render the SVG
namespace.

With Javascript library we use `.attachTo()` providing as a parameter a selector to locate the
element or, if we already have a reference, the DOM object directly. As a result, our SVG is
inserted into the page.

::: code-group

```svg
<div id="content">
  <svg viewBox="0 0 100 100" width="50" height="50"></svg>
</div>
```

```js
const svg = gySVG().viewBox(0, 0, 100, 100).width(50).height(50);
svg.attachTo('#content')
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
const svg    = gySVG().viewBox(0, 0, 100, 100).width(75).height(75);
const circle = svg.add('circle').cx(50).cy(50).r(50).fill('#f06');
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
const svg    = gySVG().viewBox(0, 0, 100, 100).width(75).height(75);
const g      = svg.add('g').fill('#f06');
const circle = g.add('circle').cx(50).cy(50).r(50);
```

:::

<svg viewBox="0,0,100,100" width="75" height="75">
    <g fill="#f06">
        <circle cx="50" cy="50" r="50"/>
    </g>
</svg>
