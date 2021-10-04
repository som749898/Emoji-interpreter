import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😛": "Face with Tongue",
  "🤪": "Zany Face",
  "🤔": "Thinking Face",
  "😪": "Sleepy Face"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    emoji = emojiDictionary[userInput];
    if (emoji === undefined) {
      emoji = "Not Found";
    }
    setEmoji(emoji);
  }
  function onClickHandler(item) {
    emoji = emojiDictionary[item];
    setEmoji(emoji);
  }
  return (
    <div className="App">
      <header>
        <h1>Emoji Interpreter</h1>
      </header>
      <input placeholder="Enter your emoji here" onChange={onChangeHandler} />
      <div id="emoji">{emoji}</div>
      <ul>
        {emojis.map((item) => {
          return (
            <span key={item} onClick={() => onClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
