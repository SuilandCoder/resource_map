//>>built
define(["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(p,q,f,l,d){var g=null;f.add("vml",function(b,m,c){c.innerHTML='\x3cv:shape adj\x3d"1"/\x3e';b="adj"in c.firstChild;c.innerHTML="";return b});return{load:function(b,m,c){function n(){m(["dojox/gfx/"+a],function(h){p.renderer=a;g=h;c(h)})}if(g&&"force"!=b)c(g);else{var a=d.forceGfxRenderer;b=!a&&(q.isString(d.gfxRenderer)?d.gfxRenderer:"svg,vml,canvas,silverlight").split(",");for(var k,e;!a&&b.length;)switch(b.shift()){case "svg":"SVGAngle"in
l.global&&(a="svg");break;case "vml":f("vml")&&(a="vml");break;case "silverlight":try{f("ie")?(k=new ActiveXObject("AgControl.AgControl"),k.IsVersionSupported("1.0"))&&(e=!0):navigator.plugins["Silverlight Plug-In"]&&(e=!0)}catch(h){e=!1}finally{k=null}e&&(a="silverlight");break;case "canvas":l.global.CanvasRenderingContext2D&&(a="canvas")}"canvas"===a&&!1!==d.canvasEvents&&(a="canvasWithEvents");d.isDebug&&console.log("gfx renderer \x3d "+a);"svg"==a&&"undefined"!=typeof window.svgweb?window.svgweb.addOnLoad(n):
n()}}}});