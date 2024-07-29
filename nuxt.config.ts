// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  css: [
		'@/assets/scss/default.scss',
	],
  vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/utils.scss";'
				}
			}
		},
	},
	imports: {
		dirs: ['store', 'utils', 'animations'],
	},
})
