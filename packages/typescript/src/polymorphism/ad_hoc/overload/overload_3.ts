function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
let t = Math.random() > 0.5 ? "hello" : [0]
len(t); // 这里的t是string|number[]但是仍然check error

export default undefined;

function len2(x: any[] | string) {
  return x.length;
}
let t2 = Math.random() > 0.5 ? "hello" : [0]
len2(t2); // 没问题了