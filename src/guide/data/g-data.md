---
outline: deep
---

# `g-data` component

To handle complex data in a declarative manner, the `g-data` component comes into play. It
seamlessly integrates with `g-svg` and facilitates the insertion or retrieval of information through
the `.data` property.

This component operates in two distinct modes:

- [Embedded Data Mode](12.embebed.md):

    This mode proves invaluable during visualization construction. Here's an example of embedding data
    directly within the component:
    
    ```html
    <g-data type="csv">
      "x";"y";"radix";"color"
      20;20;20;"red"
      45;45;30;"blue"
      80;80;10;"green"
    </g-data>
    ```

- [External Data Mode](13.external.md):
    
    This mode proves highly useful when data needs to be linked from an external source like a CSV or
    JSON file. It is convenient for publishing content or accessing data from external sources. Here's
    an example of linking data from an external source using HTML:
    
    ```html
    <g-data src="/data.csv" type="csv"></g-data>
    ```

By employing the `g-data` component, handling complex data becomes more efficient and manageable,
empowering you to create compelling visualizations without worrying too much about data.