window.onload = () => {

	let cards = document.querySelectorAll('.card'),
		selectedCards = [],
		cardFlipped = false,
		numCardsFlipped = 0,
		cardBacks = document.querySelectorAll('.back'),
		symbols = ['<i class="fas fa-coffee"></i>', '<i class="fas fa-code-branch"></i> ', '<i class="fas fa-code"></i>', '<i class="fas fa-window-close"></i>', '<i class="fas fa-file-code"></i>', '<i class="fas fa-terminal"></i>', '<i class="fas fa-qrcode"></i>', '<i class="fas fa-user-secret"></i>'];


	// Array has two of each, then randomize it
	let possibleSelectedCards = symbols.slice(0);
	for (let i = 0; i < 8; i++) {
		// Randomly pick one from the array of symbols left
		let randomIndex = Math.floor(Math.random(possibleSelectedCards.length)),
			symbol = possibleSelectedCards[randomIndex];
		// Push two copies or symbols onto selectedCards array
		selectedCards.push(symbol);
		selectedCards.push(symbol);
		// Remove from array
		possibleSelectedCards.splice(randomIndex, 1);
	}

	//Randomize the selectedCards array
	selectedCards.sort(() => {
		return 0.5 - Math.random();
	});
	console.log(selectedCards);

	//Create divs that hold symbols & push to back of card
	let randomizedSymbols = [];
	let symbolSpans = document.createElement('span');
	symbolSpans.innerHTML = selectedCards.pop();
	randomizedSymbols.push(symbolSpans.innerHTML);

	// Checks if card doesn't have class, adds is-flipped class, then flips it back over after 4 sec.
	let flipCard = () => {
		cards.forEach((card) => {
			if (!card.classList.contains('is-flipped')) {
				card.addEventListener('click', () => {
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

	// let startGame = () => {
	// 	reset cards
	// 	Shuffle Cards
	// 	add symbols to back of cards
	// 	flip two cards
	// 	if they match, both stay open
	// 	if they don't, they flip back over
	// 	keep doing this until all cards are flipped
	// 	game over display message (The game is over! Press the reset button for a new game.)

}