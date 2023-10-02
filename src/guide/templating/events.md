---
outline: deep
---

# Events

Graphane Templating would enable the creation of interactive SVG graphics by supporting event
handling. Developers could attach event listeners to SVG elements and respond to user interactions,
such as clicks, hovers, or touches.

`g-on` (or the shorthand `@`): attach an event listener to the element.

For associated methods and events, commonly we need to use `<script type="method"></script>` and
includes inside the function used as expressions in `g-on` directive. Please see the [methods](.
./methods) section for more information.

<g-template>
  <svg viewBox="0 0 100 100" style="cursor: pointer">
    <rect x="10" y="10" width="80" height="80" fill="blue"
          g-on:click="showAlert"/>
    <text x="18" y="52" fill="white"
          g-on:click="showAlert">click here</text>
  </svg>
  <g-script type="methods">
    function showAlert() {
      alert(`hello`);
    }
  </g-script>
</g-template>

```html
<g-template>
  <svg viewBox="0 0 100 100" style="cursor: pointer">
    <rect x="10" y="10" width="80" height="80" fill="blue"
          g-on:click="showAlert"/>
    <text x="18" y="52" fill="white"
          g-on:click="showAlert">click here</text>
  </svg>
  <g-script type="methods">
    function showAlert() {
      alert(`hello`);
    }
  </g-script>
</g-template>
```

The `g-on` expression must be a function reference. In this example is `showAlert`. If whe includes
`showAlert()` the function is called when the template is processed and the visualization is 
created, not when the event is fired.

In the SVG format, the text is not included inside other elements, is displayed over other 
elements. For this reason, in this example, the event handler is created in the `rect` and `text`
elements.