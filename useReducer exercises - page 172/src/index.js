import React, {useReducer} from "react"
import ReactDOM from "react-dom"
import "./index.css"

const fullPassword = "35678"

function passwordReducer(state, action) {
    let currentGuess = state + String(action)
    let partialPassword = fullPassword.slice(0, currentGuess.length)
    
    // Si erro el número actual...
    if (currentGuess !== partialPassword) {
        return ""
    }
    // Si acertó todos los números...
    if (currentGuess.length === fullPassword.length){
        return "Valid password"
    }
    // Si aún no alcanzó la cantidad máxima de caracteres...
    return currentGuess

}

function Keypad() {
    const [password, dispatchPassword] = useReducer(passwordReducer, "")

    function handleClick(event) {
        dispatchPassword(event.target.value)
    }

    const opacity = password ? "opacity-100" : ""
    const moveKeyboard = password ? "move-keyboard" : ""
    return (
        <>
            <p className={`password ${opacity}`}>
                {password}
            </p>

            <div className={`keypad ${moveKeyboard}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                    <button value={number} onClick={handleClick}>
                        {number}
                    </button>
                ))}
            </div>
        </>
    )
}

ReactDOM.render(<Keypad/>,
    document.querySelector("#root"))