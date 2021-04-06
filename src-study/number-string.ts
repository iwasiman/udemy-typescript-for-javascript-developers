export {};

let year: number = 1976;
//year = true; //エラー
console.log(year);

let age = 0x2b;
console.log(age);

let name = 'Ham'; // これで型推論してくれる
//name = 1; //型が違う
console.log(name);