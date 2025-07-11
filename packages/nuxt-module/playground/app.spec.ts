import { describe, it, expect } from 'vitest'
import App from './app.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('app', () => {
  it('should render', async () => {
    const component = await mountSuspended(App, { route: '/' })
    expect(component.html()).toContain('Nuxt module playground!')
  })
})
