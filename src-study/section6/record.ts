export {};
// 57. Record

// Record<K, T>

type Prefectures = 'Tokyo'|'Chiba'|'Tottori';
// ここでコロナ感染者ネタ登場。タイムリー。
// 都道府県ごとの感染者数
type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan = {
  Tokyo: {kanji_name: 'Tokyo', confirmed_cases: 1960},
  Chiba: {kanji_name: 'Chiba', confirmed_cases: 15},
  Tottori: {kanji_name: 'Tottori', confirmed_cases: 19},
};

// 途中版。エラーになる。講座よりTSのバージョンが進んだから?
// const covid19JpAdvanced = {
//   Tokyo: Covid19InfectionInfo,
//   Chiba: Covid19InfectionInfo,
//   Tottori: Covid19InfectionInfo
// } = {
//   Tokyo: {kanji_name: 'Tokyo', confirmed_cases: 1960},
//   Chiba: {kanji_name: 'Chiba', confirmed_cases: 15},
//   Tottori: {kanji_name: 'Tottori', confirmed_cases: 19},
// };

// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
//Record型を使うとメンテナブルなデータが書ける。
const covid19New: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: {kanji_name: 'Tokyo', confirmed_cases: 1960},
  Chiba: {kanji_name: 'Chiba', confirmed_cases: 15},
  Tottori: {kanji_name: 'Tottori', confirmed_cases: 19},
};
