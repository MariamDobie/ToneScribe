import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";
//import "./App.css"


function App() {
  return (
    <div className = "app">
      <Navbar />
      <main className="main-content">
        <TextBox />
      </main>
      <Footer/>
    </div>
  )
}

export default App;

