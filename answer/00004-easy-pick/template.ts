/**
 * 1. 返回一个对象
 * 2. 遍历keys 获取 key
 *  - ts 用法 in , 文档关键词 Mapped Types
 *  - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
 * 3. 判断key是否在 obj 里面
 *  - ts 用法 extentds  文档关键词  indexed
 *  - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 * 4. 获取 obj[key] 的值
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
