import FileName from "./FileName"
import CommitMessage from "./CommitMessage"
import Time from "./Time"
import React from "react"
import PropTypes from "prop-types"

const FileListItem = ({ file }) => (
    // La key se decide en el momento del "map", por eso no se asignó acá,
    // sino en el padre
    <tr className="file-list-item">
        <td className="file-name-column">
            <FileName file={file} />
        </td>
        <td className="commit-message-column">
            <CommitMessage commit={file.latestCommit} />
        </td>
        <td className="age-column">
            <Time time={file.updated_at} />
        </td>
    </tr>
)

FileListItem.propTypes = {
    file: PropTypes.array
}

export default FileListItem