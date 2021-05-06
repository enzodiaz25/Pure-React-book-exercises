import PropTypes from "prop-types"
import moment from "moment"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// function Enzo() {
//     // Valores definidos dentro del componente
//     // Las props, en cambio, se reciben por parámetro, y
//     // no pueden ser modificadas por el componente si no es
//     // a través de una función que les envía el padre
//     const firstName = "Enzo"
//     const lastName = "Diaz"

//     return (
//         <Person
//             className="person"
//             age={26}
//             name={firstName + " " + lastName}
//         />
//     )
// }

// Se utiliza desestructuración para trabajar con las props
// sin hacer props.tweet.algo cada vez

function TweetList ({ tweetList }) {
    return (
        <div className="tweet-list">
            {tweetList.map(tweet => {
                return <Tweet key={tweet.timestamp} tweet={tweet}/>
            })}
        </div>
    )
}

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/> 
            <div className="content">
                <Author author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )
}

Tweet.propType = {
    tweet: PropTypes.shape({
        message: PropTypes.string.isRequired,
        gravatar: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired,
        likes: PropTypes.number,
        retweets: PropTypes.number,
        timestamp: PropTypes.string.isRequired
        }
    )
}

function Avatar({ hash }) {
    // No se pueden usar backsticks en JSX, así que la URL se genera antes
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar"
        />
    )
}

Avatar.propType = {
    hash: PropTypes.string.isRequired
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string
}

function Author({ author }) {
    const {name, handle} = author

    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span> 
    )
}

// Se validaran los tipos de datos de las props de Author
Author.propTypes = {
    // La prop author del componente Author tiene una cierta forma...
    author: PropTypes.shape({
        handle: PropTypes.string.isRequired, // El campo no puede ser null
        name: PropTypes.string.isRequired // EL CAMPO NO PUEDE SER NULL
    // Se requiere que author tenga SIEMPRE estos campos
    }).isRequired
}

// Si lo primero que hay en una arrow function es el valor de retorno,
// se puede omitir el => { return (...) } y directamente escribir => (...)
// sin return
// "Remember, arrow functions need a return if the body is surrounded by braces, and it needs braces if
// the body contains multiple lines."

const Time = ({ time }) => {
    const timeString = moment(time).fromNow()
    return (
        <span className="time">
            {timeString}
        </span>
    )
}

Time.propTypes = {
    time: PropTypes.string
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"></i>
)

// Aunque Count, que es usado por RetweetButton, no necesita aplicar
// desestructuración en los parámetros, es una buena práctica ya que lo
// convierte en un componente reutilizable
function Count({ count }) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        )
    } else {
        // Si la expresión dentro de los () de JSX es null o
        // false, no se renderiza nada
        return null
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"></i>
        <Count count={count}/>
    </span>
)

// Valida que la propiedad recibida por el componente sea de tipo number
RetweetButton.propTypes = {
    count: PropTypes.number
}

// Observar el workaround que utiliza para usar un condicional en JSX
// (Recordar que no se pueden usar if, while, etc.)
// Si count no fuese mayor a 0, por evaluación de cortocircutio, la segunda
// parte de la expresión no se devuelve
// También se podría usar un operador ternario {count ? count : null} pero hay
// que tener en cuenta que eso produciría un span vacío
const LikeButton = ({ count }) => {
    return (
        <span className="like-button">
            <i className="fa fa-heart"></i>
            {count > 0 &&
               <span className="like-count">
                   {count}
                </span>}
        </span> 
    )
}

LikeButton.propTypes = {
    count: PropTypes.number
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"></i>
    )
    
const testTweets = [{
    message: "Some people complaining about something",
    gravatar: "asdads",
    author: {
        handle: "whatever",
        name: "MrGrumpy"
    },
    likes: 20,
    retweets: 110,
    timestamp: "2016-07-30 21:24:37"
    },
    {
    message: "Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
    },
    {
    message: "Another tweet.",
    gravatar: "asdads",
    author: {
        handle: "adsafsasf",
        name: "asfafasgn"
    },
    likes: 20,
    retweets: 110,
    timestamp: "2016-07-30 21:24:37"
    },
]

// IMPORTANTE: Acá se le pasan las props al elemento raíz
ReactDOM.render(<TweetList tweetList={testTweets}/>,
    document.querySelector("#root"))