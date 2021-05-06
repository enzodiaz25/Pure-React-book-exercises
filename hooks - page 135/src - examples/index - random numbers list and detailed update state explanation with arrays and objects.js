import React, { useState } from "react";
import ReactDOM from "react-dom";

function RandomList() {
    // El estado (items) será un arreglo inicialmente vacío
    const [items, setItems] = useState([]);

    const addItem = () => {
        // Recordar que al actualizar el estado NUNCA se
        // modifica directamente su valor actual, sino que se
        // crea una copia. SE LO SOBREESCRIBE SIEMPRE. Esta es la principal diferencia con
        // setState de clases, que podía actualizar sólo un valor
        // del objeto estado sin sobreescribirlo por completo (al
        // menos en un nivel superficial).
        // LO MISMO DEBERÍA HACERSE SI EL ESTADO ES UN OBJETO !!!!!!
        // Recomendación: Usar el spread operator "..."
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.random() * 100
            }
        ]);
    };

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    )
}

ReactDOM.render(
    <RandomList/>,
    document.querySelector("#root")
)