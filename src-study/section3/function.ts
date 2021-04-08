export {};
// 30. functionキーワードによる関数定義

// 引数の型を指定しないと、暗黙的にany型になりますとコンパイルエラー
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86)); // 講師のはむさん BMI27.1
console.log(bmi(1.738, 60)); // ワイ BMI19.86