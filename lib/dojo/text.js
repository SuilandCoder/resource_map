//>>built
define(["./_base/kernel","require","./has","./has!host-browser?./request"],function(v,n,w,x){var l;w("host-browser")?l=function(a,c,b){x(a,{sync:!!c,headers:{"X-Requested-With":null}}).then(b)}:n.getText?l=n.getText:console.error("dojo/text plugin failed to load because loader does not support getText");var d={},p=function(a){if(a){a=a.replace(/^\s*<\?xml(\s)+version=['"](\d)*.(\d)*['"](\s)*\?>/im,"");var c=a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);c&&(a=c[1])}else a="";return a},r={},m={};
v.cache=function(a,c,b){if("string"==typeof a)if(/\//.test(a)){var e=a;b=c}else e=n.toUrl(a.replace(/\./g,"/")+(c?"/"+c:""));else e=a+"",b=c;a=void 0!=b&&"string"!=typeof b?b.value:b;b=b&&b.sanitize;if("string"==typeof a)return d[e]=a,b?p(a):a;if(null===a)return delete d[e],null;e in d||l(e,!0,function(g){d[e]=g});return b?p(d[e]):d[e]};return{dynamic:!0,normalize:function(a,c){a=a.split("!");var b=a[0];return(/^\./.test(b)?c(b):b)+(a[1]?"!"+a[1]:"")},load:function(a,c,b){a=a.split("!");var e=1<a.length,
g=a[0],f=c.toUrl(a[0]);a="url:"+f;var h=r,q=function(k){b(e?p(k):k)};g in d?h=d[g]:c.cache&&a in c.cache?h=c.cache[a]:f in d&&(h=d[f]);if(h===r)if(m[f])m[f].push(q);else{var t=m[f]=[q];l(f,!c.async,function(k){d[g]=d[f]=k;for(var u=0;u<t.length;)t[u++](k);delete m[f]})}else q(h)}}});