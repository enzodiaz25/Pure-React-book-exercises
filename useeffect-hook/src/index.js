import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function TitleChange() {
    const [title, setTitle] = useState("");
    const [count, setCount] = useState(0)
    const [isMounted, setMounted] = useState(true)

    // Change the page title if there's something in
    // "title" (i.e. not in the first render)
    useEffect(() => {
        if (title) {
            document.title = title
        } else {
            document.title = "React APP"
        }
    }, [title])

    useEffect(() => {
        // If child isn't mounted, reset counter
        !isMounted && setCount(() => 0)
    }, [isMounted])

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleClick() {
        setCount((state) => (state + 1))
    }

    return (
        <>
            <input
                value={title}
                onChange={handleChange}
            />
            <h3>You clicked {count} times</h3>
            <button onClick={() => setMounted(() => true)}>
                Mount the counter button
            </button>
            <button onClick={() => setMounted(() => false)}>
                Unmount the counter button
            </button>
            {isMounted &&
            <CounterButton
                handleClick={handleClick}
            />}
        </>
    )
}

function CounterButton ({ handleClick }) {
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}

ReactDOM.render(<TitleChange/>,
    document.querySelector("#root"))
