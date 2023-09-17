---
outline: deep
---

# Load

## From CDN

### Import module

The easiest way to use the Graphane library is to import it as an ES module from our CDN service:

```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
```

### script source

Another way, straightforward too, is to load the script version from our CDN with a tag `<script>`:

```html
<script src="https://cdn.Graphane.online/svg/1.0.0/script/index.js"></script>;
```

### Understanding the URL from CDN

This is the detailed description of CDN URL:

```
 https://cdn.Graphane.online/svg/1.0.0/module/index.js
|------|--------------------|---|-----|------|--------|
    |            |            |    |      |       |------> file name
    |            |            |    |      |--------------> 'module' or 'script' mode
    |            |            |    |---------------------> version
    |            |            |--------------------------> library name
    |            |---------------------------------------> CDN domain
    |----------------------------------------------------> protocol (please, use 'https')
```

## Install locally with NPM

See <https://www.npmjs.com/package/@Graphane/svg>.

You can install the Graphane library locally by NPM:

```bash
npm install @Graphane/svg
```

If you have installed it locally, you need to reference `node_modules/@Graphane/svg` and use this
code for import. 

```js
import SVG from './node_modules/@Graphane/svg/index.js';
```

or as a script with

```html
<script src="./node_modules/@Graphane/svg/script/index.js"></script>
```

If you use Webpack or other loaders, you may be able to omit the `node_modules` folder in these 
calls.