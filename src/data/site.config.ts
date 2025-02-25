interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://www.developedbykenny.com', // Write here your website url
	author: 'Kenny Nguyen', // Site author
	title: 'DevelopedByKenny', // Site title.
	description: 'Writing about stuff in my little corner of the web.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
