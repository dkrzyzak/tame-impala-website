const discography = [
	{
		title: 'InnerSpeaker',
		year: 2010,
		coverUrl: './assets/covers/innerspeaker.jpg',
		textShadowColor: '#2a704a',
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
			{
				name: "Why Won't You Make Up Your Mind",
				duration: '3:19',
			},
			{
				name: 'Solitude Is Bliss',
				duration: '3:55',
			},
			{
				name: "Jeremy's Storm",
				duration: '5:28',
			},
			{
				name: 'Expectation',
				duration: '6:02',
			},
			{
				name: 'The Bold Arrow Of Time',
				duration: '4:25',
			},
			{
				name: 'Runaway Houses City Clouds',
				duration: '7:15',
			},
			{
				name: "I Don't Really Mind",
				duration: '3:47',
			},
		],
	},
	{
		title: 'Lonerism',
		year: 2012,
		coverUrl: './assets/covers/lonerism.jpg',
		textShadowColor: '#fcd1ae',
		tracklist: [
			{
				name: 'Be Above It',
				duration: '3:21',
			},
			{
				name: 'Endors Toi',
				duration: '3:06',
			},
			{
				name: 'Apocalypse Dreams',
				duration: '5:56',
			},
			{
				name: 'Mind Mischief',
				duration: '4:31',
			},
			{
				name: 'Music To Walk Home By',
				duration: '5:12',
			},
			{
				name: "Why Won't They Talk To Me",
				duration: '4:46',
			},
			{
				name: 'Feels Like We Only Go Backwards',
				duration: '3:12',
			},
			{
				name: 'Keep On Lying',
				duration: '5:53',
			},
			{
				name: 'Elephant',
				duration: '3:31',
			},
			{
				name: "She Just Won't Believe Me",
				duration: '0:57',
			},
			{
				name: 'Nothing That Has Happened',
				duration: '5:59',
			},
			{
				name: "Sun's Coming Up",
				duration: '5:20',
			},
		],
	},
	{
		title: 'Currents',
		year: 2015,
		coverUrl: './assets/covers/currents.jpg',
		textShadowColor: '#654e6a',
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
			{
				name: 'Eventually',
				duration: '5:18',
			},
			{
				name: 'Gossip',
				duration: '0:55',
			},
			{
				name: 'The Less I Know The Better',
				duration: '3:36',
			},
			{
				name: 'Past Life',
				duration: '3:48',
			},
			{
				name: 'Disciples',
				duration: '1:48',
			},
			{
				name: "'Cause I'm A Man",
				duration: '4:01',
			},
			{
				name: 'Reality In Motion',
				duration: '4:12',
			},
			{
				name: 'Love/Paranoia',
				duration: '3:05',
			},
			{
				name: 'New Person, Same Old Mistakes',
				duration: '6:03',
			},
		],
	},
	{
		title: 'The Slow Rush',
		year: 2020,
		coverUrl: './assets/covers/slowrush.jpg',
		textShadowColor: '#910402',
		tracklist: [
			{
				name: 'One More Year',
				duration: '5:24',
			},
			{
				name: 'Instant Destiny',
				duration: '3:14',
			},
			{
				name: 'Borderline',
				duration: '3:57',
			},
			{
				name: 'Posthumous Forgiveness',
				duration: '6:06',
			},
			{
				name: 'Breathe Deeper',
				duration: '6:12',
			},
			{
				name: "Tommorow's Dust",
				duration: '5:26',
			},
			{
				name: 'On Track',
				duration: '5:01',
			},
			{
				name: 'Lost In Yesterday',
				duration: '4:09',
			},
			{
				name: 'Is It True',
				duration: '3:59',
			},
			{
				name: 'It Might Be Time',
				duration: '4:33',
			},
			{
				name: 'Glimmer',
				duration: '2:09',
			},
			{
				name: 'One More Hour',
				duration: '7:12',
			},
		],
	},
];

const createElement = (elementType = 'div', classList = []) => {
	const element = document.createElement(elementType);

	classList.forEach((className) => {
		element.classList.add(className);
	});

	return element;
};

const generateDiscographySection = () => {
	const documentFragment = document.createDocumentFragment();

	discography.forEach(({ title, year, coverUrl, textShadowColor, tracklist }) => {
		// CONTAINER
		const albumContainer = createElement('div', ['album-container', 'swiper-slide']);

		// TITLE
		const titleContainer = createElement('div', ['album-title']);
		titleContainer.textContent = title.toUpperCase();
		titleContainer.style.textShadow = `2px 2px 4px ${textShadowColor}`;
		albumContainer.appendChild(titleContainer);

		// YEAR
		const yearContainer = createElement('div', ['album-year']);
		yearContainer.textContent = year;
		// yearContainer.style.textShadow = `2px 2px 2px ${textShadowColor}`;
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
