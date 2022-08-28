// 同 0003 和 2595 一样
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [M in keyof T as M extends K ? never : M]: T[M];
} & {
  readonly [P in K]: T[P];
};