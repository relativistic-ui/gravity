export type UnionOf<T> = T extends (infer U)[] ? U : never

export type UnionToArray<T> =
  UnionToIntersection<T extends any ? (t: T) => T : never> extends (_: any) => infer W
    ? [...UnionToArray<Exclude<T, W>>, W]
    : []

export type KeysOf<T> = T extends T ? keyof T : never
export type ValuesOf<T> = T extends T ? T[keyof T] : never

export type UnionToIntersection<U> = (U extends unknown ? (x: U) => void : never) extends (
  x: infer R
) => void
  ? R
  : never

export type IntersectionOf<T extends unknown[]> = UnionToIntersection<T[number]>

type DeepMerge<T> = {
  [K in keyof T]: T[K]
} extends infer O
  ? { [K in keyof O]: O[K] }
  : never

export type Simplify<T> = DeepMerge<T>

export type Comparitor<T> = (_rhs: T) => boolean

export type Branded<B extends string, T> = T & { __brand: B }

export interface WithType<T extends string = string> {
  __type: T
}

export interface WithValue<T> {
  value: T
}

export interface WithName<T extends string = string> {
  name: T
}

export interface WithT<T extends number = number> {
  t: T
}

export interface WithEquality<T> {
  eq: Comparitor<T>
  neq: Comparitor<T>
}

export interface WithEmpty {
  isEmpty: () => boolean
  isNotEmpty: () => boolean
}

export interface Inequality<T> {
  lt: Comparitor<T>
  lte: Comparitor<T>
  gt: Comparitor<T>
  gte: Comparitor<T>
}

export type ValueType = string | number | boolean | null | undefined | symbol | bigint

export interface WithEvent<T> {
  event: T & object
}

export type TypeGuard<T> = (value: unknown) => value is T

export type Constructor<T> = new (...args: unknown[]) => T

type RemoveFromTuple<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? RemoveFromTuple<R, U>
    : [F, ...RemoveFromTuple<R, U>]
  : T

export type UniqueTuples<T extends unknown[], F = T[number]> = [] extends T
  ? []
  : F extends F
    ? [F] | [F, ...UniqueTuples<RemoveFromTuple<T, F>>] | UniqueTuples<RemoveFromTuple<T, F>>
    : never

export type Tokenize<
  S extends string,
  Sep extends string = ' ',
> = S extends `${infer T}${Sep}${infer R}` ? [T, ...Tokenize<R, Sep>] : S extends '' ? [] : [S]

export type Concat<S extends string[], Sep extends string = ' '> = S extends [infer F, ...infer R]
  ? R extends string[]
    ? F extends string
      ? `${Sep}${F}${Concat<R, Sep>}`
      : never
    : never
  : ''
