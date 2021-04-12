export {};
// constアサーション

let name = 'atsusus';
name = 'ham'; // 書き換わる

let nickName = 'Ham' as const; // 変数nickNameはHam型になる
//nickName = 'abc'; // 型 '"abc"' を型 '"Ham"' に割り当てることはできません。ts(2322)

let profile = {
  name: 'atsuzi',
  height: 123,
}
profile.name = 'ham';
profile.height = 190; // 再代入できる

let profile2 = {
  name: 'atsuzi',
  height: 123,
}　as const;
// 上の書き方ですべてのプロパティがreadonlyになる。ネストしたプロパティも全部!

//profile2.name = 'hammm'; // 読み取り専用プロパティであるため、'name' に代入することはできません。ts(2540)