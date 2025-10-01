import ReactDOM from "react-dom/client" //this is similar to "import {creatRoot} from "react-dom/client'
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
  <App/> //calling component App
)