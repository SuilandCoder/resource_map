// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ./gamepad/GamepadSettings".split(" "),function(h,c,a,m,n,d,p,k,q,r,t,l,e){a=function(f){function g(b){b=f.call(this,b)||this;b.browserTouchPanEnabled=!0;
b.gamepad=new e;b.momentumEnabled=!0;b.mouseWheelZoomEnabled=!0;return b}h._inheritsLoose(g,f);return g}(l);c.__decorate([d.property({type:Boolean})],a.prototype,"browserTouchPanEnabled",void 0);c.__decorate([d.property({type:e,nonNullable:!0})],a.prototype,"gamepad",void 0);c.__decorate([d.property({type:Boolean})],a.prototype,"momentumEnabled",void 0);c.__decorate([d.property({type:Boolean})],a.prototype,"mouseWheelZoomEnabled",void 0);return a=c.__decorate([k.subclass("esri.views.navigation.Navigation")],
a)});