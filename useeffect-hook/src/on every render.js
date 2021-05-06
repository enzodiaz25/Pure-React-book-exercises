import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const LogEffect = () => {
    const [text, setText] = useState("")

    // Runs after every render (first one included).
    // First argument is a callback.
    // It's possible to use an array as second argument. Use
    // effect will then only trigger when values inside the
    // array change (i.e., [username] )
    // This array is called "array of dependencies"
    useEffect(() => {
        console.log("Latest value:", text)
    })

    return (
        <input
            value={text}
            onChange={e => setText(e.target.value)}
        />
    )
}

ReactDOM.render(
    <LogEffect />,
    document.querySelector("#root")
)