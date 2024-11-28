import type { App } from 'vue'
import { GRAVITY_INTENT_KEY } from './composables/useIntent.js'
import type { Intent } from '@relativistic-ui/gravity-core'

export interface GravityPluginOptions {
  initialIntent?: Intent
}

export function createGravityPlugin(options: GravityPluginOptions = {}) {
  return {
    install(app: App) {
      app.provide(GRAVITY_INTENT_KEY, options.initialIntent || {})
    }
  }
} 