// 20. never型
export {};

// 戻り値を返さない関数
function error(message: string): never {
  throw new Error(message);
}

try {
  let funcResult = error('ぴょい');
  console.log("funcResult:", funcResult);
} catch(e) {
  console.log(e);
}

let foo: void = undefined; // void型に含まれる
//let bar: never = undefined; //値という概念がないのでエラー
//let bar2: never = null; // これもエラー
let bar3: never = error('いけるよ'); // これは成立。

// void型: 呼び出し側に戻り値が返る。何もないを返す。その型がない。
// never型：never return なので戻ってこない。

