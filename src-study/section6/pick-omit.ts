export {};
// 60. Pick と Omit

type DetailedProfile = {
  name: string,
  height: number;
  weight: number;
}

// Pick<T,K>は既に存在するT型の中からKで選択した一部のプロパティのみを含んだ新たな型を構築します。
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>; // heightがなくなる。最後に|''をつけると補完でheightが出る!
const aaa: SimpleProfile = {name: 'ham', weight: 70};
//type SimpleProfile2 = Pick<DetailedProfile, 'name' | 'weight' | 'noProp'>; // 型 '"noProp"' を型 'keyof DetailedProfie' に割り当てることはできません。ts(2344)

// Omit<T,K>は既に存在するT型の中からKで選択した一部のプロパティを除いた新たな型を構築します。
type SmallProfile = Omit<DetailedProfile, 'height'>;
const bbb: SmallProfile = {name: 'hamm', weight:70};
