import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
// No necesitamos ReactDOM porque no vamos a renderizarlo acá

const Time = ({ time }) => {
    const timeString = moment(time).fromNow()
    return (
        <span className="time">
            {timeString}
        </span>
    )
  }
  Time.propTypes = {
    time: PropTypes.string.isRequired
}

// default significa que este es el componente que usaremos
// cuando hagamos import Time from "./Time"
export default Time

// También se puede hacer export { moduloAlgo, moduloBla }
// Al importar estos se hace import {moduloAlgo} from "./Time"

//Por último, se pueden combinar ambos exports:
// export default Time
// export { moduloAlgo }
//Y en el archivo que importamos:
// import Time, {moduloAlgo} from "./Time"