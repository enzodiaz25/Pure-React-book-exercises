import React from "react"
import PropTypes from "prop-types"

function FileIcon({ file }) {
    let icon
    if (file.type === "folder") {
        icon = "fa fa-folder"
    } else {
        icon = "fa fa-file"
    }
    return (
        // Recordar que es un dato de la tabla, por lo tanto debe estar entre <td>
        <div className="file-icon">
            <i className={icon} />
        </div>
    )
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
}

export default FileIcon