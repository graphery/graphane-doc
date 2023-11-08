---
outline: deep
---

# Data helpers

When the data is an array, we may need helper functions to get the maximum, minimum, average, unique
values, etc. We can use Javascript functions to perform these operations, but Graphane offers a
series of helpers that allow us to obtain this information in a very efficient way.

To access these helper functions we will use `$` inside the template. This special reference allows
access to template functionalities such as helper functions for data handling.

## `$.min([key])`

Retrieve the minimum value of the array. If no parameter is provided, it defaults to treating the
array data as numeric. When a key is passed as a parameter, it evaluates the objects within the
array using the specified key.

```svg
<tspan g-content="$.min()"></tspan>
```

```svg
<tspan g-content="$.min('val')"></tspan>
```

## `$.max([key])`

Obtain the maximum value of the array. If no parameter is given, it treats the array data as a
numeric value. When a key is provided, it evaluates the objects within the array using the specified
key.

```svg
<tspan g-content="$.max()"></tspan>
```

```svg
<tspan g-content="$.max('val')"></tspan>
```

## `$.count([key])`

Get the count of values in the array. If no parameter is specified, it treats the array data as a
numeric value. When a key is passed, it evaluates the objects within the array using the specified
key.

```svg
<tspan g-content="$.count()"></tspan>
```

```svg
<tspan g-content="$.count('val')"></tspan>
```

## `$.sum([key])`

Calculate the sum value of the array. If no parameter is given, it treats the array data as a
numeric value. When a key is provided, it evaluates the objects within the array using the specified
key.

```svg
<tspan g-content="$.sum()"></tspan>
```

```svg
<tspan g-content="$.sum('val')"></tspan>
```

## `$.avg([key])`

Compute the average value of the array. If no parameter is supplied, it treats the array data as a
numeric value. When a key is passed, it evaluates the objects within the array using the specified
key.

```svg
<tspan g-content="$.avg()"></tspan>
```

```svg
<tspan g-content="$.avg('val')"></tspan>
```

## `$.distinct([key])`

Retrieve the unique values of the array. If no parameter is provided, it treats the array data as a
numeric value. When a key is passed, it evaluates the objects within the array using the specified
key. In this case, the result is an array of values, not objects.

```svg
<tspan g-content="$.distinct()"></tspan>
```

```svg
<tspan g-content="$.distinct('val')"></tspan>
```

## Deep objects

In all cases, the key can include dots for get values in deep objects, e.g., `key.subkey.otherkey`.

## Use Javascript function for data manipulation

Of course, you can still make use of the functions offered by Javascript for handling and analyzing
arrays.

```svg
<tspan g-content="data.filter(x => x < 4).map(x => x * 2)"></tspan>
```

::: warning If you need to do a transformation, filter or other complex adaptation on the data
before template evaluation, we recommend that you see the `function data()` in the `methods`
section.
:::