import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { useIntent } from '../useIntent.js'
import { ArrangeIntent, AffordanceIntent, InteractIntent, PresentIntent } from '@relativistic-ui/gravity-core'

describe('useIntent', () => {
  it('returns empty intent when no props provided', () => {
    const TestComponent = defineComponent({
      setup() {
        const intent = useIntent()
        return () => h('div', JSON.stringify(intent.value))
      }
    })

    const wrapper = mount(TestComponent)
    expect(wrapper.text()).toBe('{}')
  })

  it('returns intent with provided props', () => {
    const TestComponent = defineComponent({
      setup() {
        const intent = useIntent({ 
          arrange: 'compare' as ArrangeIntent, 
          present: 'summarize' as PresentIntent 
        })
        return () => h('div', JSON.stringify(intent.value))
      }
    })

    const wrapper = mount(TestComponent)
    const content = JSON.parse(wrapper.text())
    expect(content).toEqual({
      arrange: 'compare',
      present: 'summarize'
    })
  })

  it('inherits intent from parent component', () => {
    const ChildComponent = defineComponent({
      setup() {
        const intent = useIntent({ present: 'detail' as PresentIntent })
        return () => h('div', JSON.stringify(intent.value))
      }
    })

    const ParentComponent = defineComponent({
      setup() {
        useIntent({ 
          arrange: 'compare' as ArrangeIntent, 
          present: 'summarize' as PresentIntent 
        })
        return () => h(ChildComponent)
      }
    })

    const wrapper = mount(ParentComponent)
    const content = JSON.parse(wrapper.text())
    expect(content).toEqual({
      arrange: 'compare',
      present: 'detail'
    })
  })

  it('merges intents correctly', () => {
    const TestComponent = defineComponent({
      setup() {
        const intent = useIntent({
          arrange: 'compare' as ArrangeIntent,
          affords: 'consume:view' as AffordanceIntent,
          interact: 'engage' as InteractIntent,
          present: 'summarize' as PresentIntent
        })
        return () => h('div', JSON.stringify(intent.value))
      }
    })

    const wrapper = mount(TestComponent)
    const content = JSON.parse(wrapper.text())
    expect(content).toEqual({
      arrange: 'compare',
      affords: 'consume:view',
      interact: 'engage',
      present: 'summarize'
    })
  })
}) 