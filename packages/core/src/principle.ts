import type { Application, Fitness, Principle, ReferenceFrame, SomeDesignToken } from './types/index.js'
import * as Token from './token.js'

export function apply(app: Application, context: ReferenceFrame) {
  return app(context)
}

export function *applyIterator(someApplications: Application[], context: ReferenceFrame) {
  while (someApplications.length > 0) {
    const app = someApplications.shift()
    if (!app)
      return
    yield apply(app, context) as Fitness
  }
}

export function createPrinciple(apps: Application[], defaultToken: SomeDesignToken = Token.defaultToken): Principle {
  return {
    *tokens(frame) {
      for (const fitness of applyIterator(apps, frame))
        yield fitness.token
    },
    first(frame, notFound = defaultToken) {
      const iterator = applyIterator(apps, frame)
      const fitness = iterator.next()
      return fitness.value?.token ?? notFound
    },
    preferred(frame, notFound = defaultToken) {
      const iterator = applyIterator(apps, frame)
      let preferred: Fitness | undefined
      for (const fitness of iterator) {
        if (!preferred || fitness.score < preferred.score)
          preferred = fitness
      }
      return preferred?.token ?? notFound
    },
  }
}
