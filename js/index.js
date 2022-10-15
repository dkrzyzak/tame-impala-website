const handleCollapsibleMenu = () => {
	const collapsibleControl = document.querySelector('.collapse-control');
	const navUlElement = document.querySelector('nav ul');

	collapsibleControl.addEventListener('click', () => {
		navUlElement.classList.toggle('expanded');
	});
};

handleCollapsibleMenu();
