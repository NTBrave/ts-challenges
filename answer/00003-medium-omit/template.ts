// 重点 和 2595 一起看
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as any extends P ? never : P extends K ? never : P]: T[P];
};
