//>>built
define(["dojo/_base/lang","dojo/_base/kernel","dojo/dom-class","./_Mixin","dojo/_base/declare"],function(d,l,e,m,h){d=d.getObject("dojox.form.manager",!0);var f=d.actionAdapter,k=d.inspectorAdapter;return h("dojox.form.manager._ClassMixin",null,{gatherClassState:function(a,b){return this.inspect(k(function(g,c){return e.contains(c,a)}),b)},addClass:function(a,b){this.inspect(f(function(g,c){e.add(c,a)}),b);return this},removeClass:function(a,b){this.inspect(f(function(g,c){e.remove(c,a)}),b);return this}})});