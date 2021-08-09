//>>built
define("dojox/main dojo/_base/lang dojo/_base/array dojo/date dojo/i18n dojo/regexp dojo/string ./Date ./numerals dojo/i18n!dojo/cldr/nls/hebrew".split(" "),function(C,x,r,H,v,D,E,y,w){function F(a,b,e,k,l){return l.replace(/([a-z])\1*/ig,function(f){var c=f.charAt(0);f=f.length;var h=["abbr","wide","narrow"];switch(c){case "G":var d=b[4>f?"eraAbbr":"eraNames"][0];break;case "y":d=e.match(/^he(?:-.+)?$/)?w.getYearHebrewLetters(a.getFullYear()):String(a.getFullYear());break;case "M":d=a.getMonth();
if(3>f)if(!a.isLeapYear(a.getFullYear())&&5<d&&d--,e.match(/^he(?:-.+)?$/))d=w.getMonthHebrewLetters(d);else{d+=1;var n=!0}else d=m.getNames("months",h[f-3],"format",e,a)[d];break;case "d":e.match(/^he(?:-.+)?$/)?d=a.getDateLocalized(e):(d=a.getDate(),n=!0);break;case "E":d=a.getDay();3>f?(d+=1,n=!0):(c=["days-format",h[f-3]].join("-"),d=b[c][d]);break;case "a":d=12>a.getHours()?"am":"pm";d=b["dayPeriods-format-wide-"+d];break;case "h":case "H":case "K":case "k":n=a.getHours();switch(c){case "h":d=
n%12||12;break;case "H":d=n;break;case "K":d=n%12;break;case "k":d=n||24}n=!0;break;case "m":d=a.getMinutes();n=!0;break;case "s":d=a.getSeconds();n=!0;break;case "S":d=Math.round(a.getMilliseconds()*Math.pow(10,f-3));n=!0;break;case "z":d="";break;default:throw Error("dojox.date.hebrew.locale.formatPattern: invalid pattern char: "+l);}n&&(d=E.pad(d,f));return d})}function z(a,b,e,k){var l=function(h){return h};b=b||l;e=e||l;k=k||l;var f=a.match(/(''|[^'])+/g),c="'"==a.charAt(0);r.forEach(f,function(h,
d){h?(f[d]=(c?e:b)(h),c=!c):f[d]=""});return k(f.join(""))}function G(a,b,e,k){k=D.escapeString(k);var l=v.normalizeLocale(e.locale);return k.replace(/([a-z])\1*/ig,function(f){var c=f.charAt(0);var h=f.length,d="";e.strict?1<h&&(d="0{"+(h-1)+"}"):d="0?";switch(c){case "y":c="\\S+";break;case "M":c=l.match("^he(?:-.+)?$")?2<h?"\\S+ ?\\S+":"\\S{1,4}":2<h?"\\S+ ?\\S+":d+"[1-9]|1[0-3]";break;case "d":c=l.match("^he(?:-.+)?$")?"\\S['\"'\u05f3]{1,2}\\S?":"[12]\\d|"+d+"[1-9]|30";break;case "E":c=l.match("^he(?:-.+)?$")?
3<h?"\\S+ ?\\S+":"\\S":"\\S+";break;case "h":c=d+"[1-9]|1[0-2]";break;case "k":c=d+"\\d|1[01]";break;case "H":c=d+"\\d|1\\d|2[0-3]";break;case "K":c=d+"[1-9]|1\\d|2[0-4]";break;case "m":case "s":c=d+"\\d|[0-5]\\d";break;case "S":c="\\d{"+h+"}";break;case "a":h=e.am||b["dayPeriods-format-wide-am"];d=e.pm||b["dayPeriods-format-wide-pm"];e.strict?c=h+"|"+d:(c=h+"|"+d,h!=h.toLowerCase()&&(c+="|"+h.toLowerCase()),d!=d.toLowerCase()&&(c+="|"+d.toLowerCase()));break;default:c=".*"}a&&a.push(f);return"("+
c+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var m=x.getObject("date.hebrew.locale",!0,C);v.getLocalization("dojo.cldr","hebrew");m.format=function(a,b){b=b||{};var e=v.normalizeLocale(b.locale),k=b.formatLength||"short",l=m._getHebrewBundle(e),f=[],c=x.hitch(this,F,a,l,e,b.fullYear);if("year"==b.selector)return f=a.getFullYear(),e.match(/^he(?:-.+)?$/)?w.getYearHebrewLetters(f):f;"time"!=b.selector&&(e=b.datePattern||l["dateFormat-"+k])&&f.push(z(e,c));"date"!=b.selector&&(b=b.timePattern||l["timeFormat-"+
k])&&f.push(z(b,c));return f.join(" ")};m.regexp=function(a){return m._parseInfo(a).regexp};m._parseInfo=function(a){a=a||{};var b=v.normalizeLocale(a.locale);b=m._getHebrewBundle(b);var e=a.formatLength||"short",k=a.datePattern||b["dateFormat-"+e];e=a.timePattern||b["timeFormat-"+e];var l=[];return{regexp:z("date"==a.selector?k:"time"==a.selector?e:void 0===e?k:k+" "+e,x.hitch(this,G,l,b,a)),tokens:l,bundle:b}};m.parse=function(a,b){a=a.replace(/[\u200E\u200F\u202A-\u202E]/g,"");b||(b={});var e=
m._parseInfo(b),k=e.tokens,l=e.bundle;a=(new RegExp("^"+e.regexp+"$")).exec(a);var f=v.normalizeLocale(b.locale);if(!a)return null;var c=[5730,3,23,0,0,0,0],h="",d=0,n=["abbr","wide","narrow"];r.every(a,function(g,p){if(!p)return!0;var q=k[p-1];p=q.length;switch(q.charAt(0)){case "y":f.match(/^he(?:-.+)?$/)?c[0]=w.parseYearHebrewLetters(g):c[0]=Number(g);break;case "M":if(2<p){q=m.getNames("months",n[p-3],"format",f,new y(5769,1,1));var t=m.getNames("months",n[p-3],"format",f,new y(5768,1,1));b.strict||
(g=g.replace(".","").toLowerCase(),q=r.map(q,function(u){return u?u.replace(".","").toLowerCase():u}),t=r.map(t,function(u){return u?u.replace(".","").toLowerCase():u}));var A=g;g=r.indexOf(q,A);if(-1==g&&(g=r.indexOf(t,A),-1==g))return!1;d=p}else f.match(/^he(?:-.+)?$/)?g=w.parseMonthHebrewLetters(g):g--;c[1]=Number(g);break;case "D":c[1]=0;case "d":f.match(/^he(?:-.+)?$/)?c[2]=w.parseDayHebrewLetters(g):c[2]=Number(g);break;case "a":p=b.am||l["dayPeriods-format-wide-am"];q=b.pm||l["dayPeriods-format-wide-pm"];
b.strict||(t=/\./g,g=g.replace(t,"").toLowerCase(),p=p.replace(t,"").toLowerCase(),q=q.replace(t,"").toLowerCase());if(b.strict&&g!=p&&g!=q)return!1;h=g==q?"p":g==p?"a":"";break;case "K":24==g&&(g=0);case "h":case "H":case "k":c[3]=Number(g);break;case "m":c[4]=Number(g);break;case "s":c[5]=Number(g);break;case "S":c[6]=Number(g)}return!0});a=+c[3];"p"===h&&12>a?c[3]=a+12:"a"===h&&12==a&&(c[3]=0);a=new y(c[0],c[1],c[2],c[3],c[4],c[5],c[6]);3>d&&5<=c[1]&&!a.isLeapYear(a.getFullYear())&&a.setMonth(c[1]+
1);return a};var B=[];m.addCustomFormats=function(a,b){B.push({pkg:a,name:b})};m._getHebrewBundle=function(a){var b={};r.forEach(B,function(e){e=v.getLocalization(e.pkg,e.name,a);b=x.mixin(b,e)},this);return b};m.addCustomFormats("dojo.cldr","hebrew");m.getNames=function(a,b,e,k,l){k=m._getHebrewBundle(k);b=[a,e,b];if("standAlone"==e){e=b.join("-");var f=k[e];1==f[0]&&(f=void 0)}b[1]="format";e=(f||k[b.join("-")]).concat();"months"==a&&(l.isLeapYear(l.getFullYear())?(b.push("leap"),e[6]=k[b.join("-")]):
delete e[5]);return e};return m});