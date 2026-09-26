import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { getTranslations } from './src/i18n'
import type { Language } from './src/types'

const noticeLanguages: Language[] = ['zh-cn', 'zh-tw', 'en', 'ja']

// The website and iOS app publish the same notice content from one source.
function noticeFeeds(): Plugin {
  const feed = (language: Language) => JSON.stringify({
    schemaVersion: 1,
    language,
    notices: getTranslations(language).notices,
  })

  return {
    name: 'symoney-notice-feeds',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const language = noticeLanguages.find(lang => request.url?.split('?')[0] === `/notices/${lang}.json`)
        if (!language) return next()
        response.setHeader('Content-Type', 'application/json; charset=utf-8')
        response.setHeader('Cache-Control', 'no-cache')
        response.end(feed(language))
      })
    },
    generateBundle() {
      for (const language of noticeLanguages) {
        this.emitFile({ type: 'asset', fileName: `notices/${language}.json`, source: feed(language) })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), noticeFeeds()],
  base: '/',
})
