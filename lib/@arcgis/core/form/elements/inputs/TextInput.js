/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/object.js";import"../../../chunks/deprecate.js";import"../../../core/lang.js";import"../../../config.js";import"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/JSONSupport.js";import"../../../core/urlUtils.js";import"../../../chunks/resourceExtension.js";import o from"./Input.js";var e;let p=e=class extends o{constructor(r){super(r),this.maxLength=null,this.minLength=0,this.type=null}clone(){return new e({maxLength:this.maxLength,minLength:this.minLength,type:this.type})}};r([t({type:Number,json:{write:!0}})],p.prototype,"maxLength",void 0),r([t({type:Number,json:{default:0,write:!0}})],p.prototype,"minLength",void 0),r([t()],p.prototype,"type",void 0),p=e=r([s("esri.form.elements.inputs.support.TextInput")],p);var i=p;export default i;