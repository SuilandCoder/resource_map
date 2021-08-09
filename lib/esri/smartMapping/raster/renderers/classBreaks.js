// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/Error ../../../renderers/support/AuthoringInfo ../../../renderers/support/rasterRendererHelper ../support/utils".split(" "),function(f,d,e,k,l,m){async function n(a){a=await m.processRasterRendererParameters(a);const b=a.layer,{rasterInfo:c}=b;if(1<c.bandCount)throw new e("raster-class-breaks-renderer:not-supported","Multiband raster is not supported");if(!d.isSome(c.attributeTable)&&!d.isSome(c.histograms)&&(await b.updateRasterInfoWithEstimatedStats({renderingRule:a.renderingRule,
signal:a.signal}),!d.isSome(c.histograms)))throw new e("raster-class-breaks-renderer:not-supported","Histograms or raster attribute table is required on the source raster. Unable to estimate histograms");const {colors:g,numClasses:h}=a;if(g&&h&&g.length!==h)throw new e("raster-class-breaks-renderer:not-supported","The size of the `colors` parameter does not match 'numClasses'");a.field||(a.field="value");a.classificationMethod||(a.classificationMethod="equal-interval");return a}f.createRenderer=async function(a){a=
await n(a);const b=l.createClassBreaksRenderer(a.layer.rasterInfo,a);if(!d.isSome(b))throw new e("raster-class-breaks-renderer:not-supported","Class breaks renderer is not supported on this data");b.authoringInfo=new k({classificationMethod:a.classificationMethod,colorRamp:a.colorRamp,standardDeviationInterval:a.standardDeviationInterval});a={minValue:b.minValue,maxValue:b.classBreakInfos[b.classBreakInfos.length-1].maxValue,normalizationTotal:null,classBreakInfos:b.classBreakInfos.map(c=>({minValue:c.minValue,
maxValue:c.maxValue,label:c.label}))};return{renderer:b,classBreaksResult:a}};Object.defineProperty(f,"__esModule",{value:!0})});