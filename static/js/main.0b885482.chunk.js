(this["webpackJsonpswitcraft-api-demo"]=this["webpackJsonpswitcraft-api-demo"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),l=(a(27),a(10)),o=a(4),i=(a(28),a(1)),u=(a(29),function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:"32px",version:"1.1",viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve"},r.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"}))}),m=Object(n.createContext)(),d=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(m.Provider,{value:Object(n.useReducer)(t,a)},c)},p=function(){return Object(n.useContext)(m)},f=(a(30),function(e){var t=e.itemClicked;return r.a.createElement("div",{className:"c-menu"},r.a.createElement(l.b,{onClick:t,className:"c-menu__item",to:"/demo/"},"Transactions"),r.a.createElement(l.b,{onClick:t,className:"c-menu__item",to:"/demo/details"},"Change Address"))}),E=function(){return r.a.createElement("svg",{width:"32px",height:"32px",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.354 5.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z",clipRule:"evenodd"}))},h=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=p(),l=Object(i.a)(s,1)[0].bankDetails,o=function(){return c(!a)};return r.a.createElement("header",{className:"c-top-bar"},r.a.createElement("h3",{className:"c-top-bar__title"},"Switchcraft Bank Account"),r.a.createElement("p",{className:"c-top-bar__details"},l.sortCode," ",l.accountNumber),r.a.createElement("button",{className:"c-top-bar__burger-icon",onClick:o},a?r.a.createElement(E,null):r.a.createElement(u,null)),a&&r.a.createElement(f,{itemClicked:o}))},v=a(8),b=a(3),_=a.n(b),N=a(7),w=(a(37),[{date:"Today",to:"Tesco",amount:"3.00"},{date:"Yesterday",to:"Energy Supplier",amount:"70.00",reference:"Gas and Electric"},{date:"18 February",to:"Jess Smith",amount:"300.00",reference:"Holiday"},{date:"17 February",to:"Landlord",amount:"1,000.00",reference:"House Rent"}]),g=(a(38),a(39),a(40),function(e){var t=e.className;return r.a.createElement("div",{className:"c-loading-spinner".concat(t?" ".concat(t):"")})}),O=function(e){var t=e.children;return r.a.createElement("div",{className:"c-loading"},r.a.createElement(g,{className:"c-loading__spinner"}),t||"Loading...")},S=function(){return r.a.createElement("div",{className:"c-full-screen-loading"},r.a.createElement(O,null,"Getting you a quote..."))},y=Object({NODE_ENV:"production",PUBLIC_URL:"/switchcraft-api-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_BACKEND_URL:"https://api-staging.switchcraft.co.uk"}).REACT_APP_API_VERSION||"v1",j="".concat("https://api-staging.switchcraft.co.uk","/api/").concat(y),x="".concat(j,"/energy"),C="".concat(x,"/quote"),k="".concat(x,"/switch"),T="".concat("https://api-staging.switchcraft.co.uk","/sw-api/getAddresses"),q=function(){var e=Object(N.a)(_.a.mark((function e(t,a){var n,r,c,s,l=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>2&&void 0!==l[2]?l[2]:"POST",r=l.length>3?l[3]:void 0,e.prev=2,e.next=5,fetch(a,{headers:{"Content-Type":"application/json",Authorization:"switchcraft-test-key"},body:JSON.stringify(t),method:n,signal:r});case 5:return c=e.sent,e.next=8,c.json();case 8:if(s=e.sent,200===c.status){e.next=11;break}throw s;case 11:return e.abrupt("return",s);case 14:if(e.prev=14,e.t0=e.catch(2),"AbortError"!==e.t0.name){e.next=18;break}return e.abrupt("return",null);case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(N.a)(_.a.mark((function e(t,a){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={hasUserAcceptedTermsAndConditions:!0,address:t},e.next=3,q(n,C,"POST",a);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),P=function(e){return{quote:e,type:"SET_QUOTE"}},R=function(e){return{error:e,type:"SET_QUOTE_ERROR"}},F=function(e,t){var a=function(e,t){switch(t.type){case"SET_DETAILS":return Object(v.a)({},e,{address:t.address,quote:null});case"SET_QUOTE":return Object(v.a)({},e,{quote:t.quote,quoteError:null});case"SET_QUOTE_ERROR":return Object(v.a)({},e,{quoteError:t.error});default:return e}}(e,t);return localStorage.setItem("swc-api-demo-1.0.0",JSON.stringify({address:a.address,identity:a.identity,bankDetails:a.bankDetails})),a},U=(a(41),a(42),function(){var e=p(),t=Object(i.a)(e,1)[0].quote,a=t&&t.tariffs&&t.tariffs.length>0&&t.tariffs[0];return a?r.a.createElement("div",{className:"c-quote"},r.a.createElement(l.b,{className:"c-quote__switch-user",to:"demo/switch"},"Switch energy and save \xa3",a.annualSaving.toFixed(0)," a year")):null}),B=function(e){var t=e.transaction,a=e.showQuote;return r.a.createElement("div",{className:"c-transaction-row"},r.a.createElement("div",{className:"c-transaction-row__date"},t.date),r.a.createElement("div",{className:"c-transaction-row__inner"},r.a.createElement("div",null,r.a.createElement("p",{className:"c-transaction-row__to"},t.to),t.reference&&r.a.createElement("p",{className:"c-transaction-row__reference"},t.reference)),r.a.createElement("div",null,r.a.createElement("p",{className:"c-transaction-row__amount"},"\xa3",t.amount))),a&&r.a.createElement(U,null))},D=function(){var e=p(),t=Object(i.a)(e,2),a=t[0],c=a.address,s=a.quote,l=a.quoteError,u=t[1],m=Object(n.useState)(!0),d=Object(i.a)(m,2),f=d[0],E=d[1];return Object(n.useEffect)((function(){var e=new AbortController;return function(){var t=Object(N.a)(_.a.mark((function t(){var a,n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0),t.prev=1,t.next=4,A(c,e.signal);case 4:if(a=t.sent){t.next=7;break}return t.abrupt("return");case 7:n=a&&a.tariffs&&a.tariffs[0]&&a.tariffs[0].annualSaving,u(n&&n>0?P(a):R("No savings to be made for this address")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),u(R(t.t0.message));case 14:E(!1);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}()(),function(){e.signal.aborted||e.abort()}}),[c,u]),f?r.a.createElement(S,null):l?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"c-transactions"},w.map((function(e){if(s&&"Energy Supplier"===e.to){var t=s.tariffs&&s.tariffs[0],a=t?((t.annualSaving+t.annualCost)/12).toFixed(0):e.amount,n=Array.from(new Set([s.estimate.elec.hasFuel&&s.estimate.elec.supplierName,s.estimate.gas.hasFuel&&s.estimate.gas.supplierName].filter((function(e){return Boolean(e)})))).join(" / "),r=s.estimate.elec.hasFuel&&s.estimate.gas.hasFuel?"Gas and Electric":s.estimate.elec.hasFuel?"Electric":"Gas";return Object(v.a)({},e,{amount:a,to:n,reference:r})}return e})).map((function(e,t){return r.a.createElement(B,{key:t,transaction:e,showQuote:1===t})})))},I=(a(43),function(e){var t=e.fuelName,a=e.fuelEstimate;return a.hasFuel?r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,a.supplierName),r.a.createElement("td",null,a.tariffName),r.a.createElement("td",null,a.isPrepay?"Prepay":"Credit"),r.a.createElement("td",null,a.kwUsagePerMonth.toFixed(0),"kW")):null}),L=function(e){var t=e.estimate;return r.a.createElement("div",{className:"c-estimate-summary"},r.a.createElement("p",null,"We have made this estimate based on these details:"),r.a.createElement("table",{className:"c-estimate-summary__table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Fuel Type"),r.a.createElement("th",null,"Supplier Name"),r.a.createElement("th",null,"Tariff Name"),r.a.createElement("th",null,"Payment Type"),r.a.createElement("th",null,"KwH Usage Per Month"))),r.a.createElement("tbody",null,r.a.createElement(I,{fuelName:"Electricity",fuelEstimate:t.elec}),r.a.createElement(I,{fuelName:"Gas",fuelEstimate:t.gas}))))},H=(a(44),function(e){var t=e.topTariff;return r.a.createElement("div",{className:"c-top-quote"},r.a.createElement("div",{className:"c-top-quote__top-row"},r.a.createElement("div",{className:"c-top-quote__row-item"},r.a.createElement("img",{className:"c-top-quote__supplier-logo",src:t.supplierLogoUrl,alt:"Supplier logo"})),r.a.createElement("div",{className:"c-top-quote__row-item"},r.a.createElement("div",{className:"c-top-quote__cost-text"},"Estimated cost"),r.a.createElement("div",{className:"c-top-quote__cost"},r.a.createElement("span",{className:"c-top-quote__currency"},"\xa3"),t.annualCost.toFixed(0)),r.a.createElement("div",{className:"c-top-quote__cost-text"},"per year")),r.a.createElement("div",{className:"c-top-quote__row-item"},r.a.createElement("div",{className:"c-top-quote__cost-text"},"You save"),r.a.createElement("div",{className:"c-top-quote__saving"},r.a.createElement("span",{className:"c-top-quote__currency"},"\xa3"),t.annualSaving.toFixed(0)),r.a.createElement("div",{className:"c-top-quote__cost-text"},"per year"))),r.a.createElement("div",{className:"c-top-quote__bottom-row"},r.a.createElement("span",{className:"c-top-quote__supplier-name"},t.supplierName),"\xa0",t.tariffName,r.a.createElement("span",{className:"c-top-quote__warm-home-discount"},t.hasWarmHomeDiscount?"This tariff will preserve your warm home discount":"This tariff does not include a warm home discount")))}),W=(a(45),a(46),a(47),function(e){var t=e.onClick,a=e.children,n=e.buttonColor;return r.a.createElement("button",Object.assign({className:"c-btn c-outline-btn",onClick:t},n?{style:{backgroundColor:n}}:{}),a)}),J=function(e,t,a){var n=Object(v.a)({userId:e},t,{bankDetails:a});return q(n,k)},M=function(e){var t=e.topTariff,a=e.userId,c=p(),s=Object(i.a)(c,1)[0],l=s.identity,o=s.bankDetails,u=Object(n.useState)(null),m=Object(i.a)(u,2),d=m[0],f=m[1],E=Object(n.useState)(null),h=Object(i.a)(E,2),v=h[0],b=h[1],w=Object(n.useState)(!1),g=Object(i.a)(w,2),S=g[0],y=g[1],j=function(){var e=Object(N.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,J(a,l,o);case 4:t=e.sent,f(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),"duplicateSwitch"===e.t0.code?f({}):b(e.t0.message);case 11:y(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"c-switch-user-button"},d||v||S?r.a.createElement("div",{className:"c-switch-user-button__result"},S?r.a.createElement(O,null,"Switching your energy..."):v||"Switch successful"):r.a.createElement("div",{className:"c-switch-user-button__btn"},r.a.createElement(W,{onClick:j},"Switch now and save \xa3",t.annualSaving.toFixed(0))))},K=(a(48),function(){var e=p(),t=Object(i.a)(e,1)[0],a=t.address,n=t.quote;if(!n)return r.a.createElement(o.a,{to:"/",push:!0});var c=n.tariffs[0];return r.a.createElement("div",{className:"c-switch-user"},r.a.createElement("div",{className:"c-switch-user__top-quote-text"},"Your top quote for ",a.addressLine1,":"),r.a.createElement(H,{topTariff:c}),r.a.createElement(L,{estimate:n.estimate}),r.a.createElement(M,{userId:n.userId,topTariff:c}))}),z=a(13),G=(a(49),a(50),function(e){var t=e.children,a=e.className,n=e.type,c=void 0===n?"text":n,s=e.placeholder,l=e.onChange,o=e.value;return r.a.createElement("input",{className:"".concat(a||""," c-input"),placeholder:s,type:c,value:o,onChange:function(e){return l(e.target.value)}},t)}),Q=(a(51),function(e){var t=e.className,a=e.onChange,n=e.options,c=e.value;return r.a.createElement("select",{className:"".concat(t||""," c-select"),value:c,onChange:function(e){return a(e.target.value)}},n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))}),Y=function(){var e=Object(N.a)(_.a.mark((function e(t,a){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={arguments:[t]},e.next=3,q(n,T,"POST",a);case 3:return r=e.sent,e.abrupt("return",r&&r.map((function(e){var t=["orgn","subb","bnam","bnum","thor"];return Object.entries(e).filter((function(e){var a=Object(i.a)(e,2),n=a[0],r=a[1];return t.includes(n)&&Boolean(r)})).map((function(e){return Object(i.a)(e,2)[1]})).join(" ")})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=/^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/,Z=function(e){var t=e.buttonText,a=void 0===t?"Update details":t,c=e.floatingButton,s=void 0===c||c,l=e.buttonColor,u=p(),m=Object(i.a)(u,2),d=m[0].address,f=m[1],E=Object(n.useState)({postcode:d.postcode,addressLine1:d.addressLine1}),h=Object(i.a)(E,2),b=h[0],_=h[1],N=Object(n.useState)(!1),w=Object(i.a)(N,2),O=w[0],S=w[1],y=Object(n.useState)(!0),j=Object(i.a)(y,2),x=j[0],C=j[1],k=Object(n.useState)([]),T=Object(i.a)(k,2),q=T[0],A=T[1];Object(n.useEffect)((function(){var e=new AbortController,t=b.postcode.toUpperCase();return V.test(t)&&(C(!0),Y(t,e.signal).then((function(e){A(e),C(!1)}))),function(){e.signal.aborted||e.abort()}}),[b.postcode]);var P=function(e,t){_(Object(v.a)({},b,Object(z.a)({},e,t)))};return O?r.a.createElement(o.a,{to:"/demo",push:!0}):r.a.createElement("div",{className:"c-details"},r.a.createElement("label",{className:"c-details__field"},"Postcode",r.a.createElement(G,{className:"c-details__input",onChange:function(e){return P("postcode",e)},type:"text",value:b.postcode})),r.a.createElement("label",{className:"c-details__field"},"Address",r.a.createElement(Q,{className:"c-details__input",onChange:function(e){return P("addressLine1",e)},options:(q||[]).map((function(e){return{label:e,value:e}})),value:b.addressLine1}),x&&r.a.createElement("div",{className:"c-details__spinner"},r.a.createElement(g,null))),r.a.createElement("div",{className:"c-details__update-btn".concat(s?" c-details__update-btn__floating":"")},r.a.createElement(W,{onClick:function(){f(function(e){return{address:e,type:"SET_DETAILS"}}(b)),S(!0)},buttonColor:l},a)))},X=function(e){var t=e.match;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"c-demo"},r.a.createElement("div",{className:"c-demo__inner"},r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"".concat(t.path,"/switch")},r.a.createElement(K,null)),r.a.createElement(o.b,{path:"".concat(t.path,"/details")},r.a.createElement(Z,null)),r.a.createElement(o.b,{path:"".concat(t.path,"/")},r.a.createElement(D,null)))))))},$=(a(52),function(){var e=p(),t=Object(i.a)(e,1)[0].quoteError;return r.a.createElement("div",{className:"c-intro"},r.a.createElement("div",{className:"c-intro__text-section"},r.a.createElement("h2",{className:"c-intro__heading"},"Welcome to the Switchcraft API demo"),r.a.createElement("p",null,"Enter your address to see an example of how you might use the Switchcraft API.")),r.a.createElement("div",{className:"c-intro__details"},r.a.createElement(Z,{buttonText:"Start demo",floatingButton:!1,buttonColor:"#FFFFFF"})),t&&r.a.createElement("span",{className:"c-intro__quote-error"},t,r.a.createElement("br",null),"Please try a different address"))});s.a.render(r.a.createElement((function(){return r.a.createElement(d,{initialState:JSON.parse(localStorage.getItem("swc-api-demo-1.0.0"))||{address:{addressLine1:"192a Kingsland Road",postcode:"E28EB"},identity:{title:"Mr",firstName:"John",lastName:"Smith",email:"john.smith@email.co.uk",phoneNumber:"07950450297",dateOfBirth:"1989-05-25",monthsAtCurrentAddress:50},bankDetails:{accountNumber:"14457846",sortCode:"40-47-84"},quoteError:null},reducer:F},r.a.createElement(l.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/demo",component:X}),r.a.createElement(o.b,{path:"/",component:$}))))}),null),document.getElementById("root"))}]),[[22,1,2]]]);
//# sourceMappingURL=main.0b885482.chunk.js.map