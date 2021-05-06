import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Reddit() {
    const [posts, setPosts] = useState([]);

    // Este useEffect sólo se ejecutará cuando setPosts
    // es creada. Es decir, al inicio.
    // Si no se le envía ningún parámetro, generará un loop:
    // Se ejecuta useEffect, se reciben los posts y se cambia
    // el estado --> Se cambió el estado: Re-render. Re-render --->
    // se ejecuta useEffect... Y así.
    useEffect(() => {
        fetch("https://www.reddit.com/r/reactjs.json")
            .then(res => res.json())
            .then(json => 
                setPosts(json.data.children.map(c => c.data))
            )
    }, [setPosts])

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

ReactDOM.render(
    <Reddit/>,
    document.querySelector("#root")
);