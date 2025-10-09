function TextBox(){
    return(
        <section className = "textbox">
            <h3>Enter your text here!</h3>
            <textarea placeholder="Type or paste your text..." rows = "6" cols = "50"></textarea>
            <button>Analyze Tone</button>
        </section>
    );
}

export default TextBox;