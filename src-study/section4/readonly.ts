export {};
// 41. readonly修飾子

// クラスのプロパティを読み取り専用にする

class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('hamham');
//myVisaCard.owner = 'change'; // 読み取り専用プロパティであるため、'owner' に代入することはできません。ts(2540)

class Visa2 {
  constructor(public readonly owner: string) {}
}

let myVisa2 = new Visa2('hamm');
//myVisa2.owner = 'changed!';  // 読み取り専用プロパティであるため、'owner' に代入することはできません。ts(2540)

// コンストラクタのアクセス修飾子publicは、readonlyを書いている時のみ省略可能なルール。
// でも範囲が狭い、良く知らない人が見て自明でない、あとでreadonlyを外したときにすぐコンパイルエラー。
// なので明示的にpublicを書くのがはむさんの推奨。