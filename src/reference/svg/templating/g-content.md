---
outline: deep
---

# `g-content="expression"`

- **Name**:  `g-content`

- **Description**: add content from data expression into elements such as text, tspan, and others.

## Example

```html
<g-composer data="value: 'hello world'">
  <svg viewBox="0 0 100 100">
    <text x="0" y="50" g-content="value"></text>
  </svg>
</g-composer>
```

<g-composer data="value: 'hello world'">
  <svg viewBox="0 0 100 100">
    <text x="0" y="50" g-content="value"></text>
  </svg>
</g-composer>
