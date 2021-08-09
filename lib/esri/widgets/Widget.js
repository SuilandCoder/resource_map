// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../core/Evented ../core/Collection ../intl/locale ../intl/messages ../intl ../core/Promise ../core/Handles ../core/watchUtils ../core/domUtils ./support/widgetUtils ../libs/maquette/projection ../libs/maquette/projector".split(" "),
function(r,e,d,w,h,x,K,y,L,M,N,m,z,u,A,B,O,C,D,t,E,F,P,G){const H=w.getLogger("esri.widgets.Widget");let I=0;const J=G.createProjector();d=function(v){function n(b,k){var a=v.call(this,b,k)||this;a._attached=!1;a._internalHandles=new D;a._projector=J;a.domNode=null;a.iconClass="esri-icon-checkbox-unchecked";a.label=a.declaredClass.split(".").pop();a.visible=!0;a._loadLocale=m.debounce(async()=>{a._messageBundleProps&&a._messageBundleProps.length&&await m.eachAlways(a._messageBundleProps.map(async({bundlePath:f,
propertyName:p})=>{a[p]=await B.fetchMessageBundle(f)})).then(f=>{for(const p of f)p.error&&H.error("widget-intl:locale-error",a.declaredClass,p.error)});await a.loadLocale()});const g="esri-widget-uid-"+Date.now().toString(16),l=a.render.bind(r._assertThisInitialized(a));let q=!1;a.render=()=>{if(!q||a.destroyed)return null;const f=l();f.properties?f.properties.key||(f.properties.key=g):f.properties={key:g};return f};a.addResolvingPromise(a._resourcesFetch=a.beforeFirstRender().then(()=>{q=!0;a._postInitialize()}));
return a}r._inheritsLoose(n,v);var c=n.prototype;c.normalizeCtorArgs=function(b,k){b={...b};k&&(b.container=k);return b};c.postInitialize=function(){};c.beforeFirstRender=function(){return this._loadLocale().catch(b=>{if(!m.isAbortError(b))throw b;})};c.loadLocale=async function(){};c.destroy=function(){this.destroyed||(this.viewModel&&(this.viewModel.destroy(),this.viewModel=null),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=
()=>null,this._projector=null)};c.castContainer=function(b){return E.byId(b)};c.render=function(){throw Error("not implemented");};c.scheduleRender=function(){this.destroyed||this._projector.scheduleRender()};c.classes=function(...b){return F.classes.apply(this,b)};c.own=function(b){1<arguments.length&&(b=Array.prototype.slice.call(arguments));this._internalHandles.add(b)};c.renderNow=function(){this._projector.renderNow()};c._postInitialize=function(){var b,k;this.destroyed||(null!=(b=this._renderableProps)&&
b.length&&this._internalHandles.add(this._renderableProps.map(a=>t.init(this,a,function(g,l){u.isCollection(l)&&this._internalHandles.remove(`${this.declaredClass}:${a}-collection-change-event-listener`);u.isCollection(g)&&(g=g.on("change",()=>this.scheduleRender()),this._internalHandles.add(g,`${this.declaredClass}:${a}-collection-change-event-listener`));this.scheduleRender()}))),null!=(k=this._delegatedEventNames)&&k.length&&this._internalHandles.add(t.init(this,"viewModel",(a,g)=>{g&&this._internalHandles.remove("delegated-events");
a&&this._internalHandles.add(this._delegatedEventNames.map(l=>a.on(l,q=>{this.emit(l,q)})),"delegated-events")})),this.postInitialize(),this._internalHandles.add(A.onLocaleChange(async()=>{await this._loadLocale().catch(a=>{if(!m.isAbortError(a))throw a;});this.scheduleRender()})),this._internalHandles.add(t.whenOnce(this,"container",async a=>{this.destroyed||this._attach(a)})))};c._attach=function(b){b&&(this._projector.merge(b,this.render),this._attached=!0)};c._detach=function(b){b&&this._attached&&
(this._projector.detach(this.render),b.parentNode&&b.parentNode.removeChild(b),this._attached=!1)};r._createClass(n,[{key:"container",set:function(b){this._get("container")||this._set("container",b)}},{key:"id",get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+I++},set:function(b){b&&this._set("id",b)}},{key:"renderable",get:function(){return this._resourcesFetch}}]);return n}(C.EsriPromiseMixin(z.EventedAccessor));e.__decorate([h.property({value:null})],
d.prototype,"container",null);e.__decorate([x.cast("container")],d.prototype,"castContainer",null);e.__decorate([h.property({aliasOf:"container"})],d.prototype,"domNode",void 0);e.__decorate([h.property()],d.prototype,"iconClass",void 0);e.__decorate([h.property({dependsOn:["container"]})],d.prototype,"id",null);e.__decorate([h.property()],d.prototype,"label",void 0);e.__decorate([h.property()],d.prototype,"renderable",null);e.__decorate([h.property()],d.prototype,"viewModel",void 0);e.__decorate([h.property()],
d.prototype,"visible",void 0);return d=e.__decorate([y.subclass("esri.widgets.Widget")],d)});