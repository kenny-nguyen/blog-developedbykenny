import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { siteConfig } from './src/data/site.config'
import react from '@astrojs/react'
import tinaDirective from './astro-tina-directive/register'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.site,
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight'
				},
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind(),
		react(),
		tinaDirective()
	],
	redirects: {
		'/admin': '/admin/index.html'
	}
})
