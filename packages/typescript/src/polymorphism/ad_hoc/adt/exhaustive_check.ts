interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}
interface Rectangle {
    kind: 'rectangle',
    width: number;
    height: number;
}
type Shape = Circle | Square | Rectangle;

//cut
// 在开了noimplicitReturn:true情况下，会提示我们Not all code paths return a value.ts(7030)
export function getArea(shape: Shape): number { 

    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
//cut
function getArea2(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        /*
        case 'rectangle':
            return shape.height * shape.width;
        */
        default:
            return assertNever(shape); // 这里会type error,提示我们rectangle无法赋值给never
    }
}