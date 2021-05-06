import React from "react"
import ReactDOM from "react-dom"

class ErrorCatcher extends React.Component {
  state = { error: null }

  // Si hubo un error en los hijos, se ejecutará esta
  // función. El error estará en "error"
  componentDidCatch(error, info) {
    // Para provocar un re-render del ErrorCatcher, tengo
    // que setear el error en su estado
    this.setState({ error: info.componentStack })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          An error ocurred: {this.state.error}
        </div>
      )
    }

    return this.props.children
  }
}

class Reddit extends React.Component {
  state = {
    posts: null
  }
 
  componentDidMount() {
    fetch(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Request failed")
      })
      .then (json => {
        const posts = json.data.children.map(
          obj => obj.data
        );
        this.setState({ posts })
      })
      .catch(error => {
        this.setState({
          error: true
        })
      })
  }

  render() {
    if (this.state.error) {
      throw new Error("There was a problem")
    }

    const { posts } = this.state

    return (
      <div>
        <h1>Subreddit: /r/{this.props.subreddit}</h1>
          {posts
          ?
          <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))} 
          </ul>
          :
          <h1>Loading...</h1>}
      </div>
    )
  }
}

// ErrorCatcher puede recibir errores de cualquiera de sus
// hijos. Lo puedo mover a diferentes partes de la app para
// poder registrarlos
ReactDOM.render(
  <ErrorCatcher>
    <Reddit subreddit="reactjs"/>
  </ErrorCatcher>,
  document.querySelector("#root")
)
