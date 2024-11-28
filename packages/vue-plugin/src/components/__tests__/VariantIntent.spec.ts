import type { AffordanceIntent, ArrangeIntent, Intent, InteractIntent, PresentIntent } from '@relativistic-ui/gravity-core'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import VariantIntent from '../VariantIntent.js'

describe('variantIntent', () => {
  it('renders with default props', () => {
    const wrapper = mount(VariantIntent, {
      slots: {
        default: (intent: Intent) => `intent: ${JSON.stringify(intent)}`,
      },
    })
    expect(wrapper.text()).toContain('intent:')
  })

  it('passes intent props correctly', () => {
    const wrapper = mount(VariantIntent, {
      props: {
        arrange: 'compare' as ArrangeIntent,
        affords: 'consume:view' as AffordanceIntent,
        interact: 'engage' as InteractIntent,
        present: 'summarize' as PresentIntent,
      },
      slots: {
        default: (intent: Intent) => `intent: ${JSON.stringify(intent)}`,
      },
    })

    const text = wrapper.text()
    expect(text).toContain('"arrange":"compare"')
    expect(text).toContain('"affords":"consume:view"')
    expect(text).toContain('"interact":"engage"')
    expect(text).toContain('"present":"summarize"')
  })

  it('updates when props change', async () => {
    const wrapper = mount(VariantIntent, {
      props: {
        arrange: 'compare' as ArrangeIntent,
      },
      slots: {
        default: (intent: Intent) => `intent: ${JSON.stringify(intent)}`,
      },
    })

    expect(wrapper.text()).toContain('"arrange":"compare"')

    await wrapper.setProps({ arrange: 'sequence' as ArrangeIntent })
    expect(wrapper.text()).toContain('"arrange":"sequence"')
  })
})
