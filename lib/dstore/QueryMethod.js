//>>built
define([],function(){return function(c){var d=c.type,e=c.normalizeArguments,f=c.applyQuery,h=c.querierFactory;return function(){var a=Array.prototype.slice.call(arguments),b=e?e.apply(this,a):a;a={type:d,arguments:a,normalizedArguments:b};var g=this._getQuerierFactory(d)||h;g&&(a.querier=g.apply(this,b));b=this._createSubCollection({queryLog:this.queryLog.concat(a)});return f?f.call(this,b,a):b}}});