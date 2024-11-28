import type { Intent, IntentQueryMap } from '@relativistic-ui/gravity-core'

import { scoreIntent } from '@relativistic-ui/gravity-core'
import { computed, unref } from 'vue'

import { useIntent } from './useIntent.js'

export function useIntentQueryMap<T extends IntentQueryMap>(queryMap: T, intent: Intent = {}) {
  const currentIntent = useIntent(intent)
  const tokenScoreMap = computed(() => {
    return Object.fromEntries(
      Object.entries(queryMap).map(([token, query]) => [token, scoreIntent(unref(currentIntent), query)]),
    )
  })
  return tokenScoreMap
}
