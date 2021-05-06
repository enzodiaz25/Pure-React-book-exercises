import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Inbox({ emails }) {
  return(
    <div>
      <LineEmail email={emails[0]}/>
      <LineEmail email={emails[1]}/>
      <LineEmail email={emails[2]}/>
    </div>
  )
}

function LineEmail({ email }) {
  return (
    <div className="line-mail">
      <PinAndCheckbox/>
      <LineContent email={email}/>
    </div>
  )
}

function LineContent({ email }) {
  return (
    <div className="line-content">
      <div className="line-header">
        <div className="name-subject-flex">
          <p>{email.sender}</p>
          <p>{email.subject}</p>
        </div>
        <p className="line-date">{email.date}</p>
      </div>
      <p className="line-message">{email.message}</p>
    </div>
  )
}

function PinAndCheckbox() {
  return(
    <div className="pin-check-container">
      <input type="checkbox" />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pinned" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
          <line x1="12" y1="16" x2="12" y2="21" />
          <line x1="8" y1="4" x2="16" y2="4" />
        </svg>
      </div>
    </div>
  )
}

const email = {
  sender: "Enzo Diaz",
  subject: "Aprendiendo React",
  date: "20/12/21",
  message: "Esperemos mejorar pronto. Por ahora todo se ve medio feo (?)"
}
const email2 = {
  sender: "Mario Rojas",
  subject: "Segundo mensaje",
  date: "21/09/23",
  message: "Este es un segundo mensaje. Veamos cómo se ve."
}
const email3 = {
  sender: "Facultad de Informática",
  subject: "Promocionaste",
  date: "09/05/2021",
  message: "Promocionaste una materia complicada. Felicidades."
}

const emails = [email, email2, email3]

ReactDOM.render(<Inbox emails={emails}/>,
  document.getElementById("root"))