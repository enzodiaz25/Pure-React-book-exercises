import React, { useState } from "react";
import ReactDOM from "react-dom";

function StepTracker() {
    // Ya no hace falta escribir React.useState, ya que
    // useState fue importado directamente más arriba
    const [steps, setSteps] = useState(0);

    function increment() {
        // Los métodos set pueden recibir el valor que se
        // actualizará: steps + 1
        // O una función donde se lo actualiza.
        // Enviar una función como parámetro permitira que React
        // la encole y siempre esté utilizando la última versión
        // del estado (ya que de otra manera, actualizar directamente
        // sobre el valor funciona de manera asincrona y podría traer
        // problemas)
        setSteps(steps => steps + 1);
    }

    return (
        <div>
            Today you've taken {steps} steps!
            <br/>
            {/* Si escribiese onClick={() => setSteps(steps => steps + 1)}
                también funcionaría */}
            <button onClick={increment}>I took another step</button>
        </div>
    )
}

ReactDOM.render(
    <StepTracker/>,
    document.querySelector("#root")
)