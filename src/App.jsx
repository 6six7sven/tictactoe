import React, {  useState  } from "react";
import Board from "./components/Board";
import History from "./components/history";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helpers";

//yash rai moment 
import "./styles/root.scss"

const NEW_GAME = [  {board: Array(9).fill(null), isXNext: true  },
];
// this is not html syntax its akhchually react syntax
// a component must return a single element 
// <> is basically react fragment (empty element)
const App = () => {

	const [history, setHistory] = useState(NEW_GAME);
	const [currentMove, setCurrentMove] = useState(0);

	const current = history[currentMove];
	//console.log('history', history);
  
	const {winner, winningSquares} = calculateWinner(current.board);

	
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

	const onNewGame = () => {
		setHistory(NEW_GAME);
		setCurrentMove(0);
	}

	return (
		<div className="app">
			<h1> Tic <span className="text-green"> Tac</span> Toe </h1>
			<StatusMessage winner = {winner} current = {current}/>
			<Board board = {current.board} handleSquareClick={handleSquareClick} winningSquares = {winningSquares}/>
			<button type = "button" onClick={onNewGame} className = {`btn-reset ${winner ? 'active' : ' '}`}> Start New Game </button>
			<h2 className={{fontWeight: 'normal'}}> Current Game History</h2>
			<History history = {history} moveTo = {moveTo} currentMove = {currentMove}/> 
			<div className="bg-balls"/>
		</div>
	);
};

export default App;


