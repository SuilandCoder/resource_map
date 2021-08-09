// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../Color ../../../../core/screenUtils ../../webgl-engine/lib/Util ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Material ./graphicUtils ./elevationAlignmentUtils ./ElevationAligners ./ElevationContext ./Graphics3DObject3DGraphicLayer ../../webgl-engine/lib/Geometry ./symbolComplexity ./Graphics3DSymbolLayer ./pointUtils ../../webgl-engine/materials/LineCalloutMaterial".split(" "),function(v,w,
k,x,y,m,B,C,D,l,E,F,G,H,I,n,z,r){const g=m.VertexAttrConstants;m=function(t){function p(a,b){a=t.call(this,a,null,b,J)||this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};a.ensureDrapedStatus(!1);return a}w._inheritsLoose(p,t);var f=p.prototype;f.doLoad=async function(){this._material=new r.LineCalloutMaterial(this.materialParameters,this._getIdHint("_lineCallout_common"));this._context.stage.add(3,this._material)};f.destroy=function(){t.prototype.destroy.call(this);k.isSome(this._material)&&
(this._context.stage.remove(3,this._material.id),this._material=null)};f.perInstanceMaterialParameters=function(a){const b=this.materialParameters;b.screenOffset=a.screenOffset||[0,0];b.centerOffsetUnits=a.centerOffsetUnits||"world";return b};f._defaultElevationInfoNoZ=function(){return K};f.createGraphics3DGraphic=function(a){const b=a.renderingInfo;a=a.graphic;const c=this.setGraphicElevationContext(a,new F.ElevationContext,b.elevationOffset||0);var d=b.symbol;const e="on-the-ground"===this._elevationContext.mode&&
("cim"===d.type||!d.symbolLayers.some(h=>"object"===h.type||"text"===h.type));if("label-3d"!==d.type&&e)return null;d=D.computeCentroid(a.geometry);return k.isNone(d)?null:this._createAs3DShape(d,c,b,"graphic"+a.uid,a.uid)};f.layerOpacityChanged=function(){if(k.isNone(this._material))return!0;this._material.setParameterValues(this.materialParameters);return!0};f.layerElevationInfoChanged=function(a,b,c){c=l.elevationModeChangeUpdateType(p.elevationModeChangeTypes,c,this._elevationContext.mode);if(c!==
l.SymbolUpdateType.UPDATE)return c;a.forEach(d=>{const e=b(d);k.isSome(e)&&this.updateGraphicElevationContext(d.graphic,e)});return c};f.slicePlaneEnabledChanged=function(){if(k.isNone(this._material))return!0;this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};f.physicalBasedRenderingChanged=function(){return!0};f.pixelRatioChanged=function(){return!0};f.setGraphicElevationContext=function(a,b,c=0){a=t.prototype.setGraphicElevationContext.call(this,a,
b);a.addOffsetRenderUnits(c);return a};f.updateGraphicElevationContext=function(a,b){this.setGraphicElevationContext(a,b.elevationContext,b.metadata.elevationOffset);b.needsElevationUpdates=l.needsElevationUpdates2D(b.elevationContext.mode)};f.updateGeometry=function(a,b){return!1};f.computeComplexity=function(){return{primitivesPerFeature:2,primitivesPerCoordinate:0,drawCallsPerFeature:0,estimated:!1,memory:I.emptySymbolComplexity.memory}};f.createVertexData=function(a){const {translation:b,centerOffset:c}=
a;return b||c?{[g.POSITION]:b?{size:3,data:[b[0],b[1],b[2]]}:u[g.POSITION],[g.NORMAL]:u[g.NORMAL],[g.AUXPOS1]:c?{size:4,data:[c[0],c[1],c[2],c[3]]}:u[g.AUXPOS1]}:u};f.getOrCreateMaterial=function(a,b){const c=this.perInstanceMaterialParameters(a),d=r.LineCalloutMaterial.uniqueMaterialIdentifier(c);if(k.isSome(this._material)&&d===this._material.uniqueMaterialIdentifier)return{material:this._material,isUnique:!1};if(a.materialCollection){let e=a.materialCollection.getMaterial(d);e||(e=new r.LineCalloutMaterial(c,
`${b}_lineCallout_shared`),a.materialCollection.addMaterial(d,e));return{material:e,isUnique:!1}}return{material:new r.LineCalloutMaterial(c,`${b}_lineCallout_unique`),isUnique:!0}};f._createAs3DShape=function(a,b,c,d,e){var h=new B.GeometryData(this.createVertexData(c),L,"point");h=[new H(h,d)];const q=this.getOrCreateMaterial(c,d);d=z.createStageObjectForHUD(this._context,a,h,[q.material],null,null,b,d,this._context.layer.uid,e);if(null===d)return null;e=new G(this,d.object,h,q.isUnique?[q.material]:
null,null,E.perObjectElevationAligner,b);e.metadata={elevationOffset:c.elevationOffset||0};e.alignedSampledElevation=d.sampledElevation;e.needsElevationUpdates=l.needsElevationUpdates2D(b.mode);z.extendPointGraphicElevationContext(e,a,this._context.elevationProvider);return e};w._createClass(p,[{key:"materialParameters",get:function(){const a=this.symbol;var b=a.callout;const c=k.isSome(b.color)?x.toUnitRGBA(b.color):[0,0,0,0];c[3]*=this._getLayerOpacity();const d=y.pt2px(b.size||0);let e=null;if(a.verticalOffset){const {screenLength:q,
minWorldLength:M,maxWorldLength:A}=a.verticalOffset;e={screenLength:y.pt2px(q),minWorldLength:M||0,maxWorldLength:null!=A?A:Infinity}}b=k.isSome(b.border)&&k.isSome(b.border.color)?x.toUnitRGBA(b.border.color):null;const h="object"===a.symbolLayers.getItemAt(0).type;return{color:c,size:d,verticalOffset:e,screenSizePerspective:this._context.screenSizePerspectiveEnabled?this._context.sharedResources.screenSizePerspectiveSettings:null,screenOffset:[0,0],centerOffsetUnits:"world",borderColor:b,occlusionTest:!h,
shaderPolygonOffset:h?0:void 0,depthHUDAlignStart:"label-3d"===a.type,slicePlaneEnabled:this._context.slicePlaneEnabled,renderOccluded:C.materialParametersDefaults.renderOccluded}}}]);return p}(n.Graphics3DSymbolLayer);m.elevationModeChangeTypes={definedChanged:l.SymbolUpdateType.UPDATE,staysOnTheGround:l.SymbolUpdateType.UPDATE,onTheGroundChanged:l.SymbolUpdateType.RECREATE};const u={[g.POSITION]:{size:3,data:[0,0,0]},[g.NORMAL]:{size:3,data:[0,0,1]},[g.AUXPOS1]:{size:4,data:[0,0,0,1]}};n=new Uint32Array([0]);
const L={[g.POSITION]:n,[g.NORMAL]:n,[g.AUXPOS1]:n},K={mode:"relative-to-ground",offset:0},J={ignoreDrivers:!0,renderPriority:0,renderPriorityStep:1};v.Graphics3DLineCalloutSymbolLayer=m;v.default=m;Object.defineProperty(v,"__esModule",{value:!0})});