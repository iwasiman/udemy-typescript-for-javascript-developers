export {};
// 25.unknown型
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown);
//let sumUnknown = numberUnknown + 10; //unknown型なので加算できないとコンパイルエラー。
// タイプガードを使う。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10; // 中身がnumber型なのが保証されているので、コンパイルを通る。
}

// 型が分からなかったらanyはやめ、暫定的にunknown型にしてからタイプガードして処理していくのが良い。
