import { ROWS_OF_LETTERS } from './constants/letters';
import { MAX_NUMBER_OF_LETTERS, MAX_NUMBER_OF_TRIES } from './constants/rules';
import { pushLetter } from './components/word';
import { pickOneWord } from './utilities/pickOneWord';

import './styles.css';

const secretWord = pickOneWord();

function init() {
	render();
	listeners();
}

function renderGameBoard() {
	const gameBoard = document.querySelector('#game-board');

	for (let i = 0; i < MAX_NUMBER_OF_TRIES; i++) {
		const row = document.createElement('div');
		if (i === 0) row.setAttribute('data-current-word', true);
		row.classList.add('word');

		for (let j = 0; j < MAX_NUMBER_OF_LETTERS; j++) {
			const span = document.createElement('span');
			span.classList.add('letter');
			row.appendChild(span);
		}

		gameBoard.appendChild(row);
	}
}

function renderKeyBoard() {
	const keyBoard = document.querySelector('#keyboard');

	ROWS_OF_LETTERS.forEach((row) => {
		const div = document.createElement('div');
		div.classList.add('keyboard-row');

		row.forEach((letter) => {
			const button = document.createElement('button');
			button.textContent = letter;
			button.classList.add('key');
			button.setAttribute('data-key', letter);
			button.setAttribute('type', 'button');
			div.appendChild(button);
		});

		keyBoard.appendChild(div);
	});
}

function listeners() {
	const keyboard = document.querySelector('#keyboard');

	keyboard.addEventListener('click', (event) => {
		const key = event.target;
		const keyValue = key.getAttribute('data-key');
		console.log(keyValue);
	});

	document.addEventListener('keyup', (event) => pushLetter(event.key));
}

function render() {
	renderGameBoard();
	renderKeyBoard();
}

document.addEventListener('DOMContentLoaded', init);
