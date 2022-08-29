// 重点，链式调用的规则
// 1. option 肯定是返回当前对象的，所以肯定是返回 Chainable
// 2. 不能直接在这用typeof
// 3. 使用循环的时候，记得要用 in ，不一定要带keyof，看情况使用keyof
// type Chainable<T = {}> = {
//   option<K extends string, V extends any>(key: K, value: V): Chainable<T & { [k in K]: V }>
//   get(): T
// }

type Chainable<T = {}> = {
  option: <U extends string ,K extends any>(key :U  , value:K )=>Chainable<Omit<T,U> & Record<U,K>>
  get(): T
}