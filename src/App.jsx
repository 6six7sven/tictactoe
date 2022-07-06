import React from "react";
import Board from "./components/Board";

// this is not html syntax its akhchually react syntax
// a component must return a single element 
// <> is basically react fragment (empty element)
const App = () => {
	return (
		<div>
			<h1> Tic Tac Toe </h1>
			<Board></Board>
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
