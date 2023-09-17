---
outline: deep
---

# Binding

## Attributes

The `g-bind` directive, also known as the shorthand `:` syntax, is a fundamental directive in
Graphane that enables you to bind values or expressions to SVG attributes in your templates.

The `g-bind` directive allows you to dynamically associate data to the SVG attributes. This enables
you to update the values and update the attributes automatically.

Here is an example of using the `g-bind` directive to bind the `r` attribute of a circle element to
a dynamic value:

```html
<circle g-bind:r="size"/>
```

In this case, `size` refers to a data property that holds the radius value. The `g-bind` directive
binds the `r` attribute of the circle element to that value. When `size` changes in the Graphane
component, the `r` attribute will be automatically updated.

### Example

<g-svg data="size: 25;" id="circle">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="size" cx="50" cy="50" fill="red"></circle>
  </svg>
</g-svg>
<p>

<label>Change the size: 
<input type="range" max="50" value="25" 
       oninput="document.querySelector('#circle').data.size = this.value">
</label>
</p>


```html
<g-svg data="size: 25;" id="circle">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="size" cx="50" cy="50" fill="red"/>
  </svg>
</g-svg>

<p>
  <label>Change the size:
    <input type="range" max="50" value="25"
           oninput="document.querySelector('#circle').data.size = this.value">
  </label>
</p>
```


## Style

When using `g-bind` with the `style` attribute, you can dynamically bind an object containing CSS
styles to an element. This object can be defined in the `g-svg` component data. The keys of the
object represent the CSS properties, and the values represent the corresponding values for those
properties.

### Example

```html
<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle :cx="value.x"
              :cy="value.y"
              :r="value.radix"
              :style="{fill: value.color}"/>
    </defs>
  </svg>
  <g-data type="csv">
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  </g-data>
</g-svg>
```

<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
    </defs>
  </svg>
  <g-data type="csv"><!--
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  --></g-data>
</g-svg>


## Class

Similarly, `g-bind`, or the shorthand `:`, can be used with the class attribute to dynamically bind
CSS classes to an element based on the values in the `<g-svg>` component data. You can bind a single
class or an array of classes.

### Example

```html
<g-svg src="circles.class.svg" data-src="data.class.csv" data-type="csv">
  <svg viewBox="0 0 100 100">
    <style>
      .regular {
        fill : green;
      }
      .warning {
        fill : blue;
      }
      .error {
        fill : red;
      }
    </style>
    <defs g-for="value of data">
      <circle :cx="value.x"
              :cy="value.y"
              :r="value.radix"
              :class="value.class"/>
    </defs>
  </svg>
  <g-data type="csv">
    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  </g-data>
</g-svg>
```

<g-svg src="/circles.class.svg" data-src="/data.class.csv" data-type="csv"></g-svg>
