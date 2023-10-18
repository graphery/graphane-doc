---
outline: deep
---

# External resource

In production environments or when you want to hide the code, the `<script type="methods">`
with the `src` attribute makes it very easy to indicate the source of the functions.

```html {8}
<g-template>
  <svg viewBox="0 0 100 100" id="svg">
    <circle id="run" cx="50" cy="50" r="50" fill="red" style="cursor: pointer;"
            g-on:click="change()"/>
    <text x="36" y="53" style="cursor: pointer;"
          g-on:click="change()">click</text>
  </svg>
  <script type="methods" src="/methods/circle.js"></script>
</g-template>
```

<g-template>
  <svg viewBox="0 0 100 100" id="svg">
    <circle id="run" cx="50" cy="50" r="50" fill="red" style="cursor: pointer;"
            g-on:click="change()"/>
    <text x="36" y="53" style="cursor: pointer;"
          g-on:click="change()">click</text>
  </svg>
  <g-script type="methods" src="../../methods/circle.js"></g-script>
</g-template>

It is possible to directly include the `methods-src` properties within the `g-template` component
itself, simplifying the overall code structure by eliminating the `script` tag.

```html {3}
<g-template 
  svg-src="/svg/circle.svg" 
  methods-src="/methods/circle.js">
</g-template>
```


