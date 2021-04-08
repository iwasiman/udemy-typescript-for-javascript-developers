export {};
// 24.型安全

let isFinished: boolean = true;
//isFInished = 1; //JSだとエラーにならず再代入できてしまう。DevToolで書ける。
// これを事前にコンパイルエラーにしてくれるのが型安全。
