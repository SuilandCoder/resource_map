//>>built
define("dojo/_base/declare dojo/sniff dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dijit/_Contained dijit/_Container dijit/_WidgetBase dojo/has!dojo-bidi?dojox/mobile/bidi/IconMenu ./IconMenuItem".split(" "),function(k,g,c,l,t,u,f,v,w,x){f=k(g("dojo-bidi")?"dojox.mobile.NonBidiIconMenu":"dojox.mobile.IconMenu",[w,v,f],{transition:"slide",iconBase:"",iconPos:"",cols:3,tag:"ul",selectOne:!1,baseClass:"mblIconMenu",childItemClass:"mblIconMenuItem",_createTerminator:!1,buildRendering:function(){this.domNode=
this.containerNode=this.srcNodeRef||l.create(this.tag);u.set(this.domNode,"role","menu");this.inherited(arguments);if(this._createTerminator){var a=this._terminator=l.create("br");a.className=this.childItemClass+"Terminator";this.domNode.appendChild(a)}},startup:function(){this._started||(this.refresh(),this.inherited(arguments))},refresh:function(){var a=this.getParent();a&&c.remove(a.domNode,"mblSimpleDialogDecoration");a=this.getChildren();if(this.cols){var d=Math.ceil(a.length/this.cols),m=Math.floor(100/
this.cols),n=100-m*this.cols,p=Math.floor(100/d),q=100-p*d;g("ie")&&(n--,q--)}for(var b=0;b<a.length;b++){var e=a[b];if(this.cols){var y=0===b%this.cols,r=0===(b+1)%this.cols,h=Math.floor(b/this.cols);t.set(e.domNode,{width:m+(r?n:0)+"%",height:p+(h+1===d?q:0)+"%"});c.toggle(e.domNode,this.childItemClass+"FirstColumn",y);c.toggle(e.domNode,this.childItemClass+"LastColumn",r);c.toggle(e.domNode,this.childItemClass+"FirstRow",0===h);c.toggle(e.domNode,this.childItemClass+"LastRow",h+1===d)}}},addChild:function(a,
d){this.inherited(arguments);this.refresh()},hide:function(){var a=this.getParent();a&&a.hide&&a.hide()}});return g("dojo-bidi")?k("dojox.mobile.IconMenu",[f,x]):f});