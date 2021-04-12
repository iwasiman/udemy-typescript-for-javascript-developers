export {};
// ■■セクション５：高度な型について学ぼう 1h20m　0/6
// 47. 型の互換性

let fooCompa: any;
let barCompa: string = 'TypeScript';
console.log(typeof fooCompa); // undefined
fooCompa = barCompa; // エラー出ない
console.log(typeof fooCompa); // string に変わる

let fooInCompa: string;
let barInCompa: number = 1;
//fooInCompa = barInCompa; // 型 'number' を型 'string' に割り当てることはできません。ts(2322)

let fooString: string;
let barString: string = 'string!';
fooString = barString; // ok

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // ok

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral; // ok 

interface Animal {
  age: number;
}
interface NoAgeAnimal {
  //age: number;
}
interface AgeAndNameAnimal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number) {}
}

let me: Animal;
me = new Person(43); // 初期化が通る。AnimalとPersonは継承関係は関係ないが、代入できる型が同じだから。
let noAgeMe: NoAgeAnimal;
noAgeMe = new Person(1); // 通る

let ageAndNameMe: AgeAndNameAnimal;
//ageAndNameMe = new Person(1); // プロパティ 'name' は型 'Person' にありませんが、型 'AgeAndNameAnimal' では必須です。ts(2741

