(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9940cd6"],{"1a32":function(t,r,e){"use strict";var s=e("3f18"),o=e.n(s);o.a},2532:function(t,r,e){"use strict";var s=e("23e7"),o=e("5a34"),a=e("1d80"),i=e("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(a(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"3f18":function(t,r,e){},"44e7":function(t,r,e){var s=e("861d"),o=e("c6b6"),a=e("b622"),i=a("match");t.exports=function(t){var r;return s(t)&&(void 0!==(r=t[i])?!!r:"RegExp"==o(t))}},"5a34":function(t,r,e){var s=e("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"8ec2":function(t,r,e){},a445:function(t,r,e){"use strict";var s=e("8ec2"),o=e.n(s);o.a},ab13:function(t,r,e){var s=e("b622"),o=s("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[o]=!1,"/./"[t](r)}catch(s){}}return!1}},c740:function(t,r,e){"use strict";var s=e("23e7"),o=e("b727").findIndex,a=e("44d2"),i=e("ae40"),n="findIndex",c=!0,u=i(n);n in[]&&Array(1)[n]((function(){c=!1})),s({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(n)},caad:function(t,r,e){"use strict";var s=e("23e7"),o=e("4d64").includes,a=e("44d2"),i=e("ae40"),n=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!n},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d2f1:function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.product?e("div",{staticClass:"columns",attrs:{id:"product"}},[e("div",{staticClass:"column"},[e("button",{staticClass:"button navigationButton",attrs:{disabled:t.getFilteredProducts[0].fields.ArtNr===t.ArtNr},on:{click:function(r){return t.lastProduct()}}},[t._m(0)])]),e("div",{staticClass:"column is-10"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-7"},[e("figure",{staticClass:"image is-512x512"},[e("img",{attrs:{src:t.getImage(t.ArtNr)}})])]),e("div",{staticClass:"column"},[e("DayIndicator",{attrs:{"baking-days":["Di","Sa"]}}),t.product.Produktinfo?e("h2",{staticClass:"is-size-5"},[t._v(" "+t._s(t.product.Produktinfo)+" ")]):t._e(),e("h3",{staticClass:"is-size-5"},[t._v(" Gewicht: "+t._s(t.product.Artikelgewicht)+"g ")]),e("h3",{staticClass:"is-size-6"},[t._v(" Allergene: "+t._s(t.product.AllergeneAlle)+" ")]),e("h3",{staticClass:"is-size-6"},[t._v(" Zusatzstoffe: "+t._s(t.product.ZusatzstoffeAlle)+" ")])],1)]),e("h5",{staticClass:"is-size-5"},[t._v(" Zutaten: ")]),e("p",[t._v(t._s(t.product.Zutaten))]),e("div",{staticClass:"column"},[e("NutritionalTable",{attrs:{product:t.product}})],1)]),e("div",{staticClass:"column"},[e("button",{staticClass:"button navigationButton",attrs:{disabled:t.getFilteredProducts[t.getFilteredProducts.length-1].fields.ArtNr===t.ArtNr},on:{click:function(r){return t.nextProduct()}}},[t._m(1)])])]):t._e()},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-arrow-left fa-2x"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-arrow-right fa-2x"})])}],a=(e("c740"),e("ac1f"),e("5319"),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",{staticClass:"table"},[t._m(0),e("tbody",[e("tr",[e("th",{attrs:{variant:"dark"}},[t._v(" Energie kJ/kcal ")]),e("td",[t._v(t._s(t.product.NWEnergiekjoulepro100g)+"/"+t._s(t.product.NWEnergiekcalpro100g))]),e("td",[t._v(" "+t._s(t.product.NWEnergiekjouleproStckPortion)+"/ "+t._s(t.product.NWEnergiekcalproStckPortion)+" ")]),e("td",[t._v(t._s(t.product.GDAEnergiekjoulepro100g))]),e("td",[t._v(t._s(t.product.GDAEnergiekjouleproStckPortion))])]),e("tr",[t._m(1),e("td",[t._v(" "+t._s(t.product.NWFettpro100g)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.NWgesFettsurenpro100g)+" ")]),e("td",[t._v(" "+t._s(t.product.NWFettproStckPortion)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.NWgesFettsurenproStckPortion)+" ")]),e("td",[t._v(" "+t._s(t.product.GDAFettpro100g)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.GDAgesFettsurenpro100g)+" ")]),e("td",[t._v(" "+t._s(t.product.GDAFettproStckPortion)+" "),e("br"),e("br"),t._v(" "+t._s(t.product.GDAgesFettsurenproStckPortion)+" ")])]),e("tr",[t._m(2),e("td",[t._v(" "+t._s(t.product.NWKohlenhydratepro100g)+" "),e("br"),t._v(" "+t._s(t.product.NWZuckerpro100g)+" ")]),e("td",[t._v(" "+t._s(t.product.NWKohlenhydrateproStckPortion)+" "),e("br"),t._v(" "+t._s(t.product.NWZuckerproStckPortion)+" ")]),e("td",[t._v(" "+t._s(t.product.GDAKohlenhydratepro100g)+" "),e("br"),t._v(" "+t._s(t.product.GDAZuckerpro100g)+" ")]),e("td",[t._v(" "+t._s(t.product.GDAKohlenhydrateproStckPortion)+" "),e("br"),t._v(" "+t._s(t.product.GDAZuckerproStckPortion)+" ")])]),e("tr",[e("th",{attrs:{variant:"dark"}},[t._v(" Eiweiß ")]),e("td",[t._v(t._s(t.product.NWEiweipro100g))]),e("td",[t._v(t._s(t.product.NWEiweiproStckPortion))]),e("td",[t._v(t._s(t.product.GDAEiweipro100g))]),e("td",[t._v(t._s(t.product.GDAEiweiproStckPortion))])]),e("tr",[e("th",{attrs:{variant:"dark"}},[t._v(" Salz ")]),e("td",[t._v(t._s(t.product.NWSalzpro100g))]),e("td",[t._v(t._s(t.product.NWSalzproStckPortion))]),e("td",[t._v(t._s(t.product.GDASalzpro100g))]),e("td",[t._v(t._s(t.product.GDASalzproStckPortion))])]),e("tr",[e("th",{attrs:{variant:"dark"}},[t._v(" Ballaststoffe ")]),e("td",[t._v(t._s(t.product.NWBallaststoffepro100g))]),e("td",[t._v(t._s(t.product.NWBallaststoffeproStckPortion))]),e("td",[t._v(t._s(t.product.GDABallaststoffepro100g))]),e("td",[t._v(t._s(t.product.GDABallaststoffeproStckPortion))])])]),t._m(3)])}),i=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",{attrs:{"head-variant":"dark"}},[e("tr",[e("th",[t._v("Nährwerte:")]),e("th",[t._v("pro 100 g")]),e("th",[t._v("pro Portion")]),e("th",[t._v("GDA* pro 100g")]),e("th",[t._v("GDA* pro Portion")])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("th",{attrs:{variant:"dark"}},[t._v(" Fett "),e("br"),t._v("davon gesättigte "),e("br"),t._v("Fettsäuren ")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("th",{attrs:{variant:"dark"}},[t._v(" Kohlenhydrate "),e("br"),t._v("davon Zucker ")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tfoot",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"5",variant:"secondary"}},[t._v(" *GDA (Guideline Daily Amount): Richtwert für die empfohlene Tageszufuhr ")])])])}],n={props:{product:{type:Object,required:!0}}},c=n,u=e("2877"),d=Object(u["a"])(c,a,i,!1,null,null,null),l=d.exports,p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"dayIndicator"}},[e("h3",{staticClass:"is-size-4"},[t._v(" Backtage: ")]),e("div",{staticClass:"field is-grouped",attrs:{id:"circleWrapper"}},t._l(t.days,(function(r,s){return e("span",{key:s,staticClass:"control circle is-size-6",style:{"background-color":t.checkContained(r)?"rgb(50, 252, 60)":"rgb(252, 56, 56)"}},[t._v(t._s(r))])})),0)])},_=[],f=(e("caad"),e("2532"),{props:{bakingDays:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{days:["Mo","Di","Mi","Do","Fr","Sa","So"]}},methods:{checkContained:function(t){return!!this.bakingDays.includes(t)}}}),v=f,h=(e("1a32"),Object(u["a"])(v,p,_,!1,null,"07ff1c05",null)),g=h.exports,k={components:{NutritionalTable:l,DayIndicator:g},data:function(){return{ArtNr:this.$route.params.ArtNr,product:null,productImage:null}},computed:{getProduct:function(){return this.$store.getters.getProductByArtNr},getFilteredProducts:function(){return this.$store.getters.getFilteredProducts},getImage:function(){return this.$store.getters.getImageByArtNr}},created:function(){var t=this.getProduct(this.ArtNr);t?this.product=t:this.$router.replace({name:"products"})},beforeRouteUpdate:function(t,r,e){this.ArtNr=t.params.ArtNr,this.product=this.getProduct(this.ArtNr),e()},methods:{lastProduct:function(){var t=this,r=this.getFilteredProducts.findIndex((function(r){return r.fields.ArtNr===t.ArtNr}));this.$router.replace({name:"product",params:{ArtNr:this.getFilteredProducts[r-1].fields.ArtNr}})},nextProduct:function(){var t=this,r=this.getFilteredProducts.findIndex((function(r){return r.fields.ArtNr===t.ArtNr}));this.$router.replace({name:"product",params:{ArtNr:this.getFilteredProducts[r+1].fields.ArtNr}})}}},A=k,m=(e("a445"),Object(u["a"])(A,s,o,!1,null,"43a3a1fa",null));r["default"]=m.exports}}]);
//# sourceMappingURL=chunk-f9940cd6.1d6176f0.js.map