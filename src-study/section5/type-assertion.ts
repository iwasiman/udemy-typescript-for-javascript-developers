export {};
// 49. 型アサーション

let name: any = 'ham';
let length = name.length; //数字型になる
length = 'foo'; // 代入できる

let lengthNum: number = name.length; // 型を明示的に指定
//lengthNum = 'foo'; // 型 'string' を型 'number' に割り当てることはできません。

let lengthNum2 = name.length as number; // これでもよい
//lengthNum2 = 'fo';
let lengthNum3 = (name as string).length
//lengthNum3 = 'fo';
let lengthNum4 = (<string>name).length;  // ReactのJSXと紛らわしいので、asの方を推奨。
// lengthNum4 = 'fo';