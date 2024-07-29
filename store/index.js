// Reactive state object to manage general application state
export const general = reactive({
	scrollLenis: null, // Object for handling custom scroll behavior (e.g., Lenis)
	isPreloaderVisible: true, // Flag to indicate if the preloader is currently visible
	isTransitionFinish: true, // Flag to indicate if a page transition has completed
	isTransitionStart: true, // Flag to indicate if a page transition has started
	pageBg: "page_black" // Class name or identifier for the page background color
});