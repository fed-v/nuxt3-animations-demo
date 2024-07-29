<script setup>

	const links = [
		{href: '/', text: 'MAIN'},
		{href: '/about', text: 'ABOUT'},
		{href: '/gallery', text: 'GALLERY'},
	]

</script>
<template>

	<header class="header" data-lenis-prevent>

		<nuxt-link
			v-for="(link, index) in links"
			:to="link.href"
			:key="index"
			class="header-link hover-fadein"
		>
			{{ link.text }}
		</nuxt-link>

	</header>

</template>
<style lang='scss' scoped>

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 15px 0 20px;
	z-index: $z-header;
}
.header-link {
	margin: 0 20px;
}

.page_white .header {
	background: $color-white;
}
.page_black .header {
	background: $color-black;
}

</style>