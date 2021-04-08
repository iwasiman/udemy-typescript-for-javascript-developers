export {};
// 37. クラスを作ってみよう

class Person {
  name: string; // これがないと、this.nameと打った時点でエラー。JSと違う。
  age: number;
  
  // コンストラクタには戻り値がないのでアノテーションも不要。書くとTSの言語仕様でエラー
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('taro', 25);
let takanashi = new Person('takanashi', 25000);
console.log(taro);
console.log(takanashi);
console.log(taro.profile()); // コードヒントで出てくれる

