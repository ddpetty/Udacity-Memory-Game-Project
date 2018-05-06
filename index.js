window.onload = () => {
	let cards = document.querySelectorAll('.card');

	cards.forEach((card) => {
		if (!card.classList.contains('is-flipped')) {
			//console.log(card);
			card.addEventListener('click', function () {
				card.classList.add('is-flipped');
				setTimeout(() => {
					card.classList.remove('is-flipped');
				}, 4000);
			});
		}
	});








}