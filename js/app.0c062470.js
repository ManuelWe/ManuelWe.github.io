(function(t){function e(e){for(var n,s,c=e[0],u=e[1],i=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4520:function(t,e,r){"use strict";var n=r("55a1"),o=r.n(n);o.a},"55a1":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=r("289d"),a=(r("5abe"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("Navbar"),r("main",{attrs:{role:"main"}},[r("router-view")],1),r("img",{attrs:{id:"test",src:t.test}})],1)])])}),s=[],c=(r("4160"),r("ac1f"),r("5319"),r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"dashboard"}}},[r("button",{staticClass:"button"},[t._v(" Home ")])])],1),r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"products"}}},[r("button",{staticClass:"button"},[t._v(" Produkte ")])])],1),r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"products"}}},[r("button",{staticClass:"button"},[t._v(" kalskdkw ")])])],1),r("div",{staticClass:"column has-text-centered"},[r("router-link",{attrs:{to:{name:"products"}}},[r("button",{staticClass:"button"},[t._v(" mcnsdjdduw ")])])],1)])])}),u=[],i=(r("4520"),r("2877")),l={},d=Object(i["a"])(l,c,u,!1,null,"5d40f7c2",null),p=d.exports,f=r("bc3a"),v=r.n(f),h=v.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),g={getProducts:function(){return h.get("entries?content_type=produkt")}},_=g,m=v.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),b={getImages:function(){return m.get("assets")}},k=b,w=(r("96cf"),r("1da1")),A=r("3f4f"),y=function(){if(!("indexedDB"in window))throw new Error("Browser does not support IndexedDB");return Object(A["a"])("bäckereiDB",1,{upgrade:function(t){t.createObjectStore("products",{keyPath:"ArtNr"}),t.createObjectStore("images",{keyPath:"ArtNr"})}})},S=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y();case 3:return r=t.sent,n=r.transaction("products","readwrite"),o=n.objectStore("products"),e.forEach((function(t){o.put(t.fields)})),t.abrupt("return",n.complete);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y();case 3:return r=t.sent,n=r.transaction("products","readonly"),o=n.objectStore("products"),t.abrupt("return",o.get(e));case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y();case 3:return e=t.sent,r=e.transaction("products","readonly"),n=r.objectStore("products"),t.abrupt("return",n.getAll());case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),x={getOne:C,getAll:j,save:S},O=function(){if(!("indexedDB"in window))throw new Error("Browser does not support IndexedDB");return Object(A["a"])("bäckereiDB",1,{upgrade:function(t){t.createObjectStore("products",{keyPath:"ArtNr"}),t.createObjectStore("images",{keyPath:"ArtNr"})}})},P=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:return r=t.sent,n=r.transaction("images","readwrite"),o=n.objectStore("images"),e.forEach((function(t){o.put(t)})),t.abrupt("return",n.complete);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:return r=t.sent,n=r.transaction("images","readonly"),o=n.objectStore("images"),t.abrupt("return",o.get(e));case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:return e=t.sent,r=e.transaction("images","readonly"),n=r.objectStore("images"),t.abrupt("return",n.getAll());case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),D={getOne:N,getAll:E,save:P},G={components:{Navbar:p},data:function(){return{test:null}},mounted:function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.replace(t))},created:function(){this.getProducts(),this.getImages()},methods:{getProducts:function(){var t=this;_.getProducts().then((function(e){console.log(e),t.products=e.data.items,x.save(e.data.items)}))},getImages:function(){var t=this;k.getImages().then((function(e){var r=[];e.data.items.forEach((function(e){t.convertImgToBase64URL(e.fields.file.url,(function(t){r.push({ArtNr:e.fields.title,base64:t})}))})),D.save(r)}))},convertImgToBase64URL:function(t,e,r){var n=new Image;n.crossOrigin="Anonymous",n.onload=function(){var t=document.createElement("CANVAS"),o=t.getContext("2d");t.height=n.height,t.width=n.width,o.drawImage(n,0,0);var a=t.toDataURL(r);e(a),t=null},n.src=t}}},I=G,B=Object(i["a"])(I,a,s,!1,null,null,null),R=B.exports,z=r("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var W=r("8c4f"),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"dashboard"}},[r("div",{staticClass:"columns is-multiline"},t._l(t.categories,(function(t,e){return r("div",{key:e,staticClass:"column is-one-quarter-desktop is-half-tablet"},[r("DashboardCard",{attrs:{category:t}})],1)})),0)])},F=[],Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{staticClass:"router-link",attrs:{to:{name:"products"}}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-3by2"},[r("img",{attrs:{src:"https://unsplash.it/300/200/?random&pic=1",alt:""}})])]),r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item"},[t._v(" "+t._s(t.category)+" ")])])])])],1)},M=[],U={props:{category:{type:String,required:!0}}},T=U,q=(r("69d6"),Object(i["a"])(T,Z,M,!1,null,"e87f8604",null)),K=q.exports,L={components:{DashboardCard:K},data:function(){return{categories:["Produkte","Rest","Bla","lala","123"]}}},V=L,J=Object(i["a"])(V,$,F,!1,null,null,null),X=J.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"products"}},[r("div",{staticClass:"columns is-multiline"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"column is-one-quarter-desktop is-half-tablet"},[r("ProductCard",{attrs:{product:t}})],1)})),0)])},H=[],Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{staticClass:"router-link",attrs:{to:{name:"product",params:{ArtNr:t.product.ArtNr}}}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-3by2"},[r("img",{attrs:{src:t.productImage,alt:t.product.Artikelbezeichnung}})])]),r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item"},[t._v(" "+t._s(t.product.Artikelbezeichnung)+" ")])])])])],1)},tt=[],et={props:{product:{type:Object,required:!0}},data:function(){return{productImage:null}},created:function(){var t=this;D.getOne(this.product.ArtNr).then((function(e){void 0===e?D.getOne("default").then((function(e){t.productImage=e.base64})):t.productImage=e.base64}))}},rt=et,nt=(r("b7ba"),Object(i["a"])(rt,Q,tt,!1,null,"64c6fd9f",null)),ot=nt.exports,at={components:{ProductCard:ot},data:function(){return{products:[]}},created:function(){var t=this;x.getAll().then((function(e){t.products=e}))}},st=at,ct=Object(i["a"])(st,Y,H,!1,null,null,null),ut=ct.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"product"}},[r("h1",{staticClass:"is-size-1"},[t._v(" "+t._s(t.product.Artikelbezeichnung)+" ")]),t.product.Produktinfo?r("h2",{staticClass:"is-size-2"},[t._v(" "+t._s(t.product.Produktinfo)+" ")]):t._e(),r("h3",{staticClass:"is-size-3"},[t._v(" Gewicht: "+t._s(t.product.Artikelgewicht)+"g ")]),r("h5",{staticClass:"is-size-5"},[t._v(" Zutaten: ")]),r("p",[t._v(t._s(t.product.Zutaten))]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("figure",{staticClass:"image is-512x512"},[r("img",{attrs:{src:t.productImage}})])]),r("div",{staticClass:"column"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",[r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Energie kJ/kcal ")]),r("td",[t._v(t._s(t.product.NWEnergiekjoulepro100g)+"/"+t._s(t.product.NWEnergiekcalpro100g))]),r("td",[t._v(" "+t._s(t.product.NWEnergiekjouleproStckPortion)+"/ "+t._s(t.product.NWEnergiekcalproStckPortion)+" ")]),r("td",[t._v(t._s(t.product.GDAEnergiekjoulepro100g))]),r("td",[t._v(t._s(t.product.GDAEnergiekjouleproStckPortion))])]),r("tr",[t._m(1),r("td",[t._v(" "+t._s(t.product.NWFettpro100g)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.NWgesFettsurenpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.NWFettproStckPortion)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.NWgesFettsurenproStckPortion)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAFettpro100g)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.GDAgesFettsurenpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAFettproStckPortion)+" "),r("br"),r("br"),t._v(" "+t._s(t.product.GDAgesFettsurenproStckPortion)+" ")])]),r("tr",[t._m(2),r("td",[t._v(" "+t._s(t.product.NWKohlenhydratepro100g)+" "),r("br"),t._v(" "+t._s(t.product.NWZuckerpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.NWKohlenhydrateproStckPortion)+" "),r("br"),t._v(" "+t._s(t.product.NWZuckerproStckPortion)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAKohlenhydratepro100g)+" "),r("br"),t._v(" "+t._s(t.product.GDAZuckerpro100g)+" ")]),r("td",[t._v(" "+t._s(t.product.GDAKohlenhydrateproStckPortion)+" "),r("br"),t._v(" "+t._s(t.product.GDAZuckerproStckPortion)+" ")])]),r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Eiweiß ")]),r("td",[t._v(t._s(t.product.NWEiweipro100g))]),r("td",[t._v(t._s(t.product.NWEiweiproStckPortion))]),r("td",[t._v(t._s(t.product.GDAEiweipro100g))]),r("td",[t._v(t._s(t.product.GDAEiweiproStckPortion))])]),r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Salz ")]),r("td",[t._v(t._s(t.product.NWSalzpro100g))]),r("td",[t._v(t._s(t.product.NWSalzproStckPortion))]),r("td",[t._v(t._s(t.product.GDASalzpro100g))]),r("td",[t._v(t._s(t.product.GDASalzproStckPortion))])]),r("tr",[r("th",{attrs:{variant:"dark"}},[t._v(" Ballaststoffe ")]),r("td",[t._v(t._s(t.product.NWBallaststoffepro100g))]),r("td",[t._v(t._s(t.product.NWBallaststoffeproStckPortion))]),r("td",[t._v(t._s(t.product.GDABallaststoffepro100g))]),r("td",[t._v(t._s(t.product.GDABallaststoffeproStckPortion))])])]),t._m(3)])])]),r("h4",{staticClass:"is-size-4"},[t._v(" Allergene: "+t._s(t.product.AllergeneAlle)+" ")]),r("h4",{staticClass:"is-size-4"},[t._v(" Zusatzstoffe: "+t._s(t.product.ZusatzstoffeAlle)+" ")])])},lt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{attrs:{"head-variant":"dark"}},[r("tr",[r("th",[t._v("Nährwerte:")]),r("th",[t._v("pro 100 g")]),r("th",[t._v("pro Portion")]),r("th",[t._v("GDA* pro 100g")]),r("th",[t._v("GDA* pro Portion")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("th",{attrs:{variant:"dark"}},[t._v(" Fett "),r("br"),t._v("davon gesättigte "),r("br"),t._v("Fettsäuren ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("th",{attrs:{variant:"dark"}},[t._v(" Kohlenhydrate "),r("br"),t._v("davon Zucker ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tfoot",[r("tr",[r("td",{staticClass:"text-center",attrs:{colspan:"5",variant:"secondary"}},[t._v(" *GDA (Guideline Daily Amount): Richtwert für die empfohlene Tageszufuhr ")])])])}],dt={data:function(){return{ArtNr:this.$route.params.ArtNr,product:null,productImage:null}},created:function(){var t=this;x.getOne(this.ArtNr).then((function(e){t.product=e,D.getOne(e.ArtNr).then((function(e){void 0===e?D.getOne("default").then((function(e){t.productImage=e.base64})):t.productImage=e.base64}))}))}},pt=dt,ft=Object(i["a"])(pt,it,lt,!1,null,null,null),vt=ft.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"404"}},[r("h1",[t._v("Uuuuuups. Diese Seite existiert nicht.")]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"dashboard"}}},[r("h2",[t._v("Zurück zur Startseite")])])],1)},gt=[],_t={},mt=Object(i["a"])(_t,ht,gt,!1,null,null,null),bt=mt.exports;n["a"].use(W["a"]);var kt=[{path:"/",name:"dashboard",component:X},{path:"/produkte",name:"products",component:ut},{path:"/produkte/:ArtNr",name:"product",component:vt},{path:"*",name:"default",component:bt}],wt=new W["a"]({mode:"history",routes:kt}),At=wt;n["a"].use(o["a"]),n["a"].config.productionTip=!1,new n["a"]({router:At,render:function(t){return t(R)}}).$mount("#app")},"69d6":function(t,e,r){"use strict";var n=r("fecc"),o=r.n(n);o.a},b7ba:function(t,e,r){"use strict";var n=r("ce58"),o=r.n(n);o.a},ce58:function(t,e,r){},fecc:function(t,e,r){}});
//# sourceMappingURL=app.0c062470.js.map