import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Form() {

    const pizzaSizes = {
        title: "Size",
        options: ["Small", "Medium", "Large"]
    }
    const toppings = {
        title:"Topping",
        options: ["Pepperoni", "Mayonaise", "Lettuce"]
    }

    const healthy = ["Glutten free"]

    return(
        <>
            <form className="pizza-form">
                <h2 className="pizza-form-title">Order Your Pizza</h2>
                <div>
                    <RadioButtons
                        title={pizzaSizes.title}
                        options={pizzaSizes.options}
                />
                </div>
                <div>
                    <DrowpdownSelect
                        title={toppings.title}
                        options={toppings.options}
                    />
                </div>
                <div>
                    <Checkbox label={healthy[0]}/>
                </div>
            </form>
        </>
    )
}

function Checkbox({ label }) {
    return (
        <>
            <lable for={label}>{label}</lable>
            <input type="checkbox" name={label}/>
        </>
    )
}

function DrowpdownSelect({ title, options }) {
    return (
        <>
            <h3>{title}</h3>
            <select name={title}>
                {options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}

function RadioButtons({ title, options }) {
    const [ current, setCurrent ] = useState()

    function handleRadio(event) {
        setCurrent(oldOption => (
            event.target.value
        ))
    }

    return (
        <>
            <h3>{title}</h3>
            {options.map(option => (
                <div className="radioInputs">
                    <label>{option}</label>
                    <input
                        key={option}
                        type="radio"
                        value={option}
                        checked={current === option}
                        onChange={handleRadio}
                    />
                </div>
            ))}
        </>
    )
}

ReactDOM.render(<Form/>,
    document.getElementById("root"))