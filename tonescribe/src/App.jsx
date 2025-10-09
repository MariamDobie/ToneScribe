import {useState} from "react" //A hook, a built-in function that allow your components to store user input
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <TextBox />
      </main>
      <Footer/>
    </>
  )
}

export default App;

