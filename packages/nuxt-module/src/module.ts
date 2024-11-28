import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@relativistic-ui/gravity',
    configKey: 'gravity',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add composables from gravity-vue as auto-imports
    addImports({
      name: 'useIntent',
      as: 'useIntent',
      from: '@relativistic-ui/gravity-vue'
    })
  },
})
