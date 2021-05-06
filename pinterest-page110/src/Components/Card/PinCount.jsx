import React from "react"

function PinCount({ pinCount }) {
    return (
      <div className="pin-count-container">
        <p className="pin-count">{pinCount}</p>
      </div>
    )
}

export default PinCount