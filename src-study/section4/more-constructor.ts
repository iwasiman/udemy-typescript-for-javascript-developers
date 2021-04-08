export {};
// 39. constructorを使い倒す

class Person {
  //public name: string;
  //protected age: number;

  // コンストラクタ引数にアクセス修飾子をちゃんと書くと、メンバ変数の初期化処理を自動でやってくれる。TSの機能
  constructor(public name: string, protected age: number) {
    //this.name = name;
    //this.age = age;
  }

}

const me = new Person('はむさん', 43);
console.log(me);