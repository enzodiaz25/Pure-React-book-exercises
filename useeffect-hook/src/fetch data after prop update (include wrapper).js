import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [inputValue, setValue] = useState("reactjs");
    const [subreddit, setSubreddit] = useState(inputValue)

    const handleSubmit = e => {
        e.preventDefault()
        setSubreddit(inputValue)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={e => setValue(e.target.value)}
                />
                <Reddit subreddit={subreddit}/>
            </form>
        </>
    )
}

function Reddit({ subreddit }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(res => res.json())
            .then(json => 
                setPosts(json.data.children.map(c => c.data))
            )
            .catch(error =>
                setPosts([{
                    id: 0,
                    title: "No posts founded"
                }])    
            )
    }, [setPosts, subreddit])

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);