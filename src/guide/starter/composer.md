---
outline: deep
---

# Composer

Graphane is based on the custom tag `<g-composer></g-composer>`. 
This web component is the main element of Graphane and everything happens inside it. 
We will include the other elements in a nested way.

<g-editor href="#scafolding" mode="readonly"></g-editor>

<div style="display: none">
  <g-composer id="scafolding">
    <template></template>
    <g-script type="data"></g-script>
    <g-script type="methods"></g-script>
  </g-composer>
</div>

The component `g-composer` can include:

| name                        | description                                                                           | tag                     |
|-----------------------------|---------------------------------------------------------------------------------------|-------------------------|
| [template](template.md) | defines the SVG powered by directives                                                 | `<template></template>` |
| [data](data.md) | data in format CSV, JSON or JSON5                                                     | `<script type="data"></script>` |
| [methods](methods.md) | Optionally, can include Javascript functions to manage events and data transformation | `<script type="methods"></script>` |

::: details Using external resources instead including the code in the component

In all our examples we will include the code directly inside `g-composer`. 
In practice, we can create separate files for each of the elements and link them by the attributes:

- The `svg-src` attribute specifies the path to the SVG template.
- The `data-src` attribute indicates the location of the data source.
- The `methods-src` attribute indicates the location of methods.

<g-editor href="#external-resources" mode="readonly"></g-editor>

<g-composer style="width: 100px" id="external-resources"
  svg-src="../../svg/circles.svg"
  data-src="../../data/circles.json"
  methods-src="../../methods/circles.js"></g-composer>
<p style="font-size: small">click add circles, ctrl+click reduces circles</p>
