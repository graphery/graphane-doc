---
outline: deep
---

# `<g-data type="type"></g-data>`

`g-data` web component is specifically designed to insert data into the `g-template` component. The data
may be embedded within the content of the component or linked as an external resource.

```html
<g-template>
  <g-data type="csv">
    "continent";"population";
    "Asia";4694576167;
    "Africa";1393676444;
    "Europe";745173774;
    "North America";595783465;
    "South America";434254119;
    "Oceania";44491724;
    "Antarctica";3000;
  </g-data>
</g-template>
```

```html
<g-template>
  <g-data type="csv" src="/data.csv"></g-data>
</g-template>
```


### Attributes

Component attributes.

- [type](g-data.type.md) - mandatory attribute with the content type (CSV, JSON or JS).
- [src](g-data.src.md) - path to external data resource.

### Content

Component content:

- [content](g-data.content.md) - can include CSV, JSON or JS.