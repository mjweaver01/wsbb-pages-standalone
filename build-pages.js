import { readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)
const __dirname = dirname(fileURLToPath(import.meta.url))

async function buildPages() {
  const pagesDir = resolve(__dirname, 'pages')
  const files = readdirSync(pagesDir)
  const pages = files.filter(file => file.endsWith('.html')).map(file => file.replace('.html', ''))

  const baseUrl = process.env.VITE_BASE_URL || 'https://wsbb-pages.netlify.app'

  console.log(`🚀 Building ${pages.length} embeddable pages: ${pages.join(', ')}`)
  console.log(`🌐 Base URL: ${baseUrl}/pages/`)

  // Clean dist directory first
  console.log('\n🧹 Cleaning dist directory...')
  await execAsync('rm -rf dist')

  for (const page of pages) {
    console.log(`\n📦 Building ${page}...`)
    try {
      await execAsync(`npx vite build`, {
        env: {
          ...process.env,
          BUILD_PAGE: page,
          EMBED_MODE: 'true',
        },
      })
      console.log(`✓ ${page} built successfully`)
    } catch (error) {
      console.error(`✗ Failed to build ${page}:`, error.message)
      process.exit(1)
    }
  }

  console.log('\n✅ All embeddable pages built successfully!')
  console.log('📄 Files ready for Netlify deployment in dist/pages/pages/')
  console.log('   → *.embed.html files can be fetched and injected into your site')
  console.log('   → assets/ directory contains all images and fonts')
}

buildPages().catch(error => {
  console.error('❌ Build failed:', error)
  process.exit(1)
})
