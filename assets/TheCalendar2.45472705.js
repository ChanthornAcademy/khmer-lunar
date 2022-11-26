import{r as F,u as P,h as s,o as u,c as h,a,g as L,i as z,j as W,k as B,l as T,w as _,b as M,d as i,m as O,v as E,F as C,e as K,t as c,n as H,f as V}from"./index.d96d3be5.js";function A(e){const o=F([]),{khmerNewYearDate:t}=P();let g=t.value(e.year).days;return g.forEach((b,x)=>{let m={};x===0?m={kh:"\u1796\u17B7\u1792\u17B8\u1794\u17BB\u178E\u17D2\u1799\u1785\u17BC\u179B\u1786\u17D2\u1793\u17B6\u17C6\u1790\u17D2\u1798\u17B8 \u1794\u17D2\u179A\u1796\u17C3\u178E\u17B8\u1787\u17B6\u178F\u17B7 (\u1798\u17A0\u17B6\u179F\u1784\u17D2\u179A\u17D2\u1780\u17B6\u1793\u17D2\u178F)",en:"Khmer New Year's Day (Moha Sangkranta)"}:b===g[g.length-1]?m={kh:"\u1796\u17B7\u1792\u17B8\u1794\u17BB\u178E\u17D2\u1799\u1785\u17BC\u179B\u1786\u17D2\u1793\u17B6\u17C6\u1790\u17D2\u1798\u17B8 \u1794\u17D2\u179A\u1796\u17C3\u178E\u17B8\u1787\u17B6\u178F\u17B7 (\u179C\u17B6\u179A\u17C8\u17A1\u17BE\u1784\u179F\u17D0\u1780)",en:"Khmer New Year's Day (Veareak Laeung Sak)"}:m={kh:"\u1796\u17B7\u1792\u17B8\u1794\u17BB\u178E\u17D2\u1799\u1785\u17BC\u179B\u1786\u17D2\u1793\u17B6\u17C6\u1790\u17D2\u1798\u17B8 \u1794\u17D2\u179A\u1796\u17C3\u178E\u17B8\u1787\u17B6\u178F\u17B7 (\u179C\u17B6\u179A\u17C8\u179C\u17D0\u1793\u1794\u178F)",en:"Khmer New Year's Day (Veareak Vanabat)"},o.value.push({key:"traditional_holidays"+s(b).locale("en").format("YYYY-MM-DD"),customData:{title:m,description:"Holiday in Cambodia",class:"bg-red-600 text-white"},dates:s(b).locale("en").format("YYYY-MM-DD")})}),{khmerNewYearAttrs:o}}const $="/khmer-lunar/assets/buddhist-icon.d62fdc83.webp";function S(e,o){return u(),h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z","clip-rule":"evenodd"})])}function j(e,o){return u(),h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"})])}const G=L("attribute",{state:()=>({attrs:[]})}),{khmerDate:w}=P(),{events:X,traditional_events:q}=z(),v=G(),J=L("calendar",{state:()=>({days:[],daysOfWeek:[],currentMonth:s().month()+1,currentYear:s().year(),currentKhmerMonths:[],initKhDate:[]}),getters:{initDate:e=>s({y:e.currentYear,M:e.currentMonth-1,D:1}).locale("en")},actions:{initDay(){let e=this.initDate;if(v.attrs.length=0,this.currentKhmerMonths.length=0,this.initDate.clone().month()+1===4){const{khmerNewYearAttrs:n}=A({year:this.initDate.clone().year(),month:this.initDate.clone().month()+1});v.attrs.push(...n.value)}X.value.filter(n=>n.start_date.month===e.clone().month()+1).forEach(n=>{v.attrs.push({key:"events"+s({y:e.clone().year(),M:e.clone().month(),D:n.start_date.day}).locale("en").format("YYYY-MM-DD"),customData:{title:n.summary,description:n.description,class:"bg-red-600 text-white"},dates:s({y:e.clone().year(),M:e.clone().month(),D:n.start_date.day}).locale("en").format("YYYY-MM-DD")})}),this.daysOfWeek.length=0;for(let n=0;n<7;n++)this.daysOfWeek.push({en:s().locale("en").day(n),km:s().clone().day(n)});let o=e.clone().daysInMonth(),t=e.day(),b=7-s(e.format("YYYY-MM-"+o)).day()-1,x=e.clone().subtract(1,"months").daysInMonth();for(let n=t;n>0;n--){let l=x-n+1,d=s(e.clone().subtract(1,"months").format("YYYY-MM-"+l),"YYYY-MM-D"),Y=w.value(d);this.traditionalEventFilter({date:d,khDate:Y}),this.days.push({prevMonth:!0,day:l,date:d,khDate:Y,nextMonth:!1,attributes:v.attrs.filter(N=>d.isSame(N.dates))})}let m=[];for(let n=1;n<=o;n++){let l=s(e.format("YYYY-MM-"+n),"YYYY-MM-D"),d=w.value(l);this.traditionalEventFilter({date:l,khDate:d}),this.days.push({prevMonth:!1,day:n,date:l,khDate:d,nextMonth:!1,attributes:v.attrs.filter(Y=>l.isSame(Y.dates))}),m.push(d.toKhDate("m"))}for(let n=1;n<=b;n++){let l=s(e.clone().add(1,"months").format("YYYY-MM-"+n),"YYYY-MM-D"),d=w.value(l);this.traditionalEventFilter({date:l,khDate:d}),this.days.push({prevMonth:!1,day:n,date:l,khDate:d,nextMonth:!0,attributes:v.attrs.filter(Y=>l.isSame(Y.dates))})}this.currentKhmerMonths=[...new Set(m.map(n=>n))];let D;e.clone().month()+1<=4?D=e.clone().add(543,"years").locale("km").format("YYYY"):D=e.clone().add(544,"years").locale("km").format("YYYY"),this.initKhDate=(w.value(e.clone()).toKhDate("\u1786\u17D2\u1793\u17B6\u17C6a_e_\u1796.\u179F")+D).split("_"),v.attrs.sort(function(n,l){return new Date(n.dates)-new Date(l.dates)})},traditionalEventFilter(e){let o=[...e.khDate.toKhDate("dN_m").split("_")];q.value.filter(t=>t.start_date.day===o[0]&&t.start_date.month===o[1]).forEach(t=>{v.attrs.push({key:"traditional_events"+e.date,customData:{title:t.summary,description:t.description,class:"bg-red-600 text-white"},dates:e.date.locale("en").format("YYYY-MM-DD")})}),this.getBuddhistHolyDay(o[0],e.date)&&v.attrs.push({key:"holy-day"+e.date,customData:{title:{kh:"\u1790\u17D2\u1784\u17C3\u200B\u179F\u17B8\u179B",en:"Holy Day"},description:"Buddhist Holy Day",class:"text-yellow-600"},dates:e.date.locale("en").format("YYYY-MM-DD")})},getBuddhistHolyDay(e,o){return e==="\u17E8\u179A\u17C4\u1785"||e==="\u17E8\u1780\u17BE\u178F"||e==="\u17E1\u17E5\u1780\u17BE\u178F"||e==="\u17E1\u17E5\u179A\u17C4\u1785"?!0:e==="\u17E1\u17E4\u179A\u17C4\u1785"&&w.value(o.clone().add(1,"days")).toKhDate("dN")!=="\u17E1\u17E5\u179A\u17C4\u1785"}}}),Q={class:"p-5"},R={class:"mb-3 rounded-xl md:divide-x-4 border p-2 flex flex-col md:flex-row items-center justify-center text-lg font-hanuman"},Z={class:"flex items-center gap-1 px-4"},tt=a("label",null,"Month: ",-1),et=["onClick"],at=["value"],nt=["onClick"],rt={class:"flex items-center gap-1 px-4"},ot=a("label",null,"Year: ",-1),st=["onClick"],lt=["value"],it=["onClick"],dt={class:"font-nokora w-full bg-white border mx-auto p-2 rounded-xl"},ct={class:"items-center justify-between flex mb-4"},ut={class:"shrink-0 text-right text-lg font-bold"},ht={class:"text-center w-full"},mt={class:"text-lg md:text-xl lg:text-2xl font-bold"},ft={class:"text-lg md:text-xl text-gray-600 font-bold"},yt={class:"flex gap-1 items-center justify-between shrink-0"},pt=["onClick"],vt=["onClick"],Yt=["onClick"],_t={class:"flex gap-2 justify-between text-center items-center mb-2 bg-white rounded-md border overflow-hidden font-bold text-base md:text-lg whitespace-nowrap"},bt={class:"grid gap-2 grid-cols-7"},gt=["onClick"],Dt={class:"flex lg:gap-1 flex-col items-center md:flex-row md:items-start"},Mt={class:"text-lg md:text-3xl font-bold shrink-0"},xt={class:"w-full flex justify-center flex-col md:justify-start items-center md:items-end font-nokora text-sm md:text-base text-center"},kt={key:0,class:"absolute inset-0 rounded-md overflow-hidden flex justify-center z-10 opacity-30 lg:static lg:opacity-100 p-1"},wt=a("img",{src:$,alt:"Buddhist",class:"h-full object-cover object-top lg:w-6 lg:h-auto lg:object-contain"},null,-1),Ct=[wt],Kt={key:0,class:"text-blue-600 font-bold hidden md:block"},Nt={__name:"TheCalendar2",emits:["onPrev","onNext","onUpdatePage","onClick"],setup(e,{emit:o}){const t=J(),{khmerDate:g}=P(),b=t.daysOfWeek,x=t.days,m=()=>{t.currentMonth--,t.currentMonth===0&&(t.currentMonth=12,t.currentYear--),o("onPrev",{month:t.currentMonth,year:t.currentYear})},D=()=>{t.currentMonth++,t.currentMonth===13&&(t.currentMonth=1,t.currentYear++),o("onNext",{month:t.currentMonth,year:t.currentYear})},n=()=>{t.currentYear--},l=()=>{t.currentYear++},d=()=>{t.currentMonth=s().month()+1,t.currentYear=s().year()},Y=f=>{o("onClick",f),o("onUpdatePage",{month:t.currentMonth,year:t.currentYear})};W(()=>{t.days.length=0,t.initDay(),o("onUpdatePage",{month:t.currentMonth,year:t.currentYear})});const N=f=>{let y=Object.assign([],f);if(y.length){if(y.filter(r=>r.customData.description==="Holiday in Cambodia").length)return"text-red-600 bg-red-100";if(y.filter(r=>r.customData.description==="General Event").length)return"text-blue-600 bg-blue-100"}else return"bg-white"},I=(f,y)=>f==="\u17E8\u179A\u17C4\u1785"||f==="\u17E8\u1780\u17BE\u178F"||f==="\u17E1\u17E5\u1780\u17BE\u178F"||f==="\u17E1\u17E5\u179A\u17C4\u1785"?!0:f==="\u17E1\u17E4\u179A\u17C4\u1785"&&g.value(y.clone().add(1,"days")).toKhDate("dN")==="\u17E1\u1780\u17BE\u178F",p=F({month:t.currentMonth,year:t.currentYear});B(p.value,()=>{t.currentYear=p.value.year,t.currentMonth=p.value.month,o("onUpdatePage",{month:t.currentMonth,year:t.currentYear})});const U=T(()=>t.initDate);return B(U,()=>{p.value.year=t.currentYear,p.value.month=t.currentMonth,t.days.length=0,t.initDay()}),(f,y)=>(u(),h("div",Q,[a("div",R,[a("div",Z,[tt,a("button",{onClick:_(m,["prevent"]),class:"rounded-md hover:bg-gray-200 p-2",type:"button"},[M(i(S),{class:"w-5"})],8,et),O(a("select",{"onUpdate:modelValue":y[0]||(y[0]=r=>p.value.month=r),class:"border rounded-md py-2 px-3"},[(u(),h(C,null,K(12,r=>a("option",{key:r,value:r},c(i(s)({M:r-1}).format("MMMM")),9,at)),64))],512),[[E,p.value.month]]),a("button",{onClick:_(D,["prevent"]),class:"rounded-md hover:bg-gray-200 p-2",type:"button"},[M(i(j),{class:"w-5"})],8,nt)]),a("div",rt,[ot,a("button",{onClick:_(n,["prevent"]),class:"rounded-md hover:bg-gray-200 p-2",type:"button"},[M(i(S),{class:"w-5"})],8,st),O(a("select",{"onUpdate:modelValue":y[1]||(y[1]=r=>p.value.year=r),class:"border rounded-md py-2 px-3"},[(u(),h(C,null,K(1e3,(r,k)=>a("option",{key:r,value:1900+k},c(1900+k),9,lt)),64))],512),[[E,p.value.year]]),a("button",{onClick:_(l,["prevent"]),class:"rounded-md hover:bg-gray-200 p-2",type:"button"},[M(i(j),{class:"w-5"})],8,it)])]),a("div",dt,[a("div",ct,[a("div",ut,[a("div",null,c(i(t).initKhDate[0]),1),a("div",null,c(i(t).initKhDate[1]),1),a("div",null,c(i(t).initKhDate[2]),1)]),a("div",ht,[a("h2",mt,c(i(t).currentKhmerMonths.toString()),1),a("h2",ft,c(i(t).initDate.format("MMMM, YYYY")),1)]),a("div",yt,[a("button",{type:"button",class:"rounded-md hover:bg-gray-200 p-2",onClick:_(m,["prevent"])},[M(i(S),{class:"w-5 h-5"})],8,pt),a("button",{type:"button",class:"rounded-full w-3 h-3 bg-gray-200 hover:bg-gray-300",onClick:_(d,["prevent"])},null,8,vt),a("button",{type:"button",class:"rounded-md hover:bg-gray-200 p-2",onClick:_(D,["prevent"])},[M(i(j),{class:"w-5 h-5"})],8,Yt)])]),a("div",_t,[(u(!0),h(C,null,K(i(b),(r,k)=>(u(),h("div",{key:r,class:H([k===0?"text-red-600":"","w-full py-2 md:py-3"])},[a("div",null,c(r.km.format("dddd")),1)],2))),128))]),a("div",bt,[(u(!0),h(C,null,K(i(x),r=>(u(),h("div",{key:r,onClick:_(k=>Y(r.date),["prevent"]),class:H(["w-full aspect-[10/8] relative shadow rounded-md border md:p-2 whitespace-nowrap cursor-pointer transform duration-150 hover:scale-105 ease-in-out",[r.prevMonth||r.nextMonth?"opacity-40":"",N(r.attributes),r.date.weekday()===6?"text-red-600":"",i(s)().isSame(r.date,"day")?"bg-blue-600 text-white":""]])},[a("div",Dt,[a("div",Mt,c(r.day),1),a("div",xt,[a("div",null,c(r.khDate.toKhDate("dN")),1),I(r.khDate.toKhDate("dN"),r.date)?(u(),h("div",kt,Ct)):V("",!0)])]),(r.khDate.khDay()===0||r.day===1)&&r.nextMonth===!1?(u(),h("div",Kt,c(r.khDate.toKhDate("m")),1)):V("",!0)],10,gt))),128))])])]))}},jt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"}));export{jt as T,Nt as _,G as u};