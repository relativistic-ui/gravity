import type { DesignToken, SomeDesignToken } from './types/token.js'

export function designToken<N extends string>(name: N): DesignToken<N> {
  return name as DesignToken<N>
}

export function someDesignToken<N extends string>(token: DesignToken<N>): SomeDesignToken {
  return cb => cb(token)
}

export function someToken<N extends string>(name: N): SomeDesignToken {
  return someDesignToken(designToken(name))
}

export const defaultToken = someToken('GRAVITY_DEFAULT')
