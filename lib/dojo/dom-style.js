//>>built
define(["./sniff","./dom","./_base/window"],function(e,n,u){function v(a,b,c){b=b.toLowerCase();if("auto"==c){if("height"==b)return a.offsetHeight;if("width"==b)return a.offsetWidth}if("fontweight"==b)switch(c){case 700:return"bold";default:return"normal"}b in k||(k[b]=w.test(b));return k[b]?p(a,c):c}var f={};var q=e("webkit")?function(a){if(1==a.nodeType){var b=a.ownerDocument.defaultView;var c=b.getComputedStyle(a,null);!c&&a.style&&(a.style.display="",c=b.getComputedStyle(a,null))}return c||{}}:
e("ie")&&9>e("ie")?function(a){return 1==a.nodeType&&a.currentStyle?a.currentStyle:{}}:function(a){if(1===a.nodeType){var b=a.ownerDocument.defaultView;return(b.opener?b:u.global.window).getComputedStyle(a,null)}return{}};f.getComputedStyle=q;var p=e("ie")?function(a,b){if(!b)return 0;if("medium"==b)return 4;if(b.slice&&"px"==b.slice(-2))return parseFloat(b);var c=a.style,d=a.runtimeStyle,g=c.left,l=d.left;d.left=a.currentStyle.left;try{c.left=b,b=c.pixelLeft}catch(m){b=0}c.left=g;d.left=l;return b}:
function(a,b){return parseFloat(b)||0};f.toPixelValue=p;var h=function(a,b){try{return a.filters.item("DXImageTransform.Microsoft.Alpha")}catch(c){return b?{}:null}},x=9>e("ie")||(e("ie"),0)?function(a){try{return h(a).Opacity/100}catch(b){return 1}}:function(a){return q(a).opacity},r=9>e("ie")||(e("ie"),0)?function(a,b){""===b&&(b=1);var c=100*b;1===b?(a.style.zoom="",h(a)&&(a.style.filter=a.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i,""))):(a.style.zoom=1,h(a)?
h(a,1).Opacity=c:a.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d"+c+")",h(a,1).Enabled=!0);if("tr"==a.tagName.toLowerCase())for(a=a.firstChild;a;a=a.nextSibling)"td"==a.tagName.toLowerCase()&&r(a,b);return b}:function(a,b){return a.style.opacity=b},k={left:!0,top:!0},w=/margin|padding|width|height|max|min|offset/,t={cssFloat:1,styleFloat:1,"float":1};f.get=function(a,b){var c=n.byId(a),d=arguments.length;if(2==d&&"opacity"==b)return x(c);b=t[b]?"cssFloat"in c.style?"cssFloat":
"styleFloat":b;var g=f.getComputedStyle(c);return 1==d?g:v(c,b,g[b]||c.style[b])};f.set=function(a,b,c){var d=n.byId(a),g=arguments.length,l="opacity"==b;b=t[b]?"cssFloat"in d.style?"cssFloat":"styleFloat":b;if(3==g)return l?r(d,c):d.style[b]=c;for(var m in b)f.set(a,m,b[m]);return f.getComputedStyle(d)};return f});