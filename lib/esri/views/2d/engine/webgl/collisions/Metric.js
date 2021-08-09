// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["../../../../../core/Logger","../definitions","../../../../../chunks/vec2f32","./BoundingBox","../util/serializationUtils"],function(n,g,p,l,m){const q=n.getLogger("esri/views/2d/engine/webgl/collisions/Metric");return function(){function h(a,b,c,d,f){this.id=a;this.range=b;this.boxes=null;this.minZoom=-1;this.placementPadding=this.offsetY=this.offsetX=this.directionY=this.directionX=this.size=0;this.anchor=p.fromValues(c,d);this.baseZoom=f}var e=h.prototype;e.add=function(a,b,c){a.x+=b;a.y+=
c;this.bounds?(this.boxes?this.boxes.push(a):(this.boxes=[this.bounds,a],this.bounds=this.bounds.clone()),this.bounds.extend(a)):this.bounds=a};e.computeIndex=function(){var a=Math.floor(this.anchor[1]/g.COLLISION_BUCKET_SIZE);this.xBucket=Math.floor(this.anchor[0]/g.COLLISION_BUCKET_SIZE);this.yBucket=a;a=g.TILE_SIZE/g.COLLISION_BUCKET_SIZE;this.hasVV?this.yOverflow=this.xOverflow=a:(this.xOverflow=Math.min(a,Math.ceil(2*this.bounds.width/g.COLLISION_BUCKET_SIZE)),this.yOverflow=Math.min(a,Math.ceil(2*
this.bounds.height/g.COLLISION_BUCKET_SIZE)))};e.findCollisionDelta=function(a){const b=this.bounds.findCollisionDelta(a.bounds),c=this.boxes&&this.boxes.length,d=a.boxes&&a.boxes.length;return Math.abs(b)>g.COLLISION_MAX_ZOOM_DELTA||!c&&!d?b:c&&d?this._boxesToBoxes(a):c?this._boxesToBox(a):this._boxToBoxes(a)};e.computeVVOffset=function(a,b){b||q.error("mapview-labeling",`Unable to compute label offset. Expected an evaluator function but found ${b}`);let c=this.size;this.hasVV&&(a=b(a),c=isNaN(a)||
null==a||Infinity===a?this.size:a);this._computeOffset(c)};e.setPlacementOffset=function(a,b,c,d,f){this.hasVV=a;this.size=b;this.placementPadding=Math.round(c);this.directionX=d;this.directionY=f};e.clone=function(){const a=new h(this.id,this.range,this.anchor[0],this.anchor[1],this.baseZoom);a.minZoom=this.minZoom;this.bounds&&(a.bounds=this.bounds.clone());this.boxes&&(a.boxes=this.boxes.map(b=>b.clone()));a.xBucket=this.xBucket;a.yBucket=this.yBucket;a.xOverflow=this.xOverflow;a.yOverflow=this.yOverflow;
a.hasVV=this.hasVV;a.size=this.size;a.directionX=this.directionX;a.directionY=this.directionY;a.offsetX=this.offsetX;a.offsetY=this.offsetY;return a};e._boxToBoxes=function(a){let b=-Infinity;for(const c of a.boxes)a=this.bounds.findCollisionDelta(c),b=Math.max(a,b);return b};e._boxesToBox=function(a){let b=this.boxes[0].findCollisionDelta(a.bounds);for(let c=1;c<this.boxes.length;c++){const d=this.boxes[c].findCollisionDelta(a.bounds);b=Math.max(d,b)}return b};e._boxesToBoxes=function(a){let b=-Infinity;
for(let c=0;c<this.boxes.length;c++){const d=this.boxes[c];for(const f of a.boxes){const k=d.findCollisionDelta(f);b=Math.max(k,b)}}return b};e._computeOffset=function(a){this.offsetX=this.directionX*(a/2+this.placementPadding);this.offsetY=this.directionY*(a/2+this.placementPadding)};e.serialize=function(a){a.push(this.id);this.bounds.serialize(a);a.push(this.range.from);a.push(this.range.count);a.push(this.anchor[0]);a.push(this.anchor[1]);a.push(this.baseZoom);a.push(this.hasVV?1:0);a.push(this.size);
a.writeF32(this.directionX);a.writeF32(this.directionY);a.push(this.offsetX);a.push(this.offsetY);a.push(this.placementPadding);m.serializeList(a,this.boxes);return a};h.deserialize=function(a){var b=a.readInt32();const c=l.deserialize(a);var d=a.readInt32(),f=a.readInt32();const k={from:d,count:f},r=a.readInt32(),t=a.readInt32(),u=a.readInt32();d=a.readInt32();f=a.readInt32();const v=a.readF32(),w=a.readF32(),x=a.readInt32(),y=a.readInt32(),z=a.readInt32();a=m.deserializeList(a,l);b=new h(b,k,r,
t,u);b.bounds=c;b.boxes=a;b.setPlacementOffset(!!d,f,z,v,w);b.offsetX=x;b.offsetY=y;b.computeIndex();d||b._computeOffset(f);return b};return h}()});