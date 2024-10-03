import React, { useState } from 'react';

/**
 * App Component - Dynamic Character Counter
 *
 * This component allows users to type text into a textarea
 * and displays the number of characters entered in real-time.
 */
function App() {
    // React useState hook to keep track of the input text's character count.
    const [charCount, setCharCount] = useState(0);

    /**
     * handleInputChange
     * Event handler function to compute character count
     * whenever the content of the textarea changes.
     *
     * @param {Object} event - The textarea change event
     */
    const handleInputChange = (event) => {
        setCharCount(event.target.value.length);
    }

    return (
        <div>
            {/* Challenge 1: Setting Up the Elements */}
            {/* Textarea for user input with event listener for content change */}
            <textarea id="textInput" onChange={handleInputChange}></textarea>

            {/* Div to display the character count */}
            <div id="count">{charCount}</div>

            {/* Challenge 2: Dynamic Character Count */}
            {/* The onChange event on the textarea and the useState hook 
                 for charCount handles the real-time character counting */}
        </div>
    );
}

export default App;
