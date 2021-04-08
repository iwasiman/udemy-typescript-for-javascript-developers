// 22. 型エイリアス(Type Aliases)
export {};

type Mojiretsu = string; // エイリアスの先頭は大文字
const aisatu: Mojiretsu = 'Hello'; // 型指定時にヒントも出してくれる
//const aisatu2: Mojiretsu = 1; // エラーにしてくれる

const exp1: {key1: Mojiretsu, key2: Mojiretsu} = {key1: 'aaa', key2: 'bbb'};

type Profile = {
  name: Mojiretsu,
  age: number,
}
const prof1: Profile = {name: 'aaa', age: 10};
//const prof2: Profile = {name: 'aaa', age: 'one'};// エラーにしてくれる

type Profile2 = typeof prof1; //変数からリバースエンジニアリングできる!