(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22b933":"3b89edba","chunk-5c05b752":"0dc49075","chunk-5f4dd726":"95197c94","chunk-c34a69b8":"dfee0cd6","chunk-d7b0115c":"11f80d36","chunk-24eb0586":"d172b6cf","chunk-39c96bf4":"63b4a353"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5f4dd726":1,"chunk-c34a69b8":1,"chunk-24eb0586":1,"chunk-39c96bf4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22b933":"31d6cfe0","chunk-5c05b752":"31d6cfe0","chunk-5f4dd726":"92de41e1","chunk-c34a69b8":"d50ab65c","chunk-d7b0115c":"31d6cfe0","chunk-24eb0586":"4ad6129a","chunk-39c96bf4":"2845f8d6"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b68":function(e,t,n){"use strict";var r=n("8c36"),o=n.n(r);o.a},4360:function(e,t,n){"use strict";n("7db0"),n("4160"),n("159b");var r=n("2b0e"),o=n("2f62");r["a"].use(o["a"]),t["a"]=new o["a"].Store({state:{products:[],filteredProducts:[],images:[],filters:null},mutations:{SAVE_PRODUCTS:function(e,t){e.products=[],t.forEach((function(t){e.products.push(t.fields)}))},SAVE_FILTERED_PRODUCTS:function(e,t){e.filteredProducts=t},SAVE_IMAGES:function(e,t){e.images=t},SAVE_FILTERS:function(e,t){e.filters=t}},actions:{saveProducts:function(e,t){var n=e.commit;n("SAVE_PRODUCTS",t)},saveFilteredProducts:function(e,t){var n=e.commit;n("SAVE_FILTERED_PRODUCTS",t)},saveImages:function(e,t){var n=e.commit;n("SAVE_IMAGES",t)},saveFilters:function(e,t){var n=e.commit;n("SAVE_FILTERS",t)}},getters:{getProducts:function(e){return e.products},getProductByArtNr:function(e){return function(t){return e.products.find((function(e){return e.ArtNr===t}))}},getFilteredProducts:function(e){return e.filteredProducts},getImageByArtNr:function(e){return function(t){var n=e.images.find((function(e){return e.ArtNr===t}));if(void 0===n)try{return e.images.find((function(e){return"default"===e.ArtNr})).url}catch(r){return null}return n.url}},getFilters:function(e){return e.filters}}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("289d"),a=(n("5abe"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"landingPage"}}),"landingPage"!==e.$router.app._route.name?n("section",{staticClass:"section"},["dashboard"!==e.$router.app._route.name?n("button",{staticClass:"button returnButton",on:{click:function(t){return e.previousPage()}}},[e._m(0)]):e._e(),n("div",{staticClass:"container"},[n("main",{attrs:{role:"main"}},[n("router-view")],1),"landingPage"!==e.$router.app._route.name?n("Footer"):e._e()],1)]):e._e()],1)}),c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-arrow-left fa-2x"})])}],u=(n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"dashboard"},"aria-label":"Dashboard"}},[n("button",{staticClass:"button"},[e._v(" Home ")])])],1),n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"products"},"aria-label":"Produkte"}},[n("button",{staticClass:"button"},[e._v(" Produkte ")])])],1),n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"kreuztabelle"},"aria-label":"Kreuztabelle"}},[n("button",{staticClass:"button"},[e._v(" Allergene ")])])],1),n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"products"},"aria-label":"Produkte"}},[n("button",{staticClass:"button"},[e._v(" Torten ")])])],1)])])}),i=[],s=(n("ad50"),n("2877")),l={},d=Object(s["a"])(l,u,i,!1,null,"36cb5ae4",null),f=d.exports,p={components:{Footer:f},mounted:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))},methods:{previousPage:function(){this.$router.go(-1)}}},h=p,b=(n("2b68"),Object(s["a"])(h,a,c,!1,null,"938646aa",null)),m=b.exports,g=n("4360"),v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){console.log("Service worker has been registered."),setInterval((function(){e.update()}),1e3)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),navigator.serviceWorker.ready.then((function(e){e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var k=n("8c4f"),_=function(){return Promise.all([n.e("chunk-d7b0115c"),n.e("chunk-39c96bf4")]).then(n.bind(null,"d115"))},y=function(){return n.e("chunk-5f4dd726").then(n.bind(null,"7277"))},P=function(){return Promise.all([n.e("chunk-d7b0115c"),n.e("chunk-24eb0586")]).then(n.bind(null,"e6dc"))},w=function(){return n.e("chunk-5c05b752").then(n.bind(null,"d2f1"))},E=function(){return n.e("chunk-c34a69b8").then(n.bind(null,"5f21"))},S=function(){return n.e("chunk-2d22b933").then(n.bind(null,"f00c"))};r["a"].use(k["a"]);var A=[{path:"/",name:"landingPage",components:{landingPage:_}},{path:"/dashboard",name:"dashboard",component:y},{path:"/produkte",name:"products",component:P},{path:"/produkte/:ArtNr",name:"product",component:w,beforeEnter:function(e,t,n){console.log("here"),n()}},{path:"/kreuztabelle",name:"kreuztabelle",component:E},{path:"*",name:"default",component:S}],C=new k["a"]({mode:"history",routes:A}),O=C;r["a"].use(o["a"]),r["a"].config.productionTip=!1,new r["a"]({router:O,store:g["a"],render:function(e){return e(m)}}).$mount("#app")},"8c36":function(e,t,n){},ad50:function(e,t,n){"use strict";var r=n("bef0"),o=n.n(r);o.a},bef0:function(e,t,n){}});
//# sourceMappingURL=app.dea20d00.js.map