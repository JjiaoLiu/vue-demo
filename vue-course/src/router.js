import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}, {
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}, {
			path: '/quill',
			name: 'quill',
			component: () => import('./views/Quill.vue')
		}, {
			path: '/attributeName',
			name: 'attributeName',
			component: () => import('./views/AttributeName.vue')
		}, {
			path: '/computed',
			name: 'computed',
			component: () => import('./views/Computed.vue')
		}


	]
})
