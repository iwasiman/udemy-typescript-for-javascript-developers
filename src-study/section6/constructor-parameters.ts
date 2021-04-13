export {};
// 64. ConstoructorParameters

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 1);
console.log(taro);

// ConstructorParameters<T>はT型のコンストラクタの引数の型をタプルとして抽出した型を構築します。
type PersonType = typeof Person;
// type Profile = [name: string, age: number]
type Profile = ConstructorParameters<PersonType>;
const taro_clone: Profile = ['taro-clone', 0];
console.log(taro_clone);