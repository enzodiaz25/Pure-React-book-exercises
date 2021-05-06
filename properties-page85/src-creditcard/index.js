// IMPORTAR BIEN LAS LIBRERÍAS!!!

// Necesario para JSX (contiene React.createElement(), createChildren(), etc.)
import React from "react"
// Necesario para renderizar en el DOM (React.render()) y también tiene algunos métodos para buscar un elemento en el DOM
import ReactDOM from "react-dom"
import "./index.css"

function CreditCard({ cardInfo }) {
  return(
    <div className="credit-card">
      <div className="container-right">
        <BankName name={ cardInfo.bank }/>
      </div>
      <div>
        <div className="card-number-container">
          <CardNumber number={cardInfo.number}/>
        </div>
        <div className="container-center">
          <ExpirationDate date={cardInfo.expiration}/>
        </div>
        <Cardholder cardholder={cardInfo.cardholder}/>
      </div>
    </div>
  )
}

const BankName = ({ name }) => ( <span className="bank-name">{name}</span> ) 

function CardNumber({ number }) {
  const numberString = String(number)
  return (
    <div className="container-left">
      <p className="card-number">
        {numberString.slice(0, 4)} {numberString.slice(4, 8)} {numberString.slice(8, 12)} {numberString.slice(12, 16)}
      </p>
      <p className="card-number-small">{numberString.slice(0,4)}</p>
    </div>
  )
}

function ExpirationDate({ date }) {
  return (
    <div className="expiration">
      <p>VALID<br/>THRU</p><span>{date}</span>
    </div>
  )
}

const Cardholder = ({ cardholder }) => ( <p className="cardholder">{cardholder.toUpperCase()}</p> )

const cardInfo = {
  cardholder: "Cardholder Name",
  expiration: "08/19",
  number: 1234567812345678,
  bank: "Santander"
}

ReactDOM.render(<CreditCard cardInfo={cardInfo}/>,
      document.getElementById("root"))