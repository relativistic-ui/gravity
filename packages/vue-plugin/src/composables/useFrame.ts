import type { ReferenceFrame } from '@relativistic-ui/gravity-core'
import type { Ref } from 'vue'

import { ref } from 'vue'

export function useFrame(): Ref<ReferenceFrame> {
  return ref({} as ReferenceFrame)
}
