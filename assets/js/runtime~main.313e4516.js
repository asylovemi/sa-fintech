(()=>{"use strict";var e,t,a,r,o,n={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var a=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,f),a.loaded=!0,a.exports}f.m=n,f.c=d,e=[],f.O=(t,a,r,o)=>{if(!a){var n=1/0;for(b=0;b<e.length;b++){a=e[b][0],r=e[b][1],o=e[b][2];for(var d=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](a[c])))?a.splice(c--,1):(d=!1,o<n&&(n=o));if(d){e.splice(b--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[a,r,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var d=2&r&&e;"object"==typeof d&&!~t.indexOf(d);d=a(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(o,n),o},f.d=(e,t)=>{for(var a in t)f.o(t,a)&&!f.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,a)=>(f.f[a](e,t),t)),[])),f.u=e=>"assets/js/"+({4:"5a5e3460",48:"a94703ab",61:"1f391b9e",98:"a7bd4aaa",134:"393be207",234:"d26adfae",235:"a7456010",237:"5c484cf7",301:"36fda58e",317:"de10fe5d",376:"df0aa3e3",401:"17896441",402:"080d4ab2",520:"beb36f1b",584:"dadf65e8",634:"c4f5d8e4",647:"5e95c892",742:"aba21aa0",937:"c610da8c",966:"496afe66",969:"14eb3368",976:"0e384e19"}[e]||e)+"."+{4:"4e525a48",48:"4dd80a1b",61:"416b2912",98:"8203e3df",134:"979d8ac1",234:"7ab3493a",235:"d27e4924",237:"39005423",292:"f302d21b",301:"40ee0d30",317:"047b77a9",376:"b3b6d165",401:"5e564b6c",402:"2d6151ca",520:"ca18eef9",584:"54a8e7fa",618:"1c376fdf",634:"aa0da9fd",647:"774f91d8",742:"bddde0da",888:"781be221",937:"6d9803b6",966:"30bf2a77",969:"bf0e6c7c",976:"c90aa8f4"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="my-website:",f.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var d,c;if(void 0!==a)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var l=i[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+a){d=l;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",o+a),d.src=e),r[e]=[t];var u=(t,a)=>{d.onerror=d.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),c&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/sa-fintech/",f.gca=function(e){return e={17896441:"401","5a5e3460":"4",a94703ab:"48","1f391b9e":"61",a7bd4aaa:"98","393be207":"134",d26adfae:"234",a7456010:"235","5c484cf7":"237","36fda58e":"301",de10fe5d:"317",df0aa3e3:"376","080d4ab2":"402",beb36f1b:"520",dadf65e8:"584",c4f5d8e4:"634","5e95c892":"647",aba21aa0:"742",c610da8c:"937","496afe66":"966","14eb3368":"969","0e384e19":"976"}[e]||e,f.p+f.u(e)},(()=>{var e={354:0,869:0};f.f.j=(t,a)=>{var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=f.p+f.u(t),d=new Error;f.l(n,(a=>{if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,r[1](d)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,n=a[0],d=a[1],c=a[2],i=0;if(n.some((t=>0!==e[t]))){for(r in d)f.o(d,r)&&(f.m[r]=d[r]);if(c)var b=c(f)}for(t&&t(a);i<n.length;i++)o=n[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(b)},a=self.webpackChunkmy_website=self.webpackChunkmy_website||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),f.nc=void 0})();