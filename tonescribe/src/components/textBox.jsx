import {useState} from "react" //A hook, a built-in function that allow your components to store user input

function TextBox(){
    const [text, setText] = useState("");  // Making a box that stores/remembers what the user types
    const [tone, setTone] = useState("");

    function analyzeTone(){
        const lowerText = text.toLowerCase(); // creates a copy of user’s text & makes that copy lowercase.
        let detectedTone = "neutral";

        if (lowerText.includes("thank") || lowerText.includes("great") || lowerText.includes("happy")) {
        detectedTone = "Positive";
        } else if (lowerText.includes("sorry") || lowerText.includes("sad") || lowerText.includes("unfortunately")) {
        detectedTone = "Negative";
        } else if (lowerText.includes("urgent") || lowerText.includes("asap")) {
        detectedTone = "Urgent";
        } else if (lowerText.includes("please") || lowerText.includes("regards")) {
        detectedTone = "Formal";
        } else if (lowerText.includes("haha") || lowerText.includes("lol")) {
        detectedTone = "Casual / humorous";
        }

        setTone(detectedTone);
    }
    
    return(
        <section className = "textbox">
            <h2>Analyze Your Text</h2>
            <textarea placeholder="Type or paste your text..." rows="8" cols="50" value={text} onChange={(event) => setText(event.target.value)}></textarea> 
            <button className = "analyze-btn" onClick={analyzeTone}> Analyze Tone</button>

            {/* results only show when tone is deteced/matched */}
            {tone && (
                <div className = "result">
                    <h3>Detected Tone: </h3>
                    <p className ={'tone-${tone}'}>{tone}</p>
                </div>
            )}
        </section>
    );
}

export default TextBox;