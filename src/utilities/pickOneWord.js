import words from '../constants/words.json';

function pickOneWord() {
	const randomIndex = Math.floor(Math.random() * words.length);
	return words[randomIndex];
}

export { pickOneWord };
