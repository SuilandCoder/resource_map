// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/promiseUtils ../../../Color ../../../chunks/symbols ../../../symbols/support/cimSymbolUtils ../../../symbols/support/utils ../../../renderers/support/numberUtils ./utils".split(" "),function(E,y,L,M,F,N,z,r,G){function O(a,b){const c=a.length-1;return a.map((f,h)=>G.createStopLabel(f,h,c,b))}function P(a,b){const c=a.classBreakInfos,f=c.length;b=2>f||!(2<=b)?c[0].symbol.clone():c[f-1].symbol.clone();a.visualVariables.some(h=>"color"===h.type)&&(-1<b.type.indexOf("3d")?
H(b):I(b));return b}function Q(a,b){let c=null,f=null;"simple"===a.type?c=a.symbol:"class-breaks"===a.type?(c=(a=a.classBreakInfos)&&a[0]&&a[0].symbol,f=1<a.length):"unique-value"===a.type&&(c=(a=a.uniqueValueInfos)&&a[0]&&a[0].symbol,f=1<a.length);if(!c||R(c))return null;c=c.clone();if(b||f)-1<c.type.indexOf("3d")?H(c):I(c);return c}function R(a){return a?F.isSymbol3D(a)?a.symbolLayers?a.symbolLayers.some(b=>b&&"fill"===b.type):!1:-1!==a.type.indexOf("fill"):!1}function H(a){z.isVolumetricSymbol(a)||
("line-3d"===a.type?a.symbolLayers.forEach(b=>{b.material={color:A}}):a.symbolLayers.forEach(b=>{"icon"!==b.type||b.resource&&b.resource.href?b.material={color:J}:(b.material={color:K},b.outline={color:A,size:1.5})}))}function I(a){"cim"===a.type?N.applyCIMSymbolColor(a,new M(J)):-1!==a.type.indexOf("line")?a.color=A:(a.color=K,"simple-marker"===a.type&&(a.outline={color:A,width:1.5}))}async function S(a,b,c,f){const h=(await new Promise(function(d,e){E(["../../../renderers/visualVariables/support/visualVariableUtils"],
d,e)})).getSizeRangeAtScale(a,c,f),l=h&&T(h);if(h||l){var g=l.map(d=>{{const e=h.minSize,m=h.maxSize,n=a.minDataValue,k=a.maxDataValue;let q=null;d=q=d<=e?n:d>=m?k:(d-e)/(m-e)*(k-n)+n}return d});g=r.round(g);for(let d=1;d<g.length-1;d++){const e=await U(a,b,g[d],g[d-1],c,f);e&&(g[d]=e[0],l[d]=e[1])}return g}}function T(a){const b=a.minSize;a=(a.maxSize-b)/4;const c=[];for(let f=0;5>f;f++)c.push(b+a*f);return c}async function U(a,b,c,f,h,l){const g=await u(a,b,c,h,l);f=await u(a,b,f,h,l);var d=r.numDigits(c),
e=d.fractional,m=d.integer;let n=d=null;0<c&&1>c&&(d=Math.pow(10,e),c*=d,m=r.numDigits(c).integer);for(e=m-1;0<=e;e--){var k=Math.pow(10,e);m=Math.floor(c/k)*k;k*=Math.ceil(c/k);null!=d&&(m/=d,k/=d);let q=(m+k)/2;[,q]=r.round([m,q,k],{indexes:[1]});const x=await u(a,b,m,h,l),B=await u(a,b,k,h,l),C=await u(a,b,q,h,l),D=r.percentChange(g,x,f,null),p=r.percentChange(g,B,f,null),v=r.percentChange(g,C,f,null);let t=20>=D.previous,w=20>=p.previous;t&&w&&(D.previous<=p.previous?(t=!0,w=!1):(w=!0,t=!1));
t?n=[m,x]:w?n=[k,B]:20>=v.previous&&(n=[q,C]);if(n)break}return n}async function u(a,b,c,f,h){const {getSize:l}=await new Promise(function(g,d){E(["../../../renderers/visualVariables/support/visualVariableUtils"],g,d)});return l(a,c,{scale:f,view:h,shape:"simple-marker"===b.type?b.style:null})}function V(a,b){a=a.clone();if(F.isSymbol3D(a))z.isVolumetricSymbol(a)||a.symbolLayers.forEach(c=>{"fill"!==c.type&&(c.size=b)});else if("esri.symbols.SimpleMarkerSymbol"===a.declaredClass)a.size=b;else if("esri.symbols.PictureMarkerSymbol"===
a.declaredClass){const c=a.width,f=a.height;a.height=b;a.width=c/f*b}else"esri.symbols.SimpleLineSymbol"===a.declaredClass?a.width=b:"esri.symbols.TextSymbol"===a.declaredClass&&a.font&&(a.font.size=b);return a}const K=[255,255,255],J=[200,200,200],A=[128,128,128];y.REAL_WORLD_MAX_SIZE=30;y.REAL_WORLD_MIN_SIZE=12;y.getRampStops=async function(a,b,c,f,h,l){var g=b.legendOptions;g=g&&g.customValues;const d=Q(a,c);var e=null!=b.minSize&&null!=b.maxSize;c=b.stops&&1<b.stops.length;const m=!!b.target;
if(d&&(g||e||c&&!m)){var n=z.isVolumetricSymbol(d),k=null,q=e=null;e=n&&!c?r.round([b.minDataValue,b.maxDataValue]):g||await S(b,d,f,h);g=null==a?void 0:a.authoringInfo;var x="univariate-color-size"===(null==g?void 0:g.type)&&"above-and-below"===(null==g?void 0:g.univariateTheme);!e&&c&&(e=x?G.getUnivariateAboveAndBelowStopValues(b,g):b.stops.map(p=>p.value),(k=b.stops.some(p=>!!p.label))&&(q=b.stops.map(p=>p.label)));n&&e&&2<e.length&&(e=[e[0],e[e.length-1]]);if(!e)return null;var B=[12,30],C=z.getSymbolOutlineSize(d),
D=k?null:O(e,l);return(await L.all(e.map(async(p,v)=>{const t=n?B[v]:await u(b,d,p,f,h),w=V(x&&"class-breaks"===a.type?P(a,v):d,t);return{value:p,symbol:w,label:k?q[v]:D[v],size:t,outlineSize:C}}))).reverse()}};Object.defineProperty(y,"__esModule",{value:!0})});