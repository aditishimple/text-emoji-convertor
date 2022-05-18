import React, { useState } from 'react'

const Emojis = () => {
    const [inputValue, setInputValue] = useState("");
    
    const findEmojis = {
        "::happy::" : "😀",
        "::sad::" : "😢",
        "::smiley::" : "😁"
    }

    const handleTextChange = (e) => {
        let { value } = e.target;
    
        var replace = new RegExp(Object.keys(findEmojis).join("|"), "gi");
        value = value.replace(replace, function (found) {
          return findEmojis[found];
        });
    
        setInputValue(value);
    };

  return (
    <div>
        <h1>Text to Emoji Converter</h1>
        <input
            type = "text"
            onChange = {handleTextChange}
            value = {inputValue}
            placeholder = "Type here to convert text into emoji"
            style= {{ padding: "1rem", width: "80%" }} 
        />
    </div>
  )
}

export default Emojis;