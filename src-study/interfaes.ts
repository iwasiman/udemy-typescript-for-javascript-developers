// 22. interfaces
export {};

type ObjectType = {
  name: string;
  age: number;
}
let obj: ObjectType = {name: 'aaa', age:10};

// インターフェースでもObject型の中を設定できる。詳細はクラスの所で。
interface ObjectInterface {
  name: string;
  age: number;
}

//let obj2: ObjectInterface = {name: false, age: 100}; // エラーを出してくれる

