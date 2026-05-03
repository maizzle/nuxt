<div align="center">
  <p>
    <a href="https://maizzle.com" target="_blank">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/maizzle/nuxt/raw/master/.github/logo-dark.svg">
        <img alt="Maizzle Nuxt module" src="https://github.com/maizzle/nuxt/raw/master/.github/logo-light.svg" width="300" height="225" style="max-width: 100%;">
      </picture>
    </a>
  </p>
  <p>Build HTML emails in Nuxt with Maizzle</p>
<div>

  [![Version][npm-version-shield]][npm]
  [![Downloads][npm-stats-shield]][npm-stats]
  [![License][license-shield]][license]

  </div>
</div>

## Getting Started

Install the module:

```bash
npm i -D @maizzle/nuxt
```

Register it in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@maizzle/nuxt'],
})
```

## Usage

Create your email templates in the `emails/` folder. The location depends on your Nuxt version:

| Nuxt | Path                |
| ---- | ------------------- |
| 4    | `app/emails/`       |
| 3    | `emails/`           |

Run `nuxt dev` — the Maizzle dev server starts on port `4321` alongside Nuxt.

On `nuxt build`, compiled HTML is written to `server/assets/emails/` and bundled into the Nitro server output. Read it at runtime via:

```ts
const html = await useStorage('assets:server').getItem('emails:welcome.html')
```

## Configuration

All [Maizzle config options](https://maizzle.com/docs/development/configuration) can be passed under the `maizzle` key:

```ts
export default defineNuxtConfig({
  modules: ['@maizzle/nuxt'],

  maizzle: {
    content: ['custom/path/**/*.{vue,md}'],
    output: { path: 'custom/output' },
    server: { port: 5173 },
  },
})
```

Defaults applied by this module:

| Option        | Default                          |
| ------------- | -------------------------------- |
| `content`     | `<srcDir>/emails/**/*.{vue,md}`  |
| `output.path` | `server/assets/emails`           |
| `server.port` | `4321`                           |

## Documentation

Maizzle documentation is available at https://maizzle.com

## Issues

Please report bugs in the [issue tracker](https://github.com/maizzle/nuxt/issues).

## License

Open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[npm]: https://www.npmjs.com/package/@maizzle/nuxt
[npm-stats]: https://npm-stat.com/charts.html?package=%40maizzle%2Fnuxt
[npm-version-shield]: https://img.shields.io/npm/v/@maizzle/nuxt.svg
[npm-stats-shield]: https://img.shields.io/npm/dt/@maizzle/nuxt.svg?color=6875f5
[license]: ./LICENSE
[license-shield]: https://img.shields.io/npm/l/@maizzle/nuxt.svg?color=0e9f6e
