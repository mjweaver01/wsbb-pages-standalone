# WSBB Embeddable Pages

Compile each page as an embeddable Vue app using `vite-plugin-singlefile`. These pages are designed to be fetched and injected into your main Shopify site.

## 🚀 Quick Start

### Development

```bash
nvm use && npm i && npm run dev
```

### Building for Production

```bash
npm run build
```

This creates embeddable HTML fragments ready for Netlify deployment.

## 📦 Build Output

The build creates embeddable HTML fragments in `dist/pages/pages/`:

- `about.embed.html` - Embeddable about page
- `index.embed.html` - Embeddable index page
- `assets/` - All images, fonts, and other static assets

Each `.embed.html` file contains:

- All HTML content wrapped in `<div id="wsbb-embed-root">`
- Inline CSS (all styles)
- Inline JavaScript (complete Vue app)
- No external dependencies (except images/fonts in `assets/`)

## 🌐 Netlify Deployment

### Automatic Deployment

1. Connect your repository to Netlify
2. Netlify will automatically use the settings from `netlify.toml`
3. Build command: `npm run build`
4. Publish directory: `dist/pages`

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist/pages
```

Your embeddable pages will be available at:

- `https://your-site.netlify.app/pages/about.embed.html`
- `https://your-site.netlify.app/pages/index.embed.html`
- `https://your-site.netlify.app/pages/assets/...`

## 🔌 Using in Your Shopify Site

### Basic JavaScript Integration

Add this to your Shopify theme. **Important:** You must include a `<base>` tag in your HTML `<head>` to resolve relative asset paths correctly:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Set base URL for resolving relative asset paths -->
    <base href="https://wsbb-pages.netlify.app/pages/" />
  </head>
  <body>
    <div id="wsbb-content"></div>

    <script>
      // Fetch and inject the page content
      async function loadWSBBPage(pageName) {
        const response = await fetch(`https://wsbb-pages.netlify.app/pages/${pageName}.embed.html`)
        const html = await response.text()

        // Inject into your site
        document.getElementById('wsbb-content').innerHTML = html

        // Re-execute scripts (required for Vue to initialize)
        const container = document.getElementById('wsbb-content')
        const scripts = container.querySelectorAll('script')
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script')
          newScript.textContent = oldScript.textContent
          oldScript.parentNode.replaceChild(newScript, oldScript)
        })
      }

      // Load the about page
      loadWSBBPage('about')
    </script>
  </body>
</html>
```

### Testing Locally

1. Build the pages:

   ```bash
   npm run build
   ```

2. Open `example-embed.html` in your browser to see a working example

3. Or serve with a local server:
   ```bash
   npx serve .
   # Visit http://localhost:3000/example-embed.html
   ```
