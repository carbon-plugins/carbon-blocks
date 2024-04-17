document.addEventListener("DOMContentLoaded", function() {

	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1)
			obj.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	if(document.querySelector('.wp-block-carbon-blocks-counter')) {
		document.querySelectorAll('.wp-block-carbon-blocks-counter').forEach(counters => {
			const speed = 1000; let more = 0;
			counters.querySelectorAll('.wp-block-carbon-blocks-counter-item').forEach(counter => {
				counter.addEventListener('anim:in', ({ detail }) => {
					more = more + 400;
					const value = + counter.querySelector('dt span').innerHTML;
					counter.querySelector('dt span').innerHTML;
					animateValue(counter.querySelector('dt span'), 0, value, 1000 + more)
				});
			});
		});
	}

});
