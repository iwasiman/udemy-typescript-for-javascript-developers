export {};
// 26.交差型(intersection)

type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};

// 大魔神ササキ選手。講師のはむさんは野球好きのようだ。
const DaimajinSasaki: Pitcher1 = {throwingSpeed: 154};
const ochiaiHiromitsu: Batter1 = {
  //throwingSpeed: 1, // コンパイルエラーになる。
  battingAverage: 0.367
};

// 愚直に2WAYプレイヤーを定義。
type TwowayPlayer = {
  throwingSpeed: number;
  battingAverage: number;
};

// TSではクールにこう定義できる。オブジェクトにキーをどんどん追加できる。&&でなく&。
type CoolTwowayPlayer = Pitcher1 & Batter1;
const OtaniShohei: CoolTwowayPlayer = {
  throwingSpeed: 1,
  battingAverage: 2,
};
