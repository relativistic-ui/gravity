import type { Intent, IntentQueryMap } from '@relativistic-ui/gravity-core'
import type { ComputedRef } from 'vue'

import { scoreIntent } from '@relativistic-ui/gravity-core'
import { computed, unref } from 'vue'

import { useIntent } from './useIntent.js'

export function useIntentQueryMap<T extends IntentQueryMap>(queryMap: T, intent: Intent = {}): ComputedRef<{ [k: string]: number }> {
  const currentIntent = useIntent(intent)
  const tokenScoreMap = computed(() => {
    return Object.fromEntries(
      Object.entries(queryMap).map(([token, query]) => [token, scoreIntent(unref(currentIntent), query)]),
    )
  })
  return tokenScoreMap
}
