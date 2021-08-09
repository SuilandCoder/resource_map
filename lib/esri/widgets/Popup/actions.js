// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../core/promiseUtils","../../support/actions/ActionButton"],function(d,e,c,l){const g=new l({id:"zoom-to-feature",title:"{messages.zoom}",className:"esri-icon-zoom-in-magnifying-glass"}),f=new l({id:"remove-selected-feature",title:"{messages.remove}",className:"esri-icon-trash"});d.all=[g,f];d.removeSelectedFeature=f;d.triggerAction=function(a){const {event:m,view:h}=a;({action:a}=m);var b=h&&h.popup;if(!a)return c.reject(new e("trigger-action:missing-arguments",
"Event has no action"));if(!b)return c.reject(new e("trigger-action:missing-arguments","view.popup is missing"));const {disabled:n,id:k}=a;if(!k)return c.reject(new e("trigger-action:invalid-action","action.id is missing"));if(n)return c.reject(new e("trigger-action:invalid-action","Action is disabled"));if(k===g.id)return b.viewModel.zoomToLocation();if(k===f.id){b.close();({selectedFeature:a}=b);if(!a)return c.reject(new e(`trigger-action:${f.id}`,"selectedFeature is required",{selectedFeature:a}));
({sourceLayer:b}=a);b?b.remove(a):h.graphics.remove(a)}return c.resolve()};d.zoomToFeature=g;Object.defineProperty(d,"__esModule",{value:!0})});