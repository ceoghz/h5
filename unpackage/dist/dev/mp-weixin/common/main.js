(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],[
/*!*****************************************!*\
  !*** C:/Users/love/Desktop/h52/main.js ***!
  \*****************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */4);var t=c(n(/*! vue */2)),o=c(n(/*! ./App */5)),a=(c(n(/*! ./components/laiketuiCommon.vue */13)),c(n(/*! ./utils/req/main.js */16)));n(/*! ./utils/request.js */18);var i=c(n(/*! ./store/index.js */20)),r=c(n(/*! ./utils/http/index.js */19));n(/*! ./utils/util */24);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){n.e(/*! require.ensure | components/header */"components/header").then(function(){return resolve(n(/*! ./components/header.vue */297))}.bind(null,n)).catch(n.oe)};t.default.prototype.$http=r.default,t.default.config.productionTip=!1,t.default.component("heads",f),o.default.mpType="app",t.default.prototype.$req=a.default;var d=new t.default(u({store:i.default},o.default));e(d).$mount()}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createApp"])},,,,
/*!*****************************************!*\
  !*** C:/Users/love/Desktop/h52/App.vue ***!
  \*****************************************/
/*! no static exports found */,function(e,t,n){"use strict";n.r(t);var o=n(/*! ./App.vue?vue&type=script&lang=js& */6);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n(/*! ./App.vue?vue&type=style&index=0&lang=css& */10);var i,r,c,s,u=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),l=Object(u["default"])(o["default"],i,r,!1,null,null,null,!1,c,s);l.options.__file="App.vue",t["default"]=l.exports},
/*!******************************************************************!*\
  !*** C:/Users/love/Desktop/h52/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */7),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(/*! vuex */8),a=i(n(/*! @/utils/tengxunmap/qqmap-wx-jssdk.js */9));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={onLaunch:function(){console.log("App Launch");var t=this;e.getSystemInfo({success:function(n){var o=n.statusBarHeight;e.setStorageSync("data_height",o),console.log(o),t.data_height(o)}}),this.getAddress()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},methods:c({getAddress:function(){console.log(6655555),e.getLocation({type:"gcj02",geocode:!0,success:function(t){console.log(55555555),console.log(55555555),console.log(55555555);t.latitude,t.longitude;var n=new a.default({key:"VNSBZ-UMKCU-ZTLVR-2NGQW-IQWZF-T3BM6"});n.reverseGeocoder({location:{latitude:t.latitude,longitude:t.longitude},success:function(t){console.log(t);var n={};n.latitude=t.result.location.lat,n.longitude=t.result.location.lng,n.address=t.result.ad_info.name,e.setStorageSync("address_info",n)},fail:function(e){console.error(e)},complete:function(e){console.log(e)}})}})}},(0,o.mapMutations)({data_height:"SET_DATA_HEIGHT"})),mounted:function(){}};t.default=u}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},,
/*!**************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */,function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */11),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){},
/*!***************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/laiketuiCommon.vue ***!
  \***************************************************************/
/*! no static exports found */,function(e,t,n){"use strict";n.r(t);var o=n(/*! ./laiketuiCommon.vue?vue&type=script&lang=js& */14);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var i,r,c,s,u=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),l=Object(u["default"])(o["default"],i,r,!1,null,null,null,!1,c,s);l.options.__file="components/laiketuiCommon.vue",t["default"]=l.exports},
/*!****************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/laiketuiCommon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./laiketuiCommon.vue?vue&type=script&lang=js& */15),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/laiketuiCommon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){function n(t){e.request({data:{module:"app",action:"login",app:"is_register",store_type:t},url:e.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){var n=t.data.is_register||1;e.setStorageSync("needRegister",n)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=!1,a=1,i="https://mall.lhsc99.cn",r="",c=i+"/"+r+"/",s=i+"/"+r+"/index.php?store_id="+a+"&",u=i+"/"+r+"/h5/#/",l=i+"/"+r+"/";function f(){}function d(t,n){var o=t;o.$store.state.access_id=e.getStorageSync("laiketuiAccessId")?e.getStorageSync("laiketuiAccessId"):e.getStorageSync("access_id");var a=o.$store.state.access_id;void 0==a&&(a="");var i={module:"app",action:"login",app:"token",access_id:a};e.request({url:s,data:i,success:function(t){if(404==t.data.code){e.showToast({title:o.language.laiketuiCommon.noLogin,duration:1e3,icon:"none"});var a=n;setTimeout((function(){e.navigateTo({url:a})}),1e3)}else o.changeLoginStatus()}})}function g(t){var n={module:"app",action:"message",app:"getWXTemplates",store_type:1};t.$req.post({data:n}).then((function(e){var n=e.data,o=e.code;200==o?t.tmplIds=n:console.log("获取微信小程序订阅模板失败")})).catch((function(n){e.showToast({title:t.language.laiketuiCommon.forFailure,duration:1e3,icon:"none"})}))}function p(t){var n=t;return new Promise((function(o,a){var i=e.getStorageSync("access_id")?e.getStorageSync("access_id"):t.$store.state.access_id;n.$store.state.access_id=i;var r=n.$store.state.access_id,c={module:"app",action:"login",app:"token",access_id:r};e.request({url:n.$store.state.url,data:c,success:function(t){var a=t.data.code;200==a?(n.$store.state.access_id=r,n.access_id=n.$store.state.access_id,e.setStorageSync("laiketuiAccessId",n.access_id),e.setStorageSync("online",!0)):(n.$store.state.access_id="",n.access_id="",e.setStorageSync("laiketuiAccessId",""),e.setStorageSync("online",!1)),o(n)},fail:function(e){a(e)}})}))}function m(){return new Promise((function(e,t){v().then((function(e){return _(e)})).then((function(){e("")})),n(1)}))}function y(t){var n=e.getStorageSync("userinfo")||[];n["openid"]&&t.$refs.lktAuthorizeComp.closeWin()}function _(t){var n=s,o=u,a=l;return new Promise((function(i,r){var c={module:"app",action:"url",app:"geturl",get:"mini_url,H5,endurl"};e.request({data:c,url:t,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){200==t.data.code&&(n=t.data.url.mini_url,o=t.data.url.H5,a=t.data.url.endurl),n+="&store_type=1",e.setStorageSync("url",n),e.setStorageSync("h5_url",o),e.setStorageSync("endurl",a),i("")}})}))}function v(){var t=e.getExtConfigSync?e.getExtConfigSync():{},o="";return o=t.url?t.url:s,o+="store_type=1",e.setStorageSync("url",o),n(1),Promise.resolve(o)}function S(){var e=plus.push.getClientInfo();return e.clientid}function h(e,t,n){var o=e,a=o.clicktimes.length,i=(new Date).getTime(),r=a>0?o.clicktimes[a-1]:i;o.clicktimes.push(i),a=o.clicktimes.length,(1==a||i-r>=1e3)&&(n?t(n):t()),a>=3&&o.clicktimes.shift()}function O(e){setTimeout((function(){e.fastTap||(e.fastTap=!0),e.isClick&&(e.isClick=!1),e.signFinish||(e.signFinish=!0)}),1500)}function b(t,n){var o=t,a=e.getStorageSync("access_id")?e.getStorageSync("access_id"):o.$store.state.access_id,i={module:"app",action:"login",app:"token",access_id:a};return new Promise((function(t,r){e.request({url:o.$store.state.url,data:i,success:function(i){var r=i.data.code;if(200==r&&1==i.data.login_status)o.$store.state.access_id=a,o.access_id=o.$store.state.access_id,e.setStorageSync("laiketuiAccessId",o.access_id),e.setStorageSync("online",!0),t(o);else if(200==r&&0==i.data.login_status)t({visitor:!0});else if(404==r)if(o._back1&&(o._back1,1))"function"!=typeof o._back1&&"FUNCTION"!=typeof o._back1||o._back1();else{var c=o.language.laiketuiCommon.noLogin;"en"==e.getStorageSync("language")&&(c="Not login, please login"),e.showToast({title:c,icon:"none",duration:1500}),setTimeout((function(){n?e.navigateTo({url:n}):e.navigateTo({url:"/pages/login/login?toHome=true"})}),1e3)}else if(o.$store.state.access_id="",o.access_id="",e.setStorageSync("laiketuiAccessId",""),e.setStorageSync("online",!1),e.removeStorage({key:"history"}),e.removeStorage({key:"user_phone"}),e.removeStorage({key:"hotStatu"}),e.removeStorage({key:"access_id"}),o.$store.state.cart=[],o.$store.state.cart_id=[],o.$store.state.nCart=[],o.timeout&&(o.timeout,1))"function"!=typeof o.timeout&&"FUNCTION"!=typeof o.timeout||o.timeout();else{var s=o.language.laiketuiCommon.noLogin;"en"==e.getStorageSync("language")&&(s="Not login, please login"),e.showToast({title:s,icon:"none",duration:1500}),setTimeout((function(){n?e.navigateTo({url:n}):e.navigateTo({url:"/pages/login/login?toHome=true"})}),1e3)}},fail:function(e){r(e)}})}))}function T(){var t="未登录，请先登录";"en"==e.getStorageSync("language")&&(t="Not login, please login"),e.showToast({title:t,icon:"none",duration:1500}),setTimeout((function(){e.navigateTo({url:"../../pages/login/login"})}),1e3)}function k(){return new Promise((function(e){e("")}))}function w(e){var t=m();return!e||"function"!=typeof e&&"FUNCTION"!=typeof e||t.then((function(){e()})),t}function P(){return!0}var j={RL:1,NRL:2},L={IS_DEBUG:o,LKT_STORE_ID:a,LKT_ROOT_VERSION_URL:c,LKT_ROOT_URL:i,LKT_API_URL:s,LKT_H5_DEFURL:u,LKT_ENDURL:l,LKT_NRL_TYPE:j,toLogin:d,getLKTAccessToken:p,getClientid:S,laiketuiNoDoublePress:h,laikeCheckTimeout:b,laikeVisitorToLogin:T,lktDelaySetVal:O,getLKTApiUrl:m,getMPAliAuthCode:k,getUrlFirst:w,getStoreType:f,ttIOSCantVisualpay:P,closeMPAuthWin:y,getWXTmplIds:g};t.default=L}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])}],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map