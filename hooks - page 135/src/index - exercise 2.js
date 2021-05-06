import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function RandomList() {
    const [numbers, setNumbers] = useState([]);

    function handleClick() {
        setNumbers(numbers => {
            return [
                ...numbers,
                Math.random() * 100  
            ]
        })
    }

    return (
        <>
            <button onClick={handleClick}>Add a random number</button>
            <ul>
                {numbers.map(number => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
        </>
    )
}

ReactDOM.render(<RandomList/>,
    document.querySelector("#root"));