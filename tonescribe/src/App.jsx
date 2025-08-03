import React from "react"
import useState from "react" //A hook, a built-in function that allow your components to store user input

function App() {
  const [userText, setUserText] = useState("") //
  const [tone, setTone] = useState("") //



  return (
    <>
      <h1>Welcome to TypeScribe App!</h1>
    </>
  )
}

export default App