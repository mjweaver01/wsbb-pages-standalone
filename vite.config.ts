import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Get the page to build from environment variable (for multi-page builds)
const page = process.env.BUILD_PAGE
// Always build in embed mode for Netlify deployment
const embedMode = true
// Base URL for deployed assets (configurable via env var)
const baseUrl = process.env.VITE_BASE_URL || 'https://wsbb-pages.netlify.app'

// Custom plugin to create embeddable version
function createEmbeddablePlugin(): Plugin {
  return {
    name: 'create-embeddable',
    apply: 'build',
    writeBundle(options, bundle) {
      if (!embedMode) return

      const outputDir = options.dir || 'dist'

      // Find HTML files in the bundle
      Object.keys(bundle).forEach(fileName => {
        if (fileName.endsWith('.html')) {
          const filePath = path.join(outputDir, fileName)
          let content = fs.readFileSync(filePath, 'utf-8')

          // For embed, extract styles and scripts from head, and all body content

          // Extract all <style> tags
          const headStyleMatches = [...content.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
          const headStyles = headStyleMatches.map(m => `<style>${m[1]}</style>`).join('\n')

          // Extract all inline <script> tags (ones without src attribute)
          const scriptMatches = [...content.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)]
          const inlineScripts = scriptMatches
            .filter(m => !m[1].includes('src='))
            .map(m => `<script${m[1]}>${m[2]}</script>`)
            .join('\n')

          // Extract everything between <body> and </body>
          const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i)

          if (bodyMatch) {
            const bodyContent = bodyMatch[1]

            // Create embeddable version - styles first, then body, then scripts
            const embeddable = `<div id="wsbb-embed-root">
${headStyles}
${bodyContent}
${inlineScripts}
</div>`

            // Write the embeddable version
            const embedFileName = fileName.replace('.html', '.embed.html')
            fs.writeFileSync(path.join(outputDir, embedFileName), embeddable, 'utf-8')
            console.log(`✓ Created embeddable version: ${embedFileName}`)
          }
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Set base URL to absolute path for embedded pages
  base: embedMode ? `${baseUrl}/` : '/',
  plugins: [
    vue(),
    viteSingleFile({
      removeViteModuleLoader: true,
      // Don't inline images - keep them as separate assets
      useRecommendedBuildConfig: false,
    }),
    createEmbeddablePlugin(),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: page ? `dist/pages` : 'dist',
    emptyOutDir: false,
    cssCodeSplit: false,
    // Set to 0 to prevent inlining of any assets (images will be separate files)
    assetsInlineLimit: 0,
    rollupOptions: {
      input: page
        ? path.resolve(__dirname, `pages/${page}.html`)
        : path.resolve(__dirname, 'pages/index.html'),
      output: {
        inlineDynamicImports: true,
        // Configure asset file naming
        assetFileNames: assetInfo => {
          // Keep original file names for images
          if (assetInfo.name?.match(/\.(png|jpe?g|svg|gif|webp|ico)$/i)) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  server: {
    open: '/pages/index.html',
  },
})
