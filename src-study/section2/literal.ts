export {};
// 28.Literal型
// 文字列、数値、真偽値の３つにある。enumみたいなことができる。

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '31'; // 曜日以外も入ってしまう。

let coolSundayOfTheWeek: '日' = '日';
//coolSundayOfTheWeek = '月'; // 日という型なので代入できない。

let coolDayOfTheWeek: 'sun'|'mon'|'tue'|'wed'|'thu'|'fri'|'sat';
coolDayOfTheWeek = 'sun';
//coolDayOfTheWeek = '31'; // 共用型で指定しているのでそれ以外の値はエラー!

let coolMonth: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
coolMonth = 12;
//coolMonth = 13; //弾ける!

let coolTrue: true; // true型。boolean型では２択なので使ってもあまり意味ない。
coolTrue = true; // OK
//coolTrue = false; // 弾ける!

