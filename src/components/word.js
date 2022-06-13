import { validLetters } from '../constants/validLetters';

let numberOfLetters = 0;

function pushLetter(letter) {
	const key = letter.toLowerCase();

	const isBackspace = key === 'backspace';
	const isEnter = key === 'enter';
	const isLetter = validLetters.includes(key);
	const canAddLetter = numberOfLetters < 5;

	isEnter && validateWord();
	isBackspace && removeLetter();

	if (isLetter && canAddLetter) addLeter(key);
	console.log(numberOfLetters);
}

function addLeter(letter) {
	const currentIndexLetter = numberOfLetters + 1;
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${currentIndexLetter})`);

	currentLetter.classList.add('pop');
	currentLetter.textContent = letter;
	numberOfLetters++;
}

function removeLetter() {
	if (numberOfLetters < 1) return;

	const lastIndexLetter = numberOfLetters;
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${lastIndexLetter})`);

	currentLetter.classList.remove('pop');
	currentLetter.textContent = '';
	numberOfLetters--;
}

function validateWord() {
	const currentWord = document.querySelector('div[data-current-word]');

	if (numberOfLetters < 5) {
		currentWord.classList.add('shake');
		setTimeout(() => {
			currentWord.classList.remove('shake');
		}, 1000);
	}
}

export { pushLetter };
