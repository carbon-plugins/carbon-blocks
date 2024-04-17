import Lightbox from "./../../../public/assets/vendor/lightbox.js";

document.addEventListener("DOMContentLoaded", function() {
	if(document.querySelector('[data-single-lightbox]')) {
		let i = 0;
		document.querySelectorAll('[data-single-lightbox]').forEach(image => {
			const { rotation, flipHorizontally, flipVertically } = image?.dataset;
			Lightbox({
				selector: `*[data-single-lightbox="${image.dataset.singleLightbox}"]`,
				openEffect: 'fade',
				closeEffect: 'none',
				slideEffect: 'slide',
				draggable: false,
				moreLength: 0,
				zoomable: Number(rotation) === 0,
				rotation: Number(rotation),
				flipVertically: flipVertically === "true",
				flipHorizontally: flipHorizontally === "true"
			});
		})
	}
})
