import FileIcon from "./FileIcon"
import React from "react"
import PropTypes from "prop-types"

function FileName({ file }) {
    return (
        <div className="file-name">
            <FileIcon file={file} />
            <div>
                {file.name}
            </div>
        </div>
    )
}

FileName.propTypes = {
    file: PropTypes.object.isRequired
}

export default FileName