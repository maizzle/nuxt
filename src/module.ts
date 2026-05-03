import { defineNuxtModule, addVitePlugin } from '@nuxt/kit'
import { maizzle } from '@maizzle/framework'
import type { MaizzleConfig } from '@maizzle/framework'

export type ModuleOptions = Partial<MaizzleConfig>

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@maizzle/nuxt',
    configKey: 'maizzle',
  },
  defaults: {
    output: {
      path: 'server/assets/emails',
    },
  },
  setup(options) {
    addVitePlugin(maizzle(options))
  },
})
