/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/object.js";import"../../../chunks/deprecate.js";import"../../../core/lang.js";import"../../../config.js";import"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import{I as s}from"../../../chunks/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{a as e}from"../../../chunks/JSONSupport.js";import"../../../core/urlUtils.js";import{r as p}from"../../../chunks/reader.js";import{w as i}from"../../../chunks/writer.js";import"../../../chunks/resourceExtension.js";import{t as a,o as c}from"../../../chunks/opacityUtils.js";var n;let u=n=class extends e{constructor(r){super(r),this.label=null,this.opacity=null,this.value=null}readOpacity(r,t){return a(t.transparency)}writeOpacity(r,t,s){t[s]=c(r)}clone(){return new n({label:this.label,opacity:this.opacity,value:this.value})}};r([t({type:String,json:{write:!0}})],u.prototype,"label",void 0),r([t({type:Number,json:{type:s,write:{target:"transparency"}}})],u.prototype,"opacity",void 0),r([p("opacity",["transparency"])],u.prototype,"readOpacity",null),r([i("opacity")],u.prototype,"writeOpacity",null),r([t({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=n=r([o("esri.renderers.visualVariables.support.OpacityStop")],u);var l=u;export default l;