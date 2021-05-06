/*
Fases de un componente:

Mount: Ocurre cuando el componente es agregado al DOM. Se inicializan
    valores y configura el componente.
    >> constructor
    >> componentWillMount [deprecado]
    >> componentDidMount

Render: Cuando el componente se renderiza (por primera vez y cada vez).
    No cambia lo que se ve en la pantalla aún.
    >> componentWillReceiveProps(nextProps) [deprecado]
    >> static getDerivedStateFromProps(nextProps, prevState)
    >> shouldComponentUpdate(nextProps, nextState)
    >> componentWillUpdate(nextProps, nextState) [deprecado]
    >> render
    >> getSnapshotBeforeUpdate(prevProps, prevState)
    >> componentDidUpdate(prevProps, prevState, snapshot)

Commit: Toma el output de render y, ahora sí, actualiza el DOM.
    No posee métodos.

Unmount: Cuando el componente es removido del DOM.
    >> componentWillUnmount

Error Handling:
    >> componentDidCatch

*/

import React from "react"
import ReactDOM from "react-dom"

class ErrorCatcher extends React.Component {
    // Variables de instancia. Acá se puede inicializar
    // el estado
    state = { error: null }

    componentDidCatch(error, info) {
        console.log("[componentDidCatch]", error);
        this.setState({ error: info.componentStack });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    An error ocurred: {this.state.error}
                </div>
            )
        }

        return this.props.children;
    }
}

class LifecycleDemo extends React.Component {
    // Inicializara estado. Ocurre antes del constructor
    state = { counter: 0 };

    // Primer método que se llama luego de la inicialización
    constructor(props) {
        super(props)
        console.log("[constructor]");
        console.log(" State already set:", this.state);
    }

    // Se llama luego del render INICIAL
    // Buen lugar para traer datos de la red (fetch)
    componentDidMount() {
        console.log("[componentDidMount]", "Mounted");
    }

    // Siempre es "static".
    // Se llama ANTES del render INICIAL, y cada vez que se
    // reciben nuevas props
    static getDerivedStateFromProps(nextProps, prevState) {
        // Si el padre envió una prop nueva, estará en nextProps
        console.log("[getDerivedStateFromProps]");
        console.log("   Next props:", nextProps);
        console.log("   Prev state:", prevState);
        return null;
    }

    // Se llama ANTES de CADA render
    // Si se retorna falso, no se renderizará. Por defecto es true.
    // Permite (junto con PureComponent) optimizar componentes de clase,
    // agregando condiciones para evitar renderizados innecesarios
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[shouldComponentUpdate]", "Deciding to update");
        return true;
    }

    // Se llama LUEGO de render pero ANTES DE ACTUALIZAR EL DOM.
    // Es un buen lugar para hacer cálculos basasdos en nodos del DOM
    // anteriores.
    // El valor retornado se pasa a componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        // Si accedo a un nodo del DOM acá, veré que todavía no se ha
        // actualizado
        console.log("[getSnapshotBeforeUpdate]", "About to update...");
        return `Time is ${Date.now()}`;
    }

    // Se llama LUEGO de cada render Y DESPUÉS DE ACTUALIZAR EL DOM
    // Finaliza el ciclo render/commit/update
    // Es un buen lugar para comprobar si alguna prop cambió
    // y volver a traer datos de la red si es necesario
    componentDidUpdate(prevProps, prevState, snapshot) {
        // prevProps.algo === this.props.algo ? "cambió" : "no cambió"
        console.log("[componentDidUpdate]", "Updated");
        console.log("   snapshot:", snapshot);
    }

    // Se llama ANTES DE QUE EL COMPONENTE SEA DESMONTADO.
    // Buen momento para remover event listeners, cancelar times, etc.
    componentWillUnmount() {
        console.log("[componentWillUnmount]", "Goodbye cruel world");
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    causeErrorNextRender = () => {
        // (1) Al clickear en el botón de error, se utiliza
        // este flag para causar un error en el próximo render... (sigue)
        this.setState({
            causeError: true
        })
    }

    render() {
        console.log("[render]")
        //(2) Si el flag es true, se lanzará un error
        if (this.state.causeError) {
            throw new Error("Oh no!!!")
        }

        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <ErrorCatcher>
        <LifecycleDemo/>
    </ErrorCatcher>,
    document.querySelector("#root")
)
