import { createGravityPlugin } from '@relativistic-ui/gravity-vue'
import type { Intent } from '@relativistic-ui/gravity-core'
import { defineNuxtPlugin } from '#app'

interface GravityRuntimeConfig {
  gravity?: {
    initialIntent?: Intent
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config.public as GravityRuntimeConfig
  const options = config.gravity || {}
  nuxtApp.vueApp.use(createGravityPlugin({
    initialIntent: options.initialIntent,
  }))
})
