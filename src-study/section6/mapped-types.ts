export {};
// 55. Mapped Types

type Profile = {
  name: string;
  age: number;
}

type PartialProfile = Partial<Profile>;
// F12で定義を見ると
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
// keyofでT型に存在する全てのプロパを文字列リテラルで取得。T[P]はnameならstringが返ってくる。
type PropertyTypes = keyof Profile;
// keyofキーワードで採ってくることができるのを知る。

// 自分で作ってみる
type Optionalll<T> = { [P in keyof T]?: T[P] | null};
type OptionalTypes = Optionalll<Profile>;