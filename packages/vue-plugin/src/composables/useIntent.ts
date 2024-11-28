import { computed, ComputedRef, inject, isRef, MaybeRef, provide, ref, unref } from "vue";
import { deriveIntent } from "@relativistic-ui/gravity-core";

import type { Intent } from "@relativistic-ui/gravity-core";

export const GRAVITY_INTENT_KEY = 'GRAVITY_INTENT'

export function useIntent(intent: MaybeRef<Intent> = {}): ComputedRef<Intent> {
  let previousIntent = inject(GRAVITY_INTENT_KEY) || {}
  if (!isRef(previousIntent)) {
    previousIntent = ref(previousIntent)
  }
  const currentIntent = computed(() => deriveIntent(unref(previousIntent), unref(intent)))

  provide(GRAVITY_INTENT_KEY, currentIntent)

  return currentIntent
}
