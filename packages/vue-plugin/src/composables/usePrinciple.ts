import type { Principle, SomeDesignToken } from '@relativistic-ui/gravity-core'
import type { Ref } from 'vue'

import { someToken } from '@relativistic-ui/gravity-core'

import { computed, unref } from 'vue'
import { useFrame } from './useFrame.js'

export function usePrinciple(principle: Principle | Ref<Principle>, defaultToken: SomeDesignToken = someToken('default')): {
  first: Ref<SomeDesignToken>
  tokens: Ref<Iterator<SomeDesignToken>>
  preferred: Ref<SomeDesignToken>
} {
  const frame = useFrame()

  return {
    get first() {
      return computed(() => unref(principle).first(frame.value, defaultToken))
    },
    get tokens() {
      return computed(() => unref(principle).tokens(frame.value))
    },
    get preferred() {
      return computed(() => unref(principle).preferred(frame.value, defaultToken))
    },
  }
}
