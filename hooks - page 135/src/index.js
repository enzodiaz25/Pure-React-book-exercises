import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AudioControls() {

    const controls = [
        { id: "volume", name: "Volume" },
        { id: "bass", name: "Bass" },
        { id: "mid", name: "Mid" },
        { id: "treble", name: "Treble" },
    ]

    // Notar la desestructuración en controls.map.
    // Simplifica el código
    return(
        <>
            {controls.map(({id, name}) => (
                <Control key={id} name={name} id={id}/>
            ))}
        </>
    )
}

function Control({ id, name }) {
    const [ controlValue, setControlValue ] = useState(50)

    function handleControl (option) {
        setControlValue(oldValue => (
            option === "+" ? oldValue + 1 : oldValue - 1
        ))

    }

    return(
        <div>
            <button onClick={() => handleControl("+")}>
                +
            </button>
            <label>{name}: {controlValue}</label>
            <button onClick={() => handleControl("-")}>
                -
            </button>
        </div>
    )
}

ReactDOM.render(<AudioControls/>,
    document.querySelector("#root"));
