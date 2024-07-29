/**
 * Animates elements within the specified parent container on the first screen load.
 *
 * @param {Object} params - Parameters object.
 * @param {string} params.parent - The CSS selector string of the parent container.
 */
export function firstScreenAnimation({ parent }) {

	// Select the parent element using the provided selector
	const parentElement = document.querySelector(parent);
  
	// Select specific elements within the parent container
	const titleElement = parentElement.querySelector('.title-default__wrap');
	const headerElement = parentElement.querySelector('.header');
	const pageMaskElement = parentElement.querySelector('.page-mask');
  
	// Create a GSAP timeline for the animations
	const timeline = gsap.timeline();
  
	// Fade out the page mask
	timeline.to(pageMaskElement, {
	  opacity: 0
	});
  
	// Animate the title element to slide in from the bottom and fade in
	timeline.from(titleElement, {
	  yPercent: 100,
	  opacity: 0,
	  clearProps: 'all'
	});
  
	// Animate the header element to slide in from the top
	timeline.from(headerElement, {
	  yPercent: -100,
	  clearProps: 'all'
	}, '<'); // Start this animation at the same time as the previous one
	
}  