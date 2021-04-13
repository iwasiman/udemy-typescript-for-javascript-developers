export {};
// 61. ReturnType

function add(a: number, b: number) {
  return a + b;
}
console.log(add(100, 200));

// ReturnType<T>は関数型Tの戻り値の型を返します
type ReturnTypeFromAdd = ReturnType<typeof add>; // numberが入る