// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["../../../../../core/SetPool","./Tile","../../../../../layers/graphics/data/FeatureStore"],function(h,m,p){const g=[],l=new Set;return function(){function n(){this._tileById=new Map;this._tilesToFeatures=new Map;this._featureToTiles=new Map}var f=n.prototype;f.destroy=function(){this.clear()};f.add=function(a){this.has(a.id)||(this._tileById.set(a.id,a),this._tilesToFeatures.set(a,h.acquire()),this._tilesToFeatures.forEach((b,d)=>{a!==d&&(m.isParentOf(a,d)?b.forEach(c=>{this._link(a,c)}):
m.isChildOf(a,d)&&this.featureStore.forEachInBounds(a.bounds,c=>{b.has(c.objectId)&&this._link(a,c.objectId)}))}))};f.clear=function(){this._tilesToFeatures.forEach(a=>h.release(a));this._tilesToFeatures.clear();this._featureToTiles.forEach(a=>h.release(a));this._featureToTiles.clear();this._tileById.clear()};f.delete=function(a){const b=this.get(a.id);g.length=0;this._tilesToFeatures.get(b).forEach(d=>{const c=this._featureToTiles.get(d);c.has(b)&&1===c.size?g.push(d):this._unlink(b,d)});for(const d of g)this._unlink(b,
d);this.featureStore.removeManyById(g);this._tilesToFeatures.delete(b);this._tileById.delete(b.id);g.length=0};f.forEach=function(a,b){return this._tileById.forEach(a,b)};f.get=function(a){return this._tileById.get(a)};f.has=function(a){return this._tileById.has(a)};f.setTileFeatures=function(a,b){const d=this.get(a.id);this._tilesToFeatures.has(d)||(this._tileById.set(d.id,d),this._tilesToFeatures.set(d,h.acquire()));for(const c of b)l.add(c.objectId);g.length=0;this._tilesToFeatures.get(d).forEach(c=>
{if(!l.has(c)){const e=this._featureToTiles.get(c);e.has(d)&&1===e.size?g.push(c):this._unlink(d,c)}});for(const c of g)this._unlink(d,c);this.featureStore.removeManyById(g);this.featureStore.addMany(b);l.forEach(c=>{this._link(d,c)});l.clear();g.length=0};f.addOrUpdateFeatures=function(a){const b=new Set,d=new p({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ});for(const e of this.deleteFeaturesById(a.map(k=>k.objectId)))b.add(e);d.addMany(a);
this._tileById.forEach(e=>{d.forEachInBounds(e.bounds,k=>{this._link(e,k.objectId);b.add(e)})});this.featureStore.addMany(a);const c=[];b.forEach(e=>c.push(e));return c};f.deleteFeaturesById=function(a){const b=new Set;for(const c of a){const e=this._featureToTiles.get(c);e&&(e.forEach(k=>{b.add(k);this._tilesToFeatures.get(k).delete(c)}),h.release(e),this._featureToTiles.delete(c))}this.featureStore.removeManyById(a);const d=[];b.forEach(c=>d.push(c));return d};f._link=function(a,b){this._featureToTiles.get(b)||
this._featureToTiles.set(b,h.acquire());this._featureToTiles.get(b).add(a);this._tilesToFeatures.get(a).add(b)};f._unlink=function(a,b){this._featureToTiles.get(b).delete(a);this._tilesToFeatures.get(a).delete(b);0===this._featureToTiles.get(b).size&&(h.release(this._featureToTiles.get(b)),this._featureToTiles.delete(b))};return n}()});