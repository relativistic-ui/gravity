import { Intent, IntentLabel, IntentPattern, IntentQuery } from "./types";

export function deriveIntent<A extends Intent, B extends Intent>(
  intentA: A,
  intentB: B,
): Intent {
  return {
    ...intentA,
    ...intentB,
  }
}

export function matchIntentValue<V extends IntentLabel, P extends IntentPattern<V>>(
  pattern: P,
  value?: string,
): boolean {
  if (typeof pattern === 'boolean') return pattern ? !!value : !value
  if (typeof value !== 'string') return false
  if (pattern instanceof RegExp) return pattern.test(value)
  if (typeof pattern === 'string') return value === pattern as string
  return false
}

export function scoreIntent<I extends Intent, Q extends IntentQuery>(
  intent: I,
  query: Q,
): number {
  const patternKeys = Object.keys(query) as (keyof Q)[]
  const matches = patternKeys.filter((key) => matchIntentValue(query[key]! as IntentPattern<IntentLabel>, intent[key as keyof I] as string | undefined))
  return matches.length / patternKeys.length
}

export function matchIntent<I extends Intent, Q extends IntentQuery>(
  intent: I,
  query: Q,
): boolean {
  return scoreIntent(intent, query) === 1
}
