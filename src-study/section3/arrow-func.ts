export {};
// 32. アロー関数(ラムダ式)による関数定義

// 最初の=> はTSの型アノテーションの戻り値指定。次の=>はJSのアロー関数の記法
let bmi:(height: number, weight: number) => number = (height: number, weight: number): number => {
  return weight / (height * height);
}
console.log(bmi(1.735, 60));

// JSのアロー関数の記法で、関数本体の処理が1行の時は 処理を囲う{}とれreturn を省略した記法。
let bmi2:(height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
console.log(bmi2(1.734, 60));

