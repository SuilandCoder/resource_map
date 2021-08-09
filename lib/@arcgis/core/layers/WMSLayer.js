/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as t}from"../core/lang.js";import r from"../config.js";import{i as s}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{resolve as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import{I as a}from"../chunks/ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import p from"../core/Collection.js";import"../chunks/collectionUtils.js";import{c as l}from"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import{Url as m}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import{J as u}from"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as y}from"../chunks/reader.js";import{w as c}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import h,{e as d}from"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../kernel.js";import j from"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import f from"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import b from"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"../chunks/uid.js";import g from"../Graphic.js";import S from"../core/Handles.js";import{C as k}from"../chunks/CollectionFlattener.js";import x from"./Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as I}from"../chunks/MultiOriginJSONSupport.js";import{e as v}from"../chunks/arcgisLayerUrl.js";import{O as w}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import{b as P,u as U}from"../chunks/commonProperties2.js";import{B as M}from"../chunks/BlendLayer.js";import{P as E}from"../chunks/PortalLayer.js";import{R as L}from"../chunks/RefreshableLayer.js";import{S as R}from"../chunks/ScaleRangeLayer.js";import"./support/TimeInfo.js";import{T as O}from"../chunks/TemporalLayer.js";import{g as F}from"../chunks/scaleUtils.js";import{t as C,g as D,p as T}from"../chunks/wmsUtils.js";import{E as q}from"../chunks/ExportWMSImageParameters.js";import _ from"./support/WMSSublayer.js";const W=new u({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let H=class extends(M(O(L(R(w(E(I(x)))))))){constructor(...e){super(...e),this._sublayersHandles=new S,this.allSublayers=new k({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new S),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){var e;null==(e=this._exportWMSImageParameters)||e.destroy()}load(e){const t=s(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),i(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new f({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new h(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return A(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return A(t.layers,r)}writeSublayers(e,t,r,s){t.layers=[];const o=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(o.has(e.parent.id)?o.get(e.parent.id).push(e.id):o.set(e.parent.id,[e.id]))})),i.forEach((e=>{const r={sublayer:e,...s},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(o.has(e.id)&&(i.sublayerIds=o.get(e.id)),!e.sublayers&&e.name){const s=e.write({},r);delete s.id,t.layers.push(s)}})),t.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,s){var o;const i=s&&s.pixelRatio||1,a=F({extent:e,width:t})*i;null==(o=this._exportWMSImageParameters)||o.destroy(),this._exportWMSImageParameters=new q({layer:this,extent:e,scale:a});return this._exportWMSImageParameters.toJSON()}async fetchImage(e,t,r,s){var o,i;const a=this.mapUrl,n=this.createExportImageParameters(e,t,r,s);if(!n.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const p=null==s||null==(o=s.timeExtent)?void 0:o.start,l=null==s||null==(i=s.timeExtent)?void 0:i.end,m=p&&l?p.getTime()===l.getTime()?C(p):`${C(p)}/${C(l)}`:void 0,u={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...n,time:m}),signal:null==s?void 0:s.signal};return null!=s&&s.timestamp&&(u.query={_ts:s.timestamp,...u.query}),j(a,u).then((e=>e.data))}fetchFeatureInfo(e,t,r,s,o){const i=D(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!i)return null;const a="1.3.0"===this.version?{I:s,J:o}:{x:s,y:o},n={query_layers:i,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...a};let p={...this.createExportImageParameters(e,t,r),...n};return p=this._mixCustomParameters(p),j(this.featureInfoUrl,{query:p,responseType:"text"}).then((e=>{let t=this.featureInfoUrl;t+=-1===t.indexOf("?")?"?":"";for(const e in p)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=e+"="+p[e];const r=document.createElement("iframe");return r.src=t,r.frameBorder="0",r.marginHeight="0",r.marginWidth="0",r.innerHTML=e.data,r.style.width="100%",new g({sourceLayer:this,popupTemplate:new b({title:this.title,content:r})})}))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return v(this.url)||this.spatialReferences.some((t=>{const r=900913===t?h.WebMercator:new h({wkid:t});return d(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await j(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=T(t.data)}if(this.parsedUrl){const e=new m(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==r.request.httpsDomains.indexOf(e.host)||r.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function A(e,r,s){const o=new Map;e.every((e=>null==e.id))&&(e=t(e)).forEach(((e,t)=>e.id=t));for(const t of e){const e=new _;e.read(t,r),-1===(null==s?void 0:s.indexOf(e.name))&&(e.visible=!1),o.set(e.id,e)}const i=[];for(const t of e){const e=o.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=o.get(t.parentLayerId);r.sublayers||(r.sublayers=new p),r.sublayers.unshift(e)}else i.unshift(e)}return i}e([o({readOnly:!0})],H.prototype,"allSublayers",void 0),e([o({json:{type:Object,write:!0}})],H.prototype,"customParameters",void 0),e([o({json:{type:Object,write:!0}})],H.prototype,"customLayerParameters",void 0),e([o({type:String,json:{write:!0}})],H.prototype,"copyright",void 0),e([o()],H.prototype,"description",void 0),e([o({readOnly:!0})],H.prototype,"dimensions",void 0),e([o({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],H.prototype,"fullExtent",void 0),e([y(["web-document","portal-item"],"fullExtent",["extent"])],H.prototype,"readFullExtentFromItemOrMap",null),e([c(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],H.prototype,"writeFullExtent",null),e([o()],H.prototype,"fullExtents",void 0),e([o({type:String,json:{write:{ignoreOrigin:!0}}})],H.prototype,"featureInfoFormat",void 0),e([o({type:String,json:{write:{ignoreOrigin:!0}}})],H.prototype,"featureInfoUrl",void 0),e([o({type:String,json:{origins:{"web-document":{default:"image/png",type:W.jsonValues,read:{reader:W.read,source:"format"},write:{writer:W.write,target:"format"}}}}})],H.prototype,"imageFormat",void 0),e([y("imageFormat",["supportedImageFormatTypes"])],H.prototype,"readImageFormat",null),e([o({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],H.prototype,"imageMaxHeight",void 0),e([o({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],H.prototype,"imageMaxWidth",void 0),e([o()],H.prototype,"imageTransparency",void 0),e([o(P)],H.prototype,"legendEnabled",void 0),e([o({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),e([o({type:String,json:{write:{ignoreOrigin:!0}}})],H.prototype,"mapUrl",void 0),e([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],H.prototype,"isReference",void 0),e([o({type:["WMS"]})],H.prototype,"operationalLayerType",void 0),e([o({type:h,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],H.prototype,"spatialReference",void 0),e([y(["web-document","portal-item"],"spatialReference",["spatialReferences"])],H.prototype,"readSpatialReferenceFromItemOrDocument",null),e([o({type:[a],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],H.prototype,"spatialReferences",void 0),e([c(["web-document","portal-item"],"spatialReferences")],H.prototype,"writeSpatialReferences",null),e([o({type:p.ofType(_),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if(l(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],H.prototype,"sublayers",void 0),e([y(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],H.prototype,"readSublayersFromItemOrMap",null),e([y("service","sublayers",["layers"])],H.prototype,"readSublayers",null),e([c("sublayers",{layers:{type:[_]},visibleLayers:{type:[String]}})],H.prototype,"writeSublayers",null),e([o({json:{read:!1},readOnly:!0,value:"wms"})],H.prototype,"type",void 0),e([o(U)],H.prototype,"url",void 0),e([o({type:String,json:{write:{ignoreOrigin:!0}}})],H.prototype,"version",void 0),H=e([n("esri.layers.WMSLayer")],H);var N=H;export default N;