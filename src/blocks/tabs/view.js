document.addEventListener('DOMContentLoaded',function() {
	document.querySelectorAll('.wp-block-carbon-blocks-tabs').forEach(tabs => {
		const colors = JSON.parse(tabs.dataset.colors);
		const firstButton = tabs.querySelector('button:first-of-type');
		const firstSection = tabs.querySelector('section:first-of-type');
		firstButton.classList.add('is-active');
		firstSection.classList.add('is-active');
		tabs.querySelectorAll('button').forEach(tabButton => {
			tabButton.style.color = colors.inactiveText;
			tabButton.style.backgroundColor = colors.inactiveBackground;
			tabButton.style.borderBottom = "none";
			tabButton.addEventListener('click', () => {
				const data = tabButton.dataset.id;
				tabs.querySelectorAll('button').forEach(button => {
					button.classList.remove('is-active');
					button.style.color = colors.inactiveText;
					button.style.backgroundColor = colors.inactiveBackground;
					button.style.borderBottom = "none";
				})
				tabs.querySelectorAll('section').forEach(section => {
					section.classList.remove('is-active');
					if(section.dataset.id == data){
						section.classList.add('is-active');
						tabButton.classList.add('is-active');
						tabButton.style.color = colors.text;
						tabButton.style.backgroundColor = colors.background;
						tabButton.style.borderBottom = `2px solid ${colors.border}`;
					}
				})
			})
		});
		firstButton.style.color = colors.text;
		firstButton.style.backgroundColor = colors.background;
		firstButton.style.borderBottom = `2px solid ${colors.border}`;
	})
})
