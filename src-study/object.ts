// 21. object型
export {};

let profile1: object = {name: 'ham'};
profile1 = {birthYaer: 1976}; //通ってしまう。

let profile2: {} = {name: 'hamm'}; // これだけだと同じ

let profile3: {name: string;} = {name: 'hamm'}; // オブジェクト内のプロパティの方も指定できる!
//profile3.birtyYear = 9999; // プロパティが存在してないよエラーを出してくれる
profile3.name = 'ooo'; // ドット入力でプロパティを候補として出してくれる!