export {};
// 52. インデックスシグネチャ

// これからいろいろ突っ込んでいく型
let profiles: {} = {};
// プロパティ 'name' は型 '{}' に存在しません。ts(2339
//profiles.name = 'aaa';

// { [ index: typeforIndex ]: typeForValue }
let profile2: { [index: string]: string|number} = {};
profile2.name1 = 'aaa'; // 幾らでも追加できる!
profile2.name2 = 'bbb';
profile2.age1 = 123;
profile2.age2 = 456;

// もっと短くする
// 必須キーとしてisUnder12を別プロパティとして定義したら、index: の行でもtypeForValueに追加する必要あり。
interface Profile {
  isUnder12: boolean;
  [index: string]: string | number|boolean;
}
let profile3: Profile = {name: 'ham', isUnder12: false};
profile3.name1 = 'abc';
profile3.age1 = 0;

