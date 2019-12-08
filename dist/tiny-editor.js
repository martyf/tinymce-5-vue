(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiny-editor"],{

/***/ "FiFf":
/*!*****************************!*\
  !*** ./src/js/appConfig.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet appConfig = {};\n\n//\n// If we have the \"app-config\" element, let's load its contents into our config object.\n//\nif (document.getElementById('app-config'))\n{\n    // load the config options\n    appConfig = JSON.parse(document.getElementById('app-config').innerHTML);\n}\n\n/**\n * Get a config option, using dot-syntax.\n *\n * Will parse the requested key by a period to look for nested attributes.\n *\n * For example, \"tiny.key\" would look for the \"key\" parameter inside a \"tiny\" object.\n *\n * @param key\n * @return {*}\n */\nappConfig.get = function (key) {\n    return key.split('.').reduce((o, i) => o[i], this);\n};\n\n// freeze our object\nObject.freeze(appConfig);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appConfig);\n\n//# sourceURL=webpack:///./src/js/appConfig.js?");

/***/ }),

/***/ "Fy+p":
/*!***********************************************************************!*\
  !*** ./src/components/tiny-editor.vue?vue&type=template&id=77c361fa& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tiny_editor_vue_vue_type_template_id_77c361fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./tiny-editor.vue?vue&type=template&id=77c361fa& */ \"tInR\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tiny_editor_vue_vue_type_template_id_77c361fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tiny_editor_vue_vue_type_template_id_77c361fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/tiny-editor.vue?");

/***/ }),

/***/ "QVAP":
/*!******************************!*\
  !*** ./src/js/tinyConfig.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appConfig */ \"FiFf\");\n\n\nlet config = {\n    selector: 'textarea',\n\n    schema: \"html5\",\n\n    plugins: [\n        \"advlist autolink autosave autoresize link image lists charmap hr anchor\",\n        \"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking\",\n        \"table template colorpicker paste textcolor importcss textpattern spellchecker\"\n    ],\n\n    external_plugins: {\n        'helloworld': '/dist/tiny/plugins/helloworld/plugin.js'\n    },\n\n    menubar: false\n};\n\nlet editorType = {\n    full: {\n        toolbar: [\n            'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright  | blockquote | formatselect | spellchecker',\n            'cut copy paste removeformat | searchreplace | bullist numlist | outdent indent | hr | link unlink anchor image code | inserttime',\n            'table | subscript superscript | charmap | visualchars visualblocks nonbreaking | template | helloworld'\n        ]\n    },\n    simple: {\n        toolbar: [\n            'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright | blockquote | table | spellchecker',\n            'cut copy paste removeformat | searchreplace | bullist numlist | code | charmap | visualblocks | link unlink'\n        ],\n    }\n};\n\n\nlet tinyConfig = {\n    getAPIKey: function () {\n        return _appConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('tiny.key');\n    },\n    getConfig: function (key = 'full') {\n        if (!key || !editorType.hasOwnProperty(key))\n        {\n            // default to full if there is a key, but it doesn't exist\n            key = 'full';\n        }\n        return Object.assign({}, config, editorType[key]);\n    }\n};\n\nObject.freeze(tinyConfig);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tinyConfig);\n\n//# sourceURL=webpack:///./src/js/tinyConfig.js?");

/***/ }),

/***/ "b9Bm":
/*!*****************************************************************!*\
  !*** ./src/components/tiny-editor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_tiny_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./tiny-editor.vue?vue&type=script&lang=js& */ \"gc64\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_tiny_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/tiny-editor.vue?");

/***/ }),

/***/ "gc64":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/tiny-editor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_tinyConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/tinyConfig */ \"QVAP\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: 'tiny-editor',\n    components: {\n        editor: () => __webpack_require__.e(/*! import() | tinymce */ \"tinymce\").then(__webpack_require__.bind(null, /*! @tinymce/tinymce-vue */ \"ynI1\")),\n    },\n    computed: {\n        getTinyConfig: function () {\n            return _js_tinyConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConfig(this.type);\n        },\n        getTinyKey: function () {\n            return _js_tinyConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAPIKey();\n        }\n    },\n    data: function () {\n        return {\n            content: this.value, // default to the passed value\n            editor: false\n        }\n    },\n    props: {\n        value: {\n            type: String,\n            default: ''\n        },\n        readonly: {\n            type: Boolean,\n            required: false,\n            default: false\n        },\n        type: {\n            type: [Boolean, String],\n            default: false\n        }\n    },\n    methods: {\n        loaded: function (event, editor) {\n\n            // tiny has loaded, now say we are loaded\n\n            // update the editor\n            this.editor = editor;\n\n            // if readonly, set state\n            if (this.readonly)\n            {\n                this.editor.setMode('readonly');\n            }\n        },\n        update: function () {\n            // pass updated content back to the parent\n            this.$emit('input', this.content);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/components/tiny-editor.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "tInR":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tiny-editor.vue?vue&type=template&id=77c361fa& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"editor\", {\n    attrs: {\n      \"api-key\": _vm.getTinyKey,\n      init: _vm.getTinyConfig,\n      disabled: _vm.readonly\n    },\n    on: { onChange: this.update, onInit: this.loaded },\n    model: {\n      value: _vm.content,\n      callback: function($$v) {\n        _vm.content = $$v\n      },\n      expression: \"content\"\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/tiny-editor.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "zNfq":
/*!****************************************!*\
  !*** ./src/components/tiny-editor.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tiny_editor_vue_vue_type_template_id_77c361fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiny-editor.vue?vue&type=template&id=77c361fa& */ \"Fy+p\");\n/* harmony import */ var _tiny_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiny-editor.vue?vue&type=script&lang=js& */ \"b9Bm\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tiny_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tiny_editor_vue_vue_type_template_id_77c361fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tiny_editor_vue_vue_type_template_id_77c361fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/tiny-editor.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/tiny-editor.vue?");

/***/ })

}]);