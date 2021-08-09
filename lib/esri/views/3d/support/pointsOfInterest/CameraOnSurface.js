// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../geometry/Point ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../core/watchUtils ../PropertiesPool ./PointOfInterest".split(" "),
function(b,h,d,y,z,A,e,B,t,C,D,E,m,n,p,k,u,v,w){const x=Array;b.CameraOnSurface=function(q){function f(a){a=q.call(this,a)||this;a._dirty=!1;a._propertiesPool=new v.PropertiesPool({location:n,renderLocation:x},h._assertThisInitialized(a));a._estimatedSurfaceAltitude=0;a._pendingElevationQueryController=null;a.renderLocation=p.create();return a}h._inheritsLoose(f,q);var c=f.prototype;c.initialize=function(){this.scheduler&&this.handles.add(this.scheduler.registerTask(this.task,()=>this._measureSurfaceAltitude(),
()=>this._needsUpdate()));this._measureSurfaceAltitude();if(this.map){const a=()=>this._setDirty();this.handles.add([u.on(this.map,"ground.layers","change",a,a,a)])}};c.destroy=function(){this._cancelPendingRequest();this._propertiesPool.destroy();this._propertiesPool=null};c.updateRenderLocation=function(){this._setDirty();this._updateRenderLocation()};c.update=function(){this._measureSurfaceAltitude();this._updateRenderLocation()};c._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))};
c._needsUpdate=function(){return!this._pendingElevationQueryController&&this._dirty};c._cancelPendingRequest=function(){const a=this._pendingElevationQueryController;a&&(this._pendingElevationQueryController=null,a.abort(),this.notifyChange("updating"))};c._measureSurfaceAltitude=function(){this._cancelPendingRequest();this._dirty=!1;this.notifyChange("updating");if(this.map&&this.map.ground){this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,r,this.state.spatialReference);var a=m.createAbortController();
this.map.ground.queryElevation(r,{signal:a.signal}).then(l=>this._updateSurfaceAltitude(l.geometry.z)).catch(l=>{m.isAbortError(l)||this._updateSurfaceAltitude(0)}).catch(()=>{}).then(()=>{this._pendingElevationQueryController===a&&(this._pendingElevationQueryController=null,this.notifyChange("updating"));a=null});this._pendingElevationQueryController=a}else this._updateSurfaceAltitude(0)};c._updateSurfaceAltitude=function(a){this._estimatedSurfaceAltitude!==a&&(this._estimatedSurfaceAltitude=a,this._updateRenderLocation())};
c._updateRenderLocation=function(){k.copy(g,this.state.camera.eye);this.renderCoordsHelper.setAltitude(this._estimatedSurfaceAltitude,g);k.exactEquals(this._get("renderLocation"),g)||this._set("renderLocation",k.copy(this._propertiesPool.get("renderLocation"),g))};h._createClass(f,[{key:"location",get:function(){const a=this._propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,a,this.state.spatialReference);return a}},{key:"updating",get:function(){return this._dirty||
null!=this._pendingElevationQueryController}}]);return f}(w.PointOfInterest);d.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"scheduler",void 0);d.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"task",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["renderLocation"]})],b.CameraOnSurface.prototype,"location",null);d.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"map",void 0);d.__decorate([e.property({readOnly:!0})],
b.CameraOnSurface.prototype,"renderLocation",void 0);d.__decorate([e.property({readOnly:!0})],b.CameraOnSurface.prototype,"updating",null);b.CameraOnSurface=d.__decorate([t.subclass("esri.views.3d.support.CameraOnSurface")],b.CameraOnSurface);const g=p.create(),r=new n;b.default=b.CameraOnSurface;Object.defineProperty(b,"__esModule",{value:!0})});