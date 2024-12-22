import type { ReferenceFrame } from '@relativistic-ui/gravity-core'
import { ref } from 'vue'

export function useFrame() {
  return ref({} as ReferenceFrame)
}
