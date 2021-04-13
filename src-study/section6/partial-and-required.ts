export {};
// 54. Partial と Required

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// nameもageも任意。あまり便利でない。
type Profile2 = {
  name?: string;
  age?: number;
  zipCode: number;
};

// 上のProfile2と同じことになる
type PartialType = Partial<Profile>;
// ?でオプショナルなプロパティも必須に変わる。
type RequiredType = Required<Profile>;
