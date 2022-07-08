import React, { Children } from "react";

//import "./Square.style.css";


const Square = ({   value }) => {

    return <button type = "button" className="square"> {   value  } </button>
}

export default Square;