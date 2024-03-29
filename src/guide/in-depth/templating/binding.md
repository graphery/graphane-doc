---
outline: deep
---

# Binding Attribute Values

The `g-bind` directive, also known as the shorthand `:` syntax, is a fundamental directive in
Graphane that enables you to bind values or expressions to SVG attributes, styles and classes in
your templates. This directive must include the name of the attribute to which you want to assign a
value, for example, `g-bind:r="expression"` or simply `:r="expression"`.

## Attributes

The `g-bind` directive allows you to dynamically associate data to the SVG attributes. This enables
you to update the values and update the attributes automatically.

Here is an example of using the `g-bind` directive to bind the `r` attribute of a circle element to
a dynamic value:

```html
<circle g-bind:r="size"/>
```

In this case, `size` refers to a data property that holds the radius value. The `g-bind` directive
binds the `r` attribute of the circle element to that value. When `size` changes in the Graphane
component, the radius attribute will be automatically updated.


```html {7}
<g-composer data="size: 25;" id="circle">
  <template>
    <svg viewBox="0 0 100 100">
      <circle cx="50" 
              cy="50" 
              fill="red"
              g-bind:r="size"/>
    </svg>
  </template>
</g-composer>
```
```html
<p>
  <label>Change the size:
    <input type="range" max="50" value="25"
           oninput="document.querySelector('#circle').data.size = this.value">
  </label>
</p>
```

<g-composer data="size: 25;" id="circle">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="size" cx="50" cy="50" fill="red"></circle>
  </svg>
</g-composer>
<p>

<label>Change the size:
<input type="range" max="50" value="25"
oninput="document.querySelector('#circle').data.size = this.value">
</label>
</p>


## Style

When using `g-bind` with the `style` attribute, you can dynamically bind an object containing CSS
styles to an element. The keys of the object represent the CSS properties, and the values represent
the corresponding values for those properties.

```html {7}
<g-composer>
  <template>
    <svg viewBox="0 0 100 100">
      <defs g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :style="{fill: value.color}"/>
      </defs>
    </svg>
  </template>
  <script type="data">
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
    </defs>
  </svg>
  <g-script type="data" src="../../../data/style.csv"></g-script>
</g-composer>


## Class

Similarly, `g-bind`, or the shorthand `:`, can be used with the class attribute to dynamically bind
CSS classes to an element based on the values in the `<g-composer>` component data. You can bind a single
class or an array of classes.

```html {19}
<g-composer>
  <template>
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
    <script type="data">
      "x";"y";"radix";"class"
      20;20;20;"regular"
      45;45;30;"warning"
      80;80;10;"error"
    </script>
  </template>
</g-composer>
```

<g-composer svg-src="../../../svg/circles.class.svg" data-src="../../../data/class.csv"></g-composer>`
