(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Activity"],{1799:function(e,t,n){"use strict";var a=n("7a23"),i=function(e){return Object(a["z"])("data-v-279af2c8"),e=e(),Object(a["x"])(),e},c={"aria-label":"Page navigation example"},r={class:"pagination flex-wrap"},o=i((function(){return Object(a["h"])("a",{class:"page-link previous",href:"javascript:;","aria-label":"Previous"},null,-1)})),u=[o],l=["onClick"],s=i((function(){return Object(a["h"])("a",{class:"page-link next",href:"javascript:;","aria-label":"Next"},null,-1)})),g=[s];function b(e,t,n,i,o,s){return Object(a["w"])(),Object(a["g"])("nav",c,[Object(a["h"])("ul",r,[Object(a["h"])("li",{class:Object(a["q"])(["page-item",{disabled:1===n.currentPage}]),onClick:t[0]||(t[0]=function(e){return i.changePageHandler(n.currentPage-1)})},u,2),(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(n.pages,(function(e){return Object(a["w"])(),Object(a["g"])("li",{key:e,class:"page-item mb-2",onClick:function(t){return i.changePageHandler(e)}},[Object(a["h"])("a",{class:Object(a["q"])(["page-link page-link-item",{active:e===n.currentPage}]),href:"javascript:;"},Object(a["G"])(e),3)],8,l)})),128)),Object(a["h"])("li",{class:Object(a["q"])(["page-item",{disabled:n.currentPage>=n.pages}]),onClick:t[1]||(t[1]=function(e){return i.changePageHandler(n.currentPage+1)})},g,2)])])}n("a9e3");var m={props:{currentPage:{type:Number,default:1},pages:{type:Number,default:1}},setup:function(e,t){var n=t.emit,a=function(e){n("changePage",e)};return{changePageHandler:a}}},f=(n("1a56"),n("6b0d")),y=n.n(f);const C=y()(m,[["render",b],["__scopeId","data-v-279af2c8"]]);t["a"]=C},"1a56":function(e,t,n){"use strict";n("f3a6")},"408a":function(e,t,n){var a=n("e330");e.exports=a(1..valueOf)},"4bcf":function(e,t,n){"use strict";var a=n("7a23"),i={class:"container"},c={class:"row row-cols-auto justify-content-center my-3"},r={class:"col-md-3 d-flex flex-row flex-wrap justify-content-start bg-dark-light align-items-center py-4 ps-5 border-left-radius"},o=["onClick"],u={class:"fw-normal mb-0"},l={class:"col-md-9 d-flex flex-row flex-wrap bg-light justify-content-center align-items-center border-right-radius"},s=["onClick"],g={class:"fw-normal mb-0"};function b(e,t,n,b,m,f){return Object(a["w"])(),Object(a["g"])("section",null,[Object(a["h"])("div",i,[Object(a["h"])("div",c,[Object(a["h"])("div",r,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(b.regions,(function(e){return Object(a["w"])(),Object(a["g"])("div",{key:e.RegionName,class:"me-2 d-flex align-self-center",onClick:function(t){return b.selectRegion(e.RegionEngName)}},[Object(a["h"])("h5",u,[Object(a["h"])("div",{class:Object(a["q"])(["badge rounded-pill bg-none text-dark fw-normal",{"bg-success text-white":b.isEqualToCurrentRegion(e.RegionEngName)}])},Object(a["G"])(e.RegionName),3)])],8,o)})),128))]),Object(a["h"])("div",l,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(b.currentCities.Cities,(function(e){return Object(a["w"])(),Object(a["g"])("div",{key:e.CityEngName,class:"me-2 d-flex align-self-center",onClick:function(t){return b.selectCity(e)}},[Object(a["h"])("h5",g,[Object(a["h"])("div",{class:Object(a["q"])(["badge rounded-pill bg-none text-dark fw-normal",{"bg-white":b.isEqualToCityName(b.currentCity.CityEngName,e.CityEngName)}])},Object(a["G"])(e.CityName),3)])],8,s)})),128))])])])])}n("d81d"),n("4de4"),n("d3b7");var m=n("6030"),f={name:"RegionSelect",components:{},emits:["selectCity"],setup:function(e,t){var n=t.emit,i=Object(a["B"])("northern"),c=Object(a["c"])((function(){return m.map((function(e){return{RegionName:e.RegionName,RegionEngName:e.RegionEngName}}))})),r=function(e){i.value=e},o=function(e){return i.value===e},u=function(e,t){return e===t},l=Object(a["c"])((function(){return m.filter((function(e){return e.RegionEngName===i.value}))[0]})),s=Object(a["B"])({});Object(a["I"])(l,(function(e){e&&(s.value=e.Cities[0])}),{immediate:!0});var g=function(e){s.value=e};return Object(a["I"])(s,(function(e){e&&n("selectCity",e)}),{immediate:!0}),{selectRegion:r,selectCity:g,currentRegion:i,currentCities:l,currentCity:s,regions:c,isEqualToCurrentRegion:o,isEqualToCityName:u}}},y=(n("a60d"),n("6b0d")),C=n.n(y);const d=C()(f,[["render",b],["__scopeId","data-v-02333a78"]]);t["a"]=d},"51eb":function(e,t,n){"use strict";n("cb84")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("e330"),i=n("1d80"),c=n("577e"),r=n("5899"),o=a("".replace),u="["+r+"]",l=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),g=function(e){return function(t){var n=c(i(t));return 1&e&&(n=o(n,l,"")),2&e&&(n=o(n,s,"")),n}};e.exports={start:g(1),end:g(2),trim:g(3)}},6030:function(e){e.exports=JSON.parse('[{"RegionName":"北部","RegionEngName":"northern","Cities":[{"CityName":"臺北市","CityEngName":"Taipei"},{"CityName":"基隆市","CityEngName":"Keelung"},{"CityName":"新北市","CityEngName":"NewTaipei"},{"CityName":"宜蘭縣","CityEngName":"YilanCounty"},{"CityName":"新竹市","CityEngName":"Hsinchu"},{"CityName":"新竹縣","CityEngName":"HsinchuCounty"},{"CityName":"桃園市","CityEngName":"Taoyuan"}]},{"RegionName":"中部","RegionEngName":"central","Cities":[{"CityName":"臺中市","CityEngName":"Taichung"},{"CityName":"苗栗縣","CityEngName":"MiaoliCounty"},{"CityName":"彰化縣","CityEngName":"ChanghuaCounty"},{"CityName":"南投縣","CityEngName":"NantouCounty"},{"CityName":"雲林縣","CityEngName":"Yunlin County"}]},{"RegionName":"南部","RegionEngName":"southern","Cities":[{"CityName":"嘉義市","CityEngName":"Chiayi"},{"CityName":"嘉義縣","CityEngName":"ChiayiCounty"},{"CityName":"臺南市","CityEngName":"Tainan"},{"CityName":"高雄市","CityEngName":"Kaohsiung"},{"CityName":"屏東縣","CityEngName":"PingtungCounty"}]},{"RegionName":"東部","RegionEngName":"eastern","Cities":[{"CityName":"花蓮縣","CityEngName":"HualienCounty"},{"CityName":"臺東縣","CityEngName":"TaitungCounty"}]},{"RegionName":"離島","RegionEngName":"islands","Cities":[{"CityName":"金門縣","CityEngName":"KinmenCounty"},{"CityName":"連江縣","CityEngName":"LienchiangCounty"},{"CityName":"澎湖縣","CityEngName":"PenghuCounty"}]}]')},"6e07":function(e,t,n){},a60d:function(e,t,n){"use strict";n("6e07")},a9e3:function(e,t,n){"use strict";var a=n("83ab"),i=n("da84"),c=n("e330"),r=n("94ca"),o=n("cb2d"),u=n("1a2d"),l=n("7156"),s=n("3a9b"),g=n("d9b5"),b=n("c04e"),m=n("d039"),f=n("241c").f,y=n("06cf").f,C=n("9bf2").f,d=n("408a"),j=n("58a8").trim,O="Number",N=i[O],p=N.prototype,v=i.TypeError,h=c("".slice),E=c("".charCodeAt),w=function(e){var t=b(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,n,a,i,c,r,o,u,l=b(e,"number");if(g(l))throw v("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=j(l),t=E(l,0),43===t||45===t){if(n=E(l,2),88===n||120===n)return NaN}else if(48===t){switch(E(l,1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(c=h(l,2),r=c.length,o=0;o<r;o++)if(u=E(c,o),u<48||u>i)return NaN;return parseInt(c,a)}return+l};if(r(O,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var x,I=function(e){var t=arguments.length<1?0:N(w(e)),n=this;return s(p,n)&&m((function(){d(n)}))?l(Object(t),n,I):t},R=a?f(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;R.length>T;T++)u(N,x=R[T])&&!u(I,x)&&C(I,x,y(N,x));I.prototype=p,p.constructor=I,o(i,O,I,{constructor:!0})}},abae:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i=function(e){return Object(a["z"])("data-v-434fab16"),e=e(),Object(a["x"])(),e},c=i((function(){return Object(a["h"])("div",{class:"container pt-5"},[Object(a["h"])("div",{class:"row"},[Object(a["h"])("h4",{class:"text-left mb-3"}," 特色活動 ")])],-1)})),r={class:"container py-5"},o={class:"row mb-4"},u={key:0,class:"d-flex align-items-center h5"},l={class:"me-3"},s={class:"text-small text-secondary"},g=Object(a["j"])("共有 "),b={class:"text-success"},m=Object(a["j"])(" 個特色活動"),f={key:1,class:"me-3 text-small text-secondary"},y={class:"row"},C={key:0,class:"col-md-12 px-0"},d={class:"row d-flex justify-content-start"},j={key:0,class:"d-flex justify-content-center my-5"};function O(e,t,n,i,O,N){var p,v,h,E=Object(a["D"])("RegionSelect"),w=Object(a["D"])("Card"),k=Object(a["D"])("Pagination");return Object(a["w"])(),Object(a["g"])("section",null,[c,Object(a["k"])(E,{onSelectCity:i.selectCityHandler},null,8,["onSelectCity"]),Object(a["h"])("div",r,[Object(a["h"])("div",o,[null!==(p=i.activitiesByCity)&&void 0!==p&&p.length?(Object(a["w"])(),Object(a["g"])("div",u,[Object(a["h"])("div",l,Object(a["G"])(i.currentCity.CityName),1),Object(a["h"])("small",s,[g,Object(a["h"])("span",b,Object(a["G"])(i.allDataLength),1),m])])):(Object(a["w"])(),Object(a["g"])("div",f," 暫無相關資料。 "))]),Object(a["h"])("div",y,[null!==(v=i.activitiesByCity)&&void 0!==v&&v.length?(Object(a["w"])(),Object(a["g"])("div",C,[Object(a["h"])("div",d,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["C"])(i.activitiesByCity,(function(e){return Object(a["w"])(),Object(a["g"])("div",{key:e.ActivityID,class:"col-md-6 col-xl-3 mb-4"},[Object(a["k"])(w,{title:e.ActivityName,content:e,location:e.Location,"show-category":!0,"show-location":!0,onClickHandler:i.clickHandler},null,8,["title","content","location","onClickHandler"])])})),128))]),null!==(h=i.activitiesByCity)&&void 0!==h&&h.length?(Object(a["w"])(),Object(a["g"])("div",j,[Object(a["k"])(k,{"current-page":i.page,pages:i.pages,onChangePage:i.changePageHandler},null,8,["current-page","pages","onChangePage"])])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)])])])}var N=n("5502"),p=n("ae8d"),v=n("1799"),h=n("4bcf"),E={name:"Activity",components:{Card:p["a"],Pagination:v["a"],RegionSelect:h["a"]},setup:function(){var e=Object(N["b"])(),t=Object(a["B"])(""),n=Object(a["B"])(1),i=function(e){t.value=e};Object(a["I"])(t,(function(e){e&&c(e.CityEngName)}));var c=function(t){e.dispatch("GET_ACTIVITY_BY_CITY",{city:t,sorted:{$top:30,$format:"JSON"}}),e.dispatch("GET_ACTIVITY_BY_CITY_All_PAGES",t),r()},r=function(){n.value=1},o=Object(a["c"])((function(){return e.getters.activitiesByCity})),u=Object(a["c"])((function(){return e.getters.allDataLength})),l=Object(a["c"])((function(){return e.getters.pages})),s=function(e){window.open("https://www.google.com.tw/search?q="+e.ActivityName,"_blank")},g=function(){window.scrollTo(0,0)},b=function(a){n.value=a,e.dispatch("GET_ACTIVITY_BY_CITY",{city:t.value.CityEngName,sorted:{$top:30,$format:"JSON",$skip:30*(n.value-1)}}),g()};return{currentCity:t,activitiesByCity:o,clickHandler:s,selectCityHandler:i,allDataLength:u,pages:l,page:n,changePageHandler:b}}},w=(n("51eb"),n("6b0d")),k=n.n(w);const x=k()(E,[["render",O],["__scopeId","data-v-434fab16"]]);t["default"]=x},cb84:function(e,t,n){},d81d:function(e,t,n){"use strict";var a=n("23e7"),i=n("b727").map,c=n("1dde"),r=c("map");a({target:"Array",proto:!0,forced:!r},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},f3a6:function(e,t,n){}}]);
//# sourceMappingURL=Activity.15046050.js.map