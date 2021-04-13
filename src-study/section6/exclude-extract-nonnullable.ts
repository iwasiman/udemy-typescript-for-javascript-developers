export {};
// 58. Exclude と Extract と NonNullable について

// Exclude<T, U> はT型のプロパティでU型に代入可能なプロパティを取り除いた型を構築します。
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>; // 関数だけが残る
type NonFunctionType = Exclude<SomeTypes, DebugType>; // string|numberが残る
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // string|numberが残る

// Extract<T,U>はExclude<T,U>とは反対でT型のプロパティでU型に代入可能なプロパティのみを残した型を構築します。
type FunctTypeByExtract = Extract<SomeTypes, DebugType>; // 関数が残る
type NonFuncTypeByExtract = Extract<SomeTypes, string|number>; // string|numberが残る

// NonNullable<T>はTからnullとundefinedを取り除いた型を構築します。
type　NullableTypes = string | number | null | undefined;
type NonNulalbpeTypes = NonNullable<NullableTypes>; // string|numberが残る
