// 19. null型とundefined型

export {};

let absense = null; // これでは型推論はany型
let absense2: null = null; // null型になる
//absense2 = "hello"; // エラーにしてくれる

let undef = undefined; // any型
let undef2: undefined = undefined; // undefined型
//undef2 = 'oyaoya'; // エラーにしてくれる


