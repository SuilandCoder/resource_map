// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../ViewState","../../engine/webgl/enums","../../engine/Container"],function(g,l,q,r,f){f=function(m){function h(a){var b=m.call(this)||this;b.layerView=a;b._childrenRenderParameters={context:null,pixelRatio:1,state:new q,stationary:!0,painter:null};b._name=b.constructor.name;b.requestRender=b.requestRender.bind(l._assertThisInitialized(b));return b}l._inheritsLoose(h,m);var n=h.prototype;n.doRender=function(a){if(a.drawPhase===r.WGLDrawPhase.MAP){var b=
window.devicePixelRatio,{state:t,stationary:u,context:d,painter:k,profiler:p}=a,e=this._childrenRenderParameters;e.context=d.gl;e.state.copy(t);e.state.pixelRatio=b;e.stationary=u;e.painter=k;a=this.createRenderParams(a);k.beforeRenderLayer(a,this.clips?255:0,a.globalOpacity);p.recordContainerStart(this._name);b=d.getBoundFramebufferObject();var c=d.getViewport();d.resetState();d.bindFramebuffer(b);d.setViewport(c.x,c.y,c.width,c.height);this.layerView._renderTarget.framebufferObject=b.glName;this.layerView._renderTarget.viewport[0]=
c.x;this.layerView._renderTarget.viewport[1]=c.y;this.layerView._renderTarget.viewport[2]=c.width;this.layerView._renderTarget.viewport[3]=c.height;this.layerView.render(e);d.enforceState();k.compositeLayer(a,a.globalOpacity);p.recordContainerEnd()}};n.createRenderParams=function(a){return{...a,blendMode:this.blendMode,globalOpacity:a.globalOpacity*this.opacity,inFadeTransition:this.inFadeTransition}};return h}(f.Container);g.DisplayGL=f;g.default=f;Object.defineProperty(g,"__esModule",{value:!0})});