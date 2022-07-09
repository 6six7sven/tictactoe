import React, {  useState  } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";

import "./styles/root.scss"
// this is not html syntax its akhchually react syntax
// a component must return a single element 
// <> is basically react fragment (empty element)
const App = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(false);
  
	const winner = calculateWinner(board);

	const message = winner 
		? `winner is ${winner}` 
		: `Next player is ${isXNext ? "X" : "O"}`;

	console.log(winner);
	//console.log(board);
  
	const handleSquareClick = position => {
	  if (board[position] || winner ){
		return;
	  }
  
	  setBoard(prev => {
		return prev.map((square, pos) => {
		  if (pos === position) {
			return isXNext ? 'X' : 'O';
		  }
  
		  return square;
		});
	  });
  
	  setIsXNext(prev => !prev);
	};

	return (
		<div className="app">
			<h1> Tic Tac Toe </h1>
			<h2>	{  message  }		</h2>
			<Board board = {board} handleSquareClick={handleSquareClick}/>
		</div>
	);
};

export default App;





/* 
export default () => (
  <>
	<h1>Welcome to React Vite Micro App!</h1>
	<p>Hard to get more minimal than this React app.</p>
  </>
); */
