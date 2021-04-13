export {};
// 56. Readonly

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'ham',
  age: 43
};
me.age++;
console.log(me); // age:44 になる

type PersonalDataType = Readonly<Profile>;
// 定義を見ると
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

const friend: PersonalDataType = {
  name: 'Shigeru',
  age:40
};

//friend.age++; // 読み取り専用プロパティであるため、'age' に代入することはできません。ts(2540)
