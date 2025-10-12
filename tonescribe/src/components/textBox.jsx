import {useState} from "react" //A hook, a built-in function that allow your components to store user input

function TextBox(){
    const [text, setText] = useState("");  // Making a box that stores/remembers what the user types
    const [tone, setTone] = useState("");

    function analyzeTone(){
        const lowerText = text.toLowerCase();
        let detectedTone = "neutral";

        if (lowerText.includes("thank") || lowerText.includes("great") || lowerText.includes("happy")) {
        detectedTone = "positive";
        } else if (lowerText.includes("sorry") || lowerText.includes("sad") || lowerText.includes("unfortunately")) {
        detectedTone = "negative";
        } else if (lowerText.includes("urgent") || lowerText.includes("asap")) {
        detectedTone = "urgent";
        } else if (lowerText.includes("please") || lowerText.includes("regards")) {
        detectedTone = "formal";
        } else if (lowerText.includes("haha") || lowerText.includes("lol")) {
        detectedTone = "casual / humorous";
        }

        setTone(detectedTone);
    }
    
    return(
        <section className = "textbox">
            <h2>Analyze Your Text</h2>
            <textarea placeholder="Type or paste your text..." rows="8" cols="50" value={text} onChange={(event) => setText(event.target.value)}></textarea> 
            <button className = "analyze-btn"> Analyze Tone</button>
        </section>
    );
}

export default TextBox;