import { validLetters } from '../constants/validLetters';
import WORDS from '../constants/words';

let numberOfLetters = 0;
let isEnded = false;
const word = [];

function pushLetter(letter, secretWord) {
	if (isEnded) return;

	const key = letter.toLowerCase();

	const isBackspace = key === 'backspace';
	const isEnter = key === 'enter';
	const isLetter = validLetters.includes(key);
	const canAddLetter = numberOfLetters < 5;

	isEnter && validateWord(secretWord);
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

function validateWord(secretWord) {
	const currentWord = document.querySelector('div[data-current-word]');
	const joinedWord = word.join('').toLowerCase();
	const isNotLongEnough = numberOfLetters < 5;

	if (isNotLongEnough) {
		currentWord.classList.add('shake');
		setTimeout(() => {
			currentWord.classList.remove('shake');
			alert('The word must have 5 letters');
		}, 500);
		return;
	}

	const existWord = WORDS.includes(joinedWord);

	if (!existWord) {
		currentWord.classList.add('shake');
		setTimeout(() => {
			currentWord.classList.remove('shake');
			alert('The word is not valid');
		}, 500);
		return;
	}

	const isEnded = evaluateWord(secretWord);

	if (!isEnded) {
		nextWord();
		return;
	}
}

function nextWord() {
	const currentWord = document.querySelector('div[data-current-word]');
	const nextWord = currentWord.nextElementSibling;

	if (nextWord) {
		currentWord.removeAttribute('data-current-word');
		nextWord.setAttribute('data-current-word', 'true');
		numberOfLetters = 0;
		word.length = 0;
	}

	return;
}

function evaluateWord(secretWord) {
	const secretLetters = secretWord.split('');
	const currentWord = document.querySelector('div[data-current-word]');

	word.forEach((letter, index) => {
		const currentLetter = currentWord.querySelector(`span:nth-child(${index + 1})`);
		const keyboardKey = document.querySelector(`button[data-key="${letter}"]`);

		if (secretLetters[index] === letter) {
			currentLetter.classList.add('correct');
			keyboardKey.removeAttribute('class');
			keyboardKey.classList.add('key', 'correct');
			return;
		}

		if (secretLetters.includes(letter)) {
			currentLetter.classList.add('present');
			keyboardKey.removeAttribute('class');
			keyboardKey.classList.add('key', 'present');
			return;
		}

		currentLetter.classList.add('absent');
		keyboardKey.removeAttribute('class');
		keyboardKey.classList.add('key', 'absent');
	});

	return checkIfEnded(secretWord);
}

function checkIfEnded(secretWord) {
	return word.join('').toLowerCase() === secretWord.toLowerCase();
}

export { pushLetter };
