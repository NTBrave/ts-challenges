type DeepReadonly<T> = {
    readonly [P in keyof T]: keyof T[P] extends T[P] ? T[P] : DeepReadonly<T[P]>
  };