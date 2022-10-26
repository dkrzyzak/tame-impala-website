const handleCollapsibleMenu = () => {
	const collapsibleControl = document.querySelector('.collapse-control');
	const navUlElement = document.querySelector('nav ul');
	let isExpanded = navUlElement.classList.contains('expanded');
	let windowWidth = window.innerWidth;

	window.addEventListener('resize', () => {
		// zwiększanie ekranu -> nowy window.innerWidth jest większy
		if (windowWidth < window.innerWidth) {
			if (window.innerWidth > 767) {
				navUlElement.removeAttribute('style');
			}
			// zmniejszanie ekranu -> nowy window.innerWidth jest mniejszy
		} else {
			if (windowWidth >= 768 && window.innerWidth < 768) {
				navUlElement.style.display = 'none';
				isExpanded = false;
			}
		}

		windowWidth = window.innerWidth;
	});

	collapsibleControl.addEventListener('click', () => {
		if (isExpanded) {
			// zwijanie
			navUlElement.classList.remove('expanded');
			setTimeout(() => {
				navUlElement.style.display = 'none';
				isExpanded = false;
			}, 300);
		} else {
			// rozwijanie
			navUlElement.removeAttribute('style');
			setTimeout(() => {
				navUlElement.classList.add('expanded');
				isExpanded = true;
			});
		}
	});
};

handleCollapsibleMenu();
