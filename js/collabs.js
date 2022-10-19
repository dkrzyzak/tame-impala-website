const collabArticles = document.querySelectorAll('.collab');

collabArticles.forEach((article) => {
	// children[0] -> span.badge
	// children[1] -> iframe from spotify

	article.children.item(1).addEventListener('load', () => {
		article.children.item(0).classList.add('ready');
	});
});
