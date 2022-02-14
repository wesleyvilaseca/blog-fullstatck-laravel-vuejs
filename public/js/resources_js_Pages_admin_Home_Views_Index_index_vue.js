"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_admin_Home_Views_Index_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_admin_adminLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/admin/adminLayout.vue */ "./resources/js/layouts/admin/adminLayout.vue");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    adminLayout: _layouts_admin_adminLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "adminLayout",
  data: function data() {
    return {
      url: ""
    };
  },
  methods: {
    getURL: function getURL() {
      this.url = window.location.pathname;
    },
    btnToggle: function btnToggle() {
      var sidebar = document.getElementById("sidebar");
      var header = document.getElementById("header");
      var content = document.getElementById("content");

      if (sidebar.classList.contains("toggled")) {
        sidebar.classList.remove("toggled");
        header.classList.remove("toggled");
        content.classList.remove("toggled");
      } else {
        sidebar.classList.add("toggled");
        header.classList.add("toggled");
        content.classList.add("toggled");
      }
    }
  },
  created: function created() {
    this.getURL();
  },
  mounted: function mounted() {
    var w = window.innerWidth;
    if (w <= 660) this.btnToggle();
  },
  computed: {
    menu: function menu() {
      return this.$page.props.menu;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n._1side_menu.toggled[data-v-2612c485] {\r\n  left: -248px;\n}\n.header.toggled[data-v-2612c485] {\r\n  padding-left: 0px;\n}\n.content.toggled[data-v-2612c485] {\r\n  margin-left: 0px;\n}\n@media screen and (max-width: 768px) {\n.content[data-v-2612c485] {\r\n    margin-left: 0px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_style_index_0_id_2612c485_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_style_index_0_id_2612c485_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_style_index_0_id_2612c485_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/admin/Home/Views/Index/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/admin/Home/Views/Index/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_bb53caa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=bb53caa6& */ "./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=template&id=bb53caa6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_bb53caa6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_bb53caa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/admin/Home/Views/Index/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/admin/adminLayout.vue":
/*!****************************************************!*\
  !*** ./resources/js/layouts/admin/adminLayout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminLayout_vue_vue_type_template_id_2612c485_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminLayout.vue?vue&type=template&id=2612c485&scoped=true& */ "./resources/js/layouts/admin/adminLayout.vue?vue&type=template&id=2612c485&scoped=true&");
/* harmony import */ var _adminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/admin/adminLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _adminLayout_vue_vue_type_style_index_0_id_2612c485_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css& */ "./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminLayout_vue_vue_type_template_id_2612c485_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _adminLayout_vue_vue_type_template_id_2612c485_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2612c485",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/admin/adminLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/admin/adminLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/admin/adminLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_style_index_0_id_2612c485_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=style&index=0&id=2612c485&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=template&id=bb53caa6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=template&id=bb53caa6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bb53caa6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bb53caa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bb53caa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=bb53caa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=template&id=bb53caa6&");


/***/ }),

/***/ "./resources/js/layouts/admin/adminLayout.vue?vue&type=template&id=2612c485&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/layouts/admin/adminLayout.vue?vue&type=template&id=2612c485&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_template_id_2612c485_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_template_id_2612c485_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminLayout_vue_vue_type_template_id_2612c485_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminLayout.vue?vue&type=template&id=2612c485&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=template&id=2612c485&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=template&id=bb53caa6&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/admin/Home/Views/Index/index.vue?vue&type=template&id=bb53caa6& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("adminLayout", {
    scopedSlots: _vm._u([
      {
        key: "page-content",
        fn: function () {
          return [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "\n            _1adminOverveiw_card\n            _box_shadow\n            _border_radious\n            _mar_b30\n            _1adminOverveiw_bg_one\n          ",
                  },
                  [
                    _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_num" },
                        [_vm._v("3")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_title" },
                        [_vm._v("Today's News")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "_1adminOverveiw_card_right" },
                      [_c("Icon", { attrs: { type: "ios-paper" } })],
                      1
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "\n            _1adminOverveiw_card\n            _box_shadow\n            _border_radious\n            _mar_b30\n            _1adminOverveiw_bg_two\n          ",
                  },
                  [
                    _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_num" },
                        [_vm._v("29")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_title" },
                        [_vm._v("Total News")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "_1adminOverveiw_card_right" },
                      [_c("Icon", { attrs: { type: "ios-paper-outline" } })],
                      1
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "\n            _1adminOverveiw_card\n            _box_shadow\n            _border_radious\n            _mar_b30\n            _1adminOverveiw_bg_two\n          ",
                  },
                  [
                    _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_num" },
                        [_vm._v("29")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_title" },
                        [_vm._v("Features News")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "_1adminOverveiw_card_right" },
                      [_c("Icon", { attrs: { type: "md-copy" } })],
                      1
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "\n            _1adminOverveiw_card\n            _box_shadow\n            _border_radious\n            _mar_b30\n            _1adminOverveiw_bg_two\n          ",
                  },
                  [
                    _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_num" },
                        [_vm._v("29")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "_1adminOverveiw_card_left_title" },
                        [_vm._v("Card News")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "_1adminOverveiw_card_right" },
                      [_c("Icon", { attrs: { type: "md-list-box" } })],
                      1
                    ),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "\n        _1adminOverveiw_table_recent\n        _box_shadow\n        _border_radious\n        _mar_b30\n        _p20\n      ",
              },
              [
                _c("p", { staticClass: "_title0" }, [_vm._v("Recent News")]),
                _vm._v(" "),
                _c("div", { staticClass: "_overflow _table_div" }, [
                  _c("table", { staticClass: "_table" }, [
                    _c("tr", [
                      _c("th", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Title")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Category")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Action")]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("25-05-19")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(
                          '\n              Manhattan\'s art center "Shed" opening ceremony\n            '
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Economy")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn view_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                View\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn edit_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Edit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn2",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Features\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn3",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Card\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Delete\n              ")]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("25-05-19")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(
                          "\n              Are Trump era is having an impact on what 's future voters\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Social")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn view_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                View\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn edit_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Edit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn2",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Features\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn3",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Card\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Delete\n              ")]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("25-05-19")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(
                          '\n              Manhattan\'s art center "Shed" opening ceremony\n            '
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Economy")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn view_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                View\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn edit_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Edit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn2",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Features\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn3",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Card\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Delete\n              ")]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("25-05-19")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(
                          "\n              Are Trump era is having an impact on what 's future voters\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Social")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn view_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                View\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn edit_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Edit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn2",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Features\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn3",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Card\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Delete\n              ")]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("25-05-19")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(
                          "\n              Are Trump era is having an impact on what 's future voters\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Social")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn view_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                View\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn edit_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Edit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn2",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Features\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn3",
                            attrs: { type: "button" },
                          },
                          [
                            _vm._v(
                              "\n                Make Card\n              "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "_btn _action_btn make_btn1",
                            attrs: { type: "button" },
                          },
                          [_vm._v("\n                Delete\n              ")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("Page", { attrs: { total: 100 } }),
          ]
        },
        proxy: true,
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=template&id=2612c485&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/admin/adminLayout.vue?vue&type=template&id=2612c485&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "_1side_menu", attrs: { id: "sidebar" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "_1side_menu_content" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "_1side_menu_list" }, [
            _c(
              "ul",
              { staticClass: "_1side_menu_list_ul" },
              [
                _vm._l(_vm.menu, function (item, index) {
                  return _c(
                    "li",
                    { key: index },
                    [
                      _c(
                        "Link",
                        {
                          class: {
                            "router-link-exact-active": item.Link === _vm.url,
                          },
                          attrs: { href: item.Link },
                        },
                        [
                          _c("i", { class: item.Icon }),
                          _vm._v(_vm._s(item.Title) + "\n              "),
                        ]
                      ),
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("Link", { attrs: { href: "/logout" } }, [
                      _c("i", {
                        staticClass: "fa-solid fa-arrow-right-from-bracket",
                      }),
                      _vm._v("Logout\n              "),
                    ]),
                  ],
                  1
                ),
              ],
              2
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header", attrs: { id: "header" } }, [
        _c("div", { staticClass: "_2menu _box_shadow" }, [
          _c("div", { staticClass: "_2menu_logo" }, [
            _c("ul", { staticClass: "open_button" }, [
              _c(
                "li",
                [
                  _c("Icon", {
                    attrs: { type: "ios-list" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.btnToggle()
                      },
                    },
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content", attrs: { id: "content" } },
      [_vm._t("page-content")],
      2
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "_1side_menu_logo" }, [
      _c("h3", { staticStyle: { "text-align": "center" } }, [
        _vm._v("Logo Image"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "_1side_menu_img_name" }, [
      _c("p", { staticClass: "_1side_menu_name" }, [_vm._v("Admin")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);