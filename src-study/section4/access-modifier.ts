export {};
// 38. アクセス修飾子を使ってみよう

class Person {
  public name: string; // メンバ変数の定義がないと、this.nameと打った時点でエラー。ここはJSと違う。
  private age: number; // アクセス修飾子が書ける!
  protected nationality: string;
  
  // コンストラクタには戻り値がないのでアノテーションも不要。書くとTSの言語仕様でエラー
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
  protected privateProfile(): string {
    return '見ちゃダメ';
  }
}
// publicは書いても書かなくても同じ。ふつうは書かない。privateのみ書く。
// privateは派生クラスからも呼べない。
// protectedはオブジェクト内部＋派生クラスからもアクセス可能。

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // 親のコンストラクタが呼べる
  }

  profile(): string {
    // ここでthis.ageは呼べない。
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}




let taro = new Person('taro', 25, 'jp');
console.log(taro.name); // アクセスできるので出力できる。
//console.log(taro.age); // プライベートなのでエラー
console.log(taro.profile()); // メソッド内でプライベートな変数にアクセスするのはよい。
//taro.privateProfile(); // エラー
let taroRobo = new Android('robo', 1, 'future-jp');
console.log(taroRobo.profile());

