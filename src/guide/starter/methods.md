---
outline: deep
---

# Methods

You can add methods for event handling with a simple `<script type="methods"></script>`. It is
possible to include the code directly in the tag or linked with the scr attribute. All functions
defined into this tag are available from the template.

```html {25-34}
<g-composer id="reactive">
  <template>
    <svg 
      viewBox="0 0 100 100" 
      g-on:click="update" 
      style="cursor: pointer"
      width="200"
      height="200">
      <defs g-for="x of circles">
        <circle 
          cx="50" 
          cy="50" 
          g-bind:r="(x + 1) * (48 / circles)"
          fill="none" 
          stroke="black" 
          stroke-width="1"/>
      </defs>
    </svg>
  </template>
  <script type="data">
    {
      "circles": 5
    }
  </script>
  <script type="methods">
    function update(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </script>
</g-composer>
```

<g-composer id="reactive">
  <svg 
    viewBox="0 0 100 100" 
    g-on:click="update" 
    style="cursor: pointer"
    width="200"
    height="200">
    <defs g-for="x of circles">
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
    {
      "circles": 5
    }
  </g-script>
  <g-script type="methods">
    function update(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </g-script>
</g-composer>

<p style="font-size: small">click add circles, ctrl+click reduces circles</p>


In some cases, it a good practice include the javascript from an external resource with the attribute
`src` to JS file:

```html {19}
<g-composer id="reactive">
  <svg
    viewBox="0 0 100 100"
    g-on:click="update"
    style="cursor: pointer"
    width="200"
    height="200">
    <defs g-for="x of circles">
      <circle
        cx="50"
        cy="50"
        g-bind:r="(x + 1) * (48 / circles)"
        fill="none"
        stroke="black"
        stroke-width="1"/>
    </defs>
  </svg>
  <script type="data"    src="/data/circles.json"></script>
  <script type="methods" src="/js/methods.js"></script>
</g-composer>

```
