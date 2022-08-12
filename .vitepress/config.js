
const production = process.env.NODE_ENV === 'production'
const title = 'Blade Directives'
const description = 'A quick reference of Laravel Blade Directives'
const site = production ? 'https://laravel-vite.dev' : 'http://localhost:3005'


export default {
	title,
	head: [
		['meta', { name: 'author', content: 'Jordan Jones' }],
		['meta', { name: 'keywords', content: 'laravel, blade, directives, templates, php' }],
		['meta', { name: 'HandheldFriendly', content: 'True' }],
		['meta', { name: 'MobileOptimized', content: '320' }],
		['meta', { name: 'theme-color', content: '#171923' }],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:site', content: site }],
		['meta', { name: 'twitter:title', value: title }],
		['meta', { name: 'twitter:description', value: description }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:site', content: site }],
		['meta', { property: 'og:site_name', content: title }],
		['meta', { property: 'og:title', content: title }],
		['meta', { property: 'og:description', content: description }],
	],
	description,
	lang: 'en-US',
	scrollOffset: 'header',
	srcDir: 'src',
	themeConfig: {
		nav: [],
		sidebar: [
			{
			  text: 'Overview',
			  items: [
				{ text: 'Core Directives', link: '/' },
			  ]
			}
		  ],
		  socialLinks: [
			{ icon: 'github', link: 'https://github.com/heyjordn/blade-directives' },
			{ icon: 'twitter', link: 'https://twitter.com/heyjordn' },
		],
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT',
			},
			copyright: 'Made by Jordan Jones',
		},
	},
}
