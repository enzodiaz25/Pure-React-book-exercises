import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import PropTypes from "prop-types"

function Main() {
  return (
    <div>
      {/* <Tail number={2}>
        <ErrorBox>Este es un error</ErrorBox>
        <ErrorBox>Este es un segundo error</ErrorBox>
        <ErrorBox>Este es un tercer error</ErrorBox>
        <ErrorBox>Este es un cuarto error</ErrorBox>
      </Tail> */}
      <Dialog>
        <Title>Lalala</Title>
        <Body>Esto es un body. Si agrego algo a este Dialog que no sea un Title, Body o Footer, mostrará una advertencia en la consola del navegador</Body>
        <Footer textButton1="Cancelar" textButton2="Aceptar"/>
      </Dialog>
    </div>
  )
}

// Cunando sólo se recibe un children (por ejemplo, un texto) NO es un array. Es directamente ese children
const Body = ({ children }) => {
  return (
    <div className="modal-body">
      <p>{children}</p>
    </div>
  )
}
const Title = ({ children }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{children}</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
  )
}

const Footer = ({ textButton1, textButton2 }) => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{textButton1}</button>
      <button type="button" className="btn btn-primary">{textButton2}</button>
    </div>
  )
}

function Dialog({ children }) {
  return (
    <div style={{display: "block"}} className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          {children[0]}
          {children[1]}
          {children[2]}
        </div>
      </div>
    </div>
  )
}

function isDialogElement(child) {
  return ((typeof(child) === "object") && (["Title", "Body", "Footer"].includes(child.type.name)))
}

function customValidator(props, propName, componentName) {
  const children = props[propName]
  const errorMessage = "Dialog sólo puede tener Title, Body y/o Footer como hijos"
  if(Array.isArray(children)) {
    for (let i=0; i < children.length; i++){
      let child = children[i]
      if (!isDialogElement(child)) {
        return new Error("Dialog sólo puede tener Title, Body y/o Footer como hijos");
      }
    }
  }
  else if (isDialogElement(children)) {
    return new Error(errorMessage);
  }
}

// children también es una propiedad
// PropTypes.element para que sólo acepte un solo elemento
// PropTypes.node para que acepte cualquier tipo de elemento (0. 1 o más)
Dialog.propTypes = {
  children: customValidator
}

// renderiza una number cantidad de children
// Al usar React.Children.toArray(NO OLVIDER METER EL CHILDREN ACÁ)
function Head({ number, children }) {
  const items = React.Children.toArray(children).slice(0, number)
  return (
    <div>
      {items}
    </div>
  )
}

function Tail({ number, children }) {
  const items = React.Children.toArray(children).slice(number * -1)
  return (
    <div>
      {items}
    </div>
  )
}

// children también es una prop, por eso utilizo desestructuración
function FirstChildOnly({ children }) {
  const item = React.Children.toArray(children)[0]
  console.log(item)
  return (
    <div>
      {item}
    </div>
  )
}

// toma el último children y lo renderiza
function LastChildOnly({ children }) {
  const items = React.Children.toArray(children)
  const lastItem = items[items.length - 1]
  return (
    <div>
      {lastItem}
    </div>
  )
}

// Uso de ErrorBox: <ErrorBox>Acá va el mensaje</ErrorBox>
// El SVG en este componente arrojará una alerta en la consola del
// navegador si alguno de sus atributos posee el formato yyy-yyyyy. Recordar
// reemplazar por yyyYyyy, ya que React utiliza camelCase
function ErrorBox({ children }) {
  return (
    <div style={{maxWidth: "500px"}} className="d-flex align-items-center alert alert-danger" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ab433f" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9v2m0 4v.01" />
        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
      </svg>
      <p className="m-0">{ children }</p>
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById("root"))