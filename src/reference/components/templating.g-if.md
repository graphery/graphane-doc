---
outline: deep
---

# `g-if="expression"`

- **Name**:  `g-if`

- **Description**: conditionally show or hide elements based on a boolean value returned for the 
expression.

## Example

```html
<g-template data="one: true, two: false">
  <svg viewBox="0 0 100 100">
    <circle g-if="one" cx="30" cy="50" r="30" fill="green"/>
    <circle g-if="two" cx="70" cy="50" r="30" fill="red"/>
  </svg>
</g-template>
```

<g-template data="one: true, two: false">
  <svg viewBox="0 0 100 100">
    <circle g-if="one" cx="30" cy="50" r="30" fill="green"/>
    <circle g-if="two" cx="70" cy="50" r="30" fill="red"/>
  </svg>
</g-template>