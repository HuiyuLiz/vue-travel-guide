(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Restaurant "],{1799:function(e,t,n){"use strict";var a=n("7a23"),c=function(e){return Object(a["z"])("data-v-279af2c8"),e=e(),Object(a["x"])(),e},i={"aria-label":"Page navigation example"},r={class:"pagination flex-wrap"},l=c((function(){return Object(a["h"])("a",{class:"page-link previous",href:"javascript:;","aria-label":"Previous"},null,-1)})),s=[l],o=["onClick"],u=c((function(){return Object(a["h"])("a",{class:"page-link next",href:"javascript:;","aria-label":"Next"},null,-1)})),b=[u];function g(e,t,n,c,l,u){return Object(a["w"])(),Object(a["g"])("nav",i,[Object(a["h"])("ul",r,[Object(a["h"])("li",{class:Object(a["q"])(["page-item",{disabled:1===n.currentPage}]),onClick:t[0]||(t[0]=function(e){return c.changePageHandler(n.currentPage-1)})},s,2),(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(n.pages,(function(e){return Object(a["w"])(),Object(a["g"])("li",{key:e,class:"page-item mb-2",onClick:function(t){return c.changePageHandler(e)}},[Object(a["h"])("a",{class:Object(a["q"])(["page-link page-link-item",{active:e===n.currentPage}]),href:"javascript:;"},Object(a["G"])(e),3)],8,o)})),128)),Object(a["h"])("li",{class:Object(a["q"])(["page-item",{disabled:n.currentPage>=n.pages}]),onClick:t[1]||(t[1]=function(e){return c.changePageHandler(n.currentPage+1)})},b,2)])])}n("a9e3");var d={props:{currentPage:{type:Number,default:1},pages:{type:Number,default:1}},setup:function(e,t){var n=t.emit,a=function(e){n("changePage",e)};return{changePageHandler:a}}},m=(n("1a56"),n("6b0d")),f=n.n(m);const j=f()(d,[["render",g],["__scopeId","data-v-279af2c8"]]);t["a"]=j},"1a56":function(e,t,n){"use strict";n("f3a6")},"3b73":function(e,t,n){},"3d5b":function(e,t,n){"use strict";n("48df")},"408a":function(e,t,n){var a=n("e330");e.exports=a(1..valueOf)},"423c":function(e,t,n){"use strict";n("3b73")},"48df":function(e,t,n){},"4bcf":function(e,t,n){"use strict";var a=n("7a23"),c={class:"container"},i={class:"row row-cols-auto justify-content-center my-3"},r={class:"col-md-3 d-flex flex-row flex-wrap justify-content-start bg-dark-light align-items-center py-4 ps-5 border-left-radius"},l=["onClick"],s={class:"fw-normal mb-0"},o={class:"col-md-9 d-flex flex-row flex-wrap bg-light justify-content-center align-items-center border-right-radius"},u=["onClick"],b={class:"fw-normal mb-0"};function g(e,t,n,g,d,m){return Object(a["w"])(),Object(a["g"])("section",null,[Object(a["h"])("div",c,[Object(a["h"])("div",i,[Object(a["h"])("div",r,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(g.regions,(function(e){return Object(a["w"])(),Object(a["g"])("div",{key:e.RegionName,class:"me-2 d-flex align-self-center",onClick:function(t){return g.selectRegion(e.RegionEngName)}},[Object(a["h"])("h5",s,[Object(a["h"])("div",{class:Object(a["q"])(["badge rounded-pill bg-none text-dark fw-normal",{"bg-success text-white":g.isEqualToCurrentRegion(e.RegionEngName)}])},Object(a["G"])(e.RegionName),3)])],8,l)})),128))]),Object(a["h"])("div",o,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(g.currentCities.Cities,(function(e){return Object(a["w"])(),Object(a["g"])("div",{key:e.CityEngName,class:"me-2 d-flex align-self-center",onClick:function(t){return g.selectCity(e)}},[Object(a["h"])("h5",b,[Object(a["h"])("div",{class:Object(a["q"])(["badge rounded-pill bg-none text-dark fw-normal",{"bg-white":g.isEqualToCityName(g.currentCity.CityEngName,e.CityEngName)}])},Object(a["G"])(e.CityName),3)])],8,u)})),128))])])])])}n("d81d"),n("4de4"),n("d3b7");var d=n("6030"),m={name:"RegionSelect",components:{},emits:["selectCity"],setup:function(e,t){var n=t.emit,c=Object(a["B"])("northern"),i=Object(a["c"])((function(){return d.map((function(e){return{RegionName:e.RegionName,RegionEngName:e.RegionEngName}}))})),r=function(e){c.value=e},l=function(e){return c.value===e},s=function(e,t){return e===t},o=Object(a["c"])((function(){return d.filter((function(e){return e.RegionEngName===c.value}))[0]})),u=Object(a["B"])({});Object(a["I"])(o,(function(e){e&&(u.value=e.Cities[0])}),{immediate:!0});var b=function(e){u.value=e};return Object(a["I"])(u,(function(e){e&&n("selectCity",e)}),{immediate:!0}),{selectRegion:r,selectCity:b,currentRegion:c,currentCities:o,currentCity:u,regions:i,isEqualToCurrentRegion:l,isEqualToCityName:s}}},f=(n("a60d"),n("6b0d")),j=n.n(f);const y=j()(m,[["render",g],["__scopeId","data-v-02333a78"]]);t["a"]=y},"4d8c":function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("e330"),c=n("1d80"),i=n("577e"),r=n("5899"),l=a("".replace),s="["+r+"]",o=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),b=function(e){return function(t){var n=i(c(t));return 1&e&&(n=l(n,o,"")),2&e&&(n=l(n,u,"")),n}};e.exports={start:b(1),end:b(2),trim:b(3)}},6030:function(e){e.exports=JSON.parse('[{"RegionName":"北部","RegionEngName":"northern","Cities":[{"CityName":"臺北市","CityEngName":"Taipei"},{"CityName":"基隆市","CityEngName":"Keelung"},{"CityName":"新北市","CityEngName":"NewTaipei"},{"CityName":"宜蘭縣","CityEngName":"YilanCounty"},{"CityName":"新竹市","CityEngName":"Hsinchu"},{"CityName":"新竹縣","CityEngName":"HsinchuCounty"},{"CityName":"桃園市","CityEngName":"Taoyuan"}]},{"RegionName":"中部","RegionEngName":"central","Cities":[{"CityName":"臺中市","CityEngName":"Taichung"},{"CityName":"苗栗縣","CityEngName":"MiaoliCounty"},{"CityName":"彰化縣","CityEngName":"ChanghuaCounty"},{"CityName":"南投縣","CityEngName":"NantouCounty"},{"CityName":"雲林縣","CityEngName":"Yunlin County"}]},{"RegionName":"南部","RegionEngName":"southern","Cities":[{"CityName":"嘉義市","CityEngName":"Chiayi"},{"CityName":"嘉義縣","CityEngName":"ChiayiCounty"},{"CityName":"臺南市","CityEngName":"Tainan"},{"CityName":"高雄市","CityEngName":"Kaohsiung"},{"CityName":"屏東縣","CityEngName":"PingtungCounty"}]},{"RegionName":"東部","RegionEngName":"eastern","Cities":[{"CityName":"花蓮縣","CityEngName":"HualienCounty"},{"CityName":"臺東縣","CityEngName":"TaitungCounty"}]},{"RegionName":"離島","RegionEngName":"islands","Cities":[{"CityName":"金門縣","CityEngName":"KinmenCounty"},{"CityName":"連江縣","CityEngName":"LienchiangCounty"},{"CityName":"澎湖縣","CityEngName":"PenghuCounty"}]}]')},"6e07":function(e,t,n){},a60d:function(e,t,n){"use strict";n("6e07")},a9e3:function(e,t,n){"use strict";var a=n("83ab"),c=n("da84"),i=n("e330"),r=n("94ca"),l=n("cb2d"),s=n("1a2d"),o=n("7156"),u=n("3a9b"),b=n("d9b5"),g=n("c04e"),d=n("d039"),m=n("241c").f,f=n("06cf").f,j=n("9bf2").f,y=n("408a"),O=n("58a8").trim,C="Number",p=c[C],h=p.prototype,N=c.TypeError,v=i("".slice),E=i("".charCodeAt),w=function(e){var t=g(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,n,a,c,i,r,l,s,o=g(e,"number");if(b(o))throw N("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=O(o),t=E(o,0),43===t||45===t){if(n=E(o,2),88===n||120===n)return NaN}else if(48===t){switch(E(o,1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+o}for(i=v(o,2),r=i.length,l=0;l<r;l++)if(s=E(i,l),s<48||s>c)return NaN;return parseInt(i,a)}return+o};if(r(C,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var x,R=function(e){var t=arguments.length<1?0:p(w(e)),n=this;return u(h,n)&&d((function(){y(n)}))?o(Object(t),n,R):t},I=a?m(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;I.length>T;T++)s(p,x=I[T])&&!s(R,x)&&j(R,x,f(p,x));R.prototype=h,h.constructor=R,l(c,C,R,{constructor:!0})}},ad68:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=function(e){return Object(a["z"])("data-v-2e29839c"),e=e(),Object(a["x"])(),e},i={class:"container py-5"},r=c((function(){return Object(a["h"])("div",{class:"row"},[Object(a["h"])("h4",{class:"text-left mb-3"}," 美食饗宴 ")],-1)})),l={class:"container pb-5"},s={class:"row mb-4"},o={key:0,class:"d-flex align-items-center h5"},u={class:"me-3"},b={class:"text-small text-secondary"},g=Object(a["j"])("共有 "),d={class:"text-success"},m=Object(a["j"])(" 個特色活動"),f={key:1,class:"me-3 text-small text-secondary"},j={class:"row"},y={class:"col-xl-9"},O={class:"col-xl-2 bg-light-secondary p-5 ms-auto align-self-start"},C=c((function(){return Object(a["h"])("h5",{class:"mb-4"}," 分類篩選 ",-1)})),p={class:"d-flex flex-column"},h={class:"row my-5"},N={key:0,class:"d-flex justify-content-center"};function v(e,t,n,c,v,E){var w,k,x=Object(a["D"])("RegionSelect"),R=Object(a["D"])("RestaurantCard"),I=Object(a["D"])("CheckBox"),T=Object(a["D"])("Pagination");return Object(a["w"])(),Object(a["g"])("section",null,[Object(a["h"])("div",i,[r,Object(a["k"])(x,{onSelectCity:c.selectCityHandler},null,8,["onSelectCity"])]),Object(a["h"])("div",l,[Object(a["h"])("div",s,[null!==(w=c.restaurantsByCity)&&void 0!==w&&w.length?(Object(a["w"])(),Object(a["g"])("div",o,[Object(a["h"])("div",u,Object(a["G"])(c.currentCity.CityName),1),Object(a["h"])("small",b,[g,Object(a["h"])("span",d,Object(a["G"])(c.allDataLength),1),m])])):(Object(a["w"])(),Object(a["g"])("div",f," 暫無相關資料。 "))]),Object(a["h"])("div",j,[Object(a["h"])("div",y,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(c.restaurantsByCity,(function(e){return Object(a["w"])(),Object(a["g"])("div",{key:e.RestaurantID,class:"mb-3"},[Object(a["k"])(R,{item:e,title:e.RestaurantName,type:e.Class,content:e.Description,location:e.City,onClickHandler:c.clickHandler},null,8,["item","title","type","content","location","onClickHandler"])])})),128))]),Object(a["h"])("div",O,[C,Object(a["h"])("div",p,[Object(a["k"])(I,{class:"mb-2"}),Object(a["k"])(I,{class:"mb-2",title:"中式美食",disabled:!0,checked:!1}),Object(a["k"])(I,{class:"mb-2",title:"異國料理",disabled:!0,checked:!1}),Object(a["k"])(I,{class:"mb-2",title:"地方名產",disabled:!0,checked:!1})])])]),Object(a["h"])("div",h,[null!==(k=c.restaurantsByCity)&&void 0!==k&&k.length?(Object(a["w"])(),Object(a["g"])("div",N,[Object(a["k"])(T,{"current-page":c.page,pages:c.pages,onChangePage:c.changePageHandler},null,8,["current-page","pages","onChangePage"])])):Object(a["f"])("",!0)])])])}var E=n("5502"),w={class:"card mb-4"},k={class:"row no-gutters"},x={class:"col-md-3"},R=["src","alt"],I={class:"col-md-9"},T={class:"card-body d-flex flex-column h-100"},_={class:"card-title mb-2"},P={class:"d-block text-primary mb-2"},S={class:"card-text text-secondary"},H={class:"card-text mt-auto"},G={class:"text-muted"};function A(e,t,n,c,i,r){var l,s,o,u;return Object(a["w"])(),Object(a["g"])("div",w,[Object(a["h"])("div",k,[Object(a["h"])("div",x,[Object(a["h"])("img",{src:c.renderImage(null===(l=n.item)||void 0===l||null===(s=l.Picture)||void 0===s?void 0:s.PictureUrl1),class:"w-100 object-cover cursor-pointer",alt:(null===(o=n.item)||void 0===o||null===(u=o.Picture)||void 0===u?void 0:u.PictureDescription1)||"",style:{"max-height":"185px"},onClick:t[0]||(t[0]=function(e){return c.clickHandler(n.item)})},null,8,R)]),Object(a["h"])("div",I,[Object(a["h"])("div",T,[Object(a["h"])("h5",_,Object(a["G"])(n.title),1),Object(a["h"])("small",P,Object(a["G"])(n.type),1),Object(a["h"])("small",S,Object(a["G"])(n.content.length>120?n.content.substring(0,120)+"...":n.content),1),Object(a["h"])("p",H,[Object(a["h"])("small",G,Object(a["G"])(n.location),1)])])])])])}var B={props:{item:{type:Object,default:function(){}},title:{type:String,default:""},content:{type:String,default:""},type:{type:String,default:""},location:{type:String,default:""}},setup:function(e,t){var n=t.emit,a="https://images.unsplash.com/photo-1543161252-42609aa0e3d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80",c=function(e){n("clickHandler",e)},i=function(e){return e||a};return{initImage:a,clickHandler:c,renderImage:i}}},D=(n("c94e"),n("6b0d")),q=n.n(D);const Y=q()(B,[["render",A],["__scopeId","data-v-1ea01a84"]]);var M=Y,L=n("1799"),F={class:"checkbox"},U=["disabled"],$=Object(a["j"])(),J=["disabled"],V=Object(a["j"])();function K(e,t,n,c,i,r){return Object(a["w"])(),Object(a["g"])("label",F,[n.checked?(Object(a["w"])(),Object(a["g"])(a["a"],{key:0},[Object(a["h"])("input",{type:"checkbox",disabled:n.disabled,checked:""},null,8,U),$,Object(a["h"])("span",null,Object(a["G"])(n.title),1)],64)):(Object(a["w"])(),Object(a["g"])(a["a"],{key:1},[Object(a["h"])("input",{type:"checkbox",disabled:n.disabled},null,8,J),V,Object(a["h"])("span",null,Object(a["G"])(n.title),1)],64))])}var z={props:{title:{type:String,default:"全部"},checked:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}}};n("423c");const X=q()(z,[["render",K],["__scopeId","data-v-5d636735"]]);var W=X,Q=n("4bcf"),Z={name:"Cities",components:{RestaurantCard:M,CheckBox:W,Pagination:L["a"],RegionSelect:Q["a"]},setup:function(){var e=Object(E["b"])(),t=Object(a["B"])({}),n=Object(a["B"])(1),c=Object(a["c"])((function(){return e.getters.pages})),i=Object(a["c"])((function(){return e.getters.restaurantsByCity})),r=Object(a["c"])((function(){return e.getters.allDataLength})),l=function(e){t.value=e};Object(a["I"])(t,(function(e){e&&o(e.CityEngName)}));var s=function(e){window.open("https://www.google.com.tw/search?q="+e.RestaurantName,"_blank")},o=function(t){e.dispatch("GET_RESTAURANT_BY_CITY",{city:t,sorted:{$top:30,$format:"JSON"}}),e.dispatch("GET_RESTAURANT_BY_CITY_All_PAGES",t),u()},u=function(){n.value=1},b=function(){window.scrollTo(0,0)},g=function(a){n.value=a,e.dispatch("GET_RESTAURANT_BY_CITY",{city:t.value.CityEngName,sorted:{$top:30,$format:"JSON",$skip:30*(n.value-1)}}),b()};return{page:n,pages:c,selectCityHandler:l,currentCity:t,changePageHandler:g,restaurantsByCity:i,clickHandler:s,allDataLength:r}}};n("3d5b");const ee=q()(Z,[["render",v],["__scopeId","data-v-2e29839c"]]);t["default"]=ee},c94e:function(e,t,n){"use strict";n("4d8c")},d81d:function(e,t,n){"use strict";var a=n("23e7"),c=n("b727").map,i=n("1dde"),r=i("map");a({target:"Array",proto:!0,forced:!r},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},f3a6:function(e,t,n){}}]);
//# sourceMappingURL=Restaurant .8639af36.js.map