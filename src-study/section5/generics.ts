export {};
// 48. ジェネリクス

const echo = (arg: number): number => {
  return arg;
};
const echo2 = (arg: string): string => {
  return arg;
};
// これを１回で定義しよう


const genericEcho = <T>(arg: T): T => {
  return arg;
};
console.log(genericEcho<number>(123));
console.log(genericEcho<string>('むほほほほ'));
console.log(genericEcho<boolean>(false));

class Mirror {
  constructor(public value: number) {}
  echo(): number {
    return this.value;
  }
}
console.log(new Mirror(12345).echo());

class MirrorGen<T> {
  constructor(public value: T) {}; // ここは<>はいらない
  echo(): T {
    return this.value;
  }
}
console.log(new MirrorGen<number>(99999).echo());
console.log(new MirrorGen<string>('MirrorGenのインスタンス').echo());