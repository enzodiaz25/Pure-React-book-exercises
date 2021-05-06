import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Poster({ demotivational }) {
  const { imageURL, title, text } = demotivational
  return (
    <div className="poster">
      {/* Si le doy un max-width a este conainer y quiero centrarlo, debo
      centrarlo desde .poster. ATENCIÓN: Si el max-width es menor al espacio disponible
      quedará una franja sin cubrirse a la derecha. ESTO NO ES UN MARGEN, es el espacio que
      quedó libre */}
      <div className="image-container">
        <img src={imageURL} alt="poster"/>
      </div>
      <h1 className="title">{title.toUpperCase()}</h1>
      <p className="text">{text}</p>
    </div>
  )
}

const demotivational = {
  imageURL: "http://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg",
  title: "Programador promedio",
  text: "Debugeé todo el código y el problema era un punto y coma"
}

ReactDOM.render(<Poster demotivational={demotivational}/>, document.getElementById("root"))