import splt from "spltjs";

document.addEventListener("DOMContentLoaded", function() {

	splt({
		reveal: true,
		target: ".carbon-text-animation"
	});

	document.querySelectorAll(".carbon-text-animation").forEach(text => {
		const delay = text.dataset.textAnimDelay;
		const duration = text.dataset.textAnimDuration;
		const letterRevealSpeed = text.dataset.textAnimSpeed;
		const letters = [ ...text.querySelectorAll('.reveal') ];
		const letterSpeed = Number(duration) / letters.length
		text.querySelectorAll('.reveal').forEach((letter, i) => {
			letter.style.animationDuration 	= `${letterRevealSpeed}ms`;
			letter.style.animationDelay 		= `${Number(delay) + (i * letterSpeed)}ms`;
		});
	});

})

