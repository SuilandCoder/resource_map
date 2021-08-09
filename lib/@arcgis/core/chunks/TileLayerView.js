/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import{i as r}from"./Logger.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import{reject as o,eachAlways as s}from"../core/promiseUtils.js";import a from"../core/Error.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import{c as p}from"./drapedUtils.js";const l=l=>{let c=class extends l{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return o(new a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return o(new a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const l=this.get("view.scale"),c=i.allSublayers.toArray().filter((e=>{const r=0===e.minScale||l<=e.minScale,t=0===e.maxScale||l>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return s(c.map((async o=>{const s=o.createQuery(),a=r(t)?t.event:null,i=p({renderer:o.renderer,event:a});s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),s.outFields=await o.popupTemplate.getRequiredFields();return(await o.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([t()],c.prototype,"layer",void 0),c=e([i("esri.layers.mixins.TileLayerView")],c),c};export{l as T};