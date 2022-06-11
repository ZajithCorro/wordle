import { validLetters } from '../assets/validLetters';

let currentIndexLetter = 1;

function pushLetter(letter) {
	const key = letter.toLowerCase();

	const isLetter = validLetters.includes(key);
	const canAddLetter = currentIndexLetter <= 5;

	if (isLetter && canAddLetter) addLeter(key);
}

function addLeter(letter) {
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${currentIndexLetter})`);

	currentLetter.classList.add('pop');
	currentLetter.textContent = letter;
	currentIndexLetter++;
}

export { pushLetter };
