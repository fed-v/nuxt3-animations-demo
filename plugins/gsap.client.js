/**
 * Nuxt plugin to register the GSAP ScrollTrigger plugin for client-side usage.
 */
export default defineNuxtPlugin(async () => {

	// Check if the code is running on the client side
	if (process.client) {
	  // Register the GSAP ScrollTrigger plugin
	  gsap.registerPlugin(ScrollTrigger);
	}

});