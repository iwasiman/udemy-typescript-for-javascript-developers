export {};
// 29.列挙型(enum型)

// 名前は複数形
// hoverすると番号も0から振られてる! 先頭の要素に番号を指定できる。
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

let jan: number = Months.January;
console.log(Months.January, Months.February, Months.December); // 0,1,11 か 1,2,12
// JSだとオブジェクトにキー:値で書いていくしかない。
//let janStr: string= Months.January; //これはエラー

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
}
console.log(COLORS.WHITE); // #FFFFFF
//console.log(COLORS.NEWCOLOR); // プロパティがないとエラーで弾ける。JSだと弾けない。

// 使う直前でプロパティを足すこともできる。再定義でなく追加になる。
enum COLORS {
  YELLOW = '#FFFF00',
}
console.log(COLORS.YELLOW);