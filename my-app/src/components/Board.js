import Square from './Square';
import { useState } from 'react';
import { calculateWinner } from '../functions/calculateWinner';
import styles from './Board.module.css';

export default function Board() {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));

	function restartGame() {
		setSquares(Array(9).fill(null));
	}

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquaers = squares.slice();
		if (xIsNext) {
			nextSquaers[i] = 'X';
		} else {
			nextSquaers[i] = 'O';
		}
		setSquares(nextSquaers);
		setXIsNext(!xIsNext);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner === 'X') {
		status = 'Победитель: игрок за X';
	} else if (winner === 'O') {
		status = 'Победитель: игрок за O';
	} else {
		status = 'Следущий ход: ' + (xIsNext ? 'X' : 'O');
	}

	return (
		<>
			<div className={styles.status}>{status}</div>
			<div className={styles.boardRow}>
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className={styles.boardRow}>
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className={styles.boardRow}>
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
			<button className={styles.newGame} onClick={restartGame}>
				Новая игра
			</button>
		</>
	);
}
