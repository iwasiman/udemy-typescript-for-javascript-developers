export {};

let numbers: number[] = [1 ,2, 3]; // ブラケットで囲う
let numbers2: Array<number> = [1, 2]; // 非推奨 <>でジェネリクス
let strings2: Array<string> = ['Tokyo', 'Kyoto'];

console.log(numbers, numbers2, strings2);

let twoDimsArray = [
    [1, 2],
    [100, 200]
]; //これでも型推論してくれる
console.log(twoDimsArray);

let mixArray = [1, false, 'IroIro']; // 型推論してくれる!
let mixArray2: (string | number | boolean)[] = [1, false, 'IroIro']; // 型推論してくれる! union型 共用型
console.log(mixArray, mixArray2);