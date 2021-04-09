export {};
// 44. 継承

class Animal {
  constructor(public name: string){}
  run(): string {
    return '走れるよ';
  }
}

let animal = new Animal('なんか');
console.log(animal, animal.run());

class Lion extends Animal {
  public speed: number;
  // コンストラクタなしだと動く。

  // パラメーター プロパティは、コンストラクターの実装でのみ指定できます。ts(2369)
  //constuctor(public name: string) {}

  // コンストラクタの再定義はsuperを呼ぶ。
  // ここで引数のpublic speed にしてメンバ変数定義のspeedはしないか、以下のようにpublicは外してメンバ変数を定義するか。
  // 明示的にメンバ変数書いた方が分かりやすそう。
  constructor(public name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return super.run() + ' 走ってがお～! 天才発明家だからIQはきっと' + this.speed + '以上!';
  }
}

// 説明にDRY原則が出てきてグッドである。
let lion = new Lion('ライオンのガオガオさん', 200); // (c) ベネッセ しまじろう
console.log(lion, lion.run());