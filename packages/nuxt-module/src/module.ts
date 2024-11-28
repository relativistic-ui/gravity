import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'
import type { Intent } from '@relativistic-ui/gravity-core'
import { composables } from '@relativistic-ui/gravity-vue'

interface ModuleOptions {
  initialIntent?: Intent
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@relativistic-ui/gravity',
    configKey: 'gravity',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    initialIntent: {},
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Expose options to runtime config
    nuxt.options.runtimeConfig.public.gravity = {
      initialIntent: options.initialIntent,
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add composables from gravity-vue as auto-imports
    addImports(
      Object.keys(composables).map(name => ({
        name,
        from: '@relativistic-ui/gravity-vue/composables',
      })),
    )
  },
})
