(()=>{"use strict";var e,a,t,f,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=c,b.c=d,e=[],b.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",861:"6f281a44",948:"8717b14a",1363:"17f92644",1374:"c2782b2d",1525:"f70f6443",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2519:"9afee992",2535:"814f3328",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3514:"73664a40",3574:"eed8d1a0",3608:"9e4087bc",3792:"dff1c289",3844:"a89b8d8c",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4607:"533a09ca",5496:"26923a8f",5589:"5c868d36",5707:"88f7440f",6103:"ccc49370",6159:"12b59fe5",6160:"66bbf62e",6470:"e06e37c9",6504:"822bd8ab",6755:"e44a2883",6822:"e355f3c9",7033:"77f88bad",7918:"17896441",8038:"0525d9b8",8203:"caf8d284",8416:"8ddf6e13",8610:"6875c492",8636:"f4f34a3a",8748:"e417d728",8818:"1e4232ab",9003:"925b3f96",9052:"8e33b65d",9092:"b46a3c68",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368",9823:"9c50ec5d"}[e]||e)+"."+{53:"94e1249b",861:"9f7f95a3",948:"41cc5021",1363:"0c07f36f",1374:"f3b90b84",1525:"69bc9b28",1914:"5d01f11a",2267:"779a3984",2362:"40882752",2422:"f3370123",2519:"918f6ef7",2529:"7232eb71",2535:"48d377ab",2859:"14fdacee",3085:"6b1c2f8e",3089:"84f53a6d",3514:"9f9d3f59",3574:"5e54fd04",3608:"83312a9b",3792:"9499aa8e",3844:"2af719cd",4013:"82fe0964",4193:"40a5d100",4195:"707b33f0",4607:"ed9835e6",4972:"ee95a9d6",5496:"ed5187bf",5589:"be9bd301",5707:"11f288c2",6103:"62bd79e4",6159:"fd0de522",6160:"2779e736",6470:"4d645d03",6504:"c88951f7",6755:"f2c105a2",6822:"b9b85732",7033:"808e67b1",7166:"d51f9ff6",7918:"863370e1",8024:"8697a588",8038:"1236fb58",8203:"f3cfa8f0",8416:"0a4b593d",8610:"f655db93",8636:"76a0873b",8748:"91154d85",8818:"aef0a247",9003:"9c32252b",9052:"f8758750",9092:"a5ff265f",9514:"75c7621e",9642:"0dbef5e5",9671:"137517bf",9817:"83ceb9bc",9823:"3689fde4"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="alekhaweb:",b.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+t){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+t),d.src=e),f[e]=[a];var u=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/doc/",b.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","6f281a44":"861","8717b14a":"948","17f92644":"1363",c2782b2d:"1374",f70f6443:"1525",d9f32620:"1914",e273c56f:"2362","9afee992":"2519","814f3328":"2535","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089","73664a40":"3514",eed8d1a0:"3574","9e4087bc":"3608",dff1c289:"3792",a89b8d8c:"3844","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195","533a09ca":"4607","26923a8f":"5496","5c868d36":"5589","88f7440f":"5707",ccc49370:"6103","12b59fe5":"6159","66bbf62e":"6160",e06e37c9:"6470","822bd8ab":"6504",e44a2883:"6755",e355f3c9:"6822","77f88bad":"7033","0525d9b8":"8038",caf8d284:"8203","8ddf6e13":"8416","6875c492":"8610",f4f34a3a:"8636",e417d728:"8748","1e4232ab":"8818","925b3f96":"9003","8e33b65d":"9052",b46a3c68:"9092","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817","9c50ec5d":"9823"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],d=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(t);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();