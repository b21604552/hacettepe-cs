let vertexLocation;
let colorLocation;
let gl;
const radian = Math.PI / 180;
const squareCorners = [
    [-0.6, 0.05, -0.3, -0.05, -0.6, -0.0, -0.3, -0.10],
    [0.6, 0.05, 0.3, -0.05, 0.6, -0.0, 0.3, -0.10],
    [-0.30, -0.45, -0.35, -0.4890, -0.30, -0.40, -0.40, -0.45],
    [0.30, -0.45, 0.35, -0.4890, 0.30, -0.40, 0.40, -0.45]];
const square = [-0.30, -0.05, 0.30, -0.05, -0.30, -0.45, 0.30, -0.45];
const curves = {
    top: {
        p0: {x:-0.3,y:-0.05},
        p1: {x:0.0,y:0.15},
        p2: {x:0.3,y:-0.05},
    },
    bottom: {
        p0: {x:-0.3,y:-0.45},
        p1: {x:0.0,y:-0.55},
        p2: {x:0.3,y:-0.45},
    }
}