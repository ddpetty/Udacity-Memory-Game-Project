/*
Each turn:

The player flips one card over to reveal its underlying symbol.
The player then turns over a second card, trying to find the corresponding card with the same symbol.
If the cards match, both cards stay flipped over.
If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

Game Functionality

Flipping cards
What happens when cards match - both cards should stay open
What happens when cards do not match - both cards should flip back over 
When the game finishes - display message (The game is over! Press the reset button for a new game.)

*/
window.onload = () => {
	let cards = document.querySelectorAll('.card'),
		matches = 0,
		selectedCard = [],
		cardIsFlipped = false,
	symbols = ['<i class="fas fa-coffee"></i>', '<i class="fas fa-code-branch"></i>', '<i class="fas fa-code"></i>', '<i class="fas fa-window-close"></i>', '<i class="fas fa-file-code"></i>', '<i class="fas fa-terminal"></i>', '<i class="fas fa-qrcode"></i>', '<i class="fas fa-user-secret"></i>'];

	// Checks if card doesn't have class, adds is-flipped class, then flips it back over after 4 secs.
	cards.forEach((card) => {
		if (!card.classList.contains('is-flipped')) {
			//console.log(card);
			card.addEventListener('click', () => {
				card.classList.add('is-flipped');
				cardIsFlipped = true;
				setTimeout(() => {
					card.classList.remove('is-flipped');
					cardIsFlipped = false;
				}, 1000);
			});
		}
	});

	//Looping through symbols array
	for (let i = 0; i < 8; i++) {
		// Randomly pick one from the array of faces
		let randomIndex = Math.floor(Math.random(symbols.length));
		let symbol = symbols[randomIndex];
		// Push 2 copies onto array
		selectedCard.push(symbol);
		selectedCard.push(symbol);
		// Remove from symbols array so user doesn't re-pick
		symbols.splice(randomIndex, 1);
	}

	// Shuffles the selectedCard array | courtesy of StackOverflow
	function shuffleArray(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}
	shuffleArray(selectedCard);

	//Need to append symbols to cards

}