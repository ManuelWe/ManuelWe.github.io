(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1ef71984":"b92cbcdc","chunk-1fcff2aa":"1e37221f","chunk-2d22b933":"811e53ab","chunk-75c3b7c4":"e2e23f41","chunk-f9940cd6":"78a658c2"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1ef71984":1,"chunk-1fcff2aa":1,"chunk-75c3b7c4":1,"chunk-f9940cd6":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1ef71984":"3972ccda","chunk-1fcff2aa":"9f764848","chunk-2d22b933":"31d6cfe0","chunk-75c3b7c4":"08847e20","chunk-f9940cd6":"7d58996e"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0526":function(t,e,n){},"0c70":function(t,e,n){"use strict";var r=n("5356"),a=n.n(r);a.a},"1c45":function(t,e,n){},"2d50":function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),o=a.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),i={getProducts:function(){return o.get("entries?content_type=produkt")}};e["a"]=i},4360:function(t,e,n){"use strict";n("7db0"),n("4160"),n("159b");var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{products:[],filteredProducts:[],images:[],filters:null},mutations:{SAVE_PRODUCTS:function(t,e){t.products=[],e.forEach((function(e){t.products.push(e.fields)}))},SAVE_FILTERED_PRODUCTS:function(t,e){t.filteredProducts=e},SAVE_IMAGES:function(t,e){t.images=e},SAVE_FILTERS:function(t,e){t.filters=e}},actions:{saveProducts:function(t,e){var n=t.commit;n("SAVE_PRODUCTS",e)},saveFilteredProducts:function(t,e){var n=t.commit;n("SAVE_FILTERED_PRODUCTS",e)},saveImages:function(t,e){var n=t.commit;n("SAVE_IMAGES",e)},saveFilters:function(t,e){var n=t.commit;n("SAVE_FILTERS",e)}},getters:{getProducts:function(t){return t.products},getProductByArtNr:function(t){return function(e){return t.products.find((function(t){return t.ArtNr===e}))}},getFilteredProducts:function(t){return t.filteredProducts},getImageByArtNr:function(t){return function(e){var n=t.images.find((function(t){return t.ArtNr===e}));if(void 0===n)try{return t.images.find((function(t){return"default"===t.ArtNr})).url}catch(r){return null}return n.url}},getFilters:function(t){return t.filters}}})},5356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("289d"),o=(n("5abe"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"landingPage"}}),n("Header",{directives:[{name:"show",rawName:"v-show",value:"/"!==t.$route.path,expression:"$route.path !== '/'"}],attrs:{"displayed-time":t.displayedTime}}),"/"!==t.$route.path?n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("main",{attrs:{role:"main"}},[n("router-view")],1),n("Footer")],1)]):t._e(),n("b-modal",{attrs:{active:t.showTimeoutModal,"has-modal-card":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.showTimeoutModal=e}}},[n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v(" Rückkehr zur Startseite ")])]),n("section",{staticClass:"modal-card-body"},[t._v(" Zurück zur Startseite in 20 Sekunden! ")]),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-info",on:{click:function(e){t.showTimeoutModal=!1}}},[t._v(" Noch nicht ")])])])])],1)}),i=[],s=(n("4160"),n("b0c0"),n("b65f"),n("ac1f"),n("5319"),n("159b"),n("2d50")),c=n("ded0"),u=n("bc3a"),l=n.n(u),d=l.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),f={getApiVersion:function(){return d.get("entries/7pxZeqDhHCKLsgIxIzi0wC")}},h=f,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"products"},"aria-label":"Produkte"}},[n("button",{staticClass:"button"},[t._v(" Produkte ")])])],1),n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"kreuztabelle"},"aria-label":"Kreuztabelle"}},[n("button",{staticClass:"button"},[t._v(" Allergene ")])])],1),n("div",{staticClass:"column has-text-centered"},[n("router-link",{attrs:{to:{name:"products"},"aria-label":"Produkte"}},[n("button",{staticClass:"button"},[t._v(" Torten ")])])],1)])])},p=[],g=(n("b6ac"),n("2877")),v={},b=Object(g["a"])(v,m,p,!1,null,"087c90d9",null),k=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{id:"headerBar"}},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("button",{staticClass:"button is-medium returnButton",style:{visibility:"product"===t.$route.name?"visible":"hidden"},on:{click:function(e){return t.previousPage()}}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-arrow-left fa-2x"})])])])],1),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("h1",{staticClass:"is-size-2"},[t._v(" "+t._s(t.headerText)+" ")])])],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("span",{staticClass:"is-pulled-right is-size-6"},[n("i",{staticClass:"fas fa-history"}),n("span",[t._v(" "+t._s(t.displayedTime)+" ")])])])],1)],2)},w=[],S={props:{displayedTime:{type:String,required:!0,default:"3min"}},computed:{headerText:function(){if("products"===this.$route.name)return"Backwaren";if("product"===this.$route.name){var t=this.getProduct(this.$route.params.ArtNr);if(t)return t.Artikelbezeichnung}return"kreuztabelle"===this.$route.name?"Kreuztabelle":""},getProduct:function(){return this.$store.getters.getProductByArtNr}},methods:{previousPage:function(){this.$router.go(-1)}}},P=S,A=(n("0c70"),Object(g["a"])(P,y,w,!1,null,"4b86ebd0",null)),_=A.exports,C={components:{Footer:k,Header:_},data:function(){return{timerLength:180,timer:this.timerLength,displayedTime:"3min",showTimeoutModal:!1}},created:function(){var t=this;setInterval((function(){return t.getApiVersion()}),1e3)},mounted:function(){this.inactivityTimer();var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.replace(t))},methods:{inactivityTimer:function(){var t=this,e=function(){"landingPage"!==t.$route.name&&(t.showTimeoutModal=!1,t.$router.push({name:"landingPage"}))},n=function(){t.timer=t.timerLength};setInterval((function(){"landingPage"!==t.$route.name&&(t.timer-=1,t.displayedTime="".concat(Math.trunc(t.timer/60)+1,"min"),t.timer<61&&(t.displayedTime="".concat(t.timer,"s"),21===t.timer?t.showTimeoutModal=!0:0===t.timer&&e()))}),1e3),window.onload=n,document.onmousemove=n,document.onkeypress=n},getApiVersion:function(){var t=this;h.getApiVersion().then((function(e){var n=e.data.fields.version;(null===localStorage.getItem("apiVersion")||localStorage.getItem("apiVersion")<n)&&(t.getProducts(),t.getImages(),localStorage.setItem("apiVersion",n))}))},getProducts:function(){var t=this;s["a"].getProducts().then((function(e){t.$store.dispatch("saveProducts",e.data.items)}))},getImages:function(){var t=this;c["a"].getImages().then((function(e){var n=[];e.data.items.forEach((function(t){n.push({ArtNr:t.fields.title,url:t.fields.file.url})})),t.$store.dispatch("saveImages",n)}))}}},T=C,E=(n("afb1"),Object(g["a"])(T,o,i,!1,null,"4e71f38c",null)),I=E.exports,x=n("4360"),V=n("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(t){console.log("Service worker has been registered."),setInterval((function(){t.update()}),1e3)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),navigator.serviceWorker.ready.then((function(t){t.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var M=n("8c4f"),N=function(){return n.e("chunk-1fcff2aa").then(n.bind(null,"d115"))},O=function(){return n.e("chunk-1ef71984").then(n.bind(null,"e6dc"))},$=function(){return n.e("chunk-f9940cd6").then(n.bind(null,"d2f1"))},j=function(){return n.e("chunk-75c3b7c4").then(n.bind(null,"5f21"))},B=function(){return n.e("chunk-2d22b933").then(n.bind(null,"f00c"))};r["a"].use(M["a"]);var L=[{path:"/",name:"landingPage",components:{landingPage:N}},{path:"/produkte",name:"products",component:O},{path:"/produkte/:ArtNr",name:"product",component:$},{path:"/kreuztabelle",name:"kreuztabelle",component:j},{path:"*",name:"default",component:B}],z=new M["a"]({mode:"history",routes:L}),R=z;r["a"].use(a["a"]),r["a"].config.productionTip=!1,new r["a"]({router:R,store:x["a"],render:function(t){return t(I)}}).$mount("#app")},afb1:function(t,e,n){"use strict";var r=n("1c45"),a=n.n(r);a.a},b6ac:function(t,e,n){"use strict";var r=n("0526"),a=n.n(r);a.a},ded0:function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),o=a.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),i={getImages:function(){return o.get("assets")}};e["a"]=i}});
//# sourceMappingURL=app.4389aea7.js.map