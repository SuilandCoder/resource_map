// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/Logger ../../../../../../core/Error ../../../../../../core/promiseUtils ../../../../../../symbols/support/defaults ../../util/Result ../../../../layers/features/schemaUtils ./WGLTextTemplate ./WGLMarkerTemplate ./WGLDynamicFillTemplate ./WGLDynamicLineTemplate ./WGLDynamicMarkerTemplate ../../../../layers/features/textUtils ./WGLDynamicTextTemplate ./WGLFillTemplate ./WGLLineTemplate ../../util/Lock".split(" "),
function(p,A,q,B,l,r,g,t,v,m,C,D,E,F,G,u,w,x){function k(h,d){const a=h.length;h.push(null);d.then(b=>h[a]=b);return h}function y(h){return!!(h&1)}const f=q.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),z=[];q=function(){function h(a,b){this._templateIdCounter=this._idCounter=1;this._idToTemplateGroup=new Map;this._symbolToTemplate=new Map;this._fetchQueue=[];this._idToResolver=new Map;this._cimTemplateCache=new Map;this._cimAnalyses=[];this._lock=new x["default"];this._fetchResource=
a;this._joinOnUTurn=b}var d=h.prototype;d.createTemplateGroup=function(a,b){this._initErrorTemplates();const c=a.hash;if(this._symbolToTemplate.has(c))return this._symbolToTemplate.get(c);const e=[];b&&this._createMeshTemplates(e,b,!0);this._createMeshTemplates(e,a,!1);a=this._createGroupId("expanded-cim"===a.type);this._idToTemplateGroup.set(a,e);this._symbolToTemplate.set(c,a);return a};d.getTemplateGroup=function(a){return this._idToTemplateGroup.has(a)?this._idToTemplateGroup.get(a):z};d.getDynamicTemplateGroup=
function(a){if(!this._idToTemplateGroup.has(a))return z;y(a)||f.error("mapview-template-store",`Id ${a} does not refer to a dynamic template`);return this._idToTemplateGroup.get(a)};d.getMosaicItem=function(a,b){const c=this._createTemplateId(),e=l.create(n=>this._idToResolver.set(c,n));this._fetchQueue.push({symbol:a,id:c,glyphIds:b});return e};d.finalize=function(a){return this._fetchQueue.length||this._lock.isHeld()?x.withLock(this._lock,this._fetchAllQueuedResources.bind(this),a):l.resolve()};
d._initErrorTemplates=function(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],t.createSymbolSchema(r.errorPolygonSymbol2D),!1),marker:this._createMeshTemplates([],t.createSymbolSchema(r.errorPointSymbol2D),!1),line:this._createMeshTemplates([],t.createSymbolSchema(r.errorPolylineSymbol2D),!1)})};d._fetchAllQueuedResources=function(a){if(!this._fetchQueue.length)return l.resolve();const b=this._fetchQueue,c=this._cimAnalyses;this._fetchQueue=[];this._cimAnalyses=[];
return l.all(c).then(()=>this._fetchResource(b,a).then(e=>{for(const {id:n,mosaicItem:H}of e)this._idToResolver.get(n)(H),this._idToResolver.delete(n)})).catch(e=>{l.isAbortError(e)?this._fetchQueue=this._fetchQueue.concat(b):"worker:port-closed"!==e.name&&f.error(new B("mapview-template-store","Unable to fetch requested texture resources",e))})};d._createGroupId=function(a){return this._idCounter++<<1|(a?1:0)};d._createTemplateId=function(){return this._templateIdCounter++};d._createSMS=async function(a){const {spriteMosaicItem:b}=
await this.getMosaicItem(a);return g.ok(b,f)?m.fromSimpleMarker(a,b):this._markerError};d._createPMS=async function(a){const {spriteMosaicItem:b}=await this.getMosaicItem(a);return g.ok(b,f)?m.fromPictureMarker(a,b):this._markerError};d._createSFS=async function(a,b){const {spriteMosaicItem:c}=await this.getMosaicItem(a);return g.ok(c,f)?u.fromSimpleFill(a,c,b):this._fillError};d._createPFS=async function(a,b){const {spriteMosaicItem:c}=await this.getMosaicItem(a);return g.ok(c,f)?u.fromPictureFill(a,
c,b):this._fillError};d._createSLS=async function(a,b){({spriteMosaicItem:b}=await this.getMosaicItem(a));return g.ok(b,f)?w.fromSimpleLine(a,b,this._joinOnUTurn):this._lineError};d._createLMS=async function(a){const {spriteMosaicItem:b}=await this.getMosaicItem(a);return g.ok(b,f)?m.fromLineSymbolMarker(a,b):this._markerError};d._createTS=async function(a){const {glyphMosaicItems:b}=await this.getMosaicItem(a);return v.fromText(a,b)};d._createCIMText=async function(a){const {glyphMosaicItems:b}=
await this.getMosaicItem(a.cim,F.codepoints(a.text));a.cim.mosaicHash=a.materialHash;return g.ok(b,f)?v.fromCIMText(a,b):this._textError};d._createCIMFill=async function(a){a.cim.mosaicHash=a.materialHash;const {spriteMosaicItem:b}=await this.getMosaicItem(a.cim);return g.ok(b,f)?u.fromCIMFill(a,b):this._fillError};d._createCIMLine=async function(a){a.cim.mosaicHash=a.materialHash;const {spriteMosaicItem:b}=await this.getMosaicItem(a.cim);return g.ok(b,f)?w.fromCIMLine(a,b,this._joinOnUTurn):this._lineError};
d._createCIMMarker=async function(a){a.cim.mosaicHash=a.materialHash;const {spriteMosaicItem:b}=await this.getMosaicItem(a.cim);return g.ok(b,f)?m.fromCIMMarker(a,b):this._markerError};d._createCIM=async function(a){const b=a.templateHash;if(this._cimTemplateCache.has(b))return this._cimTemplateCache.get(b);let c;switch(a.type){case "marker":c=this._createCIMMarker(a);break;case "line":c=this._createCIMLine(a);break;case "fill":c=this._createCIMFill(a);break;case "text":c=this._createCIMText(a)}c.then(e=>
this._cimTemplateCache.set(b,e));return c};d._createDynamicCIM=function(a){const b=a.templateHash;if(this._cimTemplateCache.has(b))return this._cimTemplateCache.get(b);let c;switch(a.type){case "marker":c=E.fromCIMMarker(a);break;case "line":c=D.fromCIMLine(a);break;case "fill":c=C.fromCIMFill(a);break;case "text":c=G.fromCIMText(a)}this._cimTemplateCache.set(b,c);return c};d._createPrimitiveMeshTemplates=function(a,b,c){switch(b.type){case "esriSMS":return k(a,this._createSMS(b));case "esriPMS":return k(a,
this._createPMS(b));case "esriSFS":return k(a,this._createSFS(b,c));case "line-marker":return k(a,this._createLMS(b));case "esriPFS":return k(a,this._createPFS(b,c));case "esriSLS":return k(a,this._createSLS(b,!1));case "esriTS":return k(a,this._createTS(b));default:return f.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),a}};d._createMeshTemplates=function(a,b,c){if(-1!==b.type.indexOf("3d"))return f.error("3D symbols are not supported with MapView"),a;if("expanded-cim"===
b.type){for(const e of b.layers)"function"===typeof e.materialHash?a.push(this._createDynamicCIM(e)):k(a,this._createCIM(e));return a}if("composite-symbol"===b.type){for(const e of b.layers)this._createPrimitiveMeshTemplates(a,e,c);return a}return"cim"===b.type||"label"===b.type||"web-style"===b.type?a:this._createPrimitiveMeshTemplates(a,b,c)};A._createClass(h,[{key:"_markerError",get:function(){return this._errorTemplates.marker[0]}},{key:"_fillError",get:function(){return this._errorTemplates.fill[0]}},
{key:"_lineError",get:function(){return this._errorTemplates.line[0]}},{key:"_textError",get:function(){return this._errorTemplates.line[0]}}]);return h}();p.WGLTemplateStore=q;p.isDynamicId=y;Object.defineProperty(p,"__esModule",{value:!0})});