import { defineNuxtPlugin } from '#app'
import { createGravityPlugin } from '@relativistic-ui/gravity-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGravityPlugin())
})
