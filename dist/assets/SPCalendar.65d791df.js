import{r as w,u as W,h as p,o as b,c as g,a as n,b as se,d as ie,w as V,e as X,v as q,F as N,f as K,t as _,g as O,i as E,j as B,n as H,k as R,l as F,m as ue,_ as de}from"./index.ca2927aa.js";import{l as ce,m as L}from"./moment-with-locales.ab5275b4.js";function ve(e){const t=w([]),{khmerNewYearDate:v}=W();let c=v.value(e.year).days;return c.forEach((i,h)=>{let r={};h===0?r={kh:"\u1796\u17B7\u1792\u17B8\u1794\u17BB\u178E\u17D2\u1799\u1785\u17BC\u179B\u1786\u17D2\u1793\u17B6\u17C6\u1790\u17D2\u1798\u17B8 \u1794\u17D2\u179A\u1796\u17C3\u178E\u17B8\u1787\u17B6\u178F\u17B7 (\u1798\u17A0\u17B6\u179F\u1784\u17D2\u179A\u17D2\u1780\u17B6\u1793\u17D2\u178F)",en:"Khmer New Year's Day (Moha Sangkranta)"}:i===c[c.length-1]?r={kh:"\u1796\u17B7\u1792\u17B8\u1794\u17BB\u178E\u17D2\u1799\u1785\u17BC\u179B\u1786\u17D2\u1793\u17B6\u17C6\u1790\u17D2\u1798\u17B8 \u1794\u17D2\u179A\u1796\u17C3\u178E\u17B8\u1787\u17B6\u178F\u17B7 (\u179C\u17B6\u179A\u17C8\u17A1\u17BE\u1784\u179F\u17D0\u1780)",en:"Khmer New Year's Day (Veareak Laeung Sak)"}:r={kh:"\u1796\u17B7\u1792\u17B8\u1794\u17BB\u178E\u17D2\u1799\u1785\u17BC\u179B\u1786\u17D2\u1793\u17B6\u17C6\u1790\u17D2\u1798\u17B8 \u1794\u17D2\u179A\u1796\u17C3\u178E\u17B8\u1787\u17B6\u178F\u17B7 (\u179C\u17B6\u179A\u17C8\u179C\u17D0\u1793\u1794\u178F)",en:"Khmer New Year's Day (Veareak Vanabat)"},t.value.push({key:"traditional_holidays"+p(i).format("YYYY-MM-DD"),customData:{title:r,description:"Holiday in Cambodia",class:"bg-red-600 text-white"},dates:p(i).format("YYYY-MM-DD")})}),{khmerNewYearAttrs:t}}const fe="/khmer-lunar/assets/buddhist-icon.d62fdc83.webp";function he(e,t){return b(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z","clip-rule":"evenodd"})])}function me(e,t){return b(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"})])}function be(e,t){return b(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}const ge={class:"p-5"},ye={class:"mb-3 rounded-xl border p-2 flex gap-4 flex-col md:flex-row items-center justify-center text-lg font-hanuman"},pe=n("label",null,"Month: ",-1),_e=["value"],xe=n("label",null,"Year: ",-1),Ye=["value"],we={class:"font-nokora w-full bg-white border mx-auto p-2 rounded-xl"},Me={class:"items-center justify-between flex mb-4"},ke={class:"shrink-0 text-right text-lg font-bold"},De={class:"text-center w-full"},je={class:"text-lg md:text-xl lg:text-2xl font-bold"},$e={class:"text-lg md:text-xl text-gray-600 font-bold"},Te={class:"flex gap-1 items-center justify-between shrink-0"},Se=["onClick"],Oe=["onClick"],Ce=["onClick"],Ne={class:"flex gap-2 justify-between text-center items-center mb-2 bg-white rounded-md border overflow-hidden font-bold text-base md:text-lg whitespace-nowrap"},Ie={class:"grid gap-2 grid-cols-7"},Le=["onClick"],Ee={class:"flex lg:gap-1 flex-col items-center md:flex-row md:items-start"},Pe={class:"text-lg md:text-3xl font-bold shrink-0"},Ke={class:"w-full flex justify-center flex-col md:justify-start items-center md:items-end font-nokora text-sm md:text-base text-center"},Be={key:0,class:"absolute inset-0 rounded-md overflow-hidden flex justify-center z-10 opacity-30 lg:static lg:opacity-100 p-1"},He=n("img",{src:fe,alt:"Buddhist",class:"h-full object-cover object-top lg:w-6 lg:h-auto lg:object-contain"},null,-1),Ue=[He],Fe={key:0,class:"text-blue-600 font-bold hidden md:block"},Re={__name:"TheCalendar",props:{attributes:Object},emits:["onPrev","onNext","onUpdatePage","onClick"],setup(e,{emit:t}){const v=e,{khmerDate:c}=W(),i=w([]),h=w([]),r=w(p().month()+1),l=w(p().year()),m=w([]),y=se(()=>p(l.value+"-"+r.value+"-1","YYYY-M-D").locale("en")),S=w([]),j=()=>{r.value--,r.value===0&&(r.value=12,l.value--),t("onPrev",{month:r.value,year:l.value}),t("onUpdatePage",{month:r.value,year:l.value})},C=()=>{r.value++,r.value===13&&(r.value=1,l.value++),t("onNext",{month:r.value,year:l.value}),t("onUpdatePage",{month:r.value,year:l.value})},s=()=>{r.value=p().month()+1,l.value=p().year()},x=u=>{t("onClick",u)};ie(()=>{h.value.length=0,d()});const d=()=>{t("onPrev",{month:r.value,year:l.value}),t("onNext",{month:r.value,year:l.value}),t("onUpdatePage",{month:r.value,year:l.value}),i.value.length=0,m.value.length=0;for(let f=0;f<7;f++)i.value.push({en:p().day(f),km:p().clone().day(f)});let u=y.value,o=u.clone().daysInMonth(),a=u.day(),U=7-p(u.format("YYYY-MM-"+o)).day()-1,le=u.clone().subtract(1,"months").daysInMonth();for(let f=a;f>0;f--){let T=le-f+1,I=p(u.clone().subtract(1,"months").format("YYYY-MM-"+T),"YYYY-MM-D");h.value.push({prevMonth:!0,day:T,date:I,khDate:c.value(I),nextMonth:!1,attributes:M(I)})}for(let f=1;f<=o;f++){let T=p(u.format("YYYY-MM-"+f),"YYYY-MM-D"),I=c.value(T);h.value.push({prevMonth:!1,day:f,date:T,khDate:I,nextMonth:!1,attributes:M(T)}),m.value.push(I.toKhDate("m"))}for(let f=1;f<=U;f++){let T=p(u.clone().add(1,"months").format("YYYY-MM-"+f),"YYYY-MM-D");h.value.push({prevMonth:!1,day:f,date:T,khDate:c.value(T),nextMonth:!0,attributes:M(T)})}Y(),m.value=[...new Set(m.value.map(f=>f))]},Y=()=>{let u;y.value.clone().month()+1<=4?u=y.value.clone().add(543,"years").locale("km").format("YYYY"):u=y.value.clone().add(544,"years").locale("km").format("YYYY"),S.value=(c.value(y.value.clone()).toKhDate("\u1786\u17D2\u1793\u17B6\u17C6a_e_\u1796.\u179F")+u).split("_")},M=u=>v.attributes.filter(o=>u.isSame(o.dates)),$=u=>{let o=Object.assign([],u);if(o.length){if(o.filter(a=>a.customData.description==="Holiday in Cambodia").length)return"text-red-600 bg-red-100";if(o.filter(a=>a.customData.description==="General Event").length)return"text-blue-600 bg-blue-100"}else return"bg-white"},z=(u,o)=>u==="\u17E8\u179A\u17C4\u1785"||u==="\u17E8\u1780\u17BE\u178F"||u==="\u17E1\u17E5\u1780\u17BE\u178F"||u==="\u17E1\u17E5\u179A\u17C4\u1785"?!0:u==="\u17E1\u17E4\u179A\u17C4\u1785"&&c.value(o.clone().add(1,"days")).toKhDate("dN")==="\u17E1\u1780\u17BE\u178F",D=w({month:r.value,year:l.value});return V(D.value,()=>{l.value=D.value.year,r.value=D.value.month}),V(y,ce.exports.debounce(()=>{D.value.year=l.value,D.value.month=r.value,h.value.length=0,d()},300)),(u,o)=>(b(),g("div",ge,[n("div",ye,[n("div",null,[pe,X(n("select",{"onUpdate:modelValue":o[0]||(o[0]=a=>D.value.month=a),class:"border rounded-md py-2 px-3"},[(b(),g(N,null,K(12,a=>n("option",{key:a,value:a},_(O(p)({M:a-1}).format("MMMM")),9,_e)),64))],512),[[q,D.value.month]])]),n("div",null,[xe,X(n("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>D.value.year=a),class:"border rounded-md py-2 px-3"},[(b(),g(N,null,K(1e3,(a,k)=>n("option",{key:a,value:1900+k},_(1900+k),9,Ye)),64))],512),[[q,D.value.year]])])]),n("div",we,[n("div",Me,[n("div",ke,[n("div",null,_(S.value[0]),1),n("div",null,_(S.value[1]),1),n("div",null,_(S.value[2]),1)]),n("div",De,[n("h2",je,_(m.value.toString()),1),n("h2",$e,_(O(y).format("MMMM, YYYY")),1)]),n("div",Te,[n("button",{type:"button",class:"rounded-md hover:bg-gray-200 p-2",onClick:E(j,["prevent"])},[B(O(he),{class:"w-5 h-5"})],8,Se),n("button",{type:"button",class:"rounded-full w-3 h-3 bg-gray-200 hover:bg-gray-300",onClick:E(s,["prevent"])},null,8,Oe),n("button",{type:"button",class:"rounded-md hover:bg-gray-200 p-2",onClick:E(C,["prevent"])},[B(O(me),{class:"w-5 h-5"})],8,Ce)])]),n("div",Ne,[(b(!0),g(N,null,K(i.value,(a,k)=>(b(),g("div",{key:a,class:H([k===0?"text-red-600":"","w-full py-2 md:py-3"])},[n("div",null,_(a.km.format("dddd")),1)],2))),128))]),n("div",Ie,[(b(!0),g(N,null,K(h.value,a=>(b(),g("div",{key:a,onClick:E(k=>x(a.date),["prevent"]),class:H(["w-full aspect-[10/8] relative shadow rounded-md border md:p-2 whitespace-nowrap cursor-pointer transform duration-150 hover:scale-105 ease-in-out",[a.prevMonth||a.nextMonth?"opacity-20 bg-gray-100":"bg-white",$(a.attributes),a.date.weekday()===6?"text-red-600":"",O(p)().isSame(a.date,"day")?"bg-blue-600 text-white":""]])},[n("div",Ee,[n("div",Pe,_(a.day),1),n("div",Ke,[n("div",null,_(a.khDate.toKhDate("dN")),1),z(a.khDate.toKhDate("dN"),a.date)?(b(),g("div",Be,Ue)):R("",!0)])]),(a.khDate.khDay()===0||a.day===1)&&a.nextMonth===!1?(b(),g("div",Fe,_(a.khDate.toKhDate("m")),1)):R("",!0)],10,Le))),128))])])]))}};function ze(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var A=ze,Ge=typeof F=="object"&&F&&F.Object===Object&&F,Ve=Ge,We=Ve,Ae=typeof self=="object"&&self&&self.Object===Object&&self,Xe=We||Ae||Function("return this")(),ne=Xe,qe=ne,Je=function(){return qe.Date.now()},Qe=Je,Ze=/\s/;function et(e){for(var t=e.length;t--&&Ze.test(e.charAt(t)););return t}var tt=et,at=tt,nt=/^\s+/;function rt(e){return e&&e.slice(0,at(e)+1).replace(nt,"")}var ot=rt,lt=ne,st=lt.Symbol,re=st,J=re,oe=Object.prototype,it=oe.hasOwnProperty,ut=oe.toString,P=J?J.toStringTag:void 0;function dt(e){var t=it.call(e,P),v=e[P];try{e[P]=void 0;var c=!0}catch{}var i=ut.call(e);return c&&(t?e[P]=v:delete e[P]),i}var ct=dt,vt=Object.prototype,ft=vt.toString;function ht(e){return ft.call(e)}var mt=ht,Q=re,bt=ct,gt=mt,yt="[object Null]",pt="[object Undefined]",Z=Q?Q.toStringTag:void 0;function _t(e){return e==null?e===void 0?pt:yt:Z&&Z in Object(e)?bt(e):gt(e)}var xt=_t;function Yt(e){return e!=null&&typeof e=="object"}var wt=Yt,Mt=xt,kt=wt,Dt="[object Symbol]";function jt(e){return typeof e=="symbol"||kt(e)&&Mt(e)==Dt}var $t=jt,Tt=ot,ee=A,St=$t,te=0/0,Ot=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,Nt=/^0o[0-7]+$/i,It=parseInt;function Lt(e){if(typeof e=="number")return e;if(St(e))return te;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Tt(e);var v=Ct.test(e);return v||Nt.test(e)?It(e.slice(2),v?2:8):Ot.test(e)?te:+e}var Et=Lt,Pt=A,G=Qe,ae=Et,Kt="Expected a function",Bt=Math.max,Ht=Math.min;function Ut(e,t,v){var c,i,h,r,l,m,y=0,S=!1,j=!1,C=!0;if(typeof e!="function")throw new TypeError(Kt);t=ae(t)||0,Pt(v)&&(S=!!v.leading,j="maxWait"in v,h=j?Bt(ae(v.maxWait)||0,t):h,C="trailing"in v?!!v.trailing:C);function s(o){var a=c,k=i;return c=i=void 0,y=o,r=e.apply(k,a),r}function x(o){return y=o,l=setTimeout(M,t),S?s(o):r}function d(o){var a=o-m,k=o-y,U=t-a;return j?Ht(U,h-k):U}function Y(o){var a=o-m,k=o-y;return m===void 0||a>=t||a<0||j&&k>=h}function M(){var o=G();if(Y(o))return $(o);l=setTimeout(M,d(o))}function $(o){return l=void 0,C&&c?s(o):(c=i=void 0,r)}function z(){l!==void 0&&clearTimeout(l),y=0,c=m=i=l=void 0}function D(){return l===void 0?r:$(G())}function u(){var o=G(),a=Y(o);if(c=arguments,i=this,m=o,a){if(l===void 0)return x(m);if(j)return clearTimeout(l),l=setTimeout(M,t),s(m)}return l===void 0&&(l=setTimeout(M,t)),r}return u.cancel=z,u.flush=D,u}var Ft=Ut,Rt=Ft,zt=A,Gt="Expected a function";function Vt(e,t,v){var c=!0,i=!0;if(typeof e!="function")throw new TypeError(Gt);return zt(v)&&(c="leading"in v?!!v.leading:c,i="trailing"in v?!!v.trailing:i),Rt(e,t,{leading:c,maxWait:t,trailing:i})}var Wt=Vt;const At={class:"flex-col-reverse lg:flex flex-col lg:flex-row gap-4 mx-auto"},Xt={class:"w-full lg:w-2/3 shrink-0"},qt={class:"w-full"},Jt={class:"relative max-w-4xl max-h-screen h-full md:h-auto pointer-events-auto w-full"},Qt={class:"border-2 border-white rounded-xl overflow-hidden relative p-4 bg-white w-full font-nokora md:text-lg lg:text-2xl"},Zt={class:"text-lg md:text-xl lg:text-2xl font-bold"},ea={class:"mt-4"},ta={key:0,class:"list-outside list-disc pl-3 mt-3"},ra={__name:"SPCalendar",setup(e){const{khmerDate:t}=W(),{events:v,traditional_events:c}=ue(),i=w([{key:1,customData:{title:{kh:"\u1790\u17D2\u1784\u17C3",en:"today"},class:"bg-blue-600 text-white"},dates:L().format()}]),h=w({}),r=w({}),l=w(!1),m=w({month:null,year:null}),y=s=>{h.value={m:s.month,y:s.year},m.value=s,j(s)};V(m,Wt(()=>{i.value.length=0,j(m.value)},0));const S=s=>{l.value=!0,r.value={date:s,attributes:i.value.filter(x=>s.isSame(x.dates,"day"))}},j=s=>{if(s.month===4){const{khmerNewYearAttrs:d}=ve(s);i.value.push(...d.value)}v.value.filter(d=>d.start_date.month===s.month).forEach(d=>{i.value.push({key:"events"+L({y:s.year,M:s.month-1,D:d.start_date.day}).format("YYYY-MM-DD"),customData:{title:d.summary,description:d.description,class:"bg-red-600 text-white"},dates:L({y:s.year,M:s.month-1,D:d.start_date.day}).format("YYYY-MM-DD")})});let x=L({y:s.year,M:s.month-1}).daysInMonth();for(let d=1;d<=x;d++){let Y=L({y:s.year,M:s.month-1,D:d}),M=[...t.value(Y).toKhDate("dN_m").split("_")];c.value.filter($=>$.start_date.day===M[0]&&$.start_date.month===M[1]).forEach($=>{i.value.push({key:"traditional_events"+Y,customData:{title:$.summary,description:$.description,class:"bg-red-600 text-white"},dates:Y.format("YYYY-MM-DD")})}),C(M[0],Y)&&i.value.push({key:"holy-day"+Y,customData:{title:{kh:"\u1790\u17D2\u1784\u17C3\u200B\u179F\u17B8\u179B",en:"Holy Day"},description:"Buddhist Holy Day",class:"text-yellow-600"},dates:Y.format("YYYY-MM-DD")})}i.value.sort(function(d,Y){return new Date(d.dates)-new Date(Y.dates)})},C=(s,x)=>s==="\u17E8\u179A\u17C4\u1785"||s==="\u17E8\u1780\u17BE\u178F"||s==="\u17E1\u17E5\u1780\u17BE\u178F"||s==="\u17E1\u17E5\u179A\u17C4\u1785"?!0:s==="\u17E1\u17E4\u179A\u17C4\u1785"&&t.value(x.clone().add(1,"days")).toKhDate("dN")!=="\u17E1\u17E5\u179A\u17C4\u1785";return(s,x)=>(b(),g(N,null,[n("div",At,[n("div",Xt,[B(Re,{attributes:i.value,onOnUpdatePage:y,onOnClick:S},null,8,["attributes"])]),n("div",qt,[B(de,{title:"\u1796\u17D2\u179A\u17B9\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A\u178E\u17CD\u1794\u17D2\u179A\u1785\u17B6\u17C6 \u1781\u17C2"+O(L)({M:h.value.m-1,y:h.value.y}).locale("km").format("MMMM \u1786\u17D2\u1793\u17B6\u17C6YYYY"),events:i.value},null,8,["title","events"])])]),n("div",{class:H(l.value?"fixed bg-black/50  z-10 inset-0 ":"hidden"),onClick:x[0]||(x[0]=E(d=>l.value=!1,["prevent"]))},null,2),n("div",{tabindex:"-1","aria-hidden":"true",class:H([l.value?"fixed":"hidden"," inset-0 z-50 flex items-center justify-center pointer-events-none"])},[n("div",Jt,[n("button",{type:"button",onClick:x[1]||(x[1]=E(d=>l.value=!1,["prevent"])),class:"absolute -top-2 -right-2 w-6 h-6 grid place-content-center rounded-full bg-white z-30 text-red-600"},[B(O(be),{class:"h-5"})]),n("div",Qt,[r.value.date?(b(),g(N,{key:0},[n("h4",Zt,_(r.value.date.clone().format("LL"))+", "+_(r.value.date.clone().locale("en").format("LL")),1),n("p",ea,_(O(t)(r.value.date).toLunarDate()),1),r.value.attributes?(b(),g("ul",ta,[(b(!0),g(N,null,K(r.value.attributes,d=>(b(),g("li",{key:d.key,class:H(d.customData.description==="Holiday in Cambodia"?"text-red-600":"")},_(d.customData.title.kh),3))),128))])):R("",!0)],64)):R("",!0)])])],2)],64))}};export{ra as default};
