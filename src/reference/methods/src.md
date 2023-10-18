---
outline: deep
---

# `script type="methods" src="file"` or<br/> `methods-src="file"`

- **Attribute**:
  - `src` in `script type="methods"`
  - `methods-src` in `g-template`.

- **Description**: the path to an external resource with javascript functions.

## Example

```html
<g-template data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <script type="methods" src="/methods/message.js"></script>
</g-template>
```

<g-template data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-script type="methods" src="/methods/message.js"></g-script>
</g-template>
