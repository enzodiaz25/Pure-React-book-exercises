import profileContent from "./seed"
import Profile from "./Components/Profile/Profile"
import ReactDOM from "react-dom"
import "./index.css"

ReactDOM.render(<Profile content={profileContent}/>,
  document.getElementById("root"));