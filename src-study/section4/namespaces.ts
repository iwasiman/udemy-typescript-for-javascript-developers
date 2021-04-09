export {};
// namespaceによる名前空間

// class Person {
//  constructor(public name: string) {}
// }

// namespaceの中に囲うのでネストが増える。ここもC#と同じ。内側の名前空間、クラスはpublicでなくexportと指定。
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }

  }
}

//const me = new Person('haam');
// 名前空間を省略する記法はないのかな?
const me = new Japanese.Tokyo.Person('haam');
console.log(me);
const me2 = new Japanese.Osaka.Person('はむやん');
console.log(me2);

// 識別子 'Person' が重複しています。ts(2300)
// class Person {
//   constructor(
//     public firstName: string,
//     public middleName: string,
//     public lastName: string
//   ) {}
// }

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);