/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import r from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import{o,g as i}from"../../geometry/SpatialReference.js";import"../../kernel.js";import"../../request.js";import"../../geometry/Geometry.js";import n from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import{webMercatorToGeographic as c}from"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import a from"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import{c as m}from"../../chunks/screenUtils.js";import"../../chunks/unitUtils.js";import{straightLineDensify as p}from"../../geometry/support/normalizeUtils.js";import"../../chunks/geodesicConstants.js";import{geodesicLengths as l}from"../../geometry/support/geodesicUtils.js";function u(t,e){return t&&t.indexOf(e)>-1}function d(t,e){const{x:r,y:s}="decimal-degrees"===t?c(e,!0):e;return[r,s]}function h({state:{paddedViewState:t},spatialReference:e,width:r}){return e.isWrappable&&t.worldScreenWidth<r}let j=class extends r{constructor(t){super(t),this.scaleComputedFrom=m(),this.view=null}get state(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"}getScaleBarProperties(t,e){if("disabled"===this.state||isNaN(t)||!e)return null;const r=this._getDistanceInKm(this.view,this.scaleComputedFrom);if("metric"===e)return this._getScaleBarProps(t,r,"metric");const s=r/1.609;return this._getScaleBarProps(t,s,"non-metric")}_getLocationUnit(){const t=this.get("view.spatialReference"),{isWebMercator:e,wkid:r,wkt:s}=t;return e||u(s,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=o[r]||u(s,"PROJCS")?"linear-unit":"unknown"}_getDistanceInKm(t,e){const{state:r,spatialReference:s}=t,i=this._getLocationUnit();if("linear-unit"===i){const t=1e3;return r.extent.width*function(t){const{wkid:e}=t;if(null!=o[e])return o.values[o[e]];const{wkt:r}=t,s=r.lastIndexOf(",")+1,i=r.lastIndexOf("]]");return parseFloat(r.substring(s,i))}(s)/t}const[n,c]=this._getScaleMeasuringPoints(t,e),m=new a({paths:[[d(i,n),d(i,c)]],spatialReference:4326}),u=p(m,10),[h]=l([u],"kilometers");return h}_getScaleMeasuringPoints(t,e){const{width:r,height:s,position:o,spatialReference:c}=t;if(h(t)){const{valid:t}=i(c);return[new n(t[0],0,c),new n(t[1],0,c)]}let a=e.y-o[1];a>s?a=s:a<0&&(a=0);const p=m(0,a),l=m(r,a);return[t.toMap(p),t.toMap(l)]}_getScaleBarProps(t,e,r){const{view:s}=this;let o=t*e/(h(s)?s.state.paddedViewState.worldScreenWidth:s.width),i="metric"===r?"km":"mi";if(o<.1)if("mi"===i){o*=5280,i="ft"}else if("km"===i){o*=1e3,i="m"}let n=0;for(;o>=1;)o/=10,n++;const c=this._getConstraints(o);if(!c)return null;const{min:a,max:m}=c,p=m/o>=o/a?a:m;return{length:t*(p/o),value:Math.pow(10,n)*p,unit:i}}_getConstraints(t){return t>.5?{min:.5,max:1}:t>.3?{min:.3,max:.5}:t>.2?{min:.2,max:.3}:t>.15?{min:.15,max:.2}:t>=.1?{min:.15,max:.1}:void 0}};t([e()],j.prototype,"scaleComputedFrom",void 0),t([e({readOnly:!0,dependsOn:["scaleComputedFrom","view.ready","view.scale"]})],j.prototype,"state",null),t([e()],j.prototype,"view",void 0),j=t([s("esri.widgets.Scalebar.ScaleBarViewModel")],j);var g=j;export default g;