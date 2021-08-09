// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../core/Accessor ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/SpatialReference ../../../../geometry/support/coordsUtils ../../../../geometry/Polygon ../../../../geometry/support/jsonUtils ../../../../core/screenUtils ../../../../geometry/support/aaBoundingRect ../../../../symbols/support/defaults ../../../../core/HandleOwner ../../../../layers/graphics/data/projectionSupport ../../engine/webgl/definitions ../../../webgl/capabilities ../../engine/webgl/util/BidiText ../../../../symbols/cim/cimSymbolUtils ../../engine/webgl/TileData ../../engine/webgl/WGLTile ../features/schemaUtils ../../engine/webgl/mesh/factories/matcherUtils ../../engine/webgl/mesh/templates/WGLTemplateStore ../../engine/webgl/mesh/factories/WGLMeshFactory ../features/support/AttributeStore ../features/support/ComputedAttributeStorage ../features/support/GraphicsReader ../features/support/TileStore ./GraphicContainer ./graphicsUtils ./GraphicStore ../../../layers/GraphicsView".split(" "),
function(v,t,p,z,ha,ia,w,ja,I,ka,la,ma,k,J,E,K,L,M,l,N,A,B,O,F,P,Q,R,S,T,U,G,V,W,X,Y,Z,aa,ba,ca,da,ea,fa){function C(u,m,d){if(d.has(u))return d.get(u);m={tile:m,addedOrModified:[],removed:[]};d.set(u,m);return m}p=function(u){function m(a){a=u.call(this,a)||this;a._storage=new Z.ComputedAttributeStorage;a._displayIds=new Map;a._tiles=new Map;a._graphicStoreUpdate=!1;a._graphicsSet=new Set;a._matcher=k.resolve(null);a._tileUpdateSet=new Set;a._tilesToUpdate=new Map;a._graphicIdToAbortController=new Map;
a._attached=!1;a._highlightIds=new Map;a._updatingGraphicsTimer=null;a._processing=!1;a._needsProcessing=!1;a._pendingUpdate={added:new Set,updated:new Set,removed:new Set};a.lastUpdateId=-1;a.updateRequested=!1;a.graphicUpdateHandler=a.graphicUpdateHandler.bind(v._assertThisInitialized(a));a._processAnalyzedGraphics=a._processAnalyzedGraphics.bind(v._assertThisInitialized(a));a._graphicsChangeHandler=a._graphicsChangeHandler.bind(v._assertThisInitialized(a));return a}v._inheritsLoose(m,u);var d=
m.prototype;d._createMatcher=function(a,b){a&&(a=G.createMatcherSchema({indexCount:0,fields:{}},"feature",a),this._matcher=V.createMatcher(a,b,null))};d._createDisplayId=function(a){this._displayIds.has(a)||this._displayIds.set(a,this._storage.createDisplayId());return this._displayIds.get(a)};d.initialize=function(){this._tileStore=new ba(this.view.featuresTilingScheme);this.container=new ca(this.view.featuresTilingScheme);this._attributeStore=new Y["default"]({type:"local",initialize:b=>k.resolve(this.container.attributeView.initialize(b)),
update:b=>this.container.attributeView.requestUpdate(b),render:()=>this.container.requestRender()},Q());this._graphicStore=new ea(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,b=>{this._createDisplayId(b.uid);this._setFilterState(b.uid,b.visible)},b=>{const c=this._displayIds.get(b.uid);this._displayIds.delete(b.uid);this._storage.releaseDisplayId(c)});const a=new W.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),!0);this._createMatcher(this.renderer,
a);this._meshFactory=new X.WGLMeshFactory(null,this.uid,a);this._templateStore=a;this.watch("renderer",b=>{this._createMatcher(b,a);for(const c of this.graphics)this._pendingUpdate.updated.add(c);this.requestUpdate()});this._tileStore.on("update",this._onTileUpdate.bind(this));this.container.on("attach",()=>{0<this.graphics.items.length&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]});this.handles.add(this.graphics.on("change",this._graphicsChangeHandler),
"graphics");this._attached=!0;this.notifyChange("updating")})};d.destroy=function(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating"));this.container.destroy();this._set("graphics",null);this._graphicStore.clear();this._tileStore.destroy();this._attributeStore=null};d.hitTest=function(a,b){if(!this.view||!this.view.position)return k.resolve();a=this.view.toMap(N.createScreenPoint(a,b));return this.searchFeatures(a).then(c=>
c&&c.length?c[0]:null)};d.searchFeatures=async function(a,b=2){return this._graphicStore.hitTest(a.x,a.y,b,this.view.state.resolution,this.view.state.rotation)};d.update=function(a){a=a.state;const b=this.view.featuresTilingScheme.getClosestInfoForScale(a.scale).level;this._graphicStore.updateLevel(b);this._tileStore.setViewState(a);this._graphicStoreUpdate=!0;this.updateRequested=!1;0<this._pendingUpdate.updated.size&&(this._processing?this._needsProcessing=!0:this._updateGraphics())};d.viewChange=
function(){this.requestUpdate()};d.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())};d.processUpdate=function(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))};d.graphicUpdateHandler=function(a){const {graphic:b,property:c,newValue:e}=a;switch(c){case "geometry":case "symbol":this._pendingUpdate.updated.add(b);this.requestUpdate();break;case "visible":this._setFilterState(b.uid,e),this._attributeStore.sendUpdates()}};d.addHighlight=
function(a){for(const b of a)this._highlightIds.has(b)?(a=this._highlightIds.get(b),this._highlightIds.set(b,a+1)):this._highlightIds.set(b,1);this._updateHighlight()};d.removeHighlight=function(a){for(const b of a)this._highlightIds.has(b)&&(a=this._highlightIds.get(b)-1,0===a?this._highlightIds.delete(b):this._highlightIds.set(b,a));this._updateHighlight()};d._updateHighlight=function(){const a=Array.from(this._highlightIds.keys()),b=a.map(c=>this._displayIds.get(c));this._attributeStore.setHighlight(a,
b)};d._getIntersectingTiles=function(a){return(a=this._graphicStore.getBounds(a))&&0!==A.width(a)&&0!==A.height(a)?this._tileStore.boundsIntersections(a):[]};d._updateTile=function(a){const b=a.tile,c=this._getGraphicsData(this._templateStore,b,a.addedOrModified);return this._processGraphics(c).then(e=>{this._patchTile(b.key,{type:"update",addOrUpdate:e,remove:a.removed,end:!0});return e})};d._patchTile=function(a,b){this._tiles.has(a)&&(a=this._tiles.get(a),this.container.onTileData(a,b),this.container.requestRender())};
d._graphicsChangeHandler=function(a){for(const b of a.added)this._pendingUpdate.added.add(b);for(const b of a.moved)this._pendingUpdate.added.add(b);for(const b of a.removed)this._pendingUpdate.added.has(b)?this._pendingUpdate.added.delete(b):this._pendingUpdate.removed.add(b);this._processing?this._needsProcessing=!0:this._updateGraphics()};d._getGraphicsToUpdate=function(){const a={added:[],removed:[],updated:[]},b=this._pendingUpdate;for(const c of this.graphics.items)b.added.has(c)?a.added.push(c):
b.updated.has(c)&&a.updated.push(c);for(const c of b.removed)this._graphicStore.has(c)&&a.removed.push(c);b.added.clear();b.removed.clear();b.updated.clear();return a};d._updateGraphics=async function(){this._processing=!0;const {added:a,removed:b,updated:c}=this._getGraphicsToUpdate(),e=this._tilesToUpdate;try{if(!this._graphicStoreUpdate){var f=this.view.state,g=this.view.featuresTilingScheme.getClosestInfoForScale(f.scale).level;this._graphicStore.updateLevel(g);this._tileStore.setViewState(f)}f=
[];const x=Array(a.length+b.length);for(g=0;g<c.length;g++){var n=c[g];const h=this._getIntersectingTiles(n);for(const r of h){var q=r.id;C(q,r,e).removed.push(this._displayIds.get(n.uid))}f.push(this._updateGraphic(n,null));x[g]=n}var y=c.length;for(n=0;n<a.length;n++){const h=a[n];x[y+n]=h;this._graphicsSet.add(h);f.push(this.addGraphic(h))}for(const h of b){this._abortProcessingGraphic(h.uid);const r=this._getIntersectingTiles(h);for(const H of r)q=H.id,C(q,H,e).removed.push(this._displayIds.get(h.uid));
this._graphicsSet.delete(h);this._graphicStore.remove(h)}this._flipUpdatingGraphics();await k.all(f);let D;for(y=0;y<x.length;y++){D=x[y];const h=this._getIntersectingTiles(D);for(const r of h)q=r.id,C(q,r,e).addedOrModified.push(D)}this._graphicStore.updateZ();q=[];for(const [,h]of e)q.push(this._updateTile(h));await k.all(q)}catch(x){}e.clear();this.notifyChange("updating");this._processing=!1;this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())};d._getArcadeInfo=function(a){const b=
(a.attributes?Object.keys(a.attributes):[]).map(c=>({name:c,alias:c,type:"string"===typeof a.attributes[c]?"esriFieldTypeString":"esriFieldTypeDouble"}));return z.isNone(a.geometry)?null:{geometryType:l.getJsonType(a.geometry),spatialReference:K.fromJSON(a.geometry.spatialReference),fields:b}};d._getSymbolForGraphic=async function(a,b){return z.isSome(a.symbol)?a.symbol:z.isSome(this.renderer)?this.renderer.getSymbolAsync(a,{scale:this.view.scale,abortOptions:b}):this._getNullSymbol(a)};d._getSymbolResources=
async function(a,b){if(!this.container.stage)return k.resolve(null);var c=this._getArcadeInfo(a);a=await this._getSymbolForGraphic(a,b);a=G.createSymbolSchema(a);b=await S.expandSymbol(a,c,b);if("esriTS"===b.type){c=[];[a]=R.bidiText(b.text);for(let e=0;e<a.length;e++)c.push(a.charCodeAt(e));[{mosaicItem:c}]=await this.container.getMaterialItems([{symbol:b,id:0,glyphIds:c}]);return{symbol:b,mosaicItem:c}}return{symbol:b,mosaicItem:null}};d._projectAndNormalizeGeometry=async function(a){if(z.isNone(a.geometry))return k.resolve(null);
let b=a.geometry;l.isPolygon(b)?b.rings=b.rings:l.isPolyline(b)?b.paths=b.paths:l.isExtent(b)&&(b=M.fromExtent(b));return F.checkProjectionSupport(b.spatialReference,this.view.spatialReference).then(()=>{var c=da.normalizeCentralMeridian(b);c=F.project(c,b.spatialReference,this.view.spatialReference);L.closeRingsAndFixWinding(c);return c})};d._onTileUpdate=function(a){const b=E.getInfo(this.view.spatialReference);if(a.added&&0<a.added.length)for(const c of a.added)this._addNewTile(c,b);if(a.removed&&
0<a.removed.length)for(const c of a.removed)this._removeTile(c.key)};d.addGraphic=function(a){this._abortProcessingGraphic(a.uid);const b=k.createAbortController();this._graphicIdToAbortController.set(a.uid,b);return this._addOrUpdateGraphic(a,{signal:b.signal}).then(()=>{this._graphicIdToAbortController.delete(a.uid)}).catch(c=>{this._graphicIdToAbortController.delete(a.uid);if(!k.isAbortError(c))throw c;})};d._updateGraphic=async function(a,b){const c=this._projectAndNormalizeGeometry(a);b=this._getSymbolResources(a,
b);const [e,f]=await k.all([c,b]);this._graphicStore.addOrModify(a,f,e)};d._addOrUpdateGraphic=async function(a,b){const c=this._projectAndNormalizeGeometry(a);b=this._getSymbolResources(a,b);try{const [e,f]=await k.all([c,b]);this._addProjectedGraphic(a,f,e)}catch(e){if(!k.isAbortError(e))throw e;}};d._addProjectedGraphic=function(a,b,c){this._graphicsSet.has(a)&&this._graphicStore.addOrModify(a,b,c)};d._addTile=function(a){var b=A.create();this.view.featuresTilingScheme.getTileBounds(b,a);b=new U.WGLTile(a,
b,!0);this._tiles.set(a,b);this.container.addChild(b);return b};d._addNewTile=function(a,b){const c=this._addTile(a.key),e=this._graphicStore.queryTileData(this._templateStore,a);if(b){b=Math.round((b.valid[1]-b.valid[0])/a.resolution);for(const g of e)g.geometry&&l.isPoint(g.geometry)&&this._wrapPoints(g,b)}const f=a.key;this._tileUpdateSet.add(a.key);this.notifyChange("updating");this._processGraphics(e).then(g=>{c.setData({type:"update",clear:!0,addOrUpdate:g,remove:[],end:!0});this._tileUpdateSet.delete(f);
this.notifyChange("updating")}).catch(g=>{this._tileUpdateSet.delete(f);this.notifyChange("updating");if(!k.isAbortError(g))throw g;})};d._removeTile=function(a){if(this._tiles.has(a)){var b=this._tiles.get(a);this.container.removeChild(b);b.destroy();this._tiles.delete(a)}};d._setFilterState=function(a,b){const c=this._displayIds.get(a);a=this._attributeStore.getHighlightFlag(a);this._attributeStore.setData(c,0,0,a|(b?P.FILTER_FLAG_0:0))};d._getGraphicsData=function(a,b,c){const e=E.getInfo(this.view.spatialReference);
a=this._graphicStore.getGraphicsData(a,b,c);if(e){b=Math.round((e.valid[1]-e.valid[0])/b.resolution);for(const f of a)f.geometry&&l.isPoint(f.geometry)&&this._wrapPoints(f,b)}return a};d._wrapPoints=function(a,b){const c=a.geometry;512===b?20>c.x?a.geometry={points:[[c.x,c.y],[b,0]]}:492<c.x&&(a.geometry={points:[[c.x,c.y],[-b,0]]}):-20>c.x?a.geometry={points:[[c.x,c.y],[b,0]]}:532<c.x&&(a.geometry={points:[[c.x,c.y],[-b,0]]})};d._processGraphics=async function(a,b){if(!a||!a.length||!this._meshFactory)return null;
a=aa.GraphicsReader.from(a);await this._meshFactory.analyzeGraphics(a,await this._matcher,null,null,b);this._attributeStore.sendUpdates();return this._processAnalyzedGraphics(a)};d._processAnalyzedGraphics=function(a){var b=this._meshFactory;const c=b.createMeshData(a.getApproximateSize());for(a=a.getCursor();a.next();){const e=a.readGraphic();e.insertAfter=-1===e.insertAfter?-1:this._displayIds.get(e.insertAfter);e.displayId=this._displayIds.get(e.attributes[this.uid]);b.writeGraphic(c,a)}b={};c.encode(b,
[]);return T.TileData.decode(b)};d._abortProcessingGraphic=function(a){this._graphicIdToAbortController.has(a)&&this._graphicIdToAbortController.get(a).abort()};d._getNullSymbol=function(a){a=a.geometry;return l.isPolyline(a)?B.errorPolylineSymbol2D:l.isPolygon(a)||l.isExtent(a)?B.errorPolygonSymbol2D:B.errorPointSymbol2D};d._flipUpdatingGraphics=function(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer);this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=
null;this.notifyChange("updating")},160);this.notifyChange("updating")};v._createClass(m,[{key:"updating",get:function(){return!this._attached||null!==this._updatingGraphicsTimer||0<this._tileUpdateSet.size||0<this._tilesToUpdate.size}}]);return m}(fa.GraphicsView(O.HandleOwnerMixin(J)));t.__decorate([w.property({constructOnly:!0})],p.prototype,"requestUpdateCallback",void 0);t.__decorate([w.property({constructOnly:!0})],p.prototype,"graphics",void 0);t.__decorate([w.property()],p.prototype,"updating",
null);t.__decorate([w.property()],p.prototype,"view",void 0);t.__decorate([w.property()],p.prototype,"updateRequested",void 0);return p=t.__decorate([I.subclass("esri.views.2d.layers.support.GraphicsView2D")],p)});