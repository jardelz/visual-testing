import { defineConfig } from 'vite'
import { vitePlugin as remix } from '@remix-run/dev'
import tsconfigPaths from 'vite-tsconfig-paths'
import { viteSingleFile } from 'vite-plugin-singlefile'

const baseName = process.env.GITHUB_PAGES || ''

export default defineConfig({
  plugins: [
    remix({
      ...(baseName && { basename: baseName }),
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      ssr: false,
    }),
    tsconfigPaths(),
    viteSingleFile(), // <-- plugin para embutir tudo
  ],
  ...(baseName && { base: baseName }),
  base: './', // <-- importante para funcionar em file://
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})