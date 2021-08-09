/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{i as e}from"./Logger.js";import{urlToObject as r,removeTrailingSlash as t,removeQueryParameters as n,join as s,Url as i,makeAbsolute as o}from"../core/urlUtils.js";import{w as a}from"./persistableUrlUtils.js";const u=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${u.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${u.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i");function f(e){return!!l.test(e)}function p(e){const t=r(e),n=t.path.match(l)||t.path.match(c);if(!n)return null;const[,s,i,o,a]=n,u=i.indexOf("/");return{title:d(-1!==u?i.slice(u+1):i),serverType:o,sublayer:null!=a&&""!==a?parseInt(a,10):null,url:{path:s}}}function d(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(r,t){const n=[];if(r){const t=p(r);e(t)&&t.title&&n.push(t.title)}if(t){const e=d(t);n.push(e)}if(2===n.length){if(-1!==n[0].toLowerCase().indexOf(n[1].toLowerCase()))return n[0];if(-1!==n[1].toLowerCase().indexOf(n[0].toLowerCase()))return n[1]}return n.join(" - ")}function v(e){if(!e)return!1;const r=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),t=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return r&&t}function w(e,r){return e?t(n(e,r)):e}function x(s,i,o){if(!i)return{url:i};i=n(i,o);const a=p(r(i).path);let u;return e(a)&&(null!=a.sublayer&&null==s.layerId&&(u=a.sublayer),i=a.url.path),{url:t(i),layerId:u}}function h(e,r,t,n,i){a(r,n,"url",i),n.url&&null!=e.layerId&&(n.url=s(n.url,t,e.layerId.toString()))}function g(e){if(!e)return!1;const r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),n=-1!==r.indexOf("/mapserver/wmsserver"),s=-1!==r.indexOf("/imageserver/wmsserver"),i=-1!==r.indexOf("/wmsserver");return t&&(n||s||i)}function y(e){if(!e)return!1;const r=new i(o(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}export{f as a,w as b,d as c,v as d,g as e,y as i,p,x as s,m as t,h as w};