// 19. void型
export {};

function returnNothing() {
  console.log("なんもかえさない");
}
console.log(returnNothing()); // 標準出力に undefined も出る。

function returnNothingUndef(): undefined {
  console.log("なんもかえさない");
  //return;
  return undefined; //これでエラーは一応消える
}


function returnNothing2(): void {
  console.log("なんもかえさない2");
}
console.log(returnNothing2()); // 
