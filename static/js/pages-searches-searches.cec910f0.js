(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-searches-searches"],{"19ce":function(t,e,n){"use strict";n.r(e);var i=n("7464"),s=n("dca1");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"0578b708",null);e["default"]=r.exports},"46da":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s=n("2f62");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=(i={data:function(){return{refreshing:!1,providerList:[],list:[],search:"",fetchPageNum:1}},computed:a({},(0,s.mapState)(["userInfo"])),onReachBottom:function(){console.log("滑动到页面底部"),this.getData()},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onLoad:function(t){var e=this;this.search=t.search,setTimeout(function(){e.getData()},300)}},o(i,"onPullDownRefresh",function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()}),o(i,"onReachBottom",function(){console.log("上拉加载刷新"),this.fetchPageNum>4e3?this.loadMoreText="没有更多了":this.getData()}),o(i,"methods",{getData:function(){var t=this;uni.request({url:this.$serverUrl2+"/albums/",data:{page:this.refreshing?1:this.fetchPageNum,ordering:"-add_time",search:this.search},success:function(e){if(200!==e.statusCode)console.log("失败!");else{if(t.refreshing&&e.data.results[0].id===t.list[0].id)return uni.showToast({title:"已经最新",icon:"none"}),t.refreshing=!1,void uni.stopPullDownRefresh();t.refreshing?(t.refreshing=!1,uni.stopPullDownRefresh(),t.list=e.data.results,t.fetchPageNum=2):(t.list=t.list.concat(e.data.results),t.fetchPageNum+=1)}}})},goDetail:function(t){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent(JSON.stringify(t))})},collect:function(t){this.userInfo.hasLogin?uni.request({url:this.$serverUrl2+"/albumfavor/",data:{album:t.id},method:"POST",header:{Authorization:"JWT "+this.userInfo.token},success:function(t){201===t.statusCode?uni.showToast({icon:"none",title:"收藏成功"}):uni.showToast({icon:"none",title:""+t.data.non_field_errors[0]})}}):uni.showToast({icon:"none",title:"请登录后再收藏"})}}),i);e.default=r},7464:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"index"},[t._l(t.list,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"card",on:{click:function(n){n=t.$handleEvent(n),t.goDetail(e)}}},[n("v-uni-image",{staticClass:"card-img",attrs:{src:e.cover,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"card-num-view"},[t._v(t._s(e.img_num)+"P")]),n("v-uni-view",{staticClass:"card-bottm row"},[n("v-uni-view",{staticClass:"car-title-view row"},[n("v-uni-text",{staticClass:"card-title"},[t._v(t._s(e.name))])],1),n("v-uni-view",{staticClass:"card-share-view",on:{click:function(n){n.stopPropagation(),n=t.$handleEvent(n),t.collect(e)}}})],1)],1)]}),n("v-uni-text",{staticClass:"loadMore"},[t._v("加载中...")])],2)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},dca1:function(t,e,n){"use strict";n.r(e);var i=n("46da"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a}}]);