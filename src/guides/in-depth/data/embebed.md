---
outline: deep
---

# Embebed data

The `script type="data"` component supports three types of data that can be included directly within its HTML
tag: CSV, JSON, and JS. The type of format is directly deduced from the content.

- Example using CSV:

    ```html {2-5}
    <script type="data">
      "x";"y";"radix";"color"
      20;20;20;"red"
      45;45;30;"blue"
      80;80;10;"green"
    </script>
    ```

- Example using JSON:

    ```html {2-6}
    <script type="data">
    [
      {"x": 20, "y": 20, "radix": 20, "color": "red"},
      {"x": 45, "y": 45, "radix": 30, "color": "blue"},
      {"x": 80, "y": 80, "radix": 10, "color": "green"}
    ]
    </script>
    ```

- Example using JavaScript object (it is a simple variation of JSON):

    ```html {2-6}
    <script type="data">
    [
      {x: 20, y: 20, radix: 20, color: "red"},
      {x: 45, y: 45, radix: 30, color: "blue"},
      {x: 80, y: 80, radix: 10, color: "green"},
    ]
    </script>
    ```

::: warning
In some environments the `<script type="data"></script>` has conflicts. In these cases, you can 
use alternatively `<g-script type="data"></g-script>`.

```html
<g-script type="data">
  "x";"y";"radix";"color"
  20;20;20;"red"
  45;45;30;"blue"
  80;80;10;"green"
</g-script>
```
:::

