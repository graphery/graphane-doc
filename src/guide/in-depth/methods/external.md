---
outline: deep
---

# Load Methods

In production environments or when you want to hide the code, the `<script type="methods">`
with the `src` attribute makes it straightforward to indicate the source of the functions.

```html {10}
<g-composer>
  <template>
    <svg viewBox="0 0 100 100" id="svg">
      <circle id="run" cx="50" cy="50" r="50" fill="red" style="cursor: pointer;"
              g-on:click="change()"/>
      <text x="36" y="53" style="cursor: pointer;"
            g-on:click="change()">click</text>
    </svg>
  </template>
  <script type="methods" src="/methods/circle.js"></script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" id="svg">
    <circle id="run" cx="50" cy="50" r="50" fill="red" style="cursor: pointer;"
            g-on:click="change()"/>
    <text x="36" y="53" style="cursor: pointer;"
          g-on:click="change()">click</text>
  </svg>
  <g-script type="methods" src="../../../methods/circle.js"></g-script>
</g-composer>

It is possible to directly include the `methods-src` properties within the `g-composer` component
itself, simplifying the overall code structure by eliminating the `script` tag.

```html {3}
<g-composer 
  svg-src="/svg/circle.svg" 
  methods-src="/methods/circle.js">
</g-composer>
```


