(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tag-tag"],{1067:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-card[data-v-bda8699c]{margin-left:%?24?%;margin-right:%?24?%;background:#fff;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.uni-card[data-v-bda8699c]:after{content:"";position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.uni-card__footer[data-v-bda8699c],.uni-card__header[data-v-bda8699c]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?16?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-card__header[data-v-bda8699c]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card__header-title[data-v-bda8699c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-right:%?16?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-card__header-title-text[data-v-bda8699c]{font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-card__header-extra-img-view[data-v-bda8699c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uni-card__header-extra-img[data-v-bda8699c]{height:%?40?%;width:%?40?%;margin-right:%?16?%}.uni-card__header-extra-text[data-v-bda8699c]{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:30%;margin-left:%?16?%;font-size:%?28?%;text-align:right;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-card__content--pd[data-v-bda8699c]{padding:%?16?%}.uni-card__footer[data-v-bda8699c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#999;font-size:%?24?%;padding-top:0}.uni-card--full[data-v-bda8699c]{margin:0}',""])},3458:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("af8a"));function n(t){return t&&t.__esModule?t:{default:t}}var s={components:{uniCard:a.default},data:function(){return{defaultIcon:"http://placehold.it/75x75",categories:[],publishers:[],areas:[],subjects:[]}},onShow:function(){this.obtainCategories(),this.obtainAreas(),this.obtainPublishers()},methods:{goList:function(t){uni.navigateTo({url:"../list/list?type="+t.type+"&value="+JSON.stringify(t.value)})},obtainCategories:function(){var t=this;uni.request({url:this.$serverUrl2+"/categories/",method:"GET",success:function(e){200===e.statusCode&&(t.categories=e.data)}})},obtainPublishers:function(){var t=this;uni.request({url:this.$serverUrl2+"/publishers/",method:"GET",success:function(e){200===e.statusCode&&(t.publishers=e.data)}})},obtainAreas:function(){var t=this;uni.request({url:this.$serverUrl2+"/areas/",method:"GET",success:function(e){200===e.statusCode&&(t.areas=e.data)}})}}};e.default=s},"5f71":function(t,e,i){"use strict";var a=i("f804"),n=i.n(a);n.a},"7f04":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[i("uni-card",{attrs:{"is-full":"false",title:"相册内容分类",thumbnail:"http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}},[i("v-uni-view",{staticClass:"tags"},[t._l(t.categories,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tag",on:{click:function(i){i=t.$handleEvent(i),t.goList({type:"category",value:e})}}},[i("v-uni-text",{staticClass:"tag-text"},[t._v(t._s(e.name))])],1)]})],2)],1),i("uni-card",{attrs:{"is-full":"false",title:"相册地域分类",thumbnail:"http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}},[i("v-uni-view",{staticClass:"tags"},[t._l(t.areas,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tag",on:{click:function(i){i=t.$handleEvent(i),t.goList({type:"area",value:e})}}},[i("v-uni-text",{staticClass:"tag-text"},[t._v(t._s(e.name))])],1)]})],2)],1),i("uni-card",{attrs:{"is-full":"false",title:"相册发布者",thumbnail:"http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}},[i("v-uni-view",{staticClass:"tags"},[t._l(t.publishers,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tag",on:{click:function(i){i=t.$handleEvent(i),t.goList({type:"publisher",value:e})}}},[i("v-uni-text",{staticClass:"tag-text"},[t._v(t._s(e.name))])],1)]})],2)],1),i("uni-card",{attrs:{"is-full":"false",title:"相册专题系列",thumbnail:"http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}},[i("v-uni-view",{staticClass:"tags"},[t._l(t.subjects,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tag",on:{click:function(i){i=t.$handleEvent(i),t.goList({type:"subject",value:e})}}},[i("v-uni-text",{staticClass:"tag-text"},[t._v(t._s(e.name))])],1)]})],2)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"93e4":function(t,e,i){"use strict";i.r(e);var a=i("7f04"),n=i("c078");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var r=i("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"236b77f2",null);e["default"]=o.exports},a3bb:function(t,e,i){"use strict";i.r(e);var a=i("a771"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},a771:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-card",props:{title:String,extra:String,note:String,thumbnail:String,isFull:{type:[Boolean,String],default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},af8a:function(t,e,i){"use strict";i.r(e);var a=i("e5e7"),n=i("a3bb");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5f71");var r=i("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"bda8699c",null);e["default"]=o.exports},c078:function(t,e,i){"use strict";i.r(e);var a=i("3458"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},e5e7:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:!0===t.isFull||"true"===t.isFull?"uni-card--full":"",on:{click:function(e){e=t.$handleEvent(e),t.onClick(e)}}},[t.title?i("v-uni-view",{staticClass:"uni-card__header"},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-extra-img-view"},[i("v-uni-image",{staticClass:"uni-card__header-extra-img",attrs:{src:t.thumbnail}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-title-text"},[t._v(t._s(t.title))]),t.extra?i("v-uni-view",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))]):t._e()],1):t._e(),i("v-uni-view",{staticClass:"uni-card__content uni-card__content--pd"},[t._t("default")],2),t.note?i("v-uni-view",{staticClass:"uni-card__footer"},[t._v(t._s(t.note))]):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f804:function(t,e,i){var a=i("1067");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cb753e6a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);