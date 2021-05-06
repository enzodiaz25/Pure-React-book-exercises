import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const Page = () => (
    <div>
        <CountingParent/>
        <CountingParent/>
        <CountingParent/>
    </div>
)

function Child({ onAction }) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}

class CountingParent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            actionCount: 0
        }

        this.handleAction = this.handleAction.bind(this)
        this.resetCounter = this.resetCounter.bind(this)
    }

    handleAction(action) {
        console.log("Child says", action)
        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }

    resetCounter(action) {
        // setState es asyncrono. Para que algo se ejecute después
        // de cambiar el estado, se le puede pasar un callback.
        // Otra manera es pasale una función como primer parametro.
        // Esa funciónd debe retornar el nuevo estado del objeto.
        // Internamente, cada llamada a setState encola una actualización
        // en el orden en que son llamadas (ver página 116). Siempre es
        // preferible usar esta forma funcional de llamar a setState.
        this.setState({
            actionCount: 0
        }, () => {
            alert("Se ha reseteado el contador")
        })
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.actionCount} times</p>
                <button onClick={this.resetCounter}>Click to reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Page/>,
    document.getElementById("root"))