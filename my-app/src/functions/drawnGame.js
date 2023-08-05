export const drawnGame = (arr, i) => {
	let counter = 0;
	for (i <= arr; i++) {
		if (arr[i] === 'X' || 'O') counter = counter + 1;
	}
	if (counter === 8) {
		return 'Никто';
	}
};
