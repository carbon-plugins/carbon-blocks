import Lightbox from "./../../../public/assets/vendor/lightbox.js";

document.addEventListener('DOMContentLoaded', function() {

	if(document.querySelector("[data-masonry]")) {
		document.querySelectorAll("[data-masonry]").forEach(masonry => {
			Lightbox({
				selector: `*[data-masonry="${masonry.dataset.masonry}"]`,
				openEffect: 'fade',
				zoomable: true,
				closeEffect: 'fade',
				slideEffect: 'slide',
				draggable: true,
				moreLength: 0,
			});
		})
	}

})
