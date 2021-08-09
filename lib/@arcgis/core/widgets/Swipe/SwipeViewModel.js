/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as i}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import e from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import{t as s}from"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import o from"../../core/Collection.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../kernel.js";import"../../request.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../chunks/Identifiable.js";import n from"../../core/Handles.js";import p from"../../layers/Layer.js";import{init as l,on as a}from"../../core/watchUtils.js";import{a as c}from"../../chunks/ClipRect.js";const m=o.ofType(p);const h={left:0,right:0,top:0,bottom:0};let y=class extends e{constructor(i){super(i),this._handles=new n,this._leadingClips=new Map,this._trailingClips=new Map,this.direction="horizontal",this.leadingLayers=new m,this.max=100,this.min=0,this.precision=4,this.step=.5,this.stepMultiplier=10,this.trailingLayers=new m,this.view=null}initialize(){this._handles.add([l(this,["view","view.ready","position","direction"],(()=>this._clipLayers())),a(this,"leadingLayers","change",(()=>this._clipLeadingLayers())),a(this,"trailingLayers","change",(()=>this._clipTrailingLayers()))])}destroy(){this._removeExistingClips(),this._handles.destroy(),this._handles=null}get position(){return 25}set position(i){const{precision:t,min:e,max:s}=this;this._set("position",function(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}(Math.max(Math.min(i,s),e),t))}get state(){const{view:i}=this;return i&&i.ready?"ready":"disabled"}_clipLayers(){this._clipLeadingLayers(),this._clipTrailingLayers()}_clipLeadingLayers(){this._removeClips("leading");const{leadingLayers:i}=this;i.forEach((i=>this._clipLayer({layer:i,type:"leading"})))}_clipTrailingLayers(){this._removeClips("trailing");const{trailingLayers:i}=this;i.forEach((i=>this._clipLayer({layer:i,type:"trailing"})))}async _getLayerView(i){const{view:t}=this;if(!i||!t)return null;const e=await s(t)().whenLayerView(i);return"clips"in e?e:null}_getVerticalClipRect(i){const{position:t}=this;return"leading"===i?new c({...h,bottom:100-t+"%"}):"trailing"===i?new c({...h,top:`${t}%`}):null}_getHorizontalClipRect(i){const{position:t}=this;return"leading"===i?new c({...h,right:100-t+"%"}):"trailing"===i?new c({...h,left:`${t}%`}):null}_getClipRect(i){const{direction:t}=this;return"vertical"===t?this._getVerticalClipRect(i):"horizontal"===t?this._getHorizontalClipRect(i):null}async _clipLayer(i){const{_leadingClips:t,_trailingClips:e}=this,{layer:s,type:r}=i,o="trailing"===r?e:"leading"===r?t:null,n=await this._getLayerView(s);if(!(n&&"clips"in n&&o&&n.hasOwnProperty("clips")))return;const p=o.get(n);p&&n.clips.remove(p);const l=this._getClipRect(r);l&&(o.set(n,l),n.clips.add(l))}_removeClips(i){const{_leadingClips:t,_trailingClips:e}=this,s="trailing"===i?e:"leading"===i?t:null;s&&(s.forEach(((i,t)=>{t&&t.hasOwnProperty("clips")&&t.clips.remove(i)})),s.clear())}_removeExistingClips(){this._removeClips("leading"),this._removeClips("trailing")}};i([t()],y.prototype,"direction",void 0),i([t({type:m})],y.prototype,"leadingLayers",void 0),i([t({readOnly:!0})],y.prototype,"max",void 0),i([t({readOnly:!0})],y.prototype,"min",void 0),i([t()],y.prototype,"position",null),i([t()],y.prototype,"precision",void 0),i([t({dependsOn:["view.ready"],readOnly:!0})],y.prototype,"state",null),i([t()],y.prototype,"step",void 0),i([t()],y.prototype,"stepMultiplier",void 0),i([t({type:m})],y.prototype,"trailingLayers",void 0),i([t()],y.prototype,"view",void 0),y=i([r("esri.widgets.Swipe.SwipeViewModel")],y);var g=y;export default g;