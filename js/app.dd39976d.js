(function(t){function e(e){for(var n,s,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2151:function(t,e,r){},"3edf":function(t,e,r){"use strict";var n=r("2151"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=r("289d"),o=(r("5abe"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("Footer"),r("main",{attrs:{role:"main"}},[r("router-view")],1),r("img",{attrs:{id:"test",src:t.test}})],1)])])}),s=[],c=(r("4160"),r("ac1f"),r("5319"),r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"columns is-mobile"},[r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"dashboard"}}},[r("button",{staticClass:"button"},[t._v(" Home ")])])],1),r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"products"}}},[r("button",{staticClass:"button"},[t._v(" Produkte ")])])],1),r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"products"}}},[r("button",{staticClass:"button"},[t._v(" Allergene ")])])],1),r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"products"}}},[r("button",{staticClass:"button"},[t._v(" Torten ")])])],1)])])}),i=[],u=(r("924f"),r("2877")),d={},l=Object(u["a"])(d,c,i,!1,null,"29eda7ac",null),p=l.exports,f=r("bc3a"),v=r.n(f),h=v.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),g={getProducts:function(){return h.get("entries?content_type=produkt")}},m=g,_=v.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),b={getImages:function(){return _.get("assets")}},k=b,y=(r("96cf"),r("1da1")),w=r("3f4f"),A=function(){if(!("indexedDB"in window))throw new Error("Browser does not support IndexedDB");return Object(w["a"])("bäckereiDB",1,{upgrade:function(t){t.createObjectStore("products",{keyPath:"ArtNr"}),t.createObjectStore("images",{keyPath:"ArtNr"})}})},S=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A();case 3:return r=t.sent,n=r.transaction("products","readwrite"),a=n.objectStore("products"),e.forEach((function(t){a.put(t.fields)})),t.abrupt("return",n.complete);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A();case 3:return r=t.sent,n=r.transaction("products","readonly"),a=n.objectStore("products"),t.abrupt("return",a.get(e));case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A();case 3:return e=t.sent,r=e.transaction("products","readonly"),n=r.objectStore("products"),t.abrupt("return",n.getAll());case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),j={getOne:P,getAll:O,save:S},C=function(){if(!("indexedDB"in window))throw new Error("Browser does not support IndexedDB");return Object(w["a"])("bäckereiDB",1,{upgrade:function(t){t.createObjectStore("products",{keyPath:"ArtNr"}),t.createObjectStore("images",{keyPath:"ArtNr"})}})},x=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C();case 3:return r=t.sent,n=r.transaction("images","readwrite"),a=n.objectStore("images"),e.forEach((function(t){a.put(t)})),t.abrupt("return",n.complete);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C();case 3:return r=t.sent,n=r.transaction("images","readonly"),a=n.objectStore("images"),t.abrupt("return",a.get(e));case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C();case 3:return e=t.sent,r=e.transaction("images","readonly"),n=r.objectStore("images"),t.abrupt("return",n.getAll());case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),E={getOne:D,getAll:N,save:x},I={components:{Footer:p},data:function(){return{test:null}},mounted:function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.replace(t))},created:function(){this.getProducts(),this.getImages()},methods:{getProducts:function(){var t=this;m.getProducts().then((function(e){console.log(e),t.$store.dispatch("saveProducts",e.data.items),j.save(e.data.items)}))},getImages:function(){var t=this;k.getImages().then((function(e){var r=[];e.data.items.forEach((function(e){t.convertImgToBase64URL(e.fields.file.url,(function(t){r.push({ArtNr:e.fields.title,base64:t})}))})),t.$store.dispatch("saveImages",r),E.save(r)}))},convertImgToBase64URL:function(t,e,r){var n=new Image;n.crossOrigin="Anonymous",n.onload=function(){var t=document.createElement("CANVAS"),a=t.getContext("2d");t.height=n.height,t.width=n.width,a.drawImage(n,0,0);var o=t.toDataURL(r);e(o),t=null},n.src=t}}},G=I,B=Object(u["a"])(G,o,s,!1,null,null,null),R=B.exports,z=(r("7db0"),r("2f62"));n["a"].use(z["a"]);var W=new z["a"].Store({state:{products:[],images:[]},mutations:{SAVE_PRODUCTS:function(t,e){t.products=[],e.forEach((function(e){t.products.push(e.fields)}))},SAVE_IMAGES:function(t,e){t.images=e}},actions:{saveProducts:function(t,e){var r=t.commit;r("SAVE_PRODUCTS",e)},saveImages:function(t,e){var r=t.commit;r("SAVE_IMAGES",e)}},getters:{getProductByArtNr:function(t){return function(e){return t.products.find((function(t){return t.ArtNr===e}))}},getImageByArtNr:function(t){return function(e){var r=t.images.find((function(t){return t.ArtNr===e}));return void 0===r?t.images.find((function(t){return"default"===t.ArtNr})).base64:r.base64}}}}),$=(r("c425"),r("8c4f")),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"dashboard"}},[r("div",{staticClass:"columns is-multiline is-mobile"},t._l(t.categories,(function(t,e){return r("div",{key:e,staticClass:"column is-one-quarter-desktop is-half-tablet is-half-mobile"},[r("DashboardCard",{attrs:{category:t}})],1)})),0)])},F=[],T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{staticClass:"router-link",attrs:{to:{name:"products"}}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-3by2"},[r("img",{staticClass:"cardImage",attrs:{src:"https://unsplash.it/300/200/?random&pic=1",alt:""}})])]),r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item"},[t._v(" "+t._s(t.category)+" ")])])])])],1)},U=[],Z={props:{category:{type:String,required:!0}}},V=Z,L=(r("3edf"),Object(u["a"])(V,T,U,!1,null,"7948c534",null)),K=L.exports,q={components:{DashboardCard:K},data:function(){return{categories:["Produkte","Rest","Bla","lala","123"]}}},H=q,J=Object(u["a"])(H,M,F,!1,null,null,null),X=J.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"products"}},[r("div",{staticClass:"columns is-multiline is-mobile"},[t._l(t.productsDisplayed,(function(e,n){return r("div",{key:n,staticClass:"column is-one-quarter-desktop is-half-tablet is-half-mobile"},[r("ProductCard",{attrs:{product:t.products[n]}})],1)})),r("infinite-loading",{on:{infinite:t.infiniteHandler}})],2)])},Q=[],tt=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("ade3")),et=r("e166"),rt=r.n(et),nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{staticClass:"router-link",attrs:{to:{name:"product",params:{ArtNr:t.product.ArtNr}}}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-3by2"},[r("img",{staticClass:"cardImage",attrs:{src:t.productImage,alt:t.product.Artikelbezeichnung}})])]),r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item"},[t._v(" "+t._s(t.product.Artikelbezeichnung)+" ")])])])])],1)},at=[],ot={props:{product:{type:Object,required:!0}},data:function(){return{productImage:null}},computed:{getImage:function(){return this.$store.getters.getImageByArtNr}},created:function(){var t=this;setTimeout((function(){t.productImage=t.getImage(t.product.ArtNr)}),0)}},st=ot,ct=(r("5e8b"),Object(u["a"])(st,nt,at,!1,null,"0982db06",null)),it=ct.exports;function ut(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(r),!0).forEach((function(e){Object(tt["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var lt={components:{ProductCard:it,InfiniteLoading:rt.a},data:function(){return{productsDisplayed:8}},computed:dt({},Object(z["b"])(["products"])),methods:{infiniteHandler:function(t){this.productsDisplayed<=this.products.length-8?(this.productsDisplayed+=8,t.loaded()):this.productsDisplayed<this.products.length&&(this.productsDisplayed=this.products.length(),t.complete()),this.productsDisplayed===this.products.length&&t.complete()}}},pt=lt,ft=Object(u["a"])(pt,Y,Q,!1,null,null,null),vt=ft.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"product"}},[r("h1",{staticClass:"is-size-1"},[t._v(" "+t._s(t.product.Artikelbezeichnung)+" ")]),t.product.Produktinfo?r("h2",{staticClass:"is-size-2"},[t._v(" "+t._s(t.product.Produktinfo)+" ")]):t._e(),r("h3",{staticClass:"is-size-3"},[t._v(" Gewicht: "+t._s(t.product.Artikelgewicht)+"g ")]),r("h5",{staticClass:"is-size-5"},[t._v(" Zutaten: ")]),r("p",[t._v(t._s(t.product.Zutaten))]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("figure",{staticClass:"image is-512x512"},[r("img",{attrs:{src:t.productImage}})])]),r("div",{staticClass:"column"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",[r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Energie kJ/kcal ")]),r("td",[t._v(t._s(t.product.NWEnergiekjoulepro100g)+"/"+t._s(t.product.NWEnergiekcalpro100g))]),r("td",[t._v(" "+t._s(t.product.NWEnergiekjouleproStckPortion)+"/ "+t._s(t.product.NWEnergiekcalproStckPortion)+" ")]),r("td",[t._v(t._s(t.product.GDAEnergiekjoulepro100g))]),r("td",[t._v(t._s(t.product.GDAEnergiekjouleproStckPortion))])]),r("tr",[t._m(1),r("td",[t._v(" "+t._s(t.product.NWFettpro100g)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.NWgesFettsurenpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.NWFettproStckPortion)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.NWgesFettsurenproStckPortion)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAFettpro100g)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.GDAgesFettsurenpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAFettproStckPortion)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.GDAgesFettsurenproStckPortion)+" ")])]),r("tr",[t._m(2),r("td",[t._v(" "+t._s(t.product.NWKohlenhydratepro100g)+" "),r("br"),t._v(" "+t._s(t.product.NWZuckerpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.NWKohlenhydrateproStckPortion)+" "),r("br"),t._v(" "+t._s(t.product.NWZuckerproStckPortion)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAKohlenhydratepro100g)+" "),r("br"),t._v(" "+t._s(t.product.GDAZuckerpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAKohlenhydrateproStckPortion)+" "),r("br"),t._v(" "+t._s(t.product.GDAZuckerproStckPortion)+" ")])]),r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Eiweiß ")]),r("td",[t._v(t._s(t.product.NWEiweipro100g))]),r("td",[t._v(t._s(t.product.NWEiweiproStckPortion))]),r("td",[t._v(t._s(t.product.GDAEiweipro100g))]),r("td",[t._v(t._s(t.product.GDAEiweiproStckPortion))])]),r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Salz ")]),r("td",[t._v(t._s(t.product.NWSalzpro100g))]),r("td",[t._v(t._s(t.product.NWSalzproStckPortion))]),r("td",[t._v(t._s(t.product.GDASalzpro100g))]),r("td",[t._v(t._s(t.product.GDASalzproStckPortion))])]),r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Ballaststoffe ")]),r("td",[t._v(t._s(t.product.NWBallaststoffepro100g))]),r("td",[t._v(t._s(t.product.NWBallaststoffeproStckPortion))]),r("td",[t._v(t._s(t.product.GDABallaststoffepro100g))]),r("td",[t._v(t._s(t.product.GDABallaststoffeproStckPortion))])])]),t._m(3)])])]),r("h4",{staticClass:"is-size-4"},[t._v(" Allergene: "+t._s(t.product.AllergeneAlle)+" ")]),r("h4",{staticClass:"is-size-4"},[t._v(" Zusatzstoffe: "+t._s(t.product.ZusatzstoffeAlle)+" ")])])},gt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{attrs:{"head-variant":"dark"}},[r("tr",[r("th",[t._v("Nährwerte:")]),r("th",[t._v("pro 100 g")]),r("th",[t._v("pro Portion")]),r("th",[t._v("GDA* pro 100g")]),r("th",[t._v("GDA* pro Portion")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("th",{attrs:{variant:"dark"}},[t._v(" Fett "),r("br"),t._v("davon gesättigte "),r("br"),t._v("Fettsäuren ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("th",{attrs:{variant:"dark"}},[t._v(" Kohlenhydrate "),r("br"),t._v("davon Zucker ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tfoot",[r("tr",[r("td",{staticClass:"text-center",attrs:{colspan:"5",variant:"secondary"}},[t._v(" *GDA (Guideline Daily Amount): Richtwert für die empfohlene Tageszufuhr ")])])])}],mt={data:function(){return{ArtNr:this.$route.params.ArtNr,product:null,productImage:null}},computed:{getProduct:function(){return this.$store.getters.getProductByArtNr},getImage:function(){return this.$store.getters.getImageByArtNr}},created:function(){this.product=this.getProduct(this.ArtNr),this.productImage=this.getImage(this.ArtNr)}},_t=mt,bt=Object(u["a"])(_t,ht,gt,!1,null,null,null),kt=bt.exports,yt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"404"}},[r("h1",[t._v("Uuuuuups. Diese Seite existiert nicht.")]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"dashboard"}}},[r("h2",[t._v("Zurück zur Startseite")])])],1)},wt=[],At={},St=Object(u["a"])(At,yt,wt,!1,null,null,null),Pt=St.exports;n["a"].use($["a"]);var Ot=[{path:"/",name:"dashboard",component:X},{path:"/produkte",name:"products",component:vt},{path:"/produkte/:ArtNr",name:"product",component:kt},{path:"*",name:"default",component:Pt}],jt=new $["a"]({mode:"history",routes:Ot}),Ct=jt;n["a"].use(a["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Ct,store:W,render:function(t){return t(R)}}).$mount("#app")},"5e8b":function(t,e,r){"use strict";var n=r("a431"),a=r.n(n);a.a},"924f":function(t,e,r){"use strict";var n=r("ff4b"),a=r.n(n);a.a},a431:function(t,e,r){},c425:function(t,e,r){r("99af"),workbox.core.setCacheNameDetails({prefix:"kundeninformationssystem"}),self.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),self.__precacheManifest=[].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{})},ff4b:function(t,e,r){}});
//# sourceMappingURL=app.dd39976d.js.map