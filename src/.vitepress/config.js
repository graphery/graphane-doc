import { defineConfig } from 'vitepress';

const URL     = '/0.1.0-alpha/';
const VERSION = '0.1.0-alpha.6';

const MarkdownOptions = {
  languageAlias : {
    'svg'                              : 'html',
    'html:preview'                     : 'html',
    'html:preview:expanded:no-codepen' : 'html',
  }
}

const fullReloadAlways = {
  handleHotUpdate ({server}) {
    server.ws.send({type : "full-reload"});
    return [];
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title       : 'graphane',
  description : `Data Visualization Microframework - version ${ VERSION }`,
  // description : VERSION,
  base     : URL,
  vite     : {
    plugins : [fullReloadAlways],
  },
  vue      : {
    template : {
      compilerOptions : {
        isCustomElement : (tag) => tag.startsWith('g-')
      }
    }
  },
  markdown : MarkdownOptions,
  head     : [
    ['link', {rel : 'icon', href : `/img/logo/g.svg`}],
    ['script', {
      src  : 'http://localhost:63342/graphane/src/component/composer.js',
      type : 'module'
    }],
    ['script', {
      src  : 'http://localhost:63342/graphane/src/component/editor.js',
      type : 'module'
    }],
    // ['script', {
    //   src : `https://cdn.graphery.online/graphane/${ VERSION }/component/composer.js`
    // }],
    // ['script', {
    //   src           : 'https://plausible.io/js/script.js',
    //   defer         : '',
    //   'data-domain' : 'graphane.dev',
    // }]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig : {
    logo        : {
      light : `/img/logo/graphane.svg`,
      dark  : `/img/logo/graphane.light.svg`
    },
    siteTitle   : false,
    footer      : {
      message   : 'Released under the MIT License.',
      copyright : 'Copyright © 2023 <a href="https://www.graphery.com/"> ' +
                  '<img src="img/logo/graphery.svg" alt="graphery" width="120"></a>'
    },
    search      : {
      provider : 'local'
    },
    nav         : [
      {link : '/', text : 'Home'},
      {
        text : 'Guides', items : [
          {link : '/guides/starter/', text : 'Starter Tutorial'},
          {link : '/guides/in-depth/', text : 'In-Depth'},
          {link : '/guides/svg/', text : 'Explore SVG'},
        ]
      },
      {link : '/reference/', text : 'Reference'},
      {link : '/plugins/', text : 'Plugins'},
      {link : '/examples/', text : 'Examples'},
      {link : 'https://github.com/graphery/graphane/blob/main/CHANGELOG.md', text : VERSION},
    ],
    sidebar     : {
      '/guides/starter/' : [{
        text  : 'Starter Tutorial',
        items : [
          {link : '/guides/starter/', text : 'What is Graphane?'},
          {link : '/guides/starter/load', text : '1.- Load'},
          {link : '/guides/starter/composer', text : '2.- Composer'},
          {link : '/guides/starter/template', text : '3.- Template'},
          {link : '/guides/starter/data', text : '4.- Data'},
          {link : '/guides/starter/methods', text : '5.- Methods'},
        ]
      }],
      '/guides/in-depth/' : [{
        text  : 'In-Depth',
        items : [
          {link : '/guides/in-depth/', text : 'Why Graphane?'},
          {link : '/guides/in-depth/composer/', text : 'Composer'},
          {
            text      : 'Templating',
            link      : '/guide/in-depth/templating/',
            collapsed : false,
            items     : [
              {link : '/guides/in-depth/templating/binding', text : 'Binding'},
              {link : '/guides/in-depth/templating/lists', text : 'Lists'},
              {link : '/guides/in-depth/templating/conditional', text : 'Conditional'},
              {link : '/guides/in-depth/templating/content', text : 'Content'},
              {link : '/guides/in-depth/templating/events', text : 'Events'},
              {link : '/guides/in-depth/templating/expressions', text : 'Expressions'},
            ]
          },
          {
            text      : 'Data',
            link      : '/guides/in-depth/data/',
            collapsed : false,
            items     : [
              {link : '/guides/in-depth/data/attribute', text : 'data attribute'},
              {link : '/guides/in-depth/data/property', text : '.data property'},
              {link : '/guides/in-depth/data/embebed', text : 'Embedded data'},
              {link : '/guides/in-depth/data/external', text : 'Load data'},
              {link : '/guides/in-depth/data/helpers', text : 'Data helpers'},
              {link : '/guides/in-depth/data/reactivity', text : 'Reactivity'},
            ]
          },
          {
            text      : 'Methods',
            link      : '/guides/in-depth/methods/',
            collapsed : false,
            items     : [
              {link : '/guides/in-depth/methods/embebed', text : 'Embedded methods'},
              {link : '/guides/in-depth/methods/external', text : 'External resource'},
              {link : '/guides/in-depth/methods/property', text : 'Property'},
              {
                link : '/guides/in-depth/methods/function-data',
                text : '<code>function data()</code>'
              },
              {link : '/guides/in-depth/methods/$data', text : '<code>$.data</code>'},
              // {link : '/guide/methods/svg-access', text : '<code>$.svg</code>'},
              // {link : '/guide/methods/load', text : 'Load event'},
            ]
          },
        ],
      }],
      '/guides/svg/'        : [{
        text  : 'Explore SVG',
        items : [
          {link : '/guides/svg/', text : 'Introduction'},
          {link : '/guides/svg/01-Graphane-SVG.md', text : 'How use the SVG in Graphane'},
          {link : '/guides/svg/02-SVG-structure.md', text : 'SVG structure'},
          {link : '/guides/svg/03-Basic-shapes.md', text : 'Basic Shapes'},
          {link : '/guides/svg/04-Path-element.md', text : 'Path'},
          {link : '/guides/svg/05-Text-element.md', text : 'Text'},
          {link : '/guides/svg/06-Fill-and-stroke.md', text : 'Fill and Stroke'},
          {link : '/guides/svg/07-Reuse-elements.md', text : 'Reuse elements'},
          {link : '/guides/svg/08-Gradients-and-patterns.md', text : 'Gradients and Patters'},
          {link : '/guides/svg/09-Aspect-ratio.md', text : 'Size and Aspect Ratio'},
          {link : '/guides/svg/10-Transform.md', text : 'Transform'},
          {link : '/guides/svg/11-CSS.md', text : 'CSS'},
          {link : '/guides/svg/12-Animation.md', text : 'Animation'},
          {link : '/guides/svg/13-Text-path-and-clip-path.md', text : 'Text Path and Clip Path'},
          {link : '/guides/svg/14-Manage-elements.md', text : 'Manage Elements'},
          {link : '/guides/svg/15-Events.md', text : 'Handle Events'},
        ]
      }],
      '/plugins/'           : [{
        text  : 'Plugins',
        items : [
          {link : '/plugins/', text : 'Graphane Extensibility'},
          {
            text      : 'Catalog',
            collapsed : false,
            items     : [
              {link : '/plugins/catalog/shapes', text : 'Shapes'},
              {link : '/plugins/catalog/observe-resize', text : 'Observe Resize'},
              {link : '/plugins/catalog/keep-aspect', text : 'Keep Aspect'},
            ]
          },
          // {link : '/plugins/create', text : 'Create custom plugin'},
        ]
      }],
      '/reference/'         : [{
        text  : 'API',
        items : [
          {
            text : 'composer',
            link : '/reference/index.md',
          },
          {
            text      : 'svg',
            link      : '/reference/svg/',
            collapsed : false,
            items     : [
              {
                text      : 'directives',
                link      : '/reference/svg/templating/',
                collapsed : false,
                items     : [
                  {link : '/reference/svg/templating/g-bind', text : 'g-bind'},
                  {link : '/reference/svg/templating/g-for', text : 'g-for'},
                  {link : '/reference/svg/templating/g-if', text : 'g-if'},
                  {link : '/reference/svg/templating/g-content', text : 'g-content'},
                  {link : '/reference/svg/templating/g-on', text : 'g-on'},
                ]
              },
              {link : '/reference/svg/src', text : 'src'},
              {link : '/reference/svg/property', text : 'property'},
              {
                link      : '/reference/svg/lib/',
                text      : 'wrapper',
                collapsed : true,
                items     : [
                  {link : "/reference/svg/lib/management", text : "manage elements"},
                  {
                    link : "/reference/svg/lib/attributes-properties-methods",
                    text : "attributes, properties, methods"
                  },
                  {link : "/reference/svg/lib/classList-and-style", text : "classList and style"},
                  {link : "/reference/svg/lib/animateTo", text : "animateTo"},
                  {link : "/reference/svg/lib/a", text : "a"},
                  {link : "/reference/svg/lib/animate", text : "animate"},
                  {link : "/reference/svg/lib/animateMotion", text : "animateMotion"},
                  {link : "/reference/svg/lib/animateTransform", text : "animateTransform"},
                  {link : "/reference/svg/lib/circle", text : "circle"},
                  {link : "/reference/svg/lib/clipPath", text : "clipPath"},
                  {link : "/reference/svg/lib/defs", text : "defs"},
                  {link : "/reference/svg/lib/desc", text : "desc"},
                  {link : "/reference/svg/lib/ellipse", text : "ellipse"},
                  {link : "/reference/svg/lib/filter", text : "filter"},
                  {link : "/reference/svg/lib/FilterPrimitives", text : "Filter Primitives"},
                  {link : "/reference/svg/lib/foreignObject", text : "foreignObject"},
                  {link : "/reference/svg/lib/g", text : "g"},
                  {link : "/reference/svg/lib/image", text : "image"},
                  {link : "/reference/svg/lib/line", text : "line"},
                  {link : "/reference/svg/lib/linearGradient", text : "linearGradient"},
                  {link : "/reference/svg/lib/marker", text : "marker"},
                  {link : "/reference/svg/lib/mask", text : "mask"},
                  {link : "/reference/svg/lib/metadata", text : "metadata"},
                  {link : "/reference/svg/lib/mpath", text : "mpath"},
                  {link : "/reference/svg/lib/path", text : "path"},
                  {link : "/reference/svg/lib/pattern", text : "pattern"},
                  {link : "/reference/svg/lib/polygon", text : "polygon"},
                  {link : "/reference/svg/lib/polyline", text : "polyline"},
                  {link : "/reference/svg/lib/radialGradient", text : "radialGradient"},
                  {link : "/reference/svg/lib/rect", text : "rect"},
                  {link : "/reference/svg/lib/set", text : "set"},
                  {link : "/reference/svg/lib/stop", text : "stop"},
                  {link : "/reference/svg/lib/style", text : "style"},
                  {link : "/reference/svg/lib/svg", text : "svg"},
                  {link : "/reference/svg/lib/switch", text : "switch"},
                  {link : "/reference/svg/lib/symbol", text : "symbol"},
                  {link : "/reference/svg/lib/text", text : "text"},
                  {link : "/reference/svg/lib/textPath", text : "textPath"},
                  {link : "/reference/svg/lib/title", text : "title"},
                  {link : "/reference/svg/lib/tspan", text : "tspan"},
                  {link : "/reference/svg/lib/use", text : "use"},
                  {link : "/reference/svg/lib/view", text : "view"}
                ]
              },
            ]
          },
          {
            text      : 'data',
            link      : '/reference/data/',
            collapsed : false,
            items     : [
              {link : '/reference/data/content', text : 'content'},
              {link : '/reference/data/src', text : 'src'},
              {link : '/reference/data/attribute', text : 'attribute'},
              {link : '/reference/data/property', text : 'property'},
            ]
          },
          {
            text      : 'methods',
            link      : '/reference/methods/',
            collapsed : false,
            items     : [
              {link : '/reference/methods/content', text : 'content'},
              {link : '/reference/methods/src', text : 'src'},
              {link : '/reference/methods/property', text : 'property'},
            ]
          },
        ]
      }],
      '/examples/'          : [{
        text  : 'Examples',
        items : [
          {link : '/examples/', text : 'Basic bars'},
          {link : '/examples/otto-neurath-tribute', text : 'Otto Neumath tribute'},
          {link : '/examples/quadrant', text : 'Quadrant'},
          {link : '/examples/process', text : 'Process'},
          {link : '/examples/evolution', text : 'Human Evolution'},
          {link : '/examples/bars', text : 'Chart Bars'},
          {link : '/examples/circle-bars', text : 'Circle Bars'},
          {link : '/examples/ranking', text : 'Population Ranking'},
          {link : '/examples/votes', text : 'Votes'},
          {link : '/examples/bottle', text : 'Half-full Bottle'},
          {link : '/examples/dog-or-cat', text : 'Dog or Cat'},
          {link : '/examples/survey', text : 'Survey'},
          {link : '/examples/timeline-horizontal', text : 'Timeline (horizontal)'},
          {link : '/examples/radial-temp', text : 'Radial: temperature range'},
          {link : '/examples/world-population', text : 'Horizontal bars: population'},
          {link : '/examples/heatmap-day-hour', text : 'Heatmap: day & hour'},
          {link : '/examples/bump-chart', text : 'Bump chart'},
          {link : '/examples/clock', text : 'Clock'},
          {link : '/examples/gauge', text : 'Gauge'},
          {link : '/examples/ranking-evolution', text : 'Ranking Evolution'},
        ]
      }],

    },
    socialLinks : [
      // {
      //   link : 'https://www.npmjs.com/package/@graphery/graphane',
      //   icon : {svg : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" xml:space="preserve"><g><path d="M10,10v980h980V10H10z M806.3,806.3H683.8v-490H500v490H193.8V193.8h612.5V806.3z"/></g> </svg>`}
      // },
      {link : 'https://github.com/graphery/graphane', icon : 'github'},
    ]
  }
});

