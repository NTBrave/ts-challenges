type Last<T extends any[]> = T extends [...infer R, infer P] ? P : never
