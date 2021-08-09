// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../chunks/vec4 ../../webgl-engine/lib/Geometry ../../webgl-engine/materials/RibbonLineMaterial ../../layers/graphics/lineUtils ../../../../chunks/vec4f32 ./Object3DVisualElement".split(" "),function(r,t,g,m,h,k,v,w,x,n,p){p=function(u){function l(a){var b=u.call(this,a)||this;b._origin=m.create();b._renderOccluded=4;b._width=1;b._color=n.fromValues(1,0,1,
1);b._innerWidth=1;b._innerColor=null;b._stipplePattern=null;b._stippleOffColor=null;b._stippleIntegerRepeats=!1;b._writeDepthEnabled=!0;b._falloff=0;b._polygonOffset=!1;b.applyProps(a);return b}t._inheritsLoose(l,u);var f=l.prototype;f.setGeometryFromExtent=function(a){const b=this.view.spatialReference,d=m.create(),c=m.create(),e=[];h.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);h.set(d,a[2],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,
b,c);e.push([c[0],c[1],c[2]]);h.set(d,a[2],a[3],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);h.set(d,a[0],a[3],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);h.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);h.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);this.geometry=[e]};f.setGeometryFromFrustum=function(a){const b=[];a.lines.forEach(d=>
{b.push([d.origin[0],d.origin[1],d.origin[2]]);b.push([d.endpoint[0],d.endpoint[1],d.endpoint[2]])});this.geometry=[b]};f.setGeometryFromSegment=function(a){({points:a}=a.createRenderGeometry(this._origin,this.view.renderCoordsHelper));this.geometry=[a]};f.createExternalResources=function(){this._material=new w.RibbonLineMaterial(this.materialParameters,"lineVisualElement")};f.destroyExternalResources=function(){this._material=null};f.createGeometries=function(a){const b=this._createLineGeometries();
if(0!==b.length)for(let c=0;c<b.length;++c){var d=x.createGeometryData(b[c]);d=new v(d,"lineVisualElement");a.addGeometry(d,this._material)}};f.forEachExternalResource=function(a){a(this._material)};f._updateMaterial=function(){this.attached&&this._material.setParameterValues(this.materialParameters)};f._createLineGeometries=function(){const a=this.geometry;if(g.isNone(a))return[];const b=[];a.forEach(d=>{const c=new Float64Array(3*d.length);d.forEach((e,q)=>{c[3*q]=e[0];c[3*q+1]=e[1];c[3*q+2]=e[2]});
b.push({attributeData:{position:c},removeDuplicateStartEnd:0})});return b};t._createClass(l,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this.recreateGeometry()}},{key:"width",get:function(){return this._width},set:function(a){a!==this._width&&(this._width=a,this._updateMaterial())}},{key:"color",get:function(){return this._color},
set:function(a){k.exactEquals(a,this._color)||(k.copy(this._color,a),this._updateMaterial())}},{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this._updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){k.exactEquals(a,this._innerColor)||(this._innerColor=k.copy(n.create(),a),this._updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(a){const b=
g.isSome(a)!==g.isSome(this._stipplePattern);this._stipplePattern=a;b?this.recreate():this._updateMaterial()}},{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){if(g.isNone(a)||g.isNone(this._stippleOffColor)||!k.exactEquals(a,this._stippleOffColor))this._stippleOffColor=g.isSome(a)?n.clone(a):null,this._updateMaterial()}},{key:"stippleIntegerRepeats",get:function(){return this._stippleIntegerRepeats},set:function(a){this._stippleIntegerRepeats!==a&&(this._stippleIntegerRepeats=
a,this._updateMaterial())}},{key:"writeDepthEnabled",get:function(){return this._writeDepthEnabled},set:function(a){this._writeDepthEnabled!==a&&(this._writeDepthEnabled=a,this._updateMaterial())}},{key:"falloff",get:function(){return this._falloff},set:function(a){a!==this._falloff&&(this._falloff=a,this._updateMaterial())}},{key:"polygonOffset",get:function(){return this._polygonOffset},set:function(a){a!==this._polygonOffset&&(this._polygonOffset=a,this._updateMaterial())}},{key:"materialParameters",
get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,stippleIntegerRepeats:this._stippleIntegerRepeats,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}}]);return l}(p.Object3DVisualElement);r.LineVisualElement=p;Object.defineProperty(r,"__esModule",{value:!0})});