function RadiansToDegrees(radian :number) :number {
    let degree :number = radian * 180 / Math.PI;
    return degree;
};
let radians :number = RadiansToDegrees(10);
console.log(radians);