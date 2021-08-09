/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{a as r}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import i from"../../geometry/Extent.js";let s=class extends r{constructor(t){super(t),this.attributeTable=null,this.bandCount=null,this.colormap=null,this.extent=null,this.format=void 0,this.height=null,this.width=null,this.histograms=null,this.keyProperties={},this.multidimensionalInfo=null,this.noDataValue=null,this.pixelSize=null,this.pixelType=null,this.isPseudoSpatialReference=!1,this.spatialReference=null,this.statistics=null,this.storageInfo=null,this.transform=null}get dataType(){const t=this.keyProperties&&this.keyProperties.DataType;return t?t.toLowerCase():"generic"}get nativeExtent(){return this._get("nativeExtent")||this.extent}set nativeExtent(t){t&&this._set("nativeExtent",t)}get nativePixelSize(){const t=this.nativeExtent;return{x:t.width/this.width,y:t.height/this.height}}};t([e({json:{write:!0}})],s.prototype,"attributeTable",void 0),t([e({json:{write:!0}})],s.prototype,"bandCount",void 0),t([e({json:{write:!0}})],s.prototype,"colormap",void 0),t([e({type:String,readOnly:!0})],s.prototype,"dataType",null),t([e({type:i,json:{write:!0}})],s.prototype,"extent",void 0),t([e({type:i,dependsOn:["extent"],json:{write:!0}})],s.prototype,"nativeExtent",null),t([e({dependsOn:["nativeExtent"],json:{write:!0}})],s.prototype,"nativePixelSize",null),t([e({json:{write:!0}})],s.prototype,"format",void 0),t([e({json:{write:!0}})],s.prototype,"height",void 0),t([e({json:{write:!0}})],s.prototype,"width",void 0),t([e({json:{write:!0}})],s.prototype,"histograms",void 0),t([e({json:{write:!0}})],s.prototype,"keyProperties",void 0),t([e({json:{write:!0}})],s.prototype,"multidimensionalInfo",void 0),t([e()],s.prototype,"noDataValue",void 0),t([e({json:{write:!0}})],s.prototype,"pixelSize",void 0),t([e({json:{write:!0}})],s.prototype,"pixelType",void 0),t([e()],s.prototype,"isPseudoSpatialReference",void 0),t([e({json:{write:!0}})],s.prototype,"spatialReference",void 0),t([e({json:{write:!0}})],s.prototype,"statistics",void 0),t([e({json:{write:!0}})],s.prototype,"storageInfo",void 0),t([e({json:{write:!0}})],s.prototype,"transform",void 0),s=t([o("esri.layers.support.RasterInfo")],s);var p=s;export default p;