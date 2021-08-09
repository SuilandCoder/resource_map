/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import{i as s}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import r from"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../kernel.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import t from"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../chunks/basemapUtils.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/LegendOptions.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../renderers/UniqueValueRenderer.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/MemCache.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import o from"../../renderers/support/HeatmapColorStop.js";import e from"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../core/watchUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../chunks/zscale.js";import"../../chunks/queryZScale.js";import"../../layers/support/Field.js";import"../../tasks/support/FeatureSet.js";import"../../chunks/DataLayerSource.js";import"../../tasks/support/AttachmentQuery.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../tasks/support/RelationshipQuery.js";import"../../chunks/ClassBreaksDefinition.js";import{c as i,g as p}from"../../chunks/layerUtils2.js";import"../../tasks/Task.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/featureConversionUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/pbf.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/query.js";import"../../layers/support/AttachmentInfo.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import{a as m}from"../../chunks/utils5.js";import"../../chunks/quantizationUtils.js";import"../../chunks/predominanceUtils.js";import"../../chunks/heatmapUtils.js";import"../../chunks/numberUtils.js";import"../statistics/summaryStatistics.js";import{v as a,d as n,p as l}from"../../chunks/utils8.js";import"../statistics/classBreaks.js";import"../../views/support/colorUtils.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import u from"../statistics/heatmapStatistics.js";import{cloneScheme as j,getSchemes as c}from"../symbology/heatmap.js";async function y(r,i){const{fieldOffset:p}=r,{field:m,basemap:a,blurRadius:u,minRatio:y,maxRatio:h,fadeToTransparent:b,heatmapScheme:d,view:k}=i,{scheme:f,basemapId:S,basemapTheme:g}=await async function(r){let t=r.scheme,o=null,e=null;const i=await l(r.basemap,r.view);if(o=s(i.basemapId)?i.basemapId:null,e=s(i.basemapTheme)?i.basemapTheme:null,t)return{scheme:j(t),basemapId:o,basemapTheme:e};const p=c({basemap:o,basemapTheme:e});return p&&(t=p.primaryScheme,o=p.basemapId,e=p.basemapTheme),{scheme:t,basemapId:o,basemapTheme:e}}({basemap:a,scheme:d,view:k}),U=f.colors,I=U.length,D=!r.count,R=D?[0,100]:[r.min,r.max],C=(h-y)/(I-1),w=U[0],P=[new o({ratio:0,color:new t([w.r,w.g,w.b,0])}),new o({ratio:.01,color:new t([w.r,w.g,w.b,0])}),new o({ratio:b?y:.01,color:w})];n(U,I).forEach(((s,r)=>{P.push(new o({ratio:y+C*r,color:s}))}));const V=new e({blurRadius:u,colorStops:P,field:m,minPixelIntensity:R[0],maxPixelIntensity:R[1]});return null!=p&&(V.fieldOffset=p),{renderer:V,statistics:r,defaultValuesUsed:D,scheme:j(f),basemapId:S,basemapTheme:g}}async function h(t){const o=await async function(t){if(!(t&&t.layer&&t.view))throw new r("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");const{blurRadius:o,minRatio:e,maxRatio:n,fadeToTransparent:l}=t,u={...t};u.blurRadius=null==o?10:o,u.minRatio=null==e?.01:e,u.maxRatio=null==n?1:n,u.fadeToTransparent=null==l||l;const j=[0,2,1],c=i(u.layer,j);if(u.layer=c,!c)throw new r("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+p(j).join(", "));const y=s(u.signal)?{signal:u.signal}:null;await c.load(y);const h=await m({field:u.field}),b=a(c,h,"heatmap-renderer:invalid-parameters");if(b)throw b;return u}(t);return y(o.statistics?o.statistics:await u({layer:o.layer,field:o.field,fieldOffset:o.fieldOffset,blurRadius:o.blurRadius,view:o.view,signal:o.signal}),o)}export{h as createRenderer};