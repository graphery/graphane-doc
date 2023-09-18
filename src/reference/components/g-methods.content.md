---
outline: deep
---

# `<g-methods>content</g-methods>`

- **Content**: a Javascript objet with the methods.

## Example

```html
<g-svg data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-methods>
  function showMessage () {
    alert(this.data.message);
  }
  </g-methods>
</g-svg>
```

<g-svg data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-methods>
  function showMessage () {
    alert(this.data.message);
  }
  </g-methods>
</g-svg>