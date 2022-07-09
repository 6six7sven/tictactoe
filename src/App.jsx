import React, {  useState  } from "react";
import Board from "./components/Board";
import History from "./components/history";
import { calculateWinner } from "./helpers";


import "./styles/root.scss"
// this is not html syntax its akhchually react syntax
// a component must return a single element 
// <> is basically react fragment (empty element)
const App = () => {

	const [history, setHistory] = useState([  {board: Array(9).fill(null), isXNext: true  },
	]);
	const [currentMove, setCurrentMove] = useState(0);

	const current = history[currentMove];
	//console.log('history', history);
  
	const winner = calculateWinner(current.board);

	const message = winner 
		? `winner is ${winner}` 
		: `Next player is ${current.isXNext ? "X" : "O"}`;

	//console.log(winner);
	//console.log(board);
  
	const handleSquareClick = position => {
	  if (current.board[position] || winner ){
		return;
	  }
  
	  setHistory(prev => {
		const last = prev[prev.length - 1];

		const newBoard = last.board.map((square, pos) => {
		  if (pos === position) {
			return last.isXNext ? 'X' : 'O';
		  }
  
		  return square;
		});
		return prev.concat({  board: newBoard, isXNext: !last.isXNext  });
	  });
  
	  setCurrentMove(prev => prev+1);
	};

	const moveTo = (move) => {
		setCurrentMove(move);
	}

	return (
		<div className="app">
			<h1> Tic Tac Toe </h1>
			<h2>	{  message  }		</h2>
			<Board board = {current.board} handleSquareClick={handleSquareClick}/>
			<History history = {history} moveTo = {moveTo} currentMove = {currentMove}/>  
		</div>
	);
};

export default App;


