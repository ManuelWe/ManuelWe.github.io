(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75c3b7c4"],{"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),s=n("2d00"),i=o("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,n){"use strict";var r=n("23e7"),o=n("5a34"),s=n("1d80"),i=n("ab13");r({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(s(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),s=n("b622"),i=s("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,s=n("1dde"),i=n("ae40"),a=s("filter"),c=i("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5f21":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"kreuztabelle"}},[n("b-field",{attrs:{horizontal:""}},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],staticClass:"input",attrs:{"aria-label":"Suchfeld",placeholder:"Suche Produkt",type:"search","icon-pack":"fas",icon:"search"},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}}),n("span",{staticClass:"icon is-left"},[n("i",{staticClass:"fas fa-search fa-2x"})])]),n("p",{staticClass:"control"},[e._v(" "+e._s(e.filteredProducts.length)+" Produkte ")])]),n("table",[n("tr",[n("th",[e._v(" Artikel ")]),e._l(e.allergene,(function(t,r){return n("th",{key:r,staticClass:"rotate"},[n("div",[n("span",[e._v(" "+e._s(t)+" ")])])])}))],2),e._l(e.filteredProducts,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.fields.Artikelbezeichnung))]),e._l(e.allergene,(function(r,o){return n("td",{key:o},[e.allergenEnthalten(t.fields.AllergeneAlle,o)?n("p",[e._v(" X ")]):e._e()])}))],2)}))],2),n("goToTopButton")],1)},o=[],s=(n("4de4"),n("caad"),n("2532"),n("2d50")),i=n("648a"),a={components:{goToTopButton:i["a"]},data:function(){return{allergene:["Glutenhaltiges Getreide","Weizen","Roggen","Gerste","Hafer","Dinkel","Kamut","Emer","Schalentiere","Eier","Fisch","Erdnüsse","Soja","Milch und Milchprodukte","Schalenfrüchte","Mandeln","Haselnüsse","Walnüsse","Kaschu-/Cashewnüsse","Pecannüsse","Paranüsse","Pistazien","Macadamia-/Queenslandnüsse","Sellerie","Senf","Sesam","Schwefeldioxid und Sulfite","Lupine und Lupinenerzeugnisse","Weichtiere und Weichtiererzeugnisse"],products:[],searchString:""}},computed:{filteredProducts:function(){var e=this;return this.products.filter((function(t){return!!t.fields.Artikelbezeichnung.toLowerCase().includes(e.searchString.toLowerCase())}))}},created:function(){this.getProducts()},methods:{allergenEnthalten:function(e,t){return e.includes(this.allergene[t])},getProducts:function(){var e=this;s["a"].getProducts().then((function(t){e.products=t.data.items}))}}},c=a,u=(n("87d3"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,"443fc274",null);t["default"]=l.exports},"648a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{directives:[{name:"show",rawName:"v-show",value:e.showToTopButton,expression:"showToTopButton"}],attrs:{id:"toTopButton"},on:{click:function(t){return e.goToTop()}}},[e._m(0)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",staticStyle:{color:"white"}},[n("i",{staticClass:"fas fa-chevron-up fa-3x"})])}],s={data:function(){return{showToTopButton:!1}},created:function(){var e=this;window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?e.showToTopButton=!0:e.showToTopButton=!1}},methods:{goToTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},i=s,a=(n("e4d0"),n("2877")),c=Object(a["a"])(i,r,o,!1,null,"0c753206",null);t["a"]=c.exports},"87d3":function(e,t,n){"use strict";var r=n("f1a4"),o=n.n(r);o.a},ab13:function(e,t,n){var r=n("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},caad:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").includes,s=n("44d2"),i=n("ae40"),a=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},db1a:function(e,t,n){},e4d0:function(e,t,n){"use strict";var r=n("db1a"),o=n.n(r);o.a},f1a4:function(e,t,n){}}]);
//# sourceMappingURL=chunk-75c3b7c4.a5fab366.js.map