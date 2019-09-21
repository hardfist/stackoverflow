// @flow
interface MyInterface {
  +covariant: number;     // read-only
  -contravariant: number; // write-only
  bivariant: number;
}

function method(value: MyInterface) {
  value.covariant = 10;
  const a = value.contravariant;
  const b = value.bivariant;
  value.bivariant = 100;
}

const a = {
  bivariant: 0,
  covariant: 1,
  contravariant: 10
}
method(a)