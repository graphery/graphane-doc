---
outline: deep
---

# How to create a plugin

## Directives

```js
setup.extendTemplate.defineDirective({
  name, 
  alias, 
  argument, 
  template, 
  execute
});
```

## `$.svg` methods

```js
setup.extendInstance()
```

## `$$.d` pseudo functions

```js
setup.extendPath()
```