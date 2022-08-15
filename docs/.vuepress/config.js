const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
//const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
//const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon')
//const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
//const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('vuepress')
const { rightAnchorPlugin } = require('vuepress-plugin-right-anchor')


module.exports = {
    lang: 'vi-VN',
    title: 'Học lập trình PHP',
	port: 9999,	
	// permalinkPattern: '/:slug.html',
	theme: defaultTheme({
		logo: 'img/php-logo.png',
		logoDark: 'img/php-logo-dark.png',
		repo: 'KGAMES-PLAYGROUND/php-handbook.git',
        docsRepo: 'KGAMES-PLAYGROUND/php-handbook.git',
		docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,   
        smoothScroll: true,    
        contributors: false,
        lastUpdated : true,
        displayAllHeaders: true,
		locales: {
			'/': {
				navbar: require('./routes/routes'),
				notFound : ["Không tìm thấy trang"],
				backToHome : "↩ Về trang chủ",
				editLinkText: 'Mở trên GitHub',
				selectLanguageText: 'Ngôn ngữ',
				selectLanguageName: 'Tiếng Việt',
				sidebar: require('./ext/sidebar'),
			},
			'/en/' : {
				navbar: require('./routes/routes-en'),
				selectLanguageName: 'English',
			}
		},
		
	}),
	locales: {
		'/': {
			lang: 'vi-VN',
			title: 'Wiki Handbook',
			description: 'Nào, cùng khám phá ngôn ngữ lập trình này nhé!',
		},
		'/en/': {
			lang: 'en-US',
		}
	},
	plugins: [
		rightAnchorPlugin({
			showDepth: 2,
			ignore: [
			  '/',
			  '/api/'
			  // more...
			],
			expand: {
			  trigger: 'click',
			  clickModeDefaultOpen: true,
			  buttonContent: 'asd',
			},
			customClass: 'right-anchor-wrapper',
		}),
		googleAnalyticsPlugin({
		  	id: 'G-327182292'
		}),
		// backToTopPlugin(),
		// externalLinkIconPlugin({
		// 	// options
		// }),
		// mediumZoomPlugin({
		// 	// options
		// }),
		// nprogressPlugin(),
		registerComponentsPlugin({
			// options
		}),
	],
	markdown: {
		anchor : {
			permalinkBefore: true,
			permalinkSymbol: '#'
		},
		
	}
}