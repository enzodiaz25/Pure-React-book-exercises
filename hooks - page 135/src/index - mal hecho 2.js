import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AudioControls() {
    const [audioValues, setAudioValues] = useState({
        volume: 50,
        bass: 50,
        mid: 50,
        treble: 50
    })

    function handleControl(option, id) {
        const oldValue = audioValues[id]
        const newValue = option === "+" ? oldValue + 1 : oldValue - 1
        
        setAudioValues(prevState => (
            {
                ...prevState,
                [`${id}`] : newValue
            }
        ))
    }

    return(
        <>
            <Control
                id="volume"
                name="Volume"
                value={audioValues.volume}
                handleControl={handleControl}
            />
            <Control
                id="bass"
                name="Bass"
                value={audioValues.bass}
                handleControl={handleControl}
            />
            <Control
                id="mid"
                name="Mid"
                value={audioValues.mid}
                handleControl={handleControl}
            />
            <Control
                id="treble"
                name="Treble"
                value={audioValues.treble}
                handleControl={handleControl}
            />
        </>
    )
}

function Control({ id, name, value, handleControl }) {
    return(
        <div>
            <button onClick={() => handleControl("+", id)}>
                +
            </button>
            <label>{name}: {value}</label>
            <button onClick={() => handleControl("-", id)}>
                -
            </button>
        </div>
    )
}

ReactDOM.render(<AudioControls/>,
    document.querySelector("#root"));
