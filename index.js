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

	let cardBacks = document.getElementsByClassName('back'),
		cards = document.querySelectorAll('.card'),
		cardImages = ['<i class="fas fa-coffee"></i>', '<i class="fas fa-coffee"></i>', '<i class="fas fa-code-branch"></i>', '<i class="fas fa-code-branch"></i>', '<i class="fas fa-code"></i>', '<i class="fas fa-code"></i>', '<i class="fas fa-window-close"></i>', '<i class="fas fa-window-close"></i>', '<i class="fas fa-file-code"></i>', '<i class="fas fa-file-code"></i>', '<i class="fas fa-terminal"></i>', '<i class="fas fa-terminal"></i>', '<i class="fas fa-qrcode"></i>', '<i class="fas fa-qrcode"></i>', '<i class="fas fa-user-secret"></i>', '<i class="fas fa-user-secret"></i>'],
		resetButton = document.querySelector('.reset'),
		numCardFlips = [];

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

	let startGame = () => {
		//shuffleCards(cardImages);
		// Loop over cardImages and output to back of cards
		// for (let i=0; i < cardBacks.length; i++) {
		// 	let iconDivs = document.createElement('div');
		// 	iconDivs.classList.add('card-icons');
		// 	iconDivs.innerHTML = cardImages[i];
		// 	cardBacks[i].appendChild(iconDivs);
		// }
		//flipCard();

	}

	// Loop over cardImages and output to back of cards
	for (let i = 0; i < cardBacks.length; i++) {
		let iconDivs = document.createElement('div');
		iconDivs.classList.add('card-icons');
		iconDivs.innerHTML = cardImages[i];
		cardBacks[i].appendChild(iconDivs);
	}

	let resetGame = () => {
		let resetBtn = document.querySelector('.reset');
		resetButton.addEventListener('click', startGame());
	}

	// Add event listener to cards
	cards.forEach(function (card) {
		card.addEventListener('click', function (event) {
			// The event target is flipped
			let flipped = event.target;
			//counts flips
			let count = 0;
			if (numCardFlips.length < 2) {
				count++;
				card.classList.add('is-flipped');
			}
			numCardFlips.push(count); //numCardFlips = [];
			
			//Have to track to see if flipped cards match
			// Reset it after the cards are evaluated, allowing for the cards to be selected again or not
			//Repeat process until cards.length is reached
		});
	});
} // end window.onload()