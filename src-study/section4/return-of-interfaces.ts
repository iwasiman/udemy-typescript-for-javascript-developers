export {};
// 46. インターフェース・リターンズ

class Magician {}

class Priest {}

// TSも多重継承は不可。
//class Taro extends Magician, Priest {}
// インターフェースなら複数継承のようなこと(インプリメンツ)ができる。
interface Sage {
  // これらがシグネチャー
  kantei(): void;
}
interface Fighter {
  attack(): void;
}
// なろうでお馴染み転生者!
interface Reincarnated {
  cheatPower(): void;
}

// クラス 'Jiro' はインターフェイス 'Fighter' を正しく実装していません。
//  プロパティ 'attack' は型 'Jiro' にありませんが、型 'Fighter' では必須です。ts(2420)
//class Jiro extends Magician implements Sage, Fighter {}
class Hero extends Magician implements Sage, Fighter {
  kantei(): void {

  }
  attack(): void {

  }

  cheatPower(): void {
    console.log("転生したらTSだった件");
  }
}

let hero = new Hero();
console.log(hero, hero.cheatPower());



