import type { AffordanceIntent, ArrangeIntent, Intent, InteractIntent, PresentIntent } from '@relativistic-ui/gravity-core'
import type { EmitsOptions, SlotsType, VNode } from 'vue'

import { defineComponent } from 'vue'
import { useIntent } from '../composables/useIntent.js'

interface Slots {
  default: (intent: Intent) => VNode
}

interface Props {
  arrange?: ArrangeIntent
  affords?: AffordanceIntent
  interact?: InteractIntent
  present?: PresentIntent
}

export default /* #__PURE__ */ defineComponent<Props, EmitsOptions, string, SlotsType<Slots>>(
  (props: Props, { slots }) => {
    const intent = useIntent(props)

    return () => slots.default?.(intent.value)
  },
  {
    name: 'VariantIntent',
    props: ['arrange', 'affords', 'interact', 'present'],
  },
)
