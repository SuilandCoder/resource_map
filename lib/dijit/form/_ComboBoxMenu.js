//>>built
define("dojo/_base/declare dojo/dom-class dojo/dom-style dojo/keys ../_WidgetBase ../_TemplatedMixin ./_ComboBoxMenuMixin ./_ListMouseMixin".split(" "),function(g,c,h,d,k,l,m,n){return g("dijit.form._ComboBoxMenu",[k,l,n,m],{templateString:"\x3cdiv class\x3d'dijitReset dijitMenu' data-dojo-attach-point\x3d'containerNode' style\x3d'overflow: auto; overflow-x: hidden;' role\x3d'listbox'\x3e\x3cdiv class\x3d'dijitMenuItem dijitMenuPreviousButton' data-dojo-attach-point\x3d'previousButton' role\x3d'option'\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitMenuItem dijitMenuNextButton' data-dojo-attach-point\x3d'nextButton' role\x3d'option'\x3e\x3c/div\x3e\x3c/div\x3e",
baseClass:"dijitComboBoxMenu",postCreate:function(){this.inherited(arguments);this.isLeftToRight()||(c.add(this.previousButton,"dijitMenuItemRtl"),c.add(this.nextButton,"dijitMenuItemRtl"));this.containerNode.setAttribute("role","listbox")},_createMenuItem:function(){var a=this.ownerDocument.createElement("div");a.className="dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl");a.setAttribute("role","option");return a},onHover:function(a){c.add(a,"dijitMenuItemHover")},onUnhover:function(a){c.remove(a,
"dijitMenuItemHover")},onSelect:function(a){c.add(a,"dijitMenuItemSelected")},onDeselect:function(a){c.remove(a,"dijitMenuItemSelected")},_page:function(a){var e=0,f=this.domNode.scrollTop,p=h.get(this.domNode,"height");for(this.getHighlightedOption()||this.selectNextNode();e<p;){var b=this.getHighlightedOption();if(a){if(!b.previousSibling||"none"==b.previousSibling.style.display)break;this.selectPreviousNode()}else{if(!b.nextSibling||"none"==b.nextSibling.style.display)break;this.selectNextNode()}b=
this.domNode.scrollTop;e+=(b-f)*(a?-1:1);f=b}},handleKey:function(a){switch(a.keyCode){case d.DOWN_ARROW:return this.selectNextNode(),!1;case d.PAGE_DOWN:return this._page(!1),!1;case d.UP_ARROW:return this.selectPreviousNode(),!1;case d.PAGE_UP:return this._page(!0),!1;default:return!0}}})});