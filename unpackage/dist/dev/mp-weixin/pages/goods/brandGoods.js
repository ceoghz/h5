(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/brandGoods"],{325:
/*!*****************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/head.vue ***!
  \*****************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! ./head.vue?vue&type=template&id=3de01b9b&scoped=true& */326),o=e(/*! ./head.vue?vue&type=script&lang=js& */328);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e(/*! ./head.vue?vue&type=style&index=0&id=3de01b9b&lang=less&scoped=true& */330);var a,u=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"3de01b9b",null,!1,r["components"],a);c.options.__file="components/head.vue",n["default"]=c.exports},326:
/*!************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/head.vue?vue&type=template&id=3de01b9b&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./head.vue?vue&type=template&id=3de01b9b&scoped=true& */327);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},327:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/head.vue?vue&type=template&id=3de01b9b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return o})),e.d(n,"staticRenderFns",(function(){return a})),e.d(n,"recyclableRender",(function(){return i})),e.d(n,"components",(function(){return r}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=!1,a=[];o._withStripped=!0},328:
/*!******************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/head.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./head.vue?vue&type=script&lang=js& */329),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},329:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/head.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{title:{type:String,default:"页面标题"},isBack:{type:Boolean,default:!0},bgColor:{type:String,default:"#ffffff"},Color:{type:String,default:"#000000"}},data:function(){return{bot_height:0}},methods:{backClick:function(){t.navigateBack({delta:1})}},computed:{BoxHeight:function(){var n=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height,e=0,r=parseInt(n)+t.upx2px(88);return e=r&&r>0?r:t.upx2px(88),r+=44,this.bot_height=e-n+"px",t.setStorageSync("nav_height",e),console.log("height",e),console.log("height",this.bot_height),e+"px"},halfWidth:function(){var n=t.getStorageSync("data_height")?t.getStorageSync("data_height"):this.$store.state.data_height;return console.log("gruu",n),n+"px"}}};n.default=e}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},330:
/*!***************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/head.vue?vue&type=style&index=0&id=3de01b9b&lang=less&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./head.vue?vue&type=style&index=0&id=3de01b9b&lang=less&scoped=true& */331),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},331:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/head.vue?vue&type=style&index=0&id=3de01b9b&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){},447:
/*!*******************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/main.js?{"page":"pages%2Fgoods%2FbrandGoods"} ***!
  \*******************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){e(/*! uni-pages */4);r(e(/*! vue */2));var n=r(e(/*! ./pages/goods/brandGoods.vue */448));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},448:
/*!************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue ***!
  \************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! ./brandGoods.vue?vue&type=template&id=11632e3e&scoped=true& */449),o=e(/*! ./brandGoods.vue?vue&type=script&lang=js& */451);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e(/*! ./brandGoods.vue?vue&type=style&index=0&id=11632e3e&scoped=true&lang=less& */453);var a,u=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"11632e3e",null,!1,r["components"],a);c.options.__file="pages/goods/brandGoods.vue",n["default"]=c.exports},449:
/*!*******************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue?vue&type=template&id=11632e3e&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./brandGoods.vue?vue&type=template&id=11632e3e&scoped=true& */450);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},450:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue?vue&type=template&id=11632e3e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return o})),e.d(n,"staticRenderFns",(function(){return a})),e.d(n,"recyclableRender",(function(){return i})),e.d(n,"components",(function(){return r}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.goodsData,(function(n,e){var r=t.__get_orig(n),o=n.price.split("."),i=n.price.split(".");return{$orig:r,g0:o,g1:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=!1,a=[];o._withStripped=!0},451:
/*!*************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./brandGoods.vue?vue&type=script&lang=js& */452),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},452:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(e(/*! ../../components/head.vue */325));function r(t){return t&&t.__esModule?t:{default:t}}var o={components:{},data:function(){return{fenId:"",title:"",goodsData:[]}},onLoad:function(){var t=getCurrentPages(),n=t[t.length-1].options;this.fenId=n.id,this.title=n.pname,console.log(this.fenId,this.title,"ggg"),this.init()},methods:{init:function(){var t=this;this.$http.post("",{store_id:"1",store_type:"2",module:"app",action:"index",app:"productByBrand",brand_id:this.fenId}).then((function(n){console.log(n,"hh"),t.goodsData=n.data.data.data}))},back:function(){t.navigateBack({delta:1})},alikeGoods:function(n){t.navigateTo({url:"/pages/goods/alikeGoods?id="+n})},goodsDetail:function(n){t.navigateTo({url:"/pages/goods/goodsDetail?id="+n})}}};n.default=o}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},453:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue?vue&type=style&index=0&id=11632e3e&scoped=true&lang=less& ***!
  \**********************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./brandGoods.vue?vue&type=style&index=0&id=11632e3e&scoped=true&lang=less& */454),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},454:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/pages/goods/brandGoods.vue?vue&type=style&index=0&id=11632e3e&scoped=true&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}},[[447,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/brandGoods.js.map