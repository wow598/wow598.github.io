(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pwd-pwd"],{"167f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{mobile:"",password:""}},methods:{modifyPwd:function(){console.log("得到手机号:"+this.mobile+";得到密码:"+this.password)}}};i.default=a},8720:function(t,i,e){"use strict";e.r(i);var a=e("167f"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},ca8a:function(t,i,e){"use strict";e.r(i);var a=e("cb74"),n=e("8720");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);var u=e("2877"),l=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,"1cda4a8d",null);i["default"]=l.exports},cb74:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"loginView"},[e("v-uni-view",{staticClass:"input-view"},[e("v-uni-view",{staticClass:"label-view"},[e("v-uni-text",{staticClass:"label"},[t._v("手机号")])],1),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"input-view"},[e("v-uni-view",{staticClass:"label-view"},[e("v-uni-text",{staticClass:"label"},[t._v("新密码")])],1),e("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入新的密码"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),e("v-uni-view",{staticClass:"button-view"},[e("v-uni-button",{staticClass:"login",attrs:{type:"default","hover-class":"hover"},on:{click:function(i){i=t.$handleEvent(i),t.modifyPwd(i)}}},[t._v("修改密码")])],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})}}]);