(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/header"],{297:
/*!*******************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/header.vue ***!
  \*******************************************************/
/*! no static exports found */function(e,t,r){"use strict";r.r(t);var a=r(/*! ./header.vue?vue&type=template&id=b86c55f0&scoped=true& */298),n=r(/*! ./header.vue?vue&type=script&lang=js& */300);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r(/*! ./header.vue?vue&type=style&index=0&id=b86c55f0&scoped=true&lang=less& */302);var o,c=r(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),u=Object(c["default"])(n["default"],a["render"],a["staticRenderFns"],!1,null,"b86c55f0",null,!1,a["components"],o);u.options.__file="components/header.vue",t["default"]=u.exports},298:
/*!**************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/header.vue?vue&type=template&id=b86c55f0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,r){"use strict";r.r(t);var a=r(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./header.vue?vue&type=template&id=b86c55f0&scoped=true& */299);r.d(t,"render",(function(){return a["render"]})),r.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),r.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),r.d(t,"components",(function(){return a["components"]}))},299:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/header.vue?vue&type=template&id=b86c55f0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,r){"use strict";var a;r.r(t),r.d(t,"render",(function(){return n})),r.d(t,"staticRenderFns",(function(){return o})),r.d(t,"recyclableRender",(function(){return i})),r.d(t,"components",(function(){return a}));var n=function(){var e=this,t=e.$createElement;e._self._c},i=!1,o=[];n._withStripped=!0},300:
/*!********************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */function(e,t,r){"use strict";r.r(t);var a=r(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./header.vue?vue&type=script&lang=js& */301),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},301:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x_w.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x_w.png"}},computed:{BoxHeight:function(){var t=e.getStorageSync("data_height")?e.getStorageSync("data_height"):this.$store.state.data_height;console.log("gru",t);var r=0,a=parseInt(t)+e.upx2px(88);return r=a&&a>0?a:e.upx2px(88),a+=44,console.log("height",r),e.setStorageSync("nav_height",r),r+"px"},halfWidth:function(){var t=e.getStorageSync("data_height")?e.getStorageSync("data_height"):this.$store.state.data_height;return console.log("gruu",t),t+"px"}},created:function(){console.log("BoxHeight",this.BoxHeight)},props:{title:{},returnR:{},navWhite:{},returnFlag:{},border:{},ishead_w:{},rightText:{},rightIcon:{},bgColor:{type:Array|Object,default:function(){return[{item:"#014343"},{item:"#014343"}]}}},methods:{_back1:function(){switch(this.flag=!1,Number.parseInt(this.returnR)){case 1:e.navigateBack({delta:2});break;case 2:e.switchTab({url:"/pages/tabBar/shoppingCart"});break;case 3:e.redirectTo({url:"/pages/login/login.vue"});break;case 4:e.navigateBack({delta:3});break;case 5:window.location.href="/h5/#/pages/order/myOrder",e.redirectTo({url:"/pages/order/myOrder"});break;case 6:e.switchTab({url:"/pages/tabBar/home"});break;case 7:e.switchTab({url:"/pages/tabBar/my"});break;case 8:e.switchTab({url:"/pages/tabBar/my"});break;case 9:e.redirectTo({url:"/pagesA/myStore/myStore"});break;case 10:e.redirectTo({url:"/pagesA/distribution/distribution_center"});break;default:getCurrentPages().length>1?e.navigateBack({delta:1}):e.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}}};t.default=r}).call(this,r(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},302:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/header.vue?vue&type=style&index=0&id=b86c55f0&scoped=true&lang=less& ***!
  \*****************************************************************************************************************/
/*! no static exports found */function(e,t,r){"use strict";r.r(t);var a=r(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./header.vue?vue&type=style&index=0&id=b86c55f0&scoped=true&lang=less& */303),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},303:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/header.vue?vue&type=style&index=0&id=b86c55f0&scoped=true&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,r){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/header.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/header-create-component',
    {
        'components/header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(297))
        })
    },
    [['components/header-create-component']]
]);
