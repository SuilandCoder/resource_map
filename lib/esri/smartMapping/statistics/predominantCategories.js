// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["../../core/maybe","../../core/Error","../../core/promiseUtils","./support/utils","../support/adapters/support/layerUtils"],function(g,e,h,k,f){async function l(a){if(!(a&&a.layer&&a.view&&a.fields))throw new e("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");var b=[0,2,1,3,4];const {layer:d,...m}=a,c=f.createLayerAdapter(d,b);a={layerAdapter:c,...m};if(!c)throw new e("predominant-categories:invalid-parameters","'layer' must be one of these types: "+
f.getLayerTypeLabels(b).join(", "));b=g.isSome(a.signal)?{signal:a.signal}:null;await h.all([a.view.when(),c.load(b)]);if(b=k.verifyBasicFieldValidity(c,a.fields,"predominant-categories:invalid-parameters"))throw b;return a}return async function(a){const {layerAdapter:b,...d}=await l(a);return b.predominantCategories(d)}});