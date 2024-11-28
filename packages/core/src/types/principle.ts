import type { ReferenceFrame } from './frame.js'
import type { SomeDesignToken } from './token.js'

export interface Principle {
  tokens: (frame: ReferenceFrame) => Iterator<SomeDesignToken>
  first: (frame: ReferenceFrame, notFound: SomeDesignToken) => SomeDesignToken
  preferred: (frame: ReferenceFrame, notFound: SomeDesignToken) => SomeDesignToken
}

export interface Fitness {
  score: number
  token: SomeDesignToken
}

export type Application = (frame: ReferenceFrame) => Fitness
