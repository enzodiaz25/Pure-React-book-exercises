import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ControlledInputs() {
    const [ name, setName ] = useState({
        firstName: "",
        lastName: ""
    })

    function handleFirstName(event) {
        setName(oldName => ({
            ...oldName,
            firstName: event.target.value,
        }))
    }

    function handleLastName(event) {
        setName(oldName => ({
            ...oldName,
            lastName: event.target.value
        }))
    }

    return (
        <>
            <h3>Hello, {name.firstName} {name.lastName}</h3>
            <div>
                <label>First name:</label>
                <input
                    type="text"
                    placeholder="Your name"
                    onChange={handleFirstName}
                />
            </div>
            <div>
                <label>Last name:</label>
                <input
                    type="text"
                    placeholder="Your lastname"
                    onChange={handleLastName}
                />  
            </div>

        </>
    )
}

ReactDOM.render(<ControlledInputs/>,
    document.querySelector("#root"));