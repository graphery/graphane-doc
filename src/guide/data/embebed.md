---
outline: deep
---

# Embebed data

The `g-data` component supports three types of data that can be included directly within its HTML
tag: CSV, JSON, and JS. The type of data should be described in the `type` attribute.

- Example using CSV:

    ```html
    <g-data type="csv">
      "x";"y";"radix";"color"
      20;20;20;"red"
      45;45;30;"blue"
      80;80;10;"green"
    </g-data>
    ```

- Example using JSON:

    ```html
    <g-data type="json">
    [
      {"x": 20, "y": 20, "radix": 20, "color": "red"},
      {"x": 45, "y": 45, "radix": 30, "color": "blue"},
      {"x": 80, "y": 80, "radix": 10, "color": "green"}
    ]
    </g-data>
    ```

- Example using JS (JavaScript object):

    ```html
    
    <g-data type="js">
    [
      {x: 20, y: 20, radix: 20, color: "red"},
      {x: 45, y: 45, radix: 30, color: "blue"},
      {x: 80, y: 80, radix: 10, color: "green"},
    ]
    </g-data>
    ```

To avoid the FOUC effect (Flash of Unstyled Content), which briefly displays the embedded data, you
can enclose the content within a <!-- --> comment tag to prevent it from being displayed
momentarily.

```html
<g-data type="csv">
  "x";"y";"radix";"color"
  20;20;20;"red"
  45;45;30;"blue"
  80;80;10;"green"
</g-data>
```
