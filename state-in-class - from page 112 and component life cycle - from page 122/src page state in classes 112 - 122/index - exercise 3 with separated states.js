import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Si uso un arreglo, salta un warning: state debe ser setteado
// como un objeto o null
const rooms = {
    kitchen: {
        name: "Kitchen",
        isLightOn: true,
    },
    bathroom: {
        name: "Bathroom",
        isLightOn: false,
    },
    livingRoom: {
        name: "Living Room",
        isLightOn: true,
    },
    bedroom: {
        name: "Bedroom",
        isLightOn: false,
    },
}

function Room({id, room, onAction }) {
    const lightsOnOff = room.isLightOn ? "light-on" : "light-off"

    return (
        <div className={`room ${lightsOnOff}`}>
            <span className="room-name">{room.name}</span>
            <button onClick={() => onAction(id)}>Switch!</button>
        </div>
    )
}

class House extends React.Component {

    constructor(props) {
        super(props)

        this.state = this.props.rooms
    }

    lightSwitch = (id, action) => {
        const rooms = this.state
        const switchLight = !rooms[id].isLightOn
        const updatedRoom = {...rooms[id], isLightOn: switchLight}

        this.setState((state, props) => {
            return {
                [`${id}`]: updatedRoom,
            }
        })
    }

    render() {
        const rooms = this.state

        return (
            <div className="house">
                {Object.keys(rooms).map(key => (
                    <Room
                        key={key}
                        id={key}
                        room={rooms[key]}
                        onAction={this.lightSwitch}
                    />
                ))}
            </div>
        )
    }
}

ReactDOM.render(<House rooms={rooms}/>,
    document.getElementById("root"))
