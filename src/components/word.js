import { validLetters } from '../constants/validLetters';

let currentIndexLetter = 1;

function pushLetter(letter) {
	const key = letter.toLowerCase();

	const isBackspace = key === 'backspace';
	const isLetter = validLetters.includes(key);
	const canAddLetter = currentIndexLetter <= 5;

	isBackspace && removeLetter();

	if (isLetter && canAddLetter) addLeter(key);
}

function addLeter(letter) {
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${currentIndexLetter})`);

	currentLetter.classList.add('pop');
	currentLetter.textContent = letter;
	currentIndexLetter++;
}

function removeLetter() {
	if (currentIndexLetter <= 1) return;

	const lastIndexLetter = currentIndexLetter - 1;
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${lastIndexLetter})`);

	currentLetter.classList.remove('pop');
	currentLetter.textContent = '';
	currentIndexLetter--;
}

export { pushLetter };
