(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/listCompent/listCompent"],{"2db3":function(t,n,e){"use strict";e.r(n);var i=e("c553"),a=e("510d");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("3cc1");var u,r=e("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=o.exports},"3cc1":function(t,n,e){"use strict";var i=e("440a"),a=e.n(i);a.a},"440a":function(t,n,e){},"4ae8":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("f04f"),a={data:function(){return{listMsg:[]}},mounted:function(){this.listMsg=i.specialList.slice(0,8)},methods:{itemTarket:function(t){var n=t.id;wx.navigateTo({url:"/pages/classification/classification?itemId="+n})}}};n.default=a},"510d":function(t,n,e){"use strict";e.r(n);var i=e("4ae8"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=a.a},c553:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/listCompent/listCompent-create-component',
    {
        'components/listCompent/listCompent-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2db3"))
        })
    },
    [['components/listCompent/listCompent-create-component']]
]);
