webpackJsonp([1],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vhtml_ui__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vhtml_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vhtml_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vhtml_ui_lib_vhtml_css__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vhtml_ui_lib_vhtml_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vhtml_ui_lib_vhtml_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vhtml_ui___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(20)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(215),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(203)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(204),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var req = __webpack_require__(205);
var keys = req.keys().filter(function (key) {
    return key !== './index.vue';
}).sort();
var components = keys.map(function (key) {
    var html = req(key);
    var escapedHTML = html.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return '<div class="example">' + html + '</div>\n        <pre class="code"><code class="html">' + escapedHTML + '</code></pre>';
});

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'example',
    template: '\n        <div class="examples">\n            ' + components.join('') + '\n        </div>\n    ',
    data: function data() {
        return {
            selectedCity: 1,
            cityOptions: [{ text: 'L.A.', value: 0 }, { text: 'New York', value: 1 }, { text: 'San Francisco', value: 2 }, { text: 'Chicago', value: 3 }, { text: 'Washington, D.C.', value: 4 }, { text: 'Las Vegas', value: 5 }, { text: 'Atlanta', value: 6 }, { text: 'Seattle', value: 7 }, { text: 'Other...', value: 8 }]
        };
    }
});

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0-dashboard.html": 206,
	"./1-left-right.html": 207,
	"./3-center.html": 208,
	"./4-middle.html": 209,
	"./5-inner.html": 210,
	"./6-holygrail.html": 211,
	"./8-img-board.html": 212,
	"./9-rounder.html": 213
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 205;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<block\n    style=\"height:500px;\"\n    rows=\"40px 1fr 1fr 1fr 100px\"\n    cols=\"100px 1fr 1fr 1fr 100px\"\n    pattern=\"\n        menu   header header header header,\n        menu   b11    b12    b13    info,\n        menu   b21    b22    b23    info,\n        ad     b31    b32    b33    info,\n        footer footer footer footer footer\">\n    <div slot=\"header\" class=\"area-1\"></div>\n    <div slot=\"menu\" class=\"area-2\"></div>\n    <div slot=\"b11\" class=\"area-3\"></div>\n    <div slot=\"b12\" class=\"area-4\"></div>\n    <div slot=\"b13\" class=\"area-5\"></div>\n    <div slot=\"b21\" class=\"area-6\"></div>\n    <div slot=\"b22\" class=\"area-7\"></div>\n    <div slot=\"b23\" class=\"area-8\"></div>\n    <div slot=\"b31\" class=\"area-0\"></div>\n    <div slot=\"b32\" class=\"area-1\"></div>\n    <div slot=\"b33\" class=\"area-2\"></div>\n    <div slot=\"info\" class=\"area-3\"></div>\n    <div slot=\"ad\" class=\"area-4\"></div>\n    <div slot=\"footer\" class=\"area-5\"></div>\n</block>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<block>\n    <v-select slot=\"left\" :options=\"cityOptions\" v-model=\"selectedCity\" placeholder=\"Please choose...\" style=\"width:150px;\"></v-select>\n    <v-number-input slot=\"left\" kind=\"step\" :value=\"10\" style=\"margin-left:10px;\"></v-number-input>\n    <v-input slot=\"right\" type=\"search\" placeholder=\"Search name...\" style=\"width:240px;\"></v-input>\n    <v-button slot=\"right\" status=\"primary\" style=\"margin-left:10px;\">Search</v-button>\n</block>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<block>\n    <v-button slot=\"center\" status=\"warning\">Confirm</v-button>\n    <v-button slot=\"center\" style=\"margin-left:10px;\">Cancel</v-button>\n</block>\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<block class=\"example-middle\">\n    <div slot=\"middle\" class=\"example-middle-txt\">This is a message in the middle of box.</div>\n</block>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<block\n    cols=\"100px auto\"\n    rows=\"50px auto\"\n    pattern=\"img name, img description\"\n    style=\"height:100px;\"\n    class=\"outline-0\">\n    <block slot=\"img\" style=\"border-right:none;\">\n        <img src=\"https://avatars1.githubusercontent.com/u/249872?v=4&s=460\"\n            slot=\"middle\"\n            style=\"width:60px; height:60px; border-radius:60px;\"></img>\n    </block>\n    <h1 slot=\"name\" style=\"padding-top:20px; font-size:1em; border-bottom:none;\">MZhou</h1>\n    <p slot=\"description\">\n        Frontend developer, Creator of lining.js, vue-block and octocard. And other good stuff.\n        <a href=\"https://github.com/zmmbreeze\"></a>\n    </p>\n</block>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<block\n    cols=\"150px 1fr 150px\"\n    rows=\"50px 1fr 30px\"\n    pattern=\"header header header, navigation main ads, footer footer footer\"\n    style=\"height: 300px;\">\n    <block slot=\"header\" class=\"area-0\"></block>\n    <block slot=\"navigation\" class=\"area-1\"></block>\n    <block slot=\"main\" class=\"area-2\"></block>\n    <block slot=\"ads\" class=\"area-3\"></block>\n    <block slot=\"footer\" class=\"area-4\"></block>\n</block>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<block\n    class=\"example-img-board\"\n    cols=\"1fr 1fr 1fr 1fr\"\n    rows=\"1fr 1fr 1fr\"\n    aspect-ratio=\"4:3\"\n    pattern=\"\n        first first   second second,\n        first first   forth  fifth,\n        sixth seventh seventh eighth\">\n    <img slot=\"first\" src=\"https://placeimg.com/640/640/any\"></img>\n    <img slot=\"second\" src=\"https://placeimg.com/480/240/any\"></img>\n    <img slot=\"forth\" src=\"https://placeimg.com/481/481/any\"></img>\n    <img slot=\"fifth\" src=\"https://placeimg.com/482/482/any\"></img>\n    <img slot=\"sixth\" src=\"https://placeimg.com/483/483/any\"></img>\n    <img slot=\"seventh\" src=\"https://placeimg.com/600/300/any\"></img>\n    <img slot=\"eighth\" src=\"https://placeimg.com/500/500/any\"></img>\n</block>\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<block\n    class=\"example-rounder\"\n    style=\"height: 300px;\"\n    cols=\"1fr 1fr 1fr\"\n    rounder=\"99.99999999999999%\"\n    pattern=\"first second third\">\n    <div slot=\"first\" class=\"area-1\"></div>\n    <div slot=\"second\" class=\"area-2\"></div>\n    <div slot=\"third\" class=\"area-3\"></div>\n</block>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vue-block\">vue-block</h1>\n<blockquote>\n<p>A Vue plugin helping you build <strong>CSS grid like layout system</strong> with the support of old browser like IE9.</p>\n</blockquote>\n<h2 id=\"feature\">Feature</h2>\n<p><strong>vue-block</strong> can provide you:</p>\n<ul>\n<li>CSS grid like layout system.</li>\n<li>Really easy to use API, especially for new Vue beginner.</li>\n<li>Support IE9+ and other modern browser which support <a href=\"http://caniuse.com/#search=calc\">CSS calc</a>.</li>\n<li><a href=\"https://vuejs.org/v2/guide/render-function.html#Functional-Components\">Functional component</a>, which is stateless and instanceless.</li>\n</ul>\n<h2 id=\"install\">Install</h2>\n<p>Install with npm:</p>\n<pre><code>npm install --save-dev vue-block\n</code></pre><h2 id=\"usage\">Usage</h2>\n<p>Basicly <code>vue-block</code> is a Vue plugin. Also you can use it as a Vue component.</p>\n<p>Plugin Usage:</p>\n<pre><code class=\"lang-javascript\">import &#39;vue-block/dist/block.css&#39;;\nimport block from &#39;vue-block&#39;;\nimport Vue from &#39;vue&#39;;\nVue.use(block);\n\nnew Vue({\n    el: &#39;#app&#39;,\n    template: `&lt;block&gt;\n        &lt;div slot=&quot;left&quot;&gt;&lt;div&gt;\n        &lt;div slot=&quot;right&quot;&gt;&lt;div&gt;\n    &lt;/block&gt;`\n});\n</code></pre>\n<p>Component Usage:</p>\n<pre><code class=\"lang-javascript\">import &#39;vue-block/dist/block.css&#39;;\nimport block from &#39;vue-block&#39;;\nimport Vue from &#39;vue&#39;;\n\nnew Vue({\n    el: &#39;#app&#39;,\n    template: `&lt;block&gt;\n        &lt;div slot=&quot;left&quot;&gt;&lt;div&gt;\n        &lt;div slot=&quot;right&quot;&gt;&lt;div&gt;\n    &lt;/block&gt;`,\n    components: { block }\n});\n</code></pre>\n<h2 id=\"api\">API</h2>\n<p><code>vue-block</code>&#39;s API is provide by all kinds of <a href=\"https://vuejs.org/v2/guide/components.html#Named-Slots\">vue slot</a>. It provide some default slot to handle the basic layout function.</p>\n<p>For Example:</p>\n<pre><code class=\"lang-html\">&lt;!-- left and right --&gt;\n&lt;block&gt;\n    &lt;div slot=&quot;left&quot;&gt;left&lt;div&gt;\n    &lt;div slot=&quot;right&quot;&gt;right&lt;div&gt;\n&lt;/block&gt;\n\n&lt;!-- horizontal center --&gt;\n&lt;block&gt;\n    &lt;div slot=&quot;center&quot;&gt;center 1&lt;div&gt;\n    &lt;div slot=&quot;center&quot;&gt;center 2&lt;div&gt;\n&lt;/block&gt;\n\n&lt;!-- middle of the block, both vertical and horizontal --&gt;\n&lt;block&gt;\n    &lt;div slot=&quot;middle&quot;&gt;middle 1&lt;div&gt;\n    &lt;div slot=&quot;middle&quot;&gt;middle 2&lt;div&gt;\n&lt;/block&gt;\n</code></pre>\n<p>And most excited thing is <code>vue-block</code> support css grid like layout system.</p>\n<p>For Example:</p>\n<pre><code class=\"lang-html\">&lt;block\n    cols=&quot;100px 2fr 1fr&quot;\n    rows=&quot;100px 200px 100px&quot;\n    pattern=&quot;header header right, side main right, side main right&quot;&gt;\n    &lt;div slot=&quot;header&quot;&gt;&lt;/div&gt;\n    &lt;div slot=&quot;side&quot;&gt;&lt;/div&gt;\n    &lt;div slot=&quot;main&quot;&gt;&lt;/div&gt;\n    &lt;div slot=&quot;right&quot;&gt;&lt;/div&gt;\n&lt;/block&gt;\n</code></pre>\n<h2 id=\"build-setup\">Build Setup</h2>\n<pre><code class=\"lang-bash\"># install dependencies\nnpm install\n\n# serve with hot reload at localhost:8080\nnpm run dev\n\n# build for production with minification\nnpm run build\n\n# build for doc\nnpm run doc\n</code></pre>\n";

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('block', {
    ref: "logo",
    staticClass: "logo",
    attrs: {
      "id": "logo",
      "cols": "1fr 1fr 1fr",
      "rows": "1fr 1fr 1fr",
      "pattern": "a b c, d e f, g h i"
    }
  }, [_c('span', {
    slot: "a"
  }), _vm._v(" "), _c('span', {
    slot: "b"
  }), _vm._v(" "), _c('span', {
    slot: "c"
  }), _vm._v(" "), _c('span', {
    slot: "d"
  }), _vm._v(" "), _c('span', {
    slot: "e"
  }), _vm._v(" "), _c('span', {
    slot: "f"
  }), _vm._v(" "), _c('span', {
    slot: "g"
  }), _vm._v(" "), _c('span', {
    slot: "h"
  }), _vm._v(" "), _c('span', {
    slot: "i"
  })]), _vm._v(" "), _c('h1', [_vm._v("vue-block")]), _vm._v(" "), _c('block', {
    staticClass: "menu"
  }, [_c('a', {
    class: _vm.selected === 0 ? 'selected' : '',
    attrs: {
      "href": "###"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.switchMenu(0)
      }
    },
    slot: "center"
  }, [_vm._v("Document")]), _vm._v(" "), _c('a', {
    class: _vm.selected === 1 ? 'selected' : '',
    attrs: {
      "href": "###"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.switchMenu(1)
      }
    },
    slot: "center"
  }, [_vm._v("Example")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selected === 0),
      expression: "selected === 0"
    }],
    staticClass: "readme",
    domProps: {
      "innerHTML": _vm._s(_vm.readme)
    }
  }), _vm._v(" "), _c('example', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selected === 1),
      expression: "selected === 1"
    }]
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "https://github.com/0067ED/vue-block/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticStyle: {
      "position": "fixed",
      "top": "0",
      "right": "0",
      "z-index": "999",
      "border": "0"
    },
    attrs: {
      "alt": "Fork on GitHub",
      "src": "https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",
      "data-canonical-src": "https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
    }
  })])
}]}

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Block__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Block__);



__WEBPACK_IMPORTED_MODULE_0__components_Block___default.a.install = function (Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_Block___default.a.name, __WEBPACK_IMPORTED_MODULE_0__components_Block___default.a);
};
__WEBPACK_IMPORTED_MODULE_0__components_Block___default.a.version = '1.0.6';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__components_Block___default.a);

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(218)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(219),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vnode__ = __webpack_require__(249);





/**
 * Render VNodes.
 * if more than one vnode, then wrap it with div.
 * if empty, then return div.
 * @param {Function} h createElement function.
 * @param {Array.<VNode>} vnodes vnodes or null.
 * @param {*=} class class
 * @param {Array<Object>|Object=} style style.
 * @return {VNode} one vnode.
 */
function renderVNodes(h, vnodes, clazz, style) {
    if (vnodes && vnodes.length === 1) {
        // only one node
        var singleNode = vnodes[0];
        singleNode.data = singleNode.data || {};
        if (clazz) {
            singleNode.data.class = Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["c" /* mergeClassOrStyle */])(singleNode.data.class, clazz);
        }
        if (style) {
            singleNode.data.style = Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["c" /* mergeClassOrStyle */])(singleNode.data.style, style);
        }
        return singleNode;
    }

    // 2, 3, ...
    return h(
        'div',
        { 'class': clazz, style: style },
        [vnodes || '']
    );
}

function renderDiv(isRoot, h, context, div) {
    // WOW, I love one piece. ^^
    var isOnepiece = !div.type;
    var spClazz = 'block-pattern-' + div.name;
    var clazz = {
        'block': true,
        'block-area': isOnepiece
    };
    clazz[spClazz] = isOnepiece;
    clazz['block-' + div.type] = !isOnepiece;
    Object(__WEBPACK_IMPORTED_MODULE_1__algorithm__["a" /* calcCSS */])(div, context.props.rounder);
    var style = {
        width: div.csswidth || '',
        height: div.cssheight || '',
        minWidth: div.cssminwidth || '',
        minHeight: div.cssminheight || ''
    };

    if (div.split) {
        var userData = isRoot ? context.data : {};
        var vnodes = div.split.map(renderDiv.bind(null, false, h, context));
        return h(
            'div',
            __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': clazz, style: style }, userData]),
            [isRoot ? renderAspectRatioWrapper(h, context, vnodes) : vnodes]
        );
    }

    // is area
    var usedSlot = context.slots()[div.name];
    return renderVNodes(h, usedSlot, clazz, style);
}

function renderAspectRatioWrapper(h, context, vnodes) {
    var props = context.props;
    if (!props.aspectRatio) {
        return vnodes;
    }

    var ar = props.aspectRatio.trim().split(':').map(function (num) {
        return parseInt(num, 10);
    });
    var width = ar[0];
    var height = ar[1];
    var cssAR = 'padding-bottom:' + height * 100 / width + '%';
    return h(
        'div',
        { 'class': 'block-ar', style: cssAR },
        [h(
            'div',
            { 'class': 'block-ar-wrap' },
            [vnodes]
        )]
    );
}

function renderDefault(h, context) {
    var slots = context.slots();
    var clazz = {};
    var vnodes = [];
    if (slots.left) {
        clazz['block-clear'] = true;
        Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["a" /* applyClass */])(slots.left, 'block-left');
        vnodes.push.apply(vnodes, slots.left);
    }

    if (slots.center) {
        clazz['block-center'] = true;
        Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["a" /* applyClass */])(slots.center, 'block-center');
        vnodes.push.apply(vnodes, slots.center);
    }

    if (slots.right) {
        clazz['block-clear'] = true;
        Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["a" /* applyClass */])(slots.right.reverse(), 'block-right');
        vnodes.push.apply(vnodes, slots.right);
    }

    if (slots.middle) {
        clazz['block-middle-container'] = true;
        vnodes.push(h(
            'div',
            { 'class': 'block-middle block-center' },
            [slots.middle]
        ));
    }

    if (slots.default) {
        vnodes.push.apply(vnodes, slots.default);
    }

    return h(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ 'class': clazz }, context.data]),
        [renderAspectRatioWrapper(h, context, vnodes)]
    );
}

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Block',
    functional: true,
    props: {
        rows: {
            type: String,
            default: 'auto'
        },
        cols: {
            type: String,
            default: 'auto'
        },
        pattern: String,
        rounder: {
            type: String,
            default: '100%'
        },
        // aspect-ratio
        aspectRatio: {
            type: String,
            validator: function validator(value) {
                return value.match(/^\s*\d+\s*:\s*\d+\s*$/);
            }
        }
    },
    render: function render(h, context) {
        var props = context.props;
        var vnode = void 0;
        if (!props.pattern) {
            vnode = renderDefault(h, context);
        } else {
            var layouts = Object(__WEBPACK_IMPORTED_MODULE_1__algorithm__["b" /* layout */])(props.pattern, props.rows, props.cols);
            vnode = renderDiv(true, h, context, layouts);
        }

        // jsx spread merge not support staticClass and staticStyle
        // https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx
        // apply custom class and style.
        Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["a" /* applyClass */])(vnode, context.data.staticClass);
        Object(__WEBPACK_IMPORTED_MODULE_2__vnode__["b" /* applyStyle */])(vnode, context.data.staticStyle);
        return vnode;
    }
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_styles_github_gist_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_styles_github_gist_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highlight_js_styles_github_gist_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__example__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__README_md__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__README_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__README_md__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    data: function data() {
        return {
            selected: 0,
            readme: __WEBPACK_IMPORTED_MODULE_3__README_md___default.a.replace(/<h1[^>]*>[^<]+<\/h1>/, ''),
            clazz: ['header1', 'header2'],
            style: {
                opacity: 0.5
            }
        };
    },

    methods: {
        switchMenu: function switchMenu(target) {
            this.selected = target;
        },
        clickLogo: function clickLogo(e) {
            console.log(e);
        }
    },
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.initHighlightingOnLoad();
    },

    components: {
        Example: __WEBPACK_IMPORTED_MODULE_2__example___default.a
    }
});

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = layout;
/* harmony export (immutable) */ __webpack_exports__["a"] = calcCSS;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__div__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__length__ = __webpack_require__(248);





/**
 * calc layouts.
 * @param {string} pattern `header header header, side main second, side main second`
 * @param {string} rows `[start] 400px [second] 200px [third] 100px [end]`
 * @param {string} cols `100px 500px auto 100px`
 * @return {Object} div format.
 */
function layout(pattern, rows, cols) {
    var cellMap = Object(__WEBPACK_IMPORTED_MODULE_0__cell__["a" /* calcCellMap */])(rows, cols);
    var areas = Object(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* calcAreasByPattern */])(cellMap, pattern);
    return Object(__WEBPACK_IMPORTED_MODULE_2__div__["a" /* calcDiv */])(cellMap, areas);
}

function calcCSS(div, rounder) {
    if (!div.split || !div.split.length) {
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_3__length__["a" /* calcCSSWidthOrHeight */])(div, 'width', rounder);
    Object(__WEBPACK_IMPORTED_MODULE_3__length__["a" /* calcCSSWidthOrHeight */])(div, 'height', rounder);
};

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcAreasByPattern;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(7);
/*

    Area format
    ```
    {
        // pattern name
        name: 'xxx',
        // row info
        y: 0,
        rowSpan: 1,
        height: ['100px', '200px'],
        // col info
        x: 0,
        colSpan: 1,
        width: ['100px', 'auto']
    ```

    Areas format
    ```
    {
        areaName1: area1,
        areaName2: area2
    }
    ```
*/


function isInside(x, xStart, xEnd) {
    return x >= xStart && x <= xEnd;
}

/**
 * Add one cell into area.
 * @param {Object} area area info.
 * @param {Object} cell cell info.
 * @param {number} x cell x position.
 * @param {number} y cell y position.
 */
function addCellIntoArea(area, cell, x, y) {
    var xStart = area.x;
    var xEnd = xStart + area.colSpan - 1;
    var yStart = area.y;
    var yEnd = yStart + area.rowSpan - 1;

    var xInside = isInside(x, xStart, xEnd);
    var yInside = isInside(y, yStart, yEnd);
    if (xInside && yInside) {
        // area is 1.
        // cell is x.
        // 1, 1, 1,
        // 1, x, 0,
        // cell is already inside area.
        return;
    }

    if (!isInside(x, xStart - 1, xEnd + 1) || !isInside(y, yStart - 1, yEnd + 1)) {
        // area is 1.
        // cell is x.
        // 1, 1, 1, 0, x
        // 1, 1, 1, 0, 0
        // drop this cell.
        return;
    }

    if (!xInside) {
        area.width.push(cell.width);
        area.colSpan++;
        area.x = area.x > x ? x : area.x;
    }
    if (!yInside) {
        // isYInside
        area.height.push(cell.height);
        area.rowSpan++;
        area.y = area.y > y ? y : area.y;
    }
}

/**
 * calculate areas by pattern and cell map.
 * and add name for every cell.
 * @param {Array.<Array.<Object>>} cellMap cell map.
 * @param {string} pattern string.
 * @return {Object} all areas.
 *          `{ areaName: area, areaName2: area }`
 */
function calcAreasByPattern(cellMap, pattern) {
    /*
    [
        [ 'head', 'head', 'side' ],
        [ 'body', 'body', 'side' ]
    ]
    */
    pattern = pattern.split(',').map(__WEBPACK_IMPORTED_MODULE_0__helper__["a" /* splitBySpace */]);

    if (cellMap.length !== pattern.length || cellMap[0].length !== pattern[0].length) {
        throw new Error('[BLOCK] `pattern`, `rows`, `cols` not match.');
    }

    // console.log(pattern);
    return pattern.reduce(function (results, patternNames, rowIndex) {
        return patternNames.reduce(function (results, cellName, colIndex) {
            var cell = cellMap[rowIndex][colIndex];
            // NOTE add name for cell.
            cell.name = cellName;
            var area = results[cellName];
            if (area) {
                addCellIntoArea(area, cell, colIndex, rowIndex);
            } else {
                results[cellName] = {
                    name: cellName,
                    // row info
                    y: rowIndex,
                    rowSpan: 1,
                    height: [cell.height],
                    // col info
                    x: colIndex,
                    colSpan: 1,
                    width: [cell.width]
                };
            }
            return results;
        }, results);
    }, {});
}

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcDiv;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(247);

/*

    Div format, it's tree struct. it can be used to render DOM tree.
    ```
    {
        type: 'row',        // row | col
        split: [before, after, last],

        // if not root, then it is row info
        y: 0,
        rowSpan: 1,
        // if not root, then it is col info
        x: 0,
        colSpan: 1,

        height: ['100px', '200px'],
        width: ['100px', 'auto'],

        // if only has no split value.
        name: 'xxxx'                    // pattern name
    }
    ```

*/



/**
 * Calculated crossed part of line and div.
 *
 * @param {Object} div div
 * @param {Object} line line
 * @return {Object} new crossed line.
 */
function calcCrossedLineWithDiv(div, line) {
    var isRow = line.type === 'row';
    if (isRow) {
        if (line.y <= div.y || line.y >= div.y + div.rowSpan) {
            // out of div.
            return;
        }
        var xStart = Math.max(div.x, line.x);
        var xEnd = Math.min(div.x + div.colSpan, line.x + line.span);
        var crossedSpan = xEnd - xStart;
        return crossedSpan > 0 ? { type: line.type, span: crossedSpan, x: xStart, y: line.y } : null;
    } else {
        if (line.x <= div.x || line.x >= div.x + div.colSpan) {
            // out of div.
            return;
        }
        var yStart = Math.max(div.y, line.y);
        var yEnd = Math.min(div.y + div.rowSpan, line.y + line.span);
        var _crossedSpan = yEnd - yStart;
        return _crossedSpan > 0 ? { type: line.type, span: _crossedSpan, x: line.x, y: yStart } : null;
    }
}

/**
 * Split the long line, and removed the crossed part.
 *
 * @param {Object} long long line
 * @param {Object} short short line
 * @return {Array.<Object>} new splitted line.
 */
function splitLine(long, short) {
    var isRow = long.type === 'row';
    var lines = [];
    var sStart = isRow ? short.x : short.y;
    var sEnd = isRow ? short.x + short.span : short.y + short.span;
    var lStart = isRow ? long.x : long.y;
    var lEnd = isRow ? long.x + long.span : long.y + long.span;
    if (sStart > lStart) {
        var line = {
            type: long.type,
            span: sStart - lStart
        };
        line[isRow ? 'x' : 'y'] = lStart;
        line[isRow ? 'y' : 'x'] = isRow ? long.y : long.x;
        lines.push(line);
    }

    if (sEnd < lEnd) {
        var _line = {
            type: long.type,
            span: lEnd - sEnd
        };
        _line[isRow ? 'x' : 'y'] = sEnd;
        _line[isRow ? 'y' : 'x'] = isRow ? long.y : long.x;
        lines.push(_line);
    }
    return lines;
}

/**
 * Calculate longest(in percent) crossed line inside div.
 *
 * @param {Array.<Object>} lines all line
 * @param {Object} div div
 * @return {Object} new crossed line.
 */
function calcLongestLineInsideDiv(lines, div) {
    function getBaseSpan(line) {
        return line.type === 'row' ? div.colSpan : div.rowSpan;
    }

    var index = void 0;
    var crossedLine = lines.reduce(function (result, line, i) {
        // calculated the crossed line with div.
        var crossedLine = calcCrossedLineWithDiv(div, line);
        if (!crossedLine) {
            // this line is not crossed with div
            return result;
        }

        if (!result) {
            index = i;
            return crossedLine;
        }

        var resultPercent = result.span / getBaseSpan(result);
        var thisPercent = crossedLine.span / getBaseSpan(crossedLine);
        if (thisPercent > resultPercent) {
            index = i;
            return crossedLine;
        }
        return result;
    }, null);

    if (!crossedLine) {
        return;
    }

    // remove and split the old line.
    // then push the new splitted line.
    var splitLines = splitLine(lines.splice(index, 1)[0], crossedLine);
    splitLines.unshift(0);
    splitLines.unshift(index);
    lines.splice.apply(lines, splitLines);
    return crossedLine;
}

/**
 * Fillup div's `split` by line.
 *
 * @param {Object} line line
 * @param {Object} div div
 */
function fillupDiv(lines, div) {
    var line = calcLongestLineInsideDiv(lines, div);
    if (!line) {
        // don't need to split.
        return;
    }

    div.type = line.type;
    // split div.
    var lineIsRow = line.type === 'row';
    div.split = [{
        y: div.y,
        rowSpan: lineIsRow ? line.y - div.y : div.rowSpan,
        x: div.x,
        colSpan: lineIsRow ? div.colSpan : line.x - div.x
    }, {
        y: line.y,
        rowSpan: lineIsRow ? div.y + div.rowSpan - line.y : div.rowSpan,
        x: line.x,
        colSpan: lineIsRow ? div.colSpan : div.x + div.colSpan - line.x
    }];

    // fillup splits.
    fillupDiv(lines, div.split[0]);
    fillupDiv(lines, div.split[1]);
}

/**
 * Flatten div split, and add `width / height / name / dirty`.
 *
 * @param {Array.<Array.<Object>>} cell map.
 * @param {Object} areas areas.
 * @param {Object} div div.
 * @param {Object=} usedAreaNames used area names.
 */
function normalizeDiv(cellMap, areas, div, usedAreaNames) {
    usedAreaNames = usedAreaNames || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default()(null);
    if (!div.split || !div.split.length) {
        mapDivAndArea(cellMap, areas, div, usedAreaNames);
        return;
    }

    var before = div.split[0];
    var after = div.split[1];
    normalizeDiv(cellMap, areas, before, usedAreaNames);
    normalizeDiv(cellMap, areas, after, usedAreaNames);

    if (div.type === before.type) {
        div.split.shift();
        div.split.unshift.apply(div.split, before.split);
    }

    if (div.type === after.type) {
        div.split.pop();
        div.split.push.apply(div.split, after.split);
    }

    var isRow = div.type === 'row';
    var firstCleanSplit = findFirstCleanSplit(div.split);
    div.width = isRow ? firstCleanSplit.width : sumHeightOrWidth(div.split, 'width');
    div.height = isRow ? sumHeightOrWidth(div.split, 'height') : firstCleanSplit.height;
}

function sumHeightOrWidth(splits, heightOrWidth) {
    var results = [];
    for (var i = 0, l = splits.length; i < l; i++) {
        var split = splits[i];
        if (!split) {
            continue;
        }
        results.push.apply(results, split[heightOrWidth]);
    }
    return results;
}

function findFirstCleanSplit(splits) {
    for (var i = 0, l = splits.length; i < l; i++) {
        var split = splits[i];
        if (!split || split.dirty) {
            continue;
        }
        return split;
    }
}

/**
 * Map area to div, add `width / height / name / dirty`.
 *
 * @param {Array.<Array.<Object>>} cell map.
 * @param {Object} areas areas.
 * @param {Object} div div.
 * @param {Object=} usedAreaNames used area names.
 */
function mapDivAndArea(cellMap, areas, div, usedAreaNames) {
    var x = div.x;
    var y = div.y;
    var cell = cellMap[y][x];
    if (!cell) {
        return;
    }

    var cellName = cell.name;
    var area = areas[cellName];
    if (!area) {
        return;
    }

    if (usedAreaNames[cellName]) {
        // allready used
        div.dirty = true;
        // TODO
    }
    usedAreaNames[cellName] = 1;
    div.name = cellName;
    div.width = area.width;
    div.height = area.height;
}

/**
 * Calculate div
 * @param {Array.<Array.<Object>>} cellMap cell map.
 * @param {Object} areas areas object.
 * @return {Object} div object.
 */
function calcDiv(cellMap, areas) {
    var maxY = cellMap.length;
    var maxX = cellMap[0].length;
    // console.log(cellMap);
    // console.log(areas);
    var rowLines = Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* calcLines */])(cellMap, areas, true);
    var colLines = Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* calcLines */])(cellMap, areas, false);
    var allLines = rowLines.concat(colLines);

    if (!allLines.length) {}
    // only one area found.
    // TODO


    // Must be two cells.
    var rootDiv = {
        // if not root, then it is row info
        y: 0,
        rowSpan: maxY,
        // if not root, then it is col info
        x: 0,
        colSpan: maxX
    };
    fillupDiv(allLines, rootDiv);
    normalizeDiv(cellMap, areas, rootDiv);
    return rootDiv;
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcLines;
/*

    Line format
    ```
    {
        type: 'row',        // row | col
        span: 2,            // crossed cell count
        x: 0,
        y: 0
    }
    ```

*/

/**
 * calculate row or col lines
 * @param {Array.<Array.<Object>>} cellMap cell map.
 * @param {Object} all areas.
 *          `{ areaName: area, areaName2: area }`
 * @param {boolean} isRow is row or col
 * @return {Array.<Object>} lines
 */
function calcLines(cellMap, areas, isRow) {
    var maxY = cellMap.length;
    var maxX = cellMap[0].length;
    var max = (isRow ? maxY : maxX) - 1;
    var maxCellCount = isRow ? maxX : maxY;
    var type = isRow ? 'row' : 'col';
    var maxSpan = isRow ? maxX : maxY;
    var spanName = isRow ? 'colSpan' : 'rowSpan';
    var staticIndexName = isRow ? 'y' : 'x';
    var dynamicIndexName = isRow ? 'x' : 'y';
    var lines = [];
    function tryAddLine(i, j, start) {
        if (j <= start) {
            return;
        }

        // crossed cell count
        var span = j - start;
        var line = {
            type: type,
            span: span
        };
        line[staticIndexName] = i + 1;
        line[dynamicIndexName] = start;
        lines.push(line);
    }

    for (var i = 0; i < max; i++) {
        var start = 0;
        var j = 0;
        while (j < maxCellCount) {
            var beforeCell = isRow ? cellMap[i][j] : cellMap[j][i];
            var afterCell = isRow ? cellMap[i + 1][j] : cellMap[j][i + 1];
            if (beforeCell.name === afterCell.name) {
                tryAddLine(i, j, start);
                j = start = j + areas[beforeCell.name][spanName];
            } else {
                j++;
            }
        }
        tryAddLine(i, j, start);
    }
    return lines;
}

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parse */
/* harmony export (immutable) */ __webpack_exports__["a"] = calcCSSWidthOrHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__);

/*
    Length format
    ```
    {
        number: '10',
        unit: 'px',         // 'px', '%', 'auto', 'fr'
        raw: '10px',
        isFlex: false
    }
    ```

    Typed multi-length format
    ```
    {
        fixed: ['100px', '200%'],
        fr: [lengthFormat],
        auto: [lengthFormat],
        fixedString: '(100%-100px-20%})',
        baseFr: 5,          // base count of `fr`
        baseAuto: 1         // base count of `auto`
    }
    ```

    CSS Length format
    ```
    {
        baseFixed: ['100px', '200%'],
        fixed: ['100px'],
        baseFree: 2,
        free: 1
    }
    ```
*/

var UNIT_MAP = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default()(null);
UNIT_MAP.fr = true;
UNIT_MAP.auto = true;
UNIT_MAP.px = false;
UNIT_MAP['%'] = false;
UNIT_MAP[''] = false;

/**
 * divide length into types
 * @param {Array.<string>} lengths `['100px', '0', '10%', '1fr', 'auto']`
 * @return {Object} Typed lengths format
 */
function divideLengthByType(lengths) {
    var typedLengths = {
        fixed: [],
        fr: [],
        auto: []
    };
    typedLengths = lengths.reduce(function (results, len) {
        var type = len.isFlex ? len.unit : 'fixed';
        results[type].push(len.isFlex ? len : len.raw);
        return results;
    }, typedLengths);
    // typedLengths.fixedString = getFixedLength(typedLengths.fixed, true);
    typedLengths.baseFr = typedLengths.fr.reduce(function (count, len) {
        return count + parseInt(len.number, 10);
    }, 0);
    typedLengths.baseAuto = typedLengths.auto.length;
    return typedLengths;
}

/**
 * Remove dumplicate value inside both array.
 * Only remove by pair. And do not modify the input array.
 * @param {Array.<string>} array1 array one.
 * @param {Array.<string>} array2 array two.
 * @return {Array.<Array>} result.
 */
function removeDuplicateValue(array1, array2) {
    array1 = array1.concat();
    array2 = array2.filter(function (item) {
        var i = array1.indexOf(item);
        var r = ~i;
        if (r) {
            array1.splice(i, 1);
        }
        return !r;
    });
    return [array1, array2];
}

function _calcFixedCSSLength(fixedLengths) {
    return fixedLengths.length > 1 ? 'calc(' + fixedLengths.join(' + ') + ')' : fixedLengths[0] || '';
}

function calcCSSLength(lengths, base, rounder) {
    var baseFixed = base.fixed;
    var fixed = lengths.fixed;
    // if has `fr` unit, then `auto` === `0`
    var hasFRUnit = base.baseFr > 0;
    var baseFree = hasFRUnit ? base.baseFr : base.baseAuto;
    var free = hasFRUnit ? lengths.baseFr : lengths.baseAuto;
    if (baseFree === 0 || free === 0) {
        // optimise for this case.
        // no free unit or no free unit inside this lengths
        // calc(fixed)
        // calc(100px + 10%)
        // 100px
        return _calcFixedCSSLength(fixed);
    }

    if (baseFree !== free) {
        // calc(fixed + (100% - basedFixed) * 1 / 3 )
        return baseFixed.length ? fixed.length ? 'calc(' + fixed.join(' + ') + ' + (' + rounder + ' - ' + baseFixed.join(' - ') + ') * ' + free + ' / ' + baseFree + ')' : 'calc((' + rounder + ' - ' + baseFixed.join(' - ') + ') * ' + free + ' / ' + baseFree + ')' : 'calc(' + rounder + ' * ' + free + ' / ' + baseFree + ')';
    }

    // optimise for this case.
    // all free unit inside this lengths
    // calc(fixed + 100% - basedFixed)
    var clean = removeDuplicateValue(fixed, baseFixed);
    var cleanBaseFixed = clean[1];
    var cleanFixed = clean[0];
    return cleanBaseFixed.length ? cleanFixed.length
    // calc(10px + 100% - 100px)
    ? 'calc(' + cleanFixed.join(' + ') + ' + 100% - ' + cleanBaseFixed.join(' - ') + ')'
    // calc(100% - 100px)
    : 'calc(100% - ' + cleanBaseFixed.join(' - ') + ')'
    // 100%
    : '100%';
}

/**
 * parse length.
 * @param {string} length length in string.
 * @return {Object} length format.
 */
function parse(length) {
    var r = /^([0-9\.]+)?([a-zA-Z%]+)?/.exec(length);
    if (!r) {
        // illegal format
        // TODO
        return;
    }

    var unit = r[2];
    if (typeof UNIT_MAP[unit] !== 'boolean') {
        // illegal unit
        // TODO
        return;
    }

    var number = r[1];
    if (unit === '' && number !== '0') {
        // for pure number `12` or `67`
        // TODO
        return;
    }

    return {
        number: number,
        unit: unit,
        raw: length,
        isFlex: UNIT_MAP[unit]
    };
}

function calcCSSWidthOrHeight(div, widthOrHeight, rounder) {
    var baseLengths = div[widthOrHeight].map(parse);
    var typedBaseLengths = divideLengthByType(baseLengths);
    div['cssmin' + widthOrHeight] = _calcFixedCSSLength(typedBaseLengths.fixed);
    div.split.forEach(function (d) {
        var typedLengths = divideLengthByType(d[widthOrHeight].map(parse));
        var cssStr = calcCSSLength(typedLengths, typedBaseLengths, rounder);
        d['css' + widthOrHeight] = cssStr;
    });
}

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeClassOrStyle;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = applyStyle;
function mergeClassOrStyle(first, second) {
    var firstIsArray = Array.isArray(first);
    var secondIsArray = Array.isArray(second);
    if (firstIsArray) {
        first = first.concat();
        if (secondIsArray) {
            return first.concat(second);
        }

        first.push(second);
        return first;
    }

    if (secondIsArray) {
        second.unshift(first);
        return second;
    }

    return [first, second];
}

function _applyClassOrStyle(vnodes, classOrStyle, value) {
    if (value == null) {
        return;
    }

    if (!Array.isArray(vnodes)) {
        vnodes.data = vnodes.data || {};
        vnodes.data[classOrStyle] = mergeClassOrStyle(vnodes.data[classOrStyle], value);
        return;
    }
    vnodes.forEach(function (vnode) {
        vnode.data = vnode.data || {};
        vnode.data[classOrStyle] = mergeClassOrStyle(vnode.data[classOrStyle], value);
    });
}

function applyClass(vnodes, clazz) {
    _applyClassOrStyle(vnodes, 'class', clazz);
}

function applyStyle(vnodes, style) {
    _applyClassOrStyle(vnodes, 'style', style);
}

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calcCellMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(7);
/*
    Cell format
    ```
    {
        // pattern name
        name: 'xxxx',
        // row info
        height: '200px',
        rowStart: 'vstart',
        rowEnd: 'vend',
        // col info
        width: '200px',
        colStart: 'hstart',
        colEnd: 'hend'
    }
    ```

    Cell map
    ```
    [
        [cell00, cell01, cell02],
        [cell10, cell11, cell12],
        [cell20, cell21, cell22]
    ]
    ```
*/


/**
 * Parse input
 * @param {string} items like
 *                  `100px auto 30%`
 *                  `[start] 100px [second] auto [third] 30% [end]`
 *                  `100px auto [center] 30% [end]`
 * @return {Array.<Object>}
 *                  `[{start: 'start', end: 'second' length: '100px'}, ...]`
 */
function parseRowsOrCols(items) {
    items = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["a" /* splitBySpace */])(items);
    var lastItemIndex = items.length - 1;
    return items.reduce(function (results, item, index) {
        var r = item.match(/^\[([^\]]+)\]$/);
        var lineName = r ? r[1] : '';
        var lastResult = results[results.length - 1];
        if (lineName) {
            // is line name, like `[first]`.
            if (lastResult && lastResult.length == null || // no length before line name.
            !lastResult && index == lastItemIndex) {
                // only have one line name.
                throw new Error('[JIMU] Wrong format: ' + items);
            }
            if (lastResult) {
                lastResult.end = lineName;
            }
            if (index < lastItemIndex) {
                results.push({
                    start: lineName
                });
            }
        } else {
            // is length, like `auto`, `100px`, `100%`.
            var needNewResult = !lastResult || lastResult.length != null;
            var res = needNewResult ? {} : lastResult;
            res.length = item;
            if (needNewResult) {
                results.push(res);
            }
        }
        return results;
    }, []);
}

/**
 * calculate cell map.
 * @param {string} inputRows rows.
 * @param {string} inputCols cols.
 * @return {Array.<Array.<Object>>} cell map.
 */
function calcCellMap(inputRows, inputCols) {
    var rows = parseRowsOrCols(inputRows);
    var cols = parseRowsOrCols(inputCols);
    var cellMap = rows.reduce(function (results, row) {
        var rowResults = cols.reduce(function (rowResult, col) {
            rowResult.push({
                // row info
                height: row.length,
                rowStart: row.start,
                rowEnd: row.end,
                // col info
                width: col.length,
                colStart: col.start,
                colEnd: col.end
            });
            return rowResult;
        }, []);
        results.push(rowResults);
        return results;
    }, []);

    if (cellMap.length === 0 || cellMap[0].length === 0) {
        throw new Error('[JIMU] Wrong format for rows: ' + inputRows + ('\ncols: ' + inputCols));
    }

    return cellMap;
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = splitBySpace;
function splitBySpace(input) {
    return input.trim().split(/[\n\r\s\uFEFF\xA0]+/);
}

/***/ })

},[17]);
//# sourceMappingURL=app.0dcd14d0ccd5e738108b.js.map