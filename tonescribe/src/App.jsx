import {useState} from "react" //A hook, a built-in function that allow your components to store user input
import Navbar from "./components/Navbar"
import TextBox from "./components/TextBox"

function App() {
  return (
    <>
      <Navbar/>
      <TextBox/>
    </>
  )
}
export default App;
