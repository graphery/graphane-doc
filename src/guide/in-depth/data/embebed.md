---
outline: deep
---

# Embebed data

The `<script type="data">` composer supports three types of data that can be included directly within its HTML
tag: CSV, JSON and JSON5. The type of format is directly deduced from the content.

- Example using CSV:

    ```html {3-6}
    <g-composer>
      <script type="data">
        "x";"y";"radix";"color"
        20;20;20;"red"
        45;45;30;"blue"
        80;80;10;"green"
      </script>
    <g-composer>
    ```

- Example using JSON:

    ```html {3-7}
    <g-composer>
      <script type="data">
      [
        {"x": 20, "y": 20, "radix": 20, "color": "red"},
        {"x": 45, "y": 45, "radix": 30, "color": "blue"},
        {"x": 80, "y": 80, "radix": 10, "color": "green"}
      ]
      </script>
    <g-composer>
    ```

- Example using JSON5 (a JavaScript object):

    ```html {2-6}
    <g-composer>
      <script type="data">
      [
        {x: 20, y: 20, radix: 20, color: "red"},
        {x: 45, y: 45, radix: 30, color: "blue"},
        {x: 80, y: 80, radix: 10, color: "green"},
      ]
      </script>
    <g-composer>
    ```

::: warning
In some environments the `<script type="data"></script>` has conflicts. In these cases, you can 
use alternatively `<g-script type="data"></g-script>`.

```html
<g-composer>
  <g-script type="data">
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  </g-script>
</g-composer>
```
:::

