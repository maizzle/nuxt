import { relative } from 'node:path'
import { defineNuxtModule, addVitePlugin } from '@nuxt/kit'
import { maizzle } from '@maizzle/framework'
import type { MaizzleConfig } from '@maizzle/framework'

export type ModuleOptions = Partial<MaizzleConfig>

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@maizzle/nuxt',
    configKey: 'maizzle',
  },
  setup(options, nuxt) {
    const srcDir = relative(nuxt.options.rootDir, nuxt.options.srcDir) || '.'
    const emailsGlob = srcDir === '.'
      ? 'emails/**/*.{vue,md}'
      : `${srcDir}/emails/**/*.{vue,md}`

    options.content ??= [emailsGlob]
    options.output = { path: 'server/assets/emails', ...options.output }
    options.server = { port: 4321, ...options.server }

    addVitePlugin(maizzle(options))
  },
})
