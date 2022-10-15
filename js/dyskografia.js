const discography = [
	{
		title: 'InnerSpeaker',
		year: 2010,
		coverUrl: './assets/covers/innerspeaker.jpg',
		tracklist: [
			{
				name: 'It Is Not Meant To Be',
				duration: '5:21',
			},
			{
				name: 'Desire Be Desire Go',
				duration: '4:26',
			},
			{
				name: 'Alter Ego',
				duration: '4:47',
			},
			{
				name: 'Lucidity',
				duration: '4:31',
			},
		],
	},
	{
		title: 'Currents',
		year: 2015,
		coverUrl: './assets/covers/currents.jpg',
		tracklist: [
			{
				name: 'Let It Happen',
				duration: '7:47',
			},
			{
				name: 'Nangs',
				duration: '1:47',
			},
			{
				name: 'The Moment',
				duration: '4:15',
			},
			{
				name: "Yes I'm Changing",
				duration: '4:30',
			},
		],
	},
];

// const handleDiscographySlider = () => {
// 	const { width: singleSectionWidth } = document.querySelector('.album-container').getBoundingClientRect();
// 	const windowWidth = document.body.clientWidth;

// 	console.log('singleSectionWidth', singleSectionWidth);
// 	console.log('windowWidth', windowWidth);

// 	let currentDisplayedIndex = 0;
// 	const padding = (windowWidth - singleSectionWidth) / 2;
// 	const allAlbums = document.querySelectorAll('.album-container');

// 	allAlbums[currentDisplayedIndex].style.transform = `translateX(${padding}px)`;
// };

const createElement = (elementType = 'div', classList = []) => {
	const element = document.createElement(elementType);

	classList.forEach((className) => {
		element.classList.add(className);
	});

	return element;
};

const generateDiscographySection = () => {
	const documentFragment = document.createDocumentFragment();

	discography.forEach(({ title, year, coverUrl, tracklist }) => {
		// CONTAINER
		const albumContainer = createElement('div', ['album-container', 'swiper-slide']);

		// TITLE
		const titleContainer = createElement('div', ['album-title']);
		titleContainer.textContent = title.toUpperCase();
		albumContainer.appendChild(titleContainer);

		// YEAR
		const yearContainer = createElement('div', ['album-year']);
		yearContainer.textContent = year;
		albumContainer.appendChild(yearContainer);

		// IMAGE COVER
		const coverContainer = createElement('div', ['album-cover-container']);
		const albumCover = createElement('img', ['album-cover']);
		albumCover.src = coverUrl;
		coverContainer.appendChild(albumCover);
		albumContainer.appendChild(coverContainer);

		// TRACKLIST
		const tracklistContainer = createElement('ul', ['tracklist-container']);
		tracklist.forEach((trackData, index) => {
			const singleTrack = createElement('li', ['single-track']);

			const trackName = createElement('span', ['track-name']);
			trackName.textContent = `${index + 1}. ${trackData.name}`;

			const duration = createElement('span', ['track-duration']);
			duration.textContent = trackData.duration;

			singleTrack.appendChild(trackName);
			singleTrack.appendChild(duration);
			tracklistContainer.appendChild(singleTrack);
		});
		albumContainer.appendChild(tracklistContainer);

		documentFragment.appendChild(albumContainer);
	});

	document.querySelector('.swiper-wrapper').appendChild(documentFragment);
	// handleDiscographySlider();
};

generateDiscographySection();

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: false,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
