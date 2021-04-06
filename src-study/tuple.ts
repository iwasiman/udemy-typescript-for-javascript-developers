export {};
// 15. tuple型

let profile = ['Ham', 43];
profile = [43, 'hoge']; //順番はエラーにしてくれない

let profile2: [string, number] = ['hammm', 43];
//profile2 = [43, 'hoge']; // エラーにしてくれる。