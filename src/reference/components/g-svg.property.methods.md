---
outline: deep
---

# `g-template.methods`


- **Property**: `.methods`

- **Description**: for add methods to the template you can use the `.methods` property and
the `<g-methods></g-methods>` component.

---

**Example**:

```html
<g-template data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-methods>{
    showMessage() {
      this.methods.show();
    },
    show() {
      alert(this.data.message);
    }
  }</g-methods>
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
  <g-methods>{
    showMessage() {
      this.methods.show();
    },
    show() {
      alert(this.data.message);
    }
  }</g-methods>
</g-template>