(function(t){function r(r){for(var n,c,s=r[0],u=r[1],i=r[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(r);while(p.length)p.shift()();return a.push.apply(a,i||[]),e()}function e(){for(var t,r=0;r<a.length;r++){for(var e=a[r],n=!0,s=1;s<e.length;s++){var u=e[s];0!==o[u]&&(n=!1)}n&&(a.splice(r--,1),t=c(c.s=e[0]))}return t}var n={},o={app:0},a=[];function c(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,r,e){c.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,r){if(1&r&&(t=c(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)c.d(e,n,function(r){return t[r]}.bind(null,n));return e},c.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(r,"a",r),r},c.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var i=0;i<s.length;i++)r(s[i]);var d=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"240d":function(t,r,e){"use strict";var n=e("ed6e"),o=e.n(n);o.a},"56d7":function(t,r,e){"use strict";e.r(r);var n=e("2b0e"),o=e("5f5b"),a=e("b1e0"),c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("main",{attrs:{role:"main"}},[e("router-view")],1),e("img",{attrs:{id:"test",src:t.test}})],1)},s=[],u=(e("4160"),e("ac1f"),e("5319"),e("159b"),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[e("b-navbar-brand",[e("router-link",{attrs:{to:{name:"dashboard"}}},[t._v(" Bäckerei X ")])],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",[e("router-link",{attrs:{to:{name:"products"}}},[t._v(" Produkte ")])],1),e("b-nav-item",{attrs:{href:"#"}},[t._v(" Irgendwas ")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",[e("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),e("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v(" Search ")])],1),e("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" EN ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" ES ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" RU ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" FA ")])],1),e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("User")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Profile ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Sign Out ")])],1)],1)],1)],1)}),i=[],d=e("2877"),l={},p=Object(d["a"])(l,u,i,!1,null,null,null),v=p.exports,b=e("bc3a"),f=e.n(b),g=f.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),h={getProducts:function(){return g.get("entries?content_type=produkt")}},m=h,_=f.a.create({baseURL:"https://cdn.contentful.com/spaces/kfibk3xh1vwb",headers:{Authorization:"Bearer xR0IGjSg9X8mdMdoBtSoaSfaUGg209VwAYhVlv6xGMo"}}),k={getImages:function(){return _.get("assets")}},w=k,y=(e("96cf"),e("1da1")),S=e("3f4f"),A=function(){if(!("indexedDB"in window))throw new Error("Browser does not support IndexedDB");return Object(S["a"])("bäckereiDB",1,{upgrade:function(t){t.createObjectStore("products",{keyPath:"ArtNr"}),t.createObjectStore("images",{keyPath:"ArtNr"})}})},x=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(r){var e,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A();case 3:return e=t.sent,n=e.transaction("products","readwrite"),o=n.objectStore("products"),r.forEach((function(t){o.put(t.fields)})),t.abrupt("return",n.complete);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}(),j=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(r){var e,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A();case 3:return e=t.sent,n=e.transaction("products","readonly"),o=n.objectStore("products"),t.abrupt("return",o.get(r));case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(r){return t.apply(this,arguments)}}(),O=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var r,e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A();case 3:return r=t.sent,e=r.transaction("products","readonly"),n=e.objectStore("products"),t.abrupt("return",n.getAll());case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),P={getOne:j,getAll:O,save:x},N=function(){if(!("indexedDB"in window))throw new Error("Browser does not support IndexedDB");return Object(S["a"])("bäckereiDB",1)},D=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(r){var e,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N();case 3:return e=t.sent,n=e.transaction("images","readwrite"),o=n.objectStore("images"),r.forEach((function(t){o.put(t)})),t.abrupt("return",n.complete);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}(),E=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(r){var e,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N();case 3:return e=t.sent,n=e.transaction("images","readonly"),o=n.objectStore("images"),t.abrupt("return",o.get(r));case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(r){return t.apply(this,arguments)}}(),C=function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var r,e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N();case 3:return r=t.sent,e=r.transaction("images","readonly"),n=e.objectStore("images"),t.abrupt("return",n.getAll());case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),G={getOne:E,getAll:C,save:D},I={components:{Navbar:v},data:function(){return{test:null}},mounted:function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.replace(t))},created:function(){this.getProducts(),this.getImages()},methods:{getProducts:function(){var t=this;m.getProducts().then((function(r){console.log(r),t.products=r.data.items,P.save(r.data.items)}))},getImages:function(){var t=this;w.getImages().then((function(r){var e=[];r.data.items.forEach((function(r){t.convertImgToBase64URL(r.fields.file.url,(function(t){e.push({ArtNr:r.fields.title,base64:t})}))})),G.save(e)}))},convertImgToBase64URL:function(t,r,e){var n=new Image;n.crossOrigin="Anonymous",n.onload=function(){var t=document.createElement("CANVAS"),o=t.getContext("2d");t.height=n.height,t.width=n.width,o.drawImage(n,0,0);var a=t.toDataURL(e);r(a),t=null},n.src=t}}},B=I,R=Object(d["a"])(B,c,s,!1,null,null,null),W=R.exports,z=e("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var F=e("8c4f"),$=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"dashboard"},[e("div",{staticClass:"album py-5 bg-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.categories,(function(t,r){return e("div",{key:r,staticClass:"col-md-4"},[e("DashboardCard",{attrs:{category:t}})],1)})),0)])])])},U=[],Z=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("router-link",{staticClass:"router-link",attrs:{to:{name:"products"}}},[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.category,"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Kurzer Text ")])],1)],1)],1)},M=[],T={props:{category:{type:String,required:!0}}},K=T,L=(e("dc50"),Object(d["a"])(K,Z,M,!1,null,"2eaae33a",null)),V=L.exports,q={components:{DashboardCard:V},data:function(){return{categories:["Produkte","Rest","Bla","lala","123"]}}},J=q,X=Object(d["a"])(J,$,U,!1,null,null,null),Y=X.exports,H=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"products"},[e("div",{staticClass:"album py-5 bg-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.products,(function(t,r){return e("div",{key:r,staticClass:"col-md-4"},[e("ProductCard",{attrs:{product:t}})],1)})),0)])])])},Q=[],tt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("router-link",{staticClass:"router-link",attrs:{to:{name:"product",params:{ArtNr:t.product.ArtNr}}}},[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.product.Artikelbezeichnung,"img-src":t.productImage,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Kurzer Text ")])],1)],1)],1)},rt=[],et={props:{product:{type:Object,required:!0}},data:function(){return{productImage:null}},created:function(){var t=this;G.getOne(this.product.ArtNr).then((function(r){void 0===r?G.getOne("default").then((function(r){t.productImage=r.base64})):t.productImage=r.base64}))}},nt=et,ot=(e("240d"),Object(d["a"])(nt,tt,rt,!1,null,"23d0f4c8",null)),at=ot.exports,ct={components:{ProductCard:at},data:function(){return{products:[]}},created:function(){var t=this;P.getAll().then((function(r){t.products=r}))}},st=ct,ut=Object(d["a"])(st,H,Q,!1,null,null,null),it=ut.exports,dt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"product"}},[e("h1",[t._v(t._s(t.product.Artikelbezeichnung))]),t.product.Produktinfo?e("h2",[t._v(" "+t._s(t.product.Produktinfo)+" ")]):t._e(),e("h3",[t._v("Gewicht: "+t._s(t.product.Artikelgewicht)+"g")]),e("h5",[t._v("Zutaten:")]),e("p",[t._v(t._s(t.product.Zutaten))]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",[e("img",{attrs:{src:t.productImage,width:"600rem",height:"400rem"}})]),e("b-col",[e("b-table-simple",{attrs:{small:"",responsive:""}},[e("b-thead",{attrs:{"head-variant":"dark"}},[e("b-tr",[e("b-th",[t._v("Nährwerte:")]),e("b-th",[t._v("pro 100 g")]),e("b-th",[t._v("pro Portion")]),e("b-th",[t._v("GDA* pro 100g")]),e("b-th",[t._v("GDA* pro Portion")])],1)],1),e("b-tbody",[e("b-tr",[e("b-th",{attrs:{variant:"dark"}},[t._v(" Energie kJ/kcal ")]),e("b-td",[t._v(t._s(t.product.NWEnergiekjoulepro100g)+"/"+t._s(t.product.NWEnergiekcalpro100g))]),e("b-td",[t._v(" "+t._s(t.product.NWEnergiekjouleproStckPortion)+"/ "+t._s(t.product.NWEnergiekcalproStckPortion)+" ")]),e("b-td",[t._v(t._s(t.product.GDAEnergiekjoulepro100g))]),e("b-td",[t._v(t._s(t.product.GDAEnergiekjouleproStckPortion))])],1),e("b-tr",[e("b-th",{attrs:{variant:"dark"}},[t._v(" Fett "),e("br"),t._v("davon gesättigte "),e("br"),t._v("Fettsäuren ")]),e("b-td",[t._v(" "+t._s(t.product.NWFettpro100g)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.NWgesFettsurenpro100g)+" ")]),e("b-td",[t._v(" "+t._s(t.product.NWFettproStckPortion)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.NWgesFettsurenproStckPortion)+" ")]),e("b-td",[t._v(" "+t._s(t.product.GDAFettpro100g)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.GDAgesFettsurenpro100g)+" ")]),e("b-td",[t._v(" "+t._s(t.product.GDAFettproStckPortion)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.GDAgesFettsurenproStckPortion)+" ")])],1),e("b-tr",[e("b-th",{attrs:{variant:"dark"}},[t._v(" Kohlenhydrate "),e("br"),t._v("davon Zucker ")]),e("b-td",[t._v(" "+t._s(t.product.NWKohlenhydratepro100g)+" "),e("br"),t._v(" "+t._s(t.product.NWZuckerpro100g)+" ")]),e("b-td",[t._v(" "+t._s(t.product.NWKohlenhydrateproStckPortion)+" "),e("br"),t._v(" "+t._s(t.product.NWZuckerproStckPortion)+" ")]),e("b-td",[t._v(" "+t._s(t.product.GDAKohlenhydratepro100g)+" "),e("br"),t._v(" "+t._s(t.product.GDAZuckerpro100g)+" ")]),e("b-td",[t._v(" "+t._s(t.product.GDAKohlenhydrateproStckPortion)+" "),e("br"),t._v(" "+t._s(t.product.GDAZuckerproStckPortion)+" ")])],1),e("b-tr",[e("b-th",{attrs:{variant:"dark"}},[t._v(" Eiweiß ")]),e("b-td",[t._v(t._s(t.product.NWEiweipro100g))]),e("b-td",[t._v(t._s(t.product.NWEiweiproStckPortion))]),e("b-td",[t._v(t._s(t.product.GDAEiweipro100g))]),e("b-td",[t._v(t._s(t.product.GDAEiweiproStckPortion))])],1),e("b-tr",[e("b-th",{attrs:{variant:"dark"}},[t._v(" Salz ")]),e("b-td",[t._v(t._s(t.product.NWSalzpro100g))]),e("b-td",[t._v(t._s(t.product.NWSalzproStckPortion))]),e("b-td",[t._v(t._s(t.product.GDASalzpro100g))]),e("b-td",[t._v(t._s(t.product.GDASalzproStckPortion))])],1),e("b-tr",[e("b-th",{attrs:{variant:"dark"}},[t._v(" Ballaststoffe ")]),e("b-td",[t._v(t._s(t.product.NWBallaststoffepro100g))]),e("b-td",[t._v(t._s(t.product.NWBallaststoffeproStckPortion))]),e("b-td",[t._v(t._s(t.product.GDABallaststoffepro100g))]),e("b-td",[t._v(t._s(t.product.GDABallaststoffeproStckPortion))])],1)],1),e("b-tfoot",[e("b-tr",[e("b-td",{staticClass:"text-center",attrs:{colspan:"5",variant:"secondary"}},[t._v(" *GDA (Guideline Daily Amount): Richtwert für die empfohlene Tageszufuhr ")])],1)],1)],1)],1)],1)],1),e("h4",[t._v("Allergene: "+t._s(t.product.AllergeneAlle))]),e("h4",[t._v("Zusatzstoffe: "+t._s(t.product.ZusatzstoffeAlle))])],1)},lt=[],pt={data:function(){return{ArtNr:this.$route.params.ArtNr,product:null,productImage:null}},created:function(){var t=this;P.getOne(this.ArtNr).then((function(r){t.product=r,G.getOne(r.ArtNr).then((function(r){void 0===r?G.getOne("default").then((function(r){t.productImage=r.base64})):t.productImage=r.base64}))}))}},vt=pt,bt=Object(d["a"])(vt,dt,lt,!1,null,null,null),ft=bt.exports,gt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"404"}},[e("h1",[t._v("Uuuuuups. Diese Seite existiert nicht.")]),e("router-link",{staticClass:"router-link",attrs:{to:{name:"dashboard"}}},[e("h2",[t._v("Zurück zur Startseite")])])],1)},ht=[],mt={},_t=Object(d["a"])(mt,gt,ht,!1,null,null,null),kt=_t.exports;n["default"].use(F["a"]);var wt=[{path:"/",name:"dashboard",component:Y},{path:"/produkte",name:"products",component:it},{path:"/produkte/:ArtNr",name:"product",component:ft},{path:"*",name:"default",component:kt}],yt=new F["a"]({mode:"history",routes:wt}),St=yt;e("f9e3"),e("2dd8");n["default"].use(o["a"]),n["default"].use(a["a"]),n["default"].config.productionTip=!1,new n["default"]({router:St,render:function(t){return t(W)}}).$mount("#app")},d7aa:function(t,r,e){},dc50:function(t,r,e){"use strict";var n=e("d7aa"),o=e.n(n);o.a},ed6e:function(t,r,e){}});
//# sourceMappingURL=app.5fcd0e22.js.map