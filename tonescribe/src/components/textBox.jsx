import {useState} from "react" //A hook, a built-in function that allow your components to store user input

function TextBox(){
    const [text, setText] = useState("");  // Making a box that stores/remembers what the user types

    return(
        <section className = "textbox">
            <h3>Enter your text here!</h3>
            <textarea placeholder="Type or paste your text..." rows="6" cols="50" value={text} onChange={(event) => setText(event.target.value)}></textarea> 
            {/* for now a button that repeats what was typed */}
            <button onClick = {() => alert ("You Typed: " + text )}> Analyze Tone</button>
        </section>
    );
}

export default TextBox;