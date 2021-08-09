//>>built
define(["dojo","../main"],function(h,p){h.getObject("math.stats",!0,p);var m=p.math.stats;h.mixin(m,{sd:function(a){return Math.sqrt(m.variance(a))},variance:function(a){var b=0,c=0;h.forEach(a,function(d){b+=d;c+=Math.pow(d,2)});return c/a.length-Math.pow(b/a.length,2)},bestFit:function(a,b,c){b=b||"x";c=c||"y";void 0!==a[0]&&"number"==typeof a[0]&&(a=h.map(a,function(u,v){return{x:v,y:u}}));for(var d=0,g=0,f=0,q=0,k=0,r=0,t=0,l=a.length,n,e=0;e<l;e++)d+=a[e][b],g+=a[e][c],f+=Math.pow(a[e][b],2),
q+=Math.pow(a[e][c],2),k+=a[e][b]*a[e][c];for(e=0;e<l;e++)n=a[e][b]-d/l,r+=n*n,t+=n*a[e][c];a=t/(r||1);f=Math.sqrt((f-Math.pow(d,2)/l)*(q-Math.pow(g,2)/l));if(0===f)throw Error("dojox.math.stats.bestFit: the denominator for Pearson's R is 0.");k=(k-d*g/l)/f;f=Math.pow(k,2);0>a&&(k=-k);return{slope:a,intercept:(g-d*a)/(l||1),r:k,r2:f}},forecast:function(a,b,c,d){a=m.bestFit(a,c,d);return a.slope*b+a.intercept},mean:function(a){var b=0;h.forEach(a,function(c){b+=c});return b/Math.max(a.length,1)},min:function(a){return Math.min.apply(null,
a)},max:function(a){return Math.max.apply(null,a)},median:function(a){var b=a.slice(0).sort(function(c,d){return c-d});return(b[Math.floor(a.length/2)]+b[Math.ceil(a.length/2)])/2},mode:function(a){var b={},c=0,d=Number.MIN_VALUE;h.forEach(a,function(f){void 0!==b[f]?b[f]++:b[f]=1});for(var g in b)d<b[g]&&(d=b[g],c=g);return c},sum:function(a){var b=0;h.forEach(a,function(c){b+=c});return b},approxLin:function(a,b){b*=a.length-1;var c=Math.ceil(b),d=c-1;return 0>d?a[0]:c>=a.length?a[a.length-1]:a[d]*
(c-b)+a[c]*(b-d)},summary:function(a,b){b||(a=a.slice(0),a.sort(function(c,d){return c-d}));b=m.approxLin;return{min:a[0],p25:b(a,.25),med:b(a,.5),p75:b(a,.75),max:a[a.length-1],p10:b(a,.1),p90:b(a,.9)}}});return p.math.stats});