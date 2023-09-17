---
outline: deep
---

# `<g-methods src="resource"></g-methods>` 

- **Attribute**: `src`

- **Description**: the path to an external resource with the Javascript objet with the methods.

## Example


::: code-group

```html
<g-svg data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-methods src="/methods.js"></g-methods>
</g-svg>
```

```js
{
  showMessage () {
    alert(this.data.message);
  }
}
```

:::

<g-svg data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-methods src="/methods.js"></g-methods>
</g-svg>