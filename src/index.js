import './styles.css';
import { ROWS_OF_LETTERS } from './assets/letters';

const NUMBER_OF_WORDS = 6;
const NUMBER_OF_LETTERS = 5;

function initialRender() {
	renderGameBoard();
	renderKeyBoard();
}

function renderGameBoard() {
	const gameBoard = document.querySelector('#game-board');

	for (let i = 0; i < NUMBER_OF_WORDS; i++) {
		const row = document.createElement('div');
		row.classList.add('word');

		for (let j = 0; j < NUMBER_OF_LETTERS; j++) {
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
			div.appendChild(button);
		});

		keyBoard.appendChild(div);
	});
}

document.addEventListener('DOMContentLoaded', initialRender);
