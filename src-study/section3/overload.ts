export {};
// 36. オーバーロードをやってみよう

// 関数のシグネチャー。本体の前に書く。DBのスキーマ定義みたいなもの。
function double(value: number): number;
function double(value: string): string;

// 関数本体はany型で定義。
function double(value: any): any {
  console.log("typeof: " + typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    //return value + value; // 動画と違ってNaNになる
    //return value + " " + value; // 正常
    return String(value) + String(value); // 正常
  }
  // 引数で弾けるので、else節がいらなくなる
  return value * 2;
}
console.log(double(101));
console.log(double('Go, TS!'));
