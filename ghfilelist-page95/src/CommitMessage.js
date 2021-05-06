import React from "react"
import PropTypes from "prop-types"

// Recibe el objeto que está dentro de latestCommit ( {message: "..."} )
function CommitMessage({ commit }) {
    return (
        <div className="commit-message">
            {commit.message}
        </div>
    )
}
CommitMessage.propTypes = {
    message: PropTypes.object.isRequired
}

export default CommitMessage