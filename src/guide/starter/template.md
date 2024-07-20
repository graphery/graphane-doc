---
outline: deep
---

# Template

The template combines the power of Scalable Vector Graphic (SVG) declarative language with
directives to define how the graphic is built from the data.

The standard SVG format is enhanced with attribute-based **directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development.

- [`g-bind`](#g-bind) (or the shorthand `:`): dynamically bind values to attributes.
- [`g-for`](#g-for): render the element block multiple times based on the data.
- [`g-if`](#g-if): show an element conditionally.
- [`g-content`](#g-content): update the element content.


This example creates three circles dynamically, that is, instead of creating three `circle` tags, 
it uses the `g-for` directive on a `defs` element to generate the three circles. 
It is a basic example, 
but it shows the basic operation of SVG template model and directives.

<g-composer id="example1">
  <svg viewBox="0 0 100 100" width="100"  height="100">
    <defs g-for="x of data.circles">
      <circle 
        cx="50" 
        cy="50" 
        g-bind:r="(x + 1) * (48 / circles)"
        fill="none" 
        stroke="black" 
        stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data">
    {circles: 3}
  </g-script>
</g-composer>
<g-editor href="#example1"></g-editor>

In the following, we will describe how it works each directive:

## `g-bind`

The `g-bind:` directive, or the abbreviation `:`, followed by an attribute name, dynamically binds 
data values to attributes. 
That is, it assigns a value to an attribute dynamically.

In this example, the circle radius (`r` attribute) is defined with `size` data value with 
`g-bind:r="size"`.
When we change the value of the slider, the `data.size` value of the component is updated and the 
change is reflected in the chart.

<div id="circle-example">
<g-composer id="circle">
  <svg viewBox="0 0 100 100" width="100">
    <circle
      g-bind:r="size"
      cx="50" 
      cy="50" 
      fill="red"/>
  </svg>
  <g-script type="data">
    {size: 25}
  </g-script>
</g-composer>

<p>
<label>Change the size:
  <input type="range" max="50" value="25"
         oninput="document.querySelector('#circle').data.size = this.value">
  </label>
</p>
</div>

<g-editor href="#circle-example"></g-editor>

> See more about [`g-bind`](../in-depth/templating/binding.md)

## `g-for`

Renders a block defined with the `defs` tag multiple times depending on the data. The directive
dynamically evaluates a `case of value` or `(case, index) of value` expression. Value can be a 
number or an array.

In this example, a number of `circles` is displayed.

In this example, a set of circles are displayed. 
As many circles will be shown as the `circles` value has.  

<div id="circles-example-2">
<g-composer id="circles">
  <svg viewBox="0 0 100 100" width="100">
    <defs g-for="n of circles">
      <circle
        r="4"
        g-bind:cx="((n % 10) * 10) + 5" 
        g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
        fill="red"/>
    </defs>
  </svg>
  <g-script type="data">
    {circles: 40}
  </g-script>
</g-composer>

<p>
<label>Change the number of circles:
  <input type="range" max="100" value="40"
  oninput="document.querySelector('#circles').data.circles = Number(this.value)">
  </label>
</p>
</div>

<g-editor href="#circles-example-2"></g-editor>

> See more about [`g-for`](../in-depth/templating/lists.md)

## `g-if`

Show or hide an element conditionally by an expression based on the data.

In this example, the odd and even circles are displayed if the values `odd` and `event` are true or
false.
The values are modified by two checkboxes that update the `data` property of `g-composer`.

<div id="odd-even-example">
  <g-composer id="odd-even">
    <svg viewBox="0 0 100 100" width="100">
      <defs g-for="n of 100">
        <circle
          g-if="((n + 1) % 2 === 0 && even) || ((n + 1) % 2 !== 0 && odd)"
          r="4"
          g-bind:cx="((n % 10) * 10) + 5" 
          g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
          fill="red"/>
      </defs>
    </svg>
    <g-script type="data">
      {
        odd: true,
        even: true
      }
    </g-script>
  </g-composer>
  
  <p>
    <label>
      <input type="checkbox" checked
             oninput="document.querySelector('#odd-even').data.odd = this.checked">
      show odd
    </label>
    <label>
      <input type="checkbox" checked
             oninput="document.querySelector('#odd-even').data.even = this.checked">
      show even
    </label>
  </p>
</div>

<g-editor href="#odd-even-example"></g-editor>

> See more about [`g-if`](../in-depth/templating/conditional.md).

## `g-content`

Include data values as the element content.
This attribute allows you to dynamically include text or code snippets very easily.

In this example, the text content is defined with `title` and `subtitle` data values. 
They are dynamically updated by two inputs.

<div id="content-example">
  <g-composer id="content">
    <svg viewBox="0 0 100 100" width="100">
      <rect x="0" y="0" width="100" height="100" fill="green"/>
      <text style="font-size:20px; fill:white"
            g-content="title"
            x="5" 
            y="40"></text>
      <text style="font-size:12px; fill:white"
            g-content="subtitle"
            x="5" 
            y="65"></text>
    </svg>
    <g-script type="data">
      {
        title: 'hello',
        subtitle: 'world'
      }
    </g-script>
  </g-composer>
  
  <p>
    <label>title: 
      <input type="text" value="hello"
             oninput="document.querySelector('#content').data.title = this.value">
    </label>
  </p>
  <p>
    <label>subtitle: 
      <input type="text" value="world"
             oninput="document.querySelector('#content').data.subtitle = this.value">
    </label>
  </p>
</div>

<g-editor href="#content-example"></g-editor>

> See more about [`g-content`](../in-depth/templating/content). 
