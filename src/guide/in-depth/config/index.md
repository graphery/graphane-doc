---
outline: deep
---

# Configuration

Data and configuration for build a visualization are different concerns. In servals cases, we define
together data and colors, size, and other configuration properties. It is a good practice to
separate data and configuration in data visualization systems.

- **Reusability**: By separating data from configuration, you can reuse the same visualization with
  different datasets. This is particularly useful when you create a set of standard visualizations
  for your application which needs to be populated with different data.

- **Data Integrity**: Separating data and configuration ensures that you are not modifying original
  data when changing visual aspects like colors or size. This is crucial for maintaining data
  integrity.

In this section, you can learn how to use `script type="config"` to separate data and chart
configuration, without mixing concerns.

*pending...*