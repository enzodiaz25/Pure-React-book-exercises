import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Stamp({ stampURL }) {
  return(
    <div className="stamp-container">
      <img src={stampURL} alt="Stamp"/>
    </div> 
  )
}

function AdressLabel({ person }) {
  return(
    <div className="person-data">
      <p>Full name: {person.fullName}</p>
      <p>Adress: {person.adress}</p>
      <p>City: {person.city}</p>
    </div>
  )
}

function Envelope({ toPerson, fromPerson, stampURL }) {
  return(
    <div className="envelope-container">
      <div className="header">
        <AdressLabel person={fromPerson}/>
        <Stamp stampURL={stampURL}/>
      </div>
      <div className="return-adress">
        <AdressLabel person={toPerson}/>
      </div>
    </div>
  )
}


const fromPerson = {
  fullName: "MysteryX",
  adress: "Una casa",
  city: "Un lugar"
}
const toPerson = {
  fullName: "Enzo Diaz",
  adress: "123 Fake Street",
  city: "La Plata, Buenos Aires"
}
const stampURL = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/approved-date-stamp-design-template-9b26102e07995e40e695d07f9aa5fae3_screen.jpg?ts=1590769712"

// querySelector() devuelve un elemento usando los selectores de CSS
// getElementById() lo obtiene según la id
// Recordar que las variables al ser enviadas en props van entre {}
ReactDOM.render(<Envelope fromPerson={fromPerson} toPerson={toPerson}
                  stampURL={stampURL}/>, 
  document.getElementById("root"))