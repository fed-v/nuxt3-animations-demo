/**
 * Creates animations for content based on the specified type and elements.
 * Utilizes ScrollTrigger to create animations that trigger when the elements come into view.
 *
 * @param {Object} params - Parameters object.
 * @param {string} params.type - The type of content to animate ('text' or 'image').
 * @param {string} params.element - The CSS selector string to select elements to animate.
 *
 * @example
 * // Animate text elements with the class 'animate-text'
 * contentAnimation({ type: 'text', element: '.animate-text' });
 *
 * @example
 * // Animate image elements with the class 'animate-image'
 * contentAnimation({ type: 'image', element: '.animate-image' });
 */
export function contentAnimation({ type, element }) {

	// Select all elements matching the provided selector
	const elements = document.querySelectorAll(element);
  
	// Iterate over each selected element
	elements.forEach((el) => {

	  // Create a ScrollTrigger for each element
	  ScrollTrigger.create({
		trigger: el,
		// Choose the animation function based on the type ('text' or 'image')
		animation: type === 'text' ? useAnimateText(el) : useAnimateImage(el)
	  });

	});

}