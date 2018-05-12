/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

window.onload = () => {

	let cardBacks = document.getElementsByClassName('.back'),
	cards = document.querySelectorAll('.card'),
	cardFlipped,
		cardImages = ['<i class="fas fa-coffee"></i>', '<i class="fas fa-coffee"></i>', '<i class="fas fa-code-branch"></i>', '<i class="fas fa-code-branch"></i>', '<i class="fas fa-code"></i>', '<i class="fas fa-code"></i>', '<i class="fas fa-window-close"></i>', '<i class="fas fa-window-close"></i>', '<i class="fas fa-file-code"></i>', '<i class="fas fa-file-code"></i>', '<i class="fas fa-terminal"></i>', '<i class="fas fa-terminal"></i>', '<i class="fas fa-qrcode"></i>', '<i class="fas fa-qrcode"></i>', '<i class="fas fa-user-secret"></i>', '<i class="fas fa-user-secret"></i>'],
		resetButton = document.querySelector('.reset'),
		numCardsFlipped = 0;

	// Shuffle function is from http://stackoverflow.com/a/2450976
	let shuffleCards = (array) => {
		let currentIndex = array.length,
			temporaryValue, randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
	shuffleCards(cardImages);

	//Loop over cardImages and output to back of cards
	cardImages.forEach((cardImage) => {
    cardBacks.innerHTML = cardImage;
	console.log(cardBacks.innerHTML);

	});

	let resetGame = () => {
		let resetBtn = document.querySelector('.reset');
		resetButton.addEventListener('click', newGame());
	}

	let newGame = () => {
		numCardsFlipped = 0;
		let cardOutput = '';

	}
	// Checks if card doesn't have class, adds is-flipped class, then flips it back over after 4 sec.
	let flipCard = () => {
		cards.forEach((card) => {
			if (!card.classList.contains('is-flipped')) {
				card.addEventListener('click', function (e) {
					card.classList.add('is-flipped');
					cardFlipped = true;
					// setTimeout(() => {
					// 	card.classList.remove('is-flipped');
					// 	cardIsFlipped = false;
					// }, 4000);
				});
			}
		});
	}
	flipCard();

}