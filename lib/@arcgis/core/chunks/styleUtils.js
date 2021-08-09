/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{h as e}from"./object.js";import{reject as t}from"../core/promiseUtils.js";import r from"../core/Error.js";import{normalize as o,removeFile as s,urlToObject as n}from"../core/urlUtils.js";import{f as l}from"./persistableUrlUtils.js";import a from"../request.js";import m from"../portal/PortalQueryParams.js";import i from"../portal/Portal.js";import{S as y}from"../symbols/Symbol3D.js";import{T as u}from"./Thumbnail.js";import{fromJSON as f,i as c}from"../symbols/support/jsonUtils.js";import{i as p,a as b}from"./devEnvironmentUtils.js";function d(t){return!!e(`enable-feature:${t}`)}const h=()=>d("disable-context-navigation"),j={};function w(e,t,o){const s=t.portal||i.getDefault();let n;const l=`${s.url} - ${s.user&&s.user.username} - ${e}`;return j[l]||(j[l]=function(e,t,o){return t.load(o).then((()=>{const r=new m({disableExtraQuery:!0,query:`owner:${D} AND type:${E} AND typekeywords:"${e}"`});return t.queryItems(r,o)})).then((({results:t})=>{let s=null;const n=e.toLowerCase();if(t&&Array.isArray(t))for(const e of t){if(e.typeKeywords.some((e=>e.toLowerCase()===n))&&e.type===E&&e.owner===D){s=e;break}}if(!s)throw new r("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}(e,s,o).then((e=>(n=e,e.fetchData()))).then((t=>({data:t,baseUrl:n.itemUrl,styleName:e})))),j[l]}function g(e,o,n){return e.styleUrl?function(e,t){return $(e,t).then((t=>({data:t.data,baseUrl:s(e),styleUrl:e})))}(e.styleUrl,n):e.styleName?w(e.styleName,o,n):t(new r("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function U(e,o,l,a){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,r){const o=v.replace(/\{SymbolName\}/gi,e.name);return $(o,r).then((e=>{const r=S(e.data);return f(r,{portal:t.portal,url:n(s(o)),origin:"portal-item"})}))}(e,o,a):g(e,o,a).then((t=>N(t,e.name,o,l,a))):t(new r("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function N(e,o,a,m,i){const h=e.data,j={portal:a.portal,url:n(e.baseUrl),origin:"portal-item"},w=h.items.find((e=>e.name===o));if(!w){return t(new r("symbolstyleutils:symbol-name-not-found",`The symbol name '${o}' could not be found`,{symbolName:o}))}let g=l(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!d("force-wosr"))for(const t of e.formatInfos)if("gltf"===t.type)return t.href;return e.webRef}(w,m),j),U=w.thumbnail&&w.thumbnail.href;const N=w.thumbnail&&w.thumbnail.imageData;p()&&(g=b(g),U=b(U));const D={portal:a.portal,url:n(s(g)),origin:"portal-item"};return $(g,i).then((t=>{const r="cimRef"===m?S(t.data):t.data,s=f(r,D);if(s&&c(s)){if(U){const e=l(U,j);s.thumbnail=new u({url:e})}else N&&(s.thumbnail=new u({url:`data:image/png;base64,${N}`}));e.styleUrl?s.styleOrigin=new y({portal:a.portal,styleUrl:e.styleUrl,name:o}):e.styleName&&(s.styleOrigin=new y({portal:a.portal,styleName:e.styleName,name:o}))}return s}))}function S(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function $(e,t){const r={responseType:"json",query:{f:"json"},...t};return a(o(e),r)}const D="esri_en",E="Style",v="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";var I=Object.freeze({__proto__:null,fetchStyle:g,resolveWebStyleSymbol:U,fetchSymbolFromStyle:N,styleNameFromItem:function(e){for(const t of e.typeKeywords)if(/^Esri.*Style$/.test(t)&&"Esri Style"!==t)return t}});export{h as d,g as f,U as r,I as s};