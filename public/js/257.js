"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[257],{5498:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(3645),i=n.n(s)()((function(t){return t[1]}));i.push([t.id,"._1side_menu.toggled[data-v-1b6dc597]{left:-248px}.header.toggled[data-v-1b6dc597]{padding-left:0}.content.toggled[data-v-1b6dc597]{margin-left:0}@media screen and (max-width:768px){.content[data-v-1b6dc597]{margin-left:0}}",""]);const a=i},4257:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});n(7244);const s={components:{adminLayout:n(692).Z},props:{roles:Array,error:String,warning:String,success:String},data:function(){return{}},methods:{},mounted:function(){},created:function(){}};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("adminLayout",{scopedSlots:t._u([{key:"page-content",fn:function(){return[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"\n          _1adminOverveiw_table_recent\n          _box_shadow\n          _border_radious\n          _mar_b30\n          _p20\n        "},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("p",{staticClass:"_title0"},[t._v("Tags")])]),t._v(" "),n("div",{staticClass:"col-md-6 text-right"},[n("button",{staticClass:"btn btn-sm btn-success",on:{click:function(e){return e.preventDefault(),t.newTag()}}},[t._v("\n              Add\n            ")])])]),t._v(" "),t.roles.length>0?n("div",[n("div",{staticClass:"_overflow _table_div"},[n("table",{staticClass:"_table"},[n("tr",[n("th",[t._v("id")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Action")])]),t._v(" "),t._l(t.roles,(function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",{staticClass:"_table_name"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-sm btn-info",on:{click:function(n){return n.preventDefault(),t.editTag(e)}}},[t._v("\n                    Edit\n                  ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(n){return n.preventDefault(),t.delet(e)}}},[t._v("\n                    Delete\n                  ")])])])}))],2)])]):n("div",{staticClass:"text-center"},[t._v("Não há registros")])])])]},proxy:!0}])})}),[],!1,null,null,null).exports},692:(t,e,n)=>{n.d(e,{Z:()=>c});const s={name:"adminLayout",data:function(){return{url:""}},methods:{getURL:function(){this.url=window.location.pathname},btnToggle:function(){var t=document.getElementById("sidebar"),e=document.getElementById("header"),n=document.getElementById("content");t.classList.contains("toggled")?(t.classList.remove("toggled"),e.classList.remove("toggled"),n.classList.remove("toggled")):(t.classList.add("toggled"),e.classList.add("toggled"),n.classList.add("toggled"))}},created:function(){this.getURL()},mounted:function(){window.innerWidth<=660&&this.btnToggle()},computed:{menu:function(){return this.$page.props.menu}}};var i=n(3379),a=n.n(i),o=n(5498),r={insert:"head",singleton:!1};a()(o.Z,r);o.Z.locals;const c=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"_1side_menu",attrs:{id:"sidebar"}},[t._m(0),t._v(" "),n("div",{staticClass:"_1side_menu_content"},[t._m(1),t._v(" "),n("div",{staticClass:"_1side_menu_list"},[n("ul",{staticClass:"_1side_menu_list_ul"},[t._l(t.menu,(function(e,s){return n("li",{key:s},[n("Link",{class:{"router-link-exact-active":e.Link===t.url},attrs:{href:e.Link}},[n("i",{class:e.Icon}),t._v(t._s(e.Title)+"\n              ")])],1)})),t._v(" "),n("li",[n("Link",{attrs:{href:"/logout"}},[n("i",{staticClass:"fa-solid fa-arrow-right-from-bracket"}),t._v("Logout\n              ")])],1)],2)])])]),t._v(" "),n("div",{staticClass:"header",attrs:{id:"header"}},[n("div",{staticClass:"_2menu _box_shadow"},[n("div",{staticClass:"_2menu_logo"},[n("ul",{staticClass:"open_button"},[n("li",[n("Icon",{attrs:{type:"ios-list"},on:{click:function(e){return e.preventDefault(),t.btnToggle()}}})],1)])])])])]),t._v(" "),n("div",{staticClass:"content",attrs:{id:"content"}},[t._t("page-content")],2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_1side_menu_logo"},[n("h3",{staticStyle:{"text-align":"center"}},[t._v("Logo Image")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_1side_menu_img_name"},[n("p",{staticClass:"_1side_menu_name"},[t._v("Admin")])])}],!1,null,"1b6dc597",null).exports},1900:(t,e,n)=>{function s(t,e,n,s,i,a,o,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>s})}}]);