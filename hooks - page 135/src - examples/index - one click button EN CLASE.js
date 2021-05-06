import React from "react"
import ReactDOM from "react-dom"

// Convertiremos el siguiente componente en una función
class OneTimeButton extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.props.onClick()

        this.setState({ clicked: true })
    }

    render() {
        return(
            <button
                onClick={this.handleClick}
                disabled={this.state.clicked}
            >
                You can only click me once
            </button>
        )
    }
}

ReactDOM.render(<OneTimeButton onClick={() => alert("hi")}/>,
    document.querySelector("#root"))