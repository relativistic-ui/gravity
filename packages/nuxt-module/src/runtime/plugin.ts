import { createGravityPlugin } from '@relativistic-ui/gravity-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGravityPlugin())
})
