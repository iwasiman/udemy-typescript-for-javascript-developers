export {}
// 抽象クラスと抽象メソッド

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'がおがお';
  }
}

// メソッド未実装だと 非抽象クラス 'Tiger' はクラス 'Animal' からの継承抽象メンバー 'cry' を実装しません。ts(2515)
// 実装し忘れを防げる。
class Tiger extends Animal {
  cry() {
    return 'しましま';
  }
}