import {useState} from "react" //A hook, a built-in function that allow your components to store user input

function TextBox(){
    const [text, setText] = useState("");  // Making a box that stores/remembers what the user types

    return(
        <section className = "textbox">
            <h2>Analyze Your Text</h2>
            <textarea placeholder="Type or paste your text..." rows="8" cols="50" value={text} onChange={(event) => setText(event.target.value)}></textarea> 
            <button className = "analyze-btn"> Analyze Tone</button>
            
        </section>
    );
}

export default TextBox;