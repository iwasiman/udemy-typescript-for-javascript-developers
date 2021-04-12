export{};
// 51. Nullable Types

// 型 'null' を型 'number' に割り当てることはできません。ts(2322)
// tsconfig.json の strict:true をfalseに変えると通ってしまう。
// let profile: {name: string, age: number} = {
//   name: 'Ham',
//   age: null,
// }

// union型なら大丈夫。
let profile2: {name: string, age: number|null} = {
  name: 'Ham',
  age: null,
}