import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const Page = ({ initialValue }) => (
    <div>
        <CountingParent initialValue={initialValue}/>
        <CountingParent initialValue={initialValue}/>
        <CountingParent initialValue={initialValue}/>
    </div>
)

function Child({ onAction }) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}

// Component without constructor
class CountingParent extends React.Component {

    //### Variables
    // You can acces this.props if needed
    state = {
        actionCount: this.props.initialValue
    }

    //### Methods
    // Escribir el handler como una arrow function significa
    // que se retendrá el valor correcto de "this", así que no
    // es necesario hacerle bind.
    // Explicación: "this" en una arrow function se resuelve léxicamente,
    // En el caso de una clase, se "this" será siempre el de esa clase, pero
    // si se trata de un método en un objeto {const método = () => {}}
    // (NO EN UNA CLASE), entonces "this" referencia al contexto que está por fuera
    // de ese objeto
    handleAction = (action) => {
        console.log("Child says", action)
        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        )
    }
}

ReactDOM.render(<Page initialValue={4}/>,
    document.getElementById("root"))