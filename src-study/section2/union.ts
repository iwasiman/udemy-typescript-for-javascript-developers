export {};
// 共用体型(union型)
let value = 1;
//value = '文字列入れよう'; // 型推論でもうnumber型となってる

let value2: number | string = 1;
value2 = '文字列が入る!';
