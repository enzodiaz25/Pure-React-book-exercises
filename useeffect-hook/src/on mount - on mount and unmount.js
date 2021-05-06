import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// This is basically using useEffect as if it was
// "componentDidMount"
// This APP will focus the input field automatically
// after the first render. useEffect() will not execute
// again after that (given that inputRef no longer changes).
// READ AT THE BOTTOM FOR AN IMPORTANT NOTE.

function App() {
    // Store a reference to the input's DOM node
    const inputRef = useRef();

    // Store the input's value in state.
    // Each change on the input field will trigger a
    // re-render, but useEffect will only execute after
    // the first one
    const [value, setValue] = useState("");

    useEffect(
        () => {
            // This runs AFTER the first render,
            // so the ref is already set
            console.log("render");
            inputRef.current.focus()
        },
        // The effect "depends on" inputref
        [inputRef]
    );

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}

// Note: If useEffect receives and empty array, it will
// only execute on mount and unmount. YOU NEED TO RETURN A
// SECOND FUNCTION FOR WHEN UNMOUNTING.
/*
useEffect(() => {
    console.log("mounted")
    return () => console.log("unmounting");
}, []) <-- add this empty array here
*/

ReactDOM.render(<App/>, document.querySelector("#root"))