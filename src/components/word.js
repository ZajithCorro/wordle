import { validLetters } from '../constants/validLetters';
import WORDS from '../constants/words';

let numberOfLetters = 0;
const word = [];

function pushLetter(letter) {
	const key = letter.toLowerCase();

	const isBackspace = key === 'backspace';
	const isEnter = key === 'enter';
	const isLetter = validLetters.includes(key);
	const canAddLetter = numberOfLetters < 5;

	isEnter && validateWord();
	isBackspace && removeLetter();

	if (isLetter && canAddLetter) addLeter(key);
}

function addLeter(letter) {
	const currentIndexLetter = numberOfLetters + 1;
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${currentIndexLetter})`);

	currentLetter.classList.add('pop');
	currentLetter.textContent = letter;
	numberOfLetters++;
	word.push(letter);
}

function removeLetter() {
	if (numberOfLetters < 1) return;

	const lastIndexLetter = numberOfLetters;
	const currentWord = document.querySelector('div[data-current-word]');
	const currentLetter = currentWord.querySelector(`span:nth-child(${lastIndexLetter})`);

	currentLetter.classList.remove('pop');
	currentLetter.textContent = '';
	numberOfLetters--;
	word.pop();
}

function validateWord() {
	const currentWord = document.querySelector('div[data-current-word]');
	const joinedWord = word.join('');

	if (numberOfLetters < 5) {
		currentWord.classList.add('shake');
		setTimeout(() => {
			currentWord.classList.remove('shake');
			alert('The word must have 5 letters');
		}, 500);
		return;
	}

	if (!WORDS.includes(joinedWord)) {
		currentWord.classList.add('shake');
		setTimeout(() => {
			currentWord.classList.remove('shake');
			alert('The word is not valid');
		}, 500);
		return;
	}
}

export { pushLetter };
