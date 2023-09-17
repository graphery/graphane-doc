---
outline: deep
---

# Reactivity: data update

The reactivity is a key feature of the Graphane framework that enables automatic and efficient
data binding between the application's data and the visualization. It ensures that when the data
changes, the corresponding parts of the UI are automatically updated to reflect those changes.

The core concept behind Graphane reactivity is the dependency tracking system. When a `g-svg`
component is created, Graphane automatically analyzes its render function (or template) and
identifies all the data properties accessed during the rendering process. It then establishes a
dependency relationship between the component and those data properties.

Graphane achieves this by leveraging JavaScript's object property by Proxies. When a data property
changes, Graphane's reactive system is notified. It then triggers a process called "update"
where it re-evaluates the components that depend on the changed data property. It compares the new
and old values and updates the affected visualization accordingly.

<iframe src="/reactivity.html" style="border: 0; width: 100%; height: 1200px"/>