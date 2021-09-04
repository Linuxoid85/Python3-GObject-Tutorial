/**
 * Настройки docsify
 * https://docsify.js.org/#/ru-ru/configuration
 * 
 */
window.$docsify = {
	name: 'Python3-GObject Tutorial Unofficial',
	repo: 'https://github.com/Linuxoid85/Python3-GObject-Tutorial',
	coverpage: false,
	loadSidebar: true,
	maxLevel: 2,
	subMaxLevel: 3,
	auto2top: true,
	autoHeader: true,
	executeScript: true,
	mergeNavbar: true,
	el: '#main',
	notFoundPage: {
		'/': '_404.md',
	},
	search: {
		placeholder: 'Поиск',
	},
	alias: {
		'/.*/_sidebar.md': '/_sidebar.md',
	},
	copyCode: {
		buttonText: 'Скопировать  в буфер обмена',
		errorText: 'Ошибка',
		successText: 'Текст скопирован  в буфер обмена'
	},
	requestHeaders: {
		'cache-control': 'max-age=0',
	},
	// https://github.com/imyelo/docsify-pagination
	pagination: {
		previousText: 'Назад',
		nextText: 'Вперёд',
		crossChapter: true,
		crossChapterText: true,
	},
}
