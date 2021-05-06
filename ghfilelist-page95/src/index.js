import FileListItem from "./FileListItem"
import testFiles from "./seed"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import "./index.css"

// files = arreglo de objetos
function FileList({ files }) {
  return(
    //<table> crea la tabla
    //<tr> crea una fila
    //<tr>
    //  <th>Título columna
    //  <th>Título columna 2
    //</tr>
    //Los datos también van entre <tr> pero se definen con <td>
    //Así mismo, todas las <tr> que contienen datos van dentro de <tbody>
    <table className="file-list">
      <tbody>
        {files.map(file => (
          // key es un atributo necesario para que React pueda diferenciar entre
          // elementos al recorrerlos con for, map, etc. (ver Notas para más info)
          <FileListItem file={file} key={file.id}/>
        ))}
      </tbody>
    </table>
  )
}

FileList.propTypes = {
  files: PropTypes.array
}

ReactDOM.render(
  <FileList files={testFiles}/>, document.getElementById("root")
)