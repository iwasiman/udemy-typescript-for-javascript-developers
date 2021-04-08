export {};
// 33. オプショナルなパラメータを定義

// 型推論で出た表示をコピってlet bmi: の横に貼りつけると良い。
let bmi:(height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

let bmi2:(height: number, weight: number, pritable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  let result: number = weight / (height * height);
  if (printable) {
    console.log('bmi::: ' + result);
  }
  return result;
};
// 引数に？をつけるとundefined許可。呼び出し時に引数がなくてもエラーにならない。
bmi2(1.73, 60);
bmi2(1.73, 60, false);
bmi2(1.73, 60, true);