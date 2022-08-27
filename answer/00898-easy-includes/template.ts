type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
/**
 * 1. U extends T[number] ? true : false
 *  错误： 1.1 { a: 'A' } extends {} 时也为true，测试用例不过
 *
 */
/** 递归 */
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? MyEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

/**
 * 常规实现方案
 * @param T
 * @param U
 * @returns
 */
function include(T: any[], U: any) {
  for (let i = 0; i < T.length; i++) {
    const t = T[i];
    if (t === U) {
      return true;
    }
  }
  return false;
}

/**
 * 递归版
 */
function include2(T: any[], U: any): Boolean {
  function _(T: any[], U: any): Boolean {
    let [first, ...rest] = T;
    if (first === U) {
      return true;
    } else {
      return include2(rest, U);
    }
  }
  return _(T, U);
}
