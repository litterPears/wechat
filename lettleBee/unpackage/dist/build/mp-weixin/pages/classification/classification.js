(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classification/classification"],{"73f0":function(t,n,e){"use strict";(function(t){e("b39e");i(e("66fd"));var n=i(e("9d70"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"80b3":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={market:function(){return e.e("components/market/market").then(e.bind(null,"c677"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},8479:function(t,n,e){"use strict";e.r(n);var i=e("ca5f"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"99cc":function(t,n,e){"use strict";var i=e("f0e0"),o=e.n(i);o.a},"9d70":function(t,n,e){"use strict";e.r(n);var i=e("80b3"),o=e("8479");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("99cc");var c,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=r.exports},ca5f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("f04f"),o={data:function(){return{listsId:"",marketsTag:!1,list:[]}},onLoad:function(t){this.listsId=t.itemId},mounted:function(){this.list=i.specialList},methods:{targetList:function(t){this.listsId=t.id},scrolltolower:function(){console.log("12345678")},addCartGooods:function(){this.marketsTag=!0},goodDetails:function(){wx.navigateTo({url:"/pages/goodDetails/details"})}}};n.default=o},f0e0:function(t,n,e){}},[["73f0","common/runtime","common/vendor"]]]);