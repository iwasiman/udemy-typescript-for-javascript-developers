export{};
// やらないと、ブロックスコープの変数nameを再宣言することはできませんとなる。グローバル名前空間で既に使っているため。

let isFinished: boolean = true;
//isFinished = 1; //ts-node-dev, VSCode両方で検知してエラーを出してくれる
isFinished = false;
let name = 'TypeScript';
console.log({isFinished}, {name});