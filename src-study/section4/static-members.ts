export {};
// 42. 静的メンバを定義しよう

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Hamshi';
  static lastName: string = 'Hamda';

  work() {
    //return "TS興味ある? ダイブするぴょい";
    // 動画では${this.lastName}を紹介。でもこれはその後の仕様でできなくなってるようだ。
    return `ぼくちん ${Me.firstName} ${Me.lastName}! TS興味ある? ダイブするぴょい`;
  }
  static staticWork() {
    return "クラスなしから呼べるぴょい";
  }
}

let me = new Me();
console.log(me); // staticなメンバはここで出ない。Me {} だけ
//console.log(me.isProgrammer); // プロパティ 'isProgrammer' は型 'Me' には存在しません。代わりに静的メンバー 'Me.isProgrammer' にアクセスしようとしていましたか?ts(2576)
console.log(Me.isProgrammer); // C#のルールと同じ。定数はenumよりこっち推奨なのかな?
console.log(me.work());
//console.log(me.staticWork()); // プロパティ 'staticWork' は型 'Me' には存在しません。代わりに静的メンバー 'Me.staticWork' にアクセスしようとしていましたか?ts(2576)
console.log(Me.staticWork());