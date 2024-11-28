export type DesignToken<N extends string> = N & {
  __brand: 'DesignToken'
  name: N
}

export type SomeDesignToken = <R>(cb: <N extends string>(token: DesignToken<N>) => R) => R
