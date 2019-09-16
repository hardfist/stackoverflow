export function dist1(p:{x:number,y:number}){
  return p.x+p.y
}
export function dist2(p:{x:number,y:number,z:number}){
  return p.x + p.y + p.z
}
let f: typeof dist1 = dist2;
let g: typeof dist2 = dist1;
console.log(g({x:1,y:2,z:3}));
console.log(f({x:1,y:2}))
