//>>built
define(["dojo/_base/lang","dojo/when"],function(g,h){function k(a,b){return h(this,function(c){for(var d=0,e=c.length;d<e;d++)a.call(b,c[d],d,c)})}return function(a,b){var c=b&&"totalLength"in b;if(a.then){a=g.delegate(a);var d=a.then(function(e){var f=c?b.totalLength:e.totalLength||e.length;e.totalLength=f;return!c&&f});a.totalLength=c?b.totalLength:d;a.response=b&&b.response}else a.totalLength=c?b.totalLength:a.length;a.forEach=k;return a}});