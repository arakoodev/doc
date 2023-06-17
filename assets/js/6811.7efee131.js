"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[6811],{9167:(e,t,n)=>{n.d(t,{p:()=>N});var r,l=n(7294),a=n(2984),i=n(5748),o=n(3784),u=n(6723),s=n(2180),c=n(7896);let d=null!=(r=l.useId)?r:function(){let e=(0,s.H)(),[t,n]=l.useState(e?()=>c.O.nextId():null);return(0,u.e)((()=>{null===t&&n(c.O.nextId())}),[t]),null!=t?""+t:void 0};var f,p=((f=p||{}).Space=" ",f.Enter="Enter",f.Escape="Escape",f.Backspace="Backspace",f.Delete="Delete",f.ArrowLeft="ArrowLeft",f.ArrowUp="ArrowUp",f.ArrowRight="ArrowRight",f.ArrowDown="ArrowDown",f.Home="Home",f.End="End",f.PageUp="PageUp",f.PageDown="PageDown",f.Tab="Tab",f);function m(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}var v=n(6567);function h(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}var g,E=n(3781);let b=null!=(g=l.startTransition)?g:function(e){e()};var y=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(y||{}),w=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(w||{});let S={0:e=>({...e,disclosureState:(0,a.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},T=(0,l.createContext)(null);function P(e){let t=(0,l.useContext)(T);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,P),t}return t}T.displayName="DisclosureContext";let C=(0,l.createContext)(null);function O(e){let t=(0,l.useContext)(C);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}C.displayName="DisclosureAPIContext";let k=(0,l.createContext)(null);function F(e,t){return(0,a.E)(t.type,S,e,t)}k.displayName="DisclosurePanelContext";let R=l.Fragment;let I=i.AN.RenderStrategy|i.AN.Static;let D=(0,i.yV)((function(e,t){let{defaultOpen:n=!1,...r}=e,u=(0,l.useRef)(null),s=(0,o.T)(t,(0,o.h)((e=>{u.current=e}),void 0===e.as||e.as===l.Fragment)),d=(0,l.useRef)(null),f=(0,l.useRef)(null),p=(0,l.useReducer)(F,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:d,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:h},g]=p,b=(0,E.z)((e=>{g({type:1});let t=function(e){return c.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(u);if(!t||!h)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(h):t.getElementById(h);null==n||n.focus()})),y=(0,l.useMemo)((()=>({close:b})),[b]),w=(0,l.useMemo)((()=>({open:0===m,close:b})),[m,b]),S={ref:s};return l.createElement(T.Provider,{value:p},l.createElement(C.Provider,{value:y},l.createElement(v.up,{value:(0,a.E)(m,{0:v.ZM.Open,1:v.ZM.Closed})},(0,i.sY)({ourProps:S,theirProps:r,slot:w,defaultTag:R,name:"Disclosure"}))))})),L=(0,i.yV)((function(e,t){let n=d(),{id:r=`headlessui-disclosure-button-${n}`,...a}=e,[s,c]=P("Disclosure.Button"),f=(0,l.useContext)(k),v=null!==f&&f===s.panelId,g=(0,l.useRef)(null),b=(0,o.T)(g,t,v?null:s.buttonRef);(0,l.useEffect)((()=>{if(!v)return c({type:2,buttonId:r}),()=>{c({type:2,buttonId:null})}}),[r,c,v]);let y=(0,E.z)((e=>{var t;if(v){if(1===s.disclosureState)return;switch(e.key){case p.Space:case p.Enter:e.preventDefault(),e.stopPropagation(),c({type:0}),null==(t=s.buttonRef.current)||t.focus()}}else switch(e.key){case p.Space:case p.Enter:e.preventDefault(),e.stopPropagation(),c({type:0})}})),w=(0,E.z)((e=>{if(e.key===p.Space)e.preventDefault()})),S=(0,E.z)((t=>{var n;m(t.currentTarget)||e.disabled||(v?(c({type:0}),null==(n=s.buttonRef.current)||n.focus()):c({type:0}))})),T=(0,l.useMemo)((()=>({open:0===s.disclosureState})),[s]),C=function(e,t){let[n,r]=(0,l.useState)((()=>h(e)));return(0,u.e)((()=>{r(h(e))}),[e.type,e.as]),(0,u.e)((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[n,t]),n}(e,g),O=v?{ref:b,type:C,onKeyDown:y,onClick:S}:{ref:b,id:r,type:C,"aria-expanded":e.disabled?void 0:0===s.disclosureState,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:y,onKeyUp:w,onClick:S};return(0,i.sY)({ourProps:O,theirProps:a,slot:T,defaultTag:"button",name:"Disclosure.Button"})})),A=(0,i.yV)((function(e,t){let n=d(),{id:r=`headlessui-disclosure-panel-${n}`,...a}=e,[u,s]=P("Disclosure.Panel"),{close:c}=O("Disclosure.Panel"),f=(0,o.T)(t,u.panelRef,(e=>{b((()=>s({type:e?4:5})))}));(0,l.useEffect)((()=>(s({type:3,panelId:r}),()=>{s({type:3,panelId:null})})),[r,s]);let p=(0,v.oJ)(),m=null!==p?(p&v.ZM.Open)===v.ZM.Open:0===u.disclosureState,h=(0,l.useMemo)((()=>({open:0===u.disclosureState,close:c})),[u,c]),g={ref:f,id:r};return l.createElement(k.Provider,{value:u.panelId},(0,i.sY)({ourProps:g,theirProps:a,slot:h,defaultTag:"div",features:I,visible:m,name:"Disclosure.Panel"}))})),N=Object.assign(D,{Button:L,Panel:A})},5760:(e,t,n)=>{n.d(t,{u:()=>A});var r=n(7294),l=n(5748),a=n(6567),i=n(2984),o=n(6723);function u(){let e=(0,r.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(3855),c=n(2180),d=n(3784);function f(){let e=[],t={addEventListener:(e,n,r,l)=>(e.addEventListener(n,r,l),t.add((()=>e.removeEventListener(n,r,l)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=f();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,n,r){let l=n?"enter":"leave",a=f(),o=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===l&&(e.removeAttribute("hidden"),e.style.display="");let u=(0,i.E)(l,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,i.E)(l,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,i.E)(l,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...u,...c),a.nextFrame((()=>{m(e,...c),p(e,...s),function(e,t){let n=f();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,i]=[r,l].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),o=a+i;if(0!==o){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),o),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...u),p(e,...t.entered),o())))})),a.dispose}function h(){let[e]=(0,r.useState)(f);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}var g=n(3781),E=n(4067);function b(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let y=(0,r.createContext)(null);y.displayName="TransitionContext";var w,S=((w=S||{}).Visible="visible",w.Hidden="hidden",w);let T=(0,r.createContext)(null);function P(e){return"children"in e?P(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function C(e,t){let n=(0,s.E)(e),a=(0,r.useRef)([]),o=u(),c=h(),d=(0,g.z)(((e,t=l.l4.Hidden)=>{let r=a.current.findIndex((({el:t})=>t===e));-1!==r&&((0,i.E)(t,{[l.l4.Unmount](){a.current.splice(r,1)},[l.l4.Hidden](){a.current[r].state="hidden"}}),c.microTask((()=>{var e;!P(a)&&o.current&&(null==(e=n.current)||e.call(n))})))})),f=(0,g.z)((e=>{let t=a.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):a.current.push({el:e,state:"visible"}),()=>d(e,l.l4.Unmount)})),p=(0,r.useRef)([]),m=(0,r.useRef)(Promise.resolve()),v=(0,r.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(v.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?m.current=m.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),b=(0,g.z)(((e,t,n)=>{Promise.all(v.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:a,register:f,unregister:d,onStart:E,onStop:b,wait:m,chains:v})),[f,d,a,E,b,v,m])}function O(){}T.displayName="NestingContext";let k=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function F(e){var t;let n={};for(let r of k)n[r]=null!=(t=e[r])?t:O;return n}let R=l.AN.RenderStrategy;let I=(0,l.yV)((function(e,t){let{show:n,appear:i=!1,unmount:u,...s}=e,f=(0,r.useRef)(null),p=(0,d.T)(f,t);(0,c.H)();let m=(0,a.oJ)();if(void 0===n&&null!==m&&(n=(m&a.ZM.Open)===a.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,r.useState)(n?"visible":"hidden"),E=C((()=>{h("hidden")})),[b,w]=(0,r.useState)(!0),S=(0,r.useRef)([n]);(0,o.e)((()=>{!1!==b&&S.current[S.current.length-1]!==n&&(S.current.push(n),w(!1))}),[S,n]);let O=(0,r.useMemo)((()=>({show:n,appear:i,initial:b})),[n,i,b]);(0,r.useEffect)((()=>{if(n)h("visible");else if(P(E)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,E]);let k={unmount:u},F=(0,g.z)((()=>{var t;b&&w(!1),null==(t=e.beforeEnter)||t.call(e)})),I=(0,g.z)((()=>{var t;b&&w(!1),null==(t=e.beforeLeave)||t.call(e)}));return r.createElement(T.Provider,{value:E},r.createElement(y.Provider,{value:O},(0,l.sY)({ourProps:{...k,as:r.Fragment,children:r.createElement(D,{ref:p,...k,...s,beforeEnter:F,beforeLeave:I})},theirProps:{},defaultTag:r.Fragment,features:R,visible:"visible"===v,name:"Transition"})))})),D=(0,l.yV)((function(e,t){let{beforeEnter:n,afterEnter:p,beforeLeave:m,afterLeave:w,enter:S,enterFrom:O,enterTo:k,entered:I,leave:D,leaveFrom:L,leaveTo:A,...N}=e,x=(0,r.useRef)(null),M=(0,d.T)(x,t),j=N.unmount?l.l4.Unmount:l.l4.Hidden,{show:H,appear:z,initial:B}=function(){let e=(0,r.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Z,U]=(0,r.useState)(H?"visible":"hidden"),V=function(){let e=(0,r.useContext)(T);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:$,unregister:Y}=V,q=(0,r.useRef)(null);(0,r.useEffect)((()=>$(x)),[$,x]),(0,r.useEffect)((()=>{if(j===l.l4.Hidden&&x.current)return H&&"visible"!==Z?void U("visible"):(0,i.E)(Z,{hidden:()=>Y(x),visible:()=>$(x)})}),[Z,x,$,Y,H,j]);let J=(0,s.E)({enter:b(S),enterFrom:b(O),enterTo:b(k),entered:b(I),leave:b(D),leaveFrom:b(L),leaveTo:b(A)}),K=function(e){let t=(0,r.useRef)(F(e));return(0,r.useEffect)((()=>{t.current=F(e)}),[e]),t}({beforeEnter:n,afterEnter:p,beforeLeave:m,afterLeave:w}),W=(0,c.H)();(0,r.useEffect)((()=>{if(W&&"visible"===Z&&null===x.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[x,Z,W]);let G=B&&!z,Q=!W||G||q.current===H?"idle":H?"enter":"leave",X=function(e=0){let[t,n]=(0,r.useState)(e),l=u(),a=(0,r.useCallback)((e=>{l.current&&n((t=>t|e))}),[t,l]),i=(0,r.useCallback)((e=>Boolean(t&e)),[t]),o=(0,r.useCallback)((e=>{l.current&&n((t=>t&~e))}),[n,l]),s=(0,r.useCallback)((e=>{l.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:a,hasFlag:i,removeFlag:o,toggleFlag:s}}(0),_=(0,g.z)((e=>(0,i.E)(e,{enter:()=>{X.addFlag(a.ZM.Opening),K.current.beforeEnter()},leave:()=>{X.addFlag(a.ZM.Closing),K.current.beforeLeave()},idle:()=>{}}))),ee=(0,g.z)((e=>(0,i.E)(e,{enter:()=>{X.removeFlag(a.ZM.Opening),K.current.afterEnter()},leave:()=>{X.removeFlag(a.ZM.Closing),K.current.afterLeave()},idle:()=>{}}))),te=C((()=>{U("hidden"),Y(x)}),V);(function({container:e,direction:t,classes:n,onStart:r,onStop:l}){let a=u(),i=h(),c=(0,s.E)(t);(0,o.e)((()=>{let t=f();i.add(t.dispose);let o=e.current;if(o&&"idle"!==c.current&&a.current)return t.dispose(),r.current(c.current),t.add(v(o,n.current,"enter"===c.current,(()=>{t.dispose(),l.current(c.current)}))),t.dispose}),[t])})({container:x,classes:J,direction:Q,onStart:(0,s.E)((e=>{te.onStart(x,e,_)})),onStop:(0,s.E)((e=>{te.onStop(x,e,ee),"leave"===e&&!P(te)&&(U("hidden"),Y(x))}))}),(0,r.useEffect)((()=>{G&&(j===l.l4.Hidden?q.current=null:q.current=H)}),[H,G,Z]);let ne=N,re={ref:M};return z&&H&&B&&(ne={...ne,className:(0,E.A)(N.className,...J.current.enter,...J.current.enterFrom)}),r.createElement(T.Provider,{value:te},r.createElement(a.up,{value:(0,i.E)(Z,{visible:a.ZM.Open,hidden:a.ZM.Closed})|X.flags},(0,l.sY)({ourProps:re,theirProps:ne,defaultTag:"div",features:R,visible:"visible"===Z,name:"Transition.Child"})))})),L=(0,l.yV)((function(e,t){let n=null!==(0,r.useContext)(y),l=null!==(0,a.oJ)();return r.createElement(r.Fragment,null,!n&&l?r.createElement(I,{ref:t,...e}):r.createElement(D,{ref:t,...e}))})),A=Object.assign(I,{Child:L,Root:I})},3781:(e,t,n)=>{n.d(t,{z:()=>a});var r=n(7294),l=n(3855);let a=function(e){let t=(0,l.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},6723:(e,t,n)=>{n.d(t,{e:()=>a});var r=n(7294),l=n(7896);let a=(e,t)=>{l.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:(e,t,n)=>{n.d(t,{E:()=>a});var r=n(7294),l=n(6723);function a(e){let t=(0,r.useRef)(e);return(0,l.e)((()=>{t.current=e}),[e]),t}},2180:(e,t,n)=>{n.d(t,{H:()=>a});var r=n(7294),l=n(7896);function a(){let[e,t]=(0,r.useState)(l.O.isHandoffComplete);return e&&!1===l.O.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>l.O.handoff()),[]),e}},3784:(e,t,n)=>{n.d(t,{T:()=>o,h:()=>i});var r=n(7294),l=n(3781);let a=Symbol();function i(e,t=!0){return Object.assign(e,{[a]:t})}function o(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,l.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[a])))?void 0:n}},6567:(e,t,n)=>{n.d(t,{ZM:()=>i,oJ:()=>o,up:()=>u});var r=n(7294);let l=(0,r.createContext)(null);l.displayName="OpenClosedContext";var a,i=((a=i||{})[a.Open=1]="Open",a[a.Closed=2]="Closed",a[a.Closing=4]="Closing",a[a.Opening=8]="Opening",a);function o(){return(0,r.useContext)(l)}function u({value:e,children:t}){return r.createElement(l.Provider,{value:e},t)}},4067:(e,t,n)=>{function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:()=>r})},7896:(e,t,n)=>{n.d(t,{O:()=>a});var r=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){l(this,"current",this.detect()),l(this,"handoffState","pending"),l(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}n.d(t,{E:()=>r})},5748:(e,t,n)=>{n.d(t,{AN:()=>u,l4:()=>s,sY:()=>c,yV:()=>p});var r,l,a=n(7294),i=n(4067),o=n(2984),u=((l=u||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:a=!0,name:i}){let u=f(t,e);if(a)return d(u,n,r,i);let s=null!=l?l:0;if(2&s){let{static:e=!1,...t}=u;if(e)return d(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=u;return(0,o.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return d(u,n,r,i)}function d(e,t={},n,r){let{as:l=n,children:o,refName:u="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof o?o(t):o;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(l===a.Fragment&&Object.keys(m(s)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,a.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,a.createElement)(l,Object.assign({},v(s,["ref"]),l!==a.Fragment&&c,l!==a.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let l=n[r];for(let n of l){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function p(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},5871:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);const l=r.forwardRef((function({title:e,titleId:t,...n},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"}))}))}}]);