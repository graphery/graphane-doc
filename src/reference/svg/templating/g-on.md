---
outline: deep
---

# `g-on:event="method"`

- **Name**:  `g-on:`

- **Shorthand**:  `@`

- **Parameter**: the event name.

- **Description**: add a handler for a specific event.

- **Note**: commonly use with `g-methods` component.

## Example

```html
<g-composer>
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" 
          stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" 
          style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <script type="methods">
    function showMessage() {
      alert('hello world');
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
           g-on:click="showMessage">click me</text>
  </svg>
  <g-script type="methods">
    function showMessage() {
      alert('hello world');
    }
  </g-script>
</g-composer>
