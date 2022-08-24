/**
 * 1. 遍历 obj 对象，拿到 key
 * 2. 获取 obj[key]
 * 3. 添加readonly 关键字
 * 4. 返回对象
 */
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
