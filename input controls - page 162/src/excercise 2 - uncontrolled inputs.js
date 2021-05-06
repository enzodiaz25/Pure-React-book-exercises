import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ControlledInputs() {
    const [ name, setName ] = useState({
        firstName: "",
        lastName: ""
    })

    const firstNameRef = useRef()
    const lastNameRef = useRef()

    function handleFirstName() {
        setName(oldName => ({
            ...oldName,
            firstName: firstNameRef.current.value,
        }))
    }

    function handleLastName() {
        setName(oldName => ({
            ...oldName,
            lastName: lastNameRef.current.value
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
                    ref={firstNameRef}
                    onChange={handleFirstName}
                />
            </div>
            <div>
                <label>Last name:</label>
                <input
                    type="text"
                    placeholder="Your lastname"
                    ref={lastNameRef}
                    onChange={handleLastName}
                />  
            </div>

        </>
    )
}

ReactDOM.render(<ControlledInputs/>,
    document.querySelector("#root"));