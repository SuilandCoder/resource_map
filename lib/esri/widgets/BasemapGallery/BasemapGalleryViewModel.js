// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Collection ../../core/Loadable ../../core/Handles ../../support/basemapUtils ../../core/watchUtils ./support/basemapCompatibilityUtils ./support/BasemapGalleryItem ./support/LocalBasemapsSource ./support/PortalBasemapsSource".split(" "),
function(l,c,b,C,e,w,D,x,E,F,G,m,n,p,y,z,q,r,t,A,f){const u=n.ofType(t);b=function(v){function g(a){a=v.call(this,a)||this;a._handles=new y;a.activeBasemap=null;a.items=new u;a.source=new f;a.view=null;return a}l._inheritsLoose(g,v);var d=g.prototype;d.initialize=function(){const a=()=>this._recreateItems();this._handles.add([q.watch(this,["compatibilityFunction","state"],()=>this._updateItems()),q.on(this,"source.basemaps","change",a,a)])};d.destroy=function(){this._handles.destroy();this._handles=
null};d.castSource=function(a){return Array.isArray(a)||n.isCollection(a)?new A({basemaps:a}):a&&"esri.portal.Portal"===a.declaredClass?new f({portal:a}):!a||a instanceof f||!a.portal&&!a.query?a&&"basemaps"in a&&"state"in a&&"refresh"in a?a:null:new f(a)};d.basemapEquals=function(a,h){return z.contentEquals(a,h)};d.refresh=function(){this._recreateItems()};d.load=function(a){this.addResolvingPromise(p.isLoadable(this.source)?this.source.load(a):m.resolve());return m.resolve(this)};d._recreateItems=
function(){const a=this.get("source.basemaps"),{view:h,compatibilityFunction:B}=this;this.items.removeAll().forEach(k=>k.destroy());this.items.addMany(a.map(k=>new t({basemap:k,compatibilityFunction:B,view:h})))};d._updateItems=function(){this.items.forEach(a=>{a.compatibilityFunction=this.compatibilityFunction;a.view=this.view})};l._createClass(g,[{key:"compatibilityFunction",get:function(){return void 0===this._get("compatibilityFunction")?"3d"===this.get("view.type")?r.default3DCompatibility:r.default2DCompatibility:
this._get("compatibilityFunction")},set:function(a){this._set("compatibilityFunction",a)}},{key:"state",get:function(){return this.get("view.ready")&&this.source?"ready":"disabled"}}]);return g}(p);c.__decorate([e.property({aliasOf:"view.map.basemap"})],b.prototype,"activeBasemap",void 0);c.__decorate([e.property({dependsOn:["view.type"]})],b.prototype,"compatibilityFunction",null);c.__decorate([e.property({readOnly:!0,type:u})],b.prototype,"items",void 0);c.__decorate([e.property()],b.prototype,
"source",void 0);c.__decorate([w.cast("source")],b.prototype,"castSource",null);c.__decorate([e.property({readOnly:!0,dependsOn:["view.ready"]})],b.prototype,"state",null);c.__decorate([e.property()],b.prototype,"view",void 0);return b=c.__decorate([x.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],b)});