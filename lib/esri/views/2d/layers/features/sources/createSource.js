// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../layers/support/arcgisLayerUrl","./DrillDownFeatureSource","./GeoEventSource","./PagedFeatureSource"],function(c,g,h,k,l){c.createSource=function(a,d,m,e,f){a:{switch(a.type){case "stream":a={type:"geoevent",serviceInfo:a,onRequest:e,outSR:d,canAcceptRequest:f};break a;case "memory":case "on-demand":var b=a.source;b=Array.isArray(b)?"local":"path"in b&&g.isHostedAgolService(b.path)?"hosted":"unknown";a={type:"feature",serviceInfo:a,onRequest:e,outSR:d,origin:b,tileInfoView:m,
canAcceptRequest:f};break a}a=void 0}switch(a.type){case "feature":switch(a.origin){case "hosted":case "local":return new l.PagedFeatureSource(a);case "unknown":return new h.DrillDownFeatureSource(a)}case "geoevent":return new k.GeoEventSource(a)}};Object.defineProperty(c,"__esModule",{value:!0})});