---
outline: deep
---

# Lists Rendering

The `g-for` directive is a powerful feature in Graphane that allows you to render a block of SVG
elements multiple times based on an array or an object's properties. It provides a convenient way to
iterate over data and dynamically generate content in your Graphane templates.

This directive is applied on a `<defs></defs>` element because objects created inside an element are
not rendered directly. The `g-for` directive creates each element by cloning the content of this
element.

The basic syntax for `g-for` is as follows:

```html
<defs g-for="item of items">
  <circle :cx="item.x" :cy="item.y" :r="item.r"/>
</defs>
```

Here's a breakdown of the different parts of the `g-for` directive:

`g-for="item of items"`: This is the main part of the directive. It specifies the iteration and
defines a variable (`item` in this case) to represent each item in the array or object being
iterated over (`items` in this case).

You can also access the index of the current iteration by using an optional second parameter in the
`g-for` syntax:

```html
<defs g-for="(item, index) of items">
  <circle :id="'circle' + index" :cx="item.x" :cy="item.y"/>
</defs>
```

Additionally, `g-for` supports a few extra features such as iteration over a range of numbers and
using an alias for the index:

```html
<defs g-for="n of 10">
  <circle :id="'circle' + n" :cx="n * 10" :cy="n * 10" r="5"></circle>
</defs>
```

## Example

This example will render 10 circle elements:

```html
<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="n of 10">
      <circle :id="'circle' + n" :cx="(n + 1) * 9" :cy="(n + 1) * 9" r="5"/>
    </defs>
  </svg>
</g-svg>
```

<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="n of 10">
      <circle g-bind:id="'circle' + n" g-bind:cx="(n + 1) * 9" g-bind:cy="(n + 1) * 9" r="5"/>
    </defs>
  </svg>
</g-svg>

