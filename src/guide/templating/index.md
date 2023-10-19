---
outline: deep
---

# Templating

Graphane templating system is designed to facilitate the creation of dynamic and interactive
visualization by **combining the power of SVG markup with powerful directives from a templating
system**, similar to Angular or Vue. The rendering is performed efficiently at runtime and does not
require a compiler or transpiler.

The goal is to enable designers and developers **to build complex graphics efficiently**, while
benefiting from data binding and interactivity. To ensure smooth rendering and optimal performance,
the system includes mechanisms specifically designed to efficiently update the visualization when
the underlying data changes.

## SVG template

You must include the SVG template inside the `<g-template></g-template>`. This is an extension of
SVG standard format with new directives. Data binding makes SVG graphics dynamically. You would be
able to bind data from the data sources to the SVG. When the data changes, the SVG is automatically
updated to reflect the changes in the rendered SVG.

```html {2-4}
<g-template>
  <svg>
    <!-- TEMPLATE -->
  </svg>
</g-template>
```

You can use directives to attributes, animations, transitions, event handling, and other
interactions within the SVG components.

- [`g-bind`](./binding) (or the shorthand `:`): dynamically bind values to attributes and styles.
- [`g-for`](./lists): render the element block multiple times based on the data.
- [`g-if`](./conditional): show an element conditionally.
- [`g-content`](./content): update the element content.

Graphane Templating would enable the creation of interactive SVG graphics by supporting event
handling. Developers could attach event listeners to SVG elements and respond to user interactions,
such as clicks, hovers, or touches.

- [`g-on`](./events) (or the shorthand `@`): attach an event listener to the element.

## Example

In this example, a figure is shown many times based on the value. If the value is changed, the
display changes automatically.

```html {3-11}
<g-template data="value: 50">        <!-- the g-template component -->
  <svg viewBox="0 0 400 270">        <!-- the SVG Template -->
    <defs g-for="y of 5">            <!-- g-for -->
      <defs g-for="x of 20">         <!-- g-for -->
        <path g-if="((y * 20) + x < value)"
              g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"
        />                           <!-- g-if & g-bind -->
      </defs>
    </defs>
  </svg>
</g-template>
```
```html
<p>
  <label>Change the value:
    <input type="range" id="value" value="50"
           oninput="document.querySelector('g-template').data.value = this.value">
  </label>
</p>
```

<g-template data="value: 50">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
        <path g-if="((y * 20) + x < value)"
              g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-template>

<p>
<label>Change the value: 
  <input type="range" id="value" value="50" 
         oninput="document.querySelector('g-template').data.value = this.value">
</label>
</p>
