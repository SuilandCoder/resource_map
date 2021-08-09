/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import{clone as n}from"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{a as o}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/jsonMap.js";import{e as i}from"../../chunks/enumeration.js";import{r as s}from"../../chunks/reader.js";import{w as u}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";var c;const a=new Set(["Raster","Raster2","DEM","FillRaster"]),p=new Set(["Rasters"]),m=t=>t&&t.rasterFunction?y.fromJSON(t):t,l=t=>t&&t instanceof y?t.toJSON():t;var f;!function(t){t[t.MOSAIC=0]="MOSAIC",t[t.GROUP=1]="GROUP",t[t.ITEM=2]="ITEM"}(f||(f={}));let y=c=class extends o{constructor(t){super(t),this.functionArguments=null,this.functionName=null,this.outputPixelType="unknown",this.variableName=null,this.description=null,this.functionDefinition=null,this.thumbnail=null}readFunctionArguments(t,n){return(t=>{if(null==t)return null;const n={};for(const r of Object.keys(t))a.has(r)?n[r]=m(t[r]):p.has(r)&&Array.isArray(t[r])?n[r]=t[r].map(m):n[r]=t[r];return n})(n.arguments||n.rasterFunctionArguments)}writeFunctionArguments(t,n,r){const e={};for(const n of Object.keys(t))a.has(n)?e[n]=l(t[n]):p.has(n)&&Array.isArray(t[n])?e[n]=t[n].map(l):e[n]=l(t[n]);this.functionDefinition?n.arguments=e:n[r]=e}readFunctionName(t,n){const r=n.rasterFunctionInfos,e=n.name;return e||(r&&r.length&&"None"!==r[0].name?r[0].name:n.rasterFunction)}writeFunctionName(t,n,r){this.functionDefinition?n.name=t:n[r]=t}readFunctionType(t){return f[t]}writeFunctionType(t,n,r){n[r]=f[t]}clone(){return new c({functionName:this.functionName,functionArguments:n(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})}};t([r({json:{type:Object,write:{target:"rasterFunctionArguments"}}})],y.prototype,"functionArguments",void 0),t([s("functionArguments",["rasterFunctionArguments","arguments"])],y.prototype,"readFunctionArguments",null),t([u("functionArguments")],y.prototype,"writeFunctionArguments",null),t([r({json:{type:String,write:{target:"rasterFunction"}}})],y.prototype,"functionName",void 0),t([s("functionName",["rasterFunction","rasterFunctionInfos","name"])],y.prototype,"readFunctionName",null),t([u("functionName")],y.prototype,"writeFunctionName",null),t([i({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),r({json:{default:"unknown"}})],y.prototype,"outputPixelType",void 0),t([r({type:String,json:{read:!0,write:!0}})],y.prototype,"variableName",void 0),t([r({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"description",void 0),t([r({json:{origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"functionType",void 0),t([s("functionType")],y.prototype,"readFunctionType",null),t([u("functionType")],y.prototype,"writeFunctionType",null),t([r({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"functionDefinition",void 0),t([r({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"thumbnail",void 0),y=c=t([e("esri.layers.support.RasterFunction")],y);var h=y;export default h;