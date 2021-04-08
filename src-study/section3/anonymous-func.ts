export {};
// 31. 無名関数による関数定義

let bmi = function(height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86)); // 変数bmiにhoverすると、関数の型推論が効いている! 関数が型になっている。

// このように明確にアノテーションもできる。
let bmi2: (height: number, weight: number) => number = function(height: number, weight: number): number {
  return weight / (height * height);
};
console.log(bmi2(1.73, 60)); // 同じ
