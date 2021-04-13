export {};
// 63. Parameters

const debugProfile = (name: string, age: number) => {
  console.log({name, age});
};
debugProfile('ham', 43);

// Parameters<T>は関数型Tの引数の型をタプル型として抽出した型を構築します。
type Profile = Parameters<typeof debugProfile>;
//const pro: Profile = ['Gloria', true]; // 型 'boolean' を型 'number' に割り当てることはできません。ts(2322)
const pro2: Profile = ['HamClone', 0];

debugProfile(...pro2); // 配列を展開して引数にわたしてくれる