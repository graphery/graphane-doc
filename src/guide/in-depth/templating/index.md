---
outline: deep
---

# Templating

Graphane templates combine SVG template markup with data by powerful directives, similar to
Angular or Vue. Rendering is done efficiently at runtime and does not require a compiler or
transpiler as other frameworks.

## SVG template

You must include the SVG template inside the `<g-composer></g-composer>`. This is an extension of
SVG standard format with new directives. Data binding makes SVG graphics dynamically. You would be
able to bind data from the data sources to the SVG. When the data changes, the SVG is automatically
updated to reflect the changes in the rendered SVG.

```html {2-5}
<g-composer>
  <template>
    <svg>
    </svg>
  </template>
</g-composer>
```

You can use directives to attributes, animations, transitions, event handling, and other
interactions within the SVG components.

- [`g-bind`](./binding) (or the shorthand `:`): dynamically bind values to attributes and styles.
- [`g-for`](./lists): render the element block multiple times based on the data.
- [`g-if`](./conditional): show an element conditionally.
- [`g-content`](./content): add the element content.
- [`g-on`](./events) (or the shorthand `@`): handle events.

Graphane Templating would enable the creation of interactive SVG graphics by supporting event
handling. Developers could attach event listeners to SVG elements and respond to user interactions,
such as clicks, hovers, or touches.

- [`g-on`](./events) (or the shorthand `@`): attach an event listener to the element.

## Example

In this example, a figure is shown many times based on the value. If the value is changed, the
display changes automatically.

```html {2-14}
<g-composer data="value: 50">          <!-- Graphane component -->
  <template>                           <!-- Template -->
    <svg viewBox="0 0 400 270">        <!-- SVG -->
      <defs g-for="y of 5">            <!-- g-for -->
        <defs g-for="x of 20">         <!-- g-for -->
          <path g-if="((y * 20) + x < value)"
                g-bind:transform="$$.translate(x * 20, y * 55)"
                d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
                 C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"
          />                           <!-- g-if & g-bind -->
        </defs>
      </defs>
    </svg>
  </template>
</g-composer>
```

```html
<p>
  <label>Change the value:
    <input type="range" id="value" value="50"
           oninput="document.querySelector('g-composer').data.value = this.value">
  </label>
</p>
```

<g-composer data="value: 50">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
        <path g-if="((y * 20) + x < value)"
              g-bind:transform="$$.translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>

<p>
<label>Change the value: 
  <input type="range" id="value" value="50" 
         oninput="document.querySelector('g-composer').data.value = this.value">
</label>
</p>
