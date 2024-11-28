import { inject, provide } from "vue";
import { deriveIntent } from "@relativistic-ui/gravity-core";

import type { Intent } from "@relativistic-ui/gravity-core";

export const GRAVITY_INTENT_KEY = Symbol('GRAVITY_INTENT')

export function useIntent(intent: Intent = {}) {
  const previousIntent = inject(GRAVITY_INTENT_KEY) || {}
  const currentIntent = deriveIntent(previousIntent, intent)

  provide(GRAVITY_INTENT_KEY, currentIntent)

  return currentIntent
} 