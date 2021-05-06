import React from "react"
import ReactDOM from "react-dom"

function OneTimeButton({ onClick }) {

    // useState es un hook.
    // Por regla, los hooks siempre deben comenzar con "use".
    // useState toma como parámetro el estado inicial y retorna un
    // arreglo con 2 elementos: el estado y una función que permite
    // cambiarlo.
    // Se realización desestructuración de ambas cosas del array
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        onClick();
        setClicked(true)
    }

    return(
        <button onClick={handleClick} disabled={clicked}>
            You can only click me once
        </button>
    )
}

ReactDOM.render(<OneTimeButton onClick={() => alert("hi")}/>,
    document.querySelector("#root"))