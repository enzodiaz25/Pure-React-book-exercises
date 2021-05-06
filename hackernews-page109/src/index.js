// SEPARAR EN ARCHIVOS

import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import moment from "moment"
import "./index.css"

function HackerNews({ listOfNews }) {
  return (
    <div className="site-container">
      <SmallHeader/>
      <main className="main">
        <Board listOfNews={listOfNews}/>
      </main>
    </div>
  )
}

function Board({ listOfNews }) {
  return(
      <section className="board">
        <ol className="board-list">
          {listOfNews.map(news => (
            <li key={news.id}>
              <NewsItem news={news}/>
            </li>
          ))}
        </ol>
      </section>
  )
}

function NewsItem({ news }) {
  return (
    <div className="news-item">
      <div className="news-and-link">
        <NewsTitle title={news.title}/>
        <NewsLink link={news.link}/>
      </div>
      <NewsOptions news={news}/>
    </div>
  )
}

function NewsOptions({ news }) {
  const options = [
    <p key="points">{news.points} points by {news.author} <Time time={news.timestamp}/></p>,
    <p key="flag">flag</p>,
    <p key="hide">hide</p>,
    <p key="commentCount">{news.commentCount} comments</p>,
    <p key="instapaper">instapaper</p>,
    <p key="save-to-pocket">save to pocket</p>
  ]
  addSeparators(options)
  return (
    <div className="news-options">
      {options}
    </div>
  )
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow()
  return (
      <span className="time">
          {timeString}
      </span>
  )
}
Time.propTypes = {
  time: PropTypes.string.isRequired
}

const NewsTitle = ({ title }) => <h2 className="news-title">{title}</h2>
const NewsLink = ({ link }) => <a href={link} className="news-link">({link})</a>

// No hace falta pasar NavItems como hijos de Nav. Sólo deberían
// pasarse hijos cuando el componente que los recibe no tiene
// conocimiento de su contenido, o cuando puede recibir hijos
// arbitrarios de otros componentes. En este caso, Nav siempre
// renderizará NavItems.
function SmallHeader() {
  return (
    <header className="small-header">
      <Logo/>
      <Nav/>
    </header>
  )
}

// CONSULTAR EL PROBLEMA DE LA KEY EN ESTA FUNCIÓN
// (si no está, React genera una advertencia, pero al ser separadores
// es difícil ponerles keys únicas)
// SOLUCIÓN: Wrappear los NavItems con sus separadores en diferentes divs
function addSeparators(components) {
  let Separator = <p className="separator">|</p>
  for (let i=0; i < components.length - 1; i++) {
    components[i] = <div className="link-and-separator">{components[i]}{Separator}</div>
  }
  return components
}

function Nav() {
  return (
    <nav className="navigation">
      {addSeparators(
      [<NavItem key="new" url="/new">new</NavItem>,
      <NavItem key="threads" url="/threads">threads</NavItem>,
      <NavItem key="comments" url="/comments">comments</NavItem>,
      <NavItem key="show" url="/show">show</NavItem>,
      <NavItem key="url" url="/ask">ask</NavItem>,
      <NavItem key="jobs" url="/jobs">jobs</NavItem>,
      <NavItem key="submit" url="/submit">submit</NavItem>]
      )}
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.array
}

function NavItem({ url, children }) {
  return (
    <a className="nav-link" href={url}>{children}</a>
  )
}

function Logo() {
  return(
    <div className="logo">
      <Icon/>
      <h1 className="site-name">Hacker News</h1>    
    </div>
  )
}

function Icon() {
  return (
    <i className="icon">
      <p className="icon-letter">Y</p>
    </i>
  )
}

const listOfNews = [
  {
    id: 24141414,
    title: "Javascript is love",
    author: "Ivan",
    link: "htpps://javascript.com",
    points: 293893,
    commentCount: 245,
    timestamp: "2021-03-08T09:52:07.439Z"
  },
  {
    id: 14151515,
    title: "Get me a cup of coffee",
    author: "Leo",
    link: "https://cafecito.com",
    points: 293893,
    commentCount: 2314,
    timestamp: "2021-03-08T09:52:07.439Z"
  },
  {
    id: 5125121,
    title: "Are you expecting something creative here?",
    author: "Gastón",
    link: "https://wellnot.com",
    points: 293893,
    commentCount: 213,
    timestamp: "2021-03-08T09:52:07.439Z"
  },
  {
    id: 13515134,
    title: "Último momento: Terminé el ejercicio",
    author: "Cringe",
    link: "https://cringeweb.com",
    points: 293893,
    commentCount: 5135,
    timestamp: "2021-03-08T09:52:07.439Z"
  },
  {
    id: 51150,
    title: "VSCode best extension",
    author: "Cringe",
    link: "https://cringeweb.com",
    points: 293893,
    commentCount: 5135,
    timestamp: "2021-03-08T09:52:07.439Z"
  }
]

ReactDOM.render(<HackerNews listOfNews={listOfNews}/>, document.getElementById("root"))