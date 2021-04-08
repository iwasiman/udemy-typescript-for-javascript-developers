export {};
// 35. Restパラメータを設定しよう

// MDMより拝借。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
}
// Restパラメーター：不特定多数の引数を配列として受け取る構文。
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
}
// Spread構文は関数呼び出し時に変数の中身を...で展開してくれるやつでちょっと別。

console.log(sum(1, 2, 3, 4, 5)); // 15が返ってくる。

[1, 2, 3, 4].reduce(reducer);