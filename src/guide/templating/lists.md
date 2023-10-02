---
outline: deep
---

# Lists Rendering

The `g-for` directive is a powerful feature in Graphane that allows you to render a 
`<defs></defs>` block of SVG elements multiple times based on an array or an object's properties. It
provides a convenient way to iterate over data and dynamically generate content in your templates.

This directive is applied on a `<defs></defs>` element because objects created inside an element are
not rendered directly. The `g-for` directive creates each element by cloning the content of this
element.

The basic syntax for `g-for` is as follows:

```html
<defs g-for="item of items">
  <circle :cx="item.x" 
          :cy="item.y" 
          :r="item.r"/>
</defs>
```

`"item of items"` is the directive expression. It specifies the iteration and defines a
variable (`item` in this example) to represent each element in an array or object being iterated
over (`items` in this example).

You can also access the index of the current iteration by using an optional second parameter in the
`g-for` syntax:

```html
<defs g-for="(item, index) of items">
  <circle :cx="item.x" 
          :cy="item.y"
          :r="index * 5"/>
</defs>
```

Additionally, `g-for` supports the iteration over a range of numbers:

```html
<defs g-for="n of 10">
  <circle cx="10" cy="10" r="5"/>
</defs>
```

This example will render 10 circle elements:

```html
<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="n of 10">
      <circle :cx="(n + 1) * 9" 
              :cy="(n + 1) * 9" 
              r="5"/>
    </defs>
  </svg>
</g-template>
```

<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="n of 10">
      <circle g-bind:cx="(n + 1) * 9" g-bind:cy="(n + 1) * 9" r="5"/>
    </defs>
  </svg>
</g-template>

