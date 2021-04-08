export {};
//34. デフォルトパラメータを設定しよう

// 関数の引数のところにJSと同じ文法で書く。
// const nextSalary: と型アノテーションも書くときは、下のように?を書き、関数本体の宣言の引数には書かない。
// 両方に書くとエラーになる。

const nextYearSalary:(currentSalary: number, rate?: number) => number = (
  currentSalary: number,
  rate: number = 1.1
): number => {
  return currentSalary * rate;
}

// 講師のはむさんは年収1000万!(想像)
console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));