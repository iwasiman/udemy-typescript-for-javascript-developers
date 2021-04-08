export {};
// 40. getterとsetter

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる。
//   * 参照できない



class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 以下がgetter
  get owner() {
    return this._owner;
  }
  // 以下がsetter
  set secretNumber(number: number) {
    this._secretNumber = number;
  }

  debugPrint() {
    return `owner::: ${this._owner}  secret::: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさんさん', 12345);
console.log(card);
//card.owner; // プライベートなのでアクセス不可
console.log(card.owner); // getのアクセサなので()はつけない。
//card.owner = 'aaa'; // 読み取り専用プロパティであるため、代入できません
//card.secretNumber; // プライベートなのでアクセスできない。
card.secretNumber = 67890; // ()は付けずにプロパティであるかのようにアクセス。
console.log(card.secretNumber); // setterを呼ぶと結果はundefined。面白い。
console.log(card); //これは全部出力。
console.log(card.debugPrint()); // これも全部出力。


