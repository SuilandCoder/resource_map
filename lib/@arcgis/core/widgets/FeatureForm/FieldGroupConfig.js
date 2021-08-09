/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import s from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/resourceExtension.js";import"../../chunks/date.js";import e from"./FieldConfig.js";let p=class extends s{constructor(o){super(o),this.description=null,this.fieldConfig=null,this.label=null,this.state="expanded",this.visibilityExpression=null}castFieldConfig(o){return o?o.map((o=>o.declaredClass?o:new e(o))):null}};o([r()],p.prototype,"description",void 0),o([r()],p.prototype,"fieldConfig",void 0),o([i("fieldConfig")],p.prototype,"castFieldConfig",null),o([r()],p.prototype,"label",void 0),o([r()],p.prototype,"state",void 0),o([r()],p.prototype,"visibilityExpression",void 0),p=o([t("esri.widgets.FeatureForm.FieldGroupConfig")],p);var c=p;export default c;