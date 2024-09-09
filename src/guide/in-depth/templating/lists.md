---
outline: deep
---

# Lists Rendering

The `g-for` directive is a powerful feature in Graphane that allows you to render a block of SVG
elements multiple times based on an array or an object's properties. It provides a convenient way to
iterate over data and dynamically generate content in your templates.

## `g-for` in `defs` elements

This directive is applied on a `<defs></defs>` element because objects created inside an element are
not rendered directly. The `g-for` directive creates each element by cloning the content.

<ClientOnly>
<g-composer id="list-1" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
    </defs>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</g-composer>
<g-editor href="#list-1" lines-highlight="4"></g-editor>
</ClientOnly>

## Each data 

`"item of data"` is the directive expression. It specifies the iteration and defines a
variable (`item` in this example) to represent each element iterated over the data.

You can also access the index of the current iteration by using an optional second parameter in the
`g-for` syntax:

<ClientOnly>
<g-composer id="list-2" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <defs g-for="(value, idx) of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
      <text dominant-baseline="middle"
            text-anchor="middle"
            font-size="10"
            fill="white"
            g-bind:x="value.x"
            g-bind:y="value.y"
            g-content="idx"></text>
    </defs>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</g-composer>
<g-editor href="#list-2" lines-highlight="4;18"></g-editor>
</ClientOnly>

## Destructuring

You can use the JavaScript destructuring assignment syntax for unpack properties from objects into 
distinct variables. 

<ClientOnly>
<g-composer id="list-3" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <defs g-for="({x, y, radix, color}, idx) of data">
      <circle g-bind:cx="x"
              g-bind:cy="y"
              g-bind:r="radix"
              g-bind:style="{fill: color}"/>
      <text dominant-baseline="middle"
            text-anchor="middle"
            font-size="10"
            fill="white"
            g-bind:x="x"
            g-bind:y="y"
            g-content="idx"></text>
    </defs>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</g-composer>
<g-editor href="#list-3" lines-highlight="4;6-9;16-17"></g-editor>
</ClientOnly>

## Range number

Additionally, `g-for` supports the iteration over a range of numbers with `n of number`.
This example will render 10 circle elements:

<ClientOnly>
<g-composer id="list-4" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of 10">
      <circle g-bind:cx="(n + 1) * 9" g-bind:cy="(n + 1) * 9" r="5"/>
    </defs>
  </svg>
</g-composer>
<g-editor href="#list-4" lines-highlight="4"></g-editor>
</ClientOnly>