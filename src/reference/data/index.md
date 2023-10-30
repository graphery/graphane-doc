---
outline: deep
---

# Data

`<script type="data"></script>` and `data-src` attribute are designed to load values into the 
`.data` property of `g-composer` component.

```html
<g-composer>
  <script type="data">
    "continent";"population";
    "Asia";4694576167;
    "Africa";1393676444;
    "Europe";745173774;
    "North America";595783465;
    "South America";434254119;
    "Oceania";44491724;
    "Antarctica";3000;
  </script>
</g-composer>
```

```html
<g-composer>
  <script type="data" src="/data.csv"></script>
</g-composer>
```

```html
<g-composer data-src="/data.csv">
</g-composer>
```

## Content

Component content:

- [content](content.md) - can include CSV, JSON or JS.

## `script type="data"`

Component attributes:

- `type` - mandatory attribute with value `"data"`.
- [`src`](src.md) - path to external data resource.


## `g-composer data-src="file"`

Component attribute:

- [`data-src`](src.md) - path to external data resource.

## `g-composer data="key: value"`

Component attribute:

- [`data`](attribute.md) - simple key-value data.


## `g-composer .data`

Component property:

- [`.data`](property.md) - reactive data object.

