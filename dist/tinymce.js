(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tinymce"],{

/***/ "MtEw":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/*! exports provided: bindHandlers, bindModelHandlers, initEditor, uuid, isTextarea, mergePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindHandlers\", function() { return bindHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindModelHandlers\", function() { return bindModelHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initEditor\", function() { return initEditor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uuid\", function() { return uuid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTextarea\", function() { return isTextarea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergePlugins\", function() { return mergePlugins; });\n/**\n * Copyright (c) 2018-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar validEvents = [\n    'onActivate',\n    'onAddUndo',\n    'onBeforeAddUndo',\n    'onBeforeExecCommand',\n    'onBeforeGetContent',\n    'onBeforeRenderUI',\n    'onBeforeSetContent',\n    'onBeforePaste',\n    'onBlur',\n    'onChange',\n    'onClearUndos',\n    'onClick',\n    'onContextMenu',\n    'onCopy',\n    'onCut',\n    'onDblclick',\n    'onDeactivate',\n    'onDirty',\n    'onDrag',\n    'onDragDrop',\n    'onDragEnd',\n    'onDragGesture',\n    'onDragOver',\n    'onDrop',\n    'onExecCommand',\n    'onFocus',\n    'onFocusIn',\n    'onFocusOut',\n    'onGetContent',\n    'onHide',\n    'onInit',\n    'onKeyDown',\n    'onKeyPress',\n    'onKeyUp',\n    'onLoadContent',\n    'onMouseDown',\n    'onMouseEnter',\n    'onMouseLeave',\n    'onMouseMove',\n    'onMouseOut',\n    'onMouseOver',\n    'onMouseUp',\n    'onNodeChange',\n    'onObjectResizeStart',\n    'onObjectResized',\n    'onObjectSelected',\n    'onPaste',\n    'onPostProcess',\n    'onPostRender',\n    'onPreProcess',\n    'onProgressState',\n    'onRedo',\n    'onRemove',\n    'onReset',\n    'onSaveContent',\n    'onSelectionChange',\n    'onSetAttrib',\n    'onSetContent',\n    'onShow',\n    'onSubmit',\n    'onUndo',\n    'onVisualAid'\n];\nvar isValidKey = function (key) { return validEvents.indexOf(key) !== -1; };\nvar bindHandlers = function (initEvent, listeners, editor) {\n    Object.keys(listeners)\n        .filter(isValidKey)\n        .forEach(function (key) {\n        var handler = listeners[key];\n        if (typeof handler === 'function') {\n            if (key === 'onInit') {\n                handler(initEvent, editor);\n            }\n            else {\n                editor.on(key.substring(2), function (e) { return handler(e, editor); });\n            }\n        }\n    });\n};\nvar bindModelHandlers = function (ctx, editor) {\n    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;\n    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;\n    var currentContent;\n    ctx.$watch('value', function (val, prevVal) {\n        if (editor && typeof val === 'string' && val !== currentContent && val !== prevVal) {\n            editor.setContent(val);\n            currentContent = val;\n        }\n    });\n    editor.on(normalizedEvents ? normalizedEvents : 'change keyup undo redo', function () {\n        currentContent = editor.getContent();\n        ctx.$emit('input', currentContent);\n    });\n};\nvar initEditor = function (initEvent, ctx, editor) {\n    var value = ctx.$props.value ? ctx.$props.value : '';\n    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';\n    editor.setContent(value || initialValue);\n    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either\n    // specified the events or defaults to \"change keyup\" event and emits the editor content on that event\n    if (ctx.$listeners.input) {\n        bindModelHandlers(ctx, editor);\n    }\n    bindHandlers(initEvent, ctx.$listeners, editor);\n};\nvar unique = 0;\nvar uuid = function (prefix) {\n    var time = Date.now();\n    var random = Math.floor(Math.random() * 1000000000);\n    unique++;\n    return prefix + '_' + random + unique + String(time);\n};\nvar isTextarea = function (element) {\n    return element !== null && element.tagName.toLowerCase() === 'textarea';\n};\nvar normalizePluginArray = function (plugins) {\n    if (typeof plugins === 'undefined' || plugins === '') {\n        return [];\n    }\n    return Array.isArray(plugins) ? plugins : plugins.split(' ');\n};\nvar mergePlugins = function (initPlugins, inputPlugins) {\n    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));\n};\n\n\n//# sourceURL=webpack:///./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js?");

/***/ }),

/***/ "Ndbd":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Editor\", function() { return Editor; });\n/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ \"j8bQ\");\n/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ \"xKn5\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ \"MtEw\");\n/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ \"yTmR\");\n/**\n * Copyright (c) 2018-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar scriptState = _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__[\"create\"]();\nvar renderInline = function (h, id, tagName) {\n    return h(tagName ? tagName : 'div', {\n        attrs: { id: id }\n    });\n};\nvar renderIframe = function (h, id) {\n    return h('textarea', {\n        attrs: { id: id },\n        style: { visibility: 'hidden' }\n    });\n};\nvar initialise = function (ctx) { return function () {\n    var finalInit = __assign({}, ctx.$props.init, { readonly: ctx.$props.disabled, selector: \"#\" + ctx.elementId, plugins: Object(_Utils__WEBPACK_IMPORTED_MODULE_2__[\"mergePlugins\"])(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {\n            ctx.editor = editor;\n            editor.on('init', function (e) { return Object(_Utils__WEBPACK_IMPORTED_MODULE_2__[\"initEditor\"])(e, ctx, editor); });\n            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {\n                ctx.$props.init.setup(editor);\n            }\n        } });\n    if (Object(_Utils__WEBPACK_IMPORTED_MODULE_2__[\"isTextarea\"])(ctx.element)) {\n        ctx.element.style.visibility = '';\n    }\n    Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__[\"getTinymce\"])().init(finalInit);\n}; };\nvar Editor = {\n    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__[\"editorProps\"],\n    created: function () {\n        this.elementId = this.$props.id || Object(_Utils__WEBPACK_IMPORTED_MODULE_2__[\"uuid\"])('tiny-vue');\n        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;\n    },\n    watch: {\n        disabled: function () {\n            this.editor.setMode(this.disabled ? 'readonly' : 'design');\n        }\n    },\n    mounted: function () {\n        this.element = this.$el;\n        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__[\"getTinymce\"])() !== null) {\n            initialise(this)();\n        }\n        else if (this.element && this.element.ownerDocument) {\n            var doc = this.element.ownerDocument;\n            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';\n            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';\n            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__[\"load\"](scriptState, doc, \"https://cdn.tiny.cloud/1/\" + apiKey + \"/tinymce/\" + channel + \"/tinymce.min.js\", initialise(this));\n        }\n    },\n    beforeDestroy: function () {\n        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__[\"getTinymce\"])() !== null) {\n            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__[\"getTinymce\"])().remove(this.editor);\n        }\n    },\n    render: function (h) {\n        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js?");

/***/ }),

/***/ "j8bQ":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/*! exports provided: create, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"MtEw\");\n/**\n * Copyright (c) 2018-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\nvar injectScriptTag = function (scriptId, doc, url, callback) {\n    var scriptTag = doc.createElement('script');\n    scriptTag.referrerPolicy = 'origin';\n    scriptTag.type = 'application/javascript';\n    scriptTag.id = scriptId;\n    scriptTag.addEventListener('load', callback);\n    scriptTag.src = url;\n    if (doc.head) {\n        doc.head.appendChild(scriptTag);\n    }\n};\nvar create = function () {\n    return {\n        listeners: [],\n        scriptId: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__[\"uuid\"])('tiny-script'),\n        scriptLoaded: false\n    };\n};\nvar load = function (state, doc, url, callback) {\n    if (state.scriptLoaded) {\n        callback();\n    }\n    else {\n        state.listeners.push(callback);\n        if (!doc.getElementById(state.scriptId)) {\n            injectScriptTag(state.scriptId, doc, url, function () {\n                state.listeners.forEach(function (fn) { return fn(); });\n                state.scriptLoaded = true;\n            });\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js?");

/***/ }),

/***/ "xKn5":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/*! exports provided: getTinymce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTinymce\", function() { return getTinymce; });\n/**\n * Copyright (c) 2018-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };\nvar getTinymce = function () {\n    var global = getGlobal();\n    return global && global.tinymce ? global.tinymce : null;\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack:///./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js?");

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "yTmR":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/*! exports provided: editorProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editorProps\", function() { return editorProps; });\n/**\n * Copyright (c) 2018-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar editorProps = {\n    apiKey: String,\n    cloudChannel: String,\n    id: String,\n    init: Object,\n    initialValue: String,\n    inline: Boolean,\n    modelEvents: [String, Array],\n    plugins: [String, Array],\n    tagName: String,\n    toolbar: [String, Array],\n    value: String,\n    disabled: Boolean\n};\n\n\n//# sourceURL=webpack:///./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js?");

/***/ }),

/***/ "ynI1":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ \"Ndbd\");\n/**\n * Copyright (c) 2018-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"]);\n\n\n//# sourceURL=webpack:///./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js?");

/***/ })

}]);