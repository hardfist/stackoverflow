type a = string;
type b = number;
declare let x: a;
declare let y : b;
declare let t: a;
x = t;
x = y;

type Obj1 = {
  f1: a
}
type Obj2 = {
  f1: b
}
type Obj3 = {
  f1: a
}
declare let obj1: Obj1;
declare let obj2: Obj2;
declare let obj3 : Obj3;
obj1 = obj2;
obj1 = obj3;
export default undefined;