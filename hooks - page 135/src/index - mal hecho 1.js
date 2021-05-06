import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AudioControls() {
    // Tener estados comunes por separado (y no en un solo objeto), me obliga
    // a recurrir a una de dos soluciones:
    // A) Pasar el hook que maneja el estado al hijo para crear un componente
    // reutilizable. Si cada hijo manejaría su propio estado (es decir, definiese
    // const [estado, setEstado] dentro de sí mismo.
    // B) Crear una función handleClick distinta para cada hijo en el padre. Las 4 serían
    // casi identicas, con la excepción de que una llamaría a setVolume, otra a setBass, etc.
    // C) Crear un sólo estado que maneje los 4 controladores y pasar la función como parámetro
    const [volume, setVolume] = useState(50)
    const [bass, setBass] = useState(50)
    const [mid, setMid] = useState(50)
    const [treble, setTreble] = useState(50)

    // Pasar el hook a los hijos provocará que cuando el estado cambie se rendericen
    // (si es necesario) sus hermanos
    return(
        <>
            <Control name="Volume" value={volume} handleClick={setVolume}/>
            <Control name="Bass" value={bass} handleClick={setBass}/>
            <Control name="Mid" value={mid} handleClick={setMid}/>
            <Control name="Treble" value={treble} handleClick={setTreble}/>
        </>
    )
}

function Control({ name, value, handleClick }) {
    return(
        <div>
            <button onClick={() => handleClick(value => value < 100 ? value + 1 : value)}>
                +
            </button>
            <label>{name}: {value}</label>
            <button onClick={() => handleClick(value => value > 0 ? value - 1 : value)}>
                -
            </button>
        </div>
    )
}

ReactDOM.render(<AudioControls/>,
    document.querySelector("#root"));
