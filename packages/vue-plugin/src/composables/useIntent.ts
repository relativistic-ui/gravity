import type { Intent } from '@relativistic-ui/gravity-core'
import type { ComputedRef, MaybeRef } from 'vue'
import { deriveIntent } from '@relativistic-ui/gravity-core'

import { computed, inject, isRef, provide, ref, unref } from 'vue'

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
