// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../support/buffer/InterleavedLayout","../../lib/Util","./bufferWriterUtils"],function(c,d,a,g){const h=d.newLayout().vec3f(a.VertexAttrConstants.POSITION),k=d.newLayout().vec3f(a.VertexAttrConstants.POSITION).vec2f(a.VertexAttrConstants.UV0),l=d.newLayout().vec3f(a.VertexAttrConstants.POSITION).vec4u8(a.VertexAttrConstants.COLOR),m=d.newLayout().vec3f(a.VertexAttrConstants.POSITION).vec4u8(a.VertexAttrConstants.COLOR).vec4f(a.VertexAttrConstants.UVMAPSPACE).vec3f(a.VertexAttrConstants.MEANVERTEXPOSITION);
d=d.newLayout().vec3f(a.VertexAttrConstants.POSITION).vec4u8(a.VertexAttrConstants.COLOR).vec4f(a.VertexAttrConstants.UVMAPSPACE).vec3f(a.VertexAttrConstants.BOUND1).vec3f(a.VertexAttrConstants.BOUND2).vec3f(a.VertexAttrConstants.BOUND3);let r=function(){function f(b){this.vertexBufferLayout=b}var e=f.prototype;e.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};e.elementCount=function(b){return b.indices[a.VertexAttrConstants.POSITION].length};e.write=function(b,n,p,q){g.writeDefaultAttributes(n,
this.vertexBufferLayout,b.transformation,b.invTranspTransformation,p,q)};return f}();c.DefaultBufferWriter=r;c.PositionColorLayout=l;c.PositionColorMapSpaceUVBoundsLayout=d;c.PositionColorMapSpaceUVLayout=m;c.PositionLayout=h;c.PositionUVLayout=k;Object.defineProperty(c,"__esModule",{value:!0})});