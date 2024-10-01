Dynamic CSS background-color switcher
In this lab, you will create a simple HTML page with a single button with id switchBtn and a div element with id colorBox. The objective is to implement a JavaScript function that generates a random color in HEX format when the button is clicked and applies it as the background color of the div element on the page.

Concepts covered in this lab are:

Basic HTML structure
CSS styling
JavaScript events
Generating random HEX colors
Manipulating DOM elements
To pass this lab, you must complete the challenges mentioned below:

---------------------------------------------------------------------
Create the button and div elements - Create a button element with the id switchBtn and the text "Switch Background Color" inside it. Also, create a div element with the id colorBox.

Style the div element - Style the div element with the id colorBox. Set its width to 300px, height to 300px, and an initial background color of your choice.

Add an event listener and a random HEX color generator function - In script.js, create a JavaScript function called randomHexColor that returns a random HEX color. Also, add an event listener to the switchBtn that triggers this function when clicked.

Change the background color of the div when the button is clicked - Modify the event listener to change the background color of the div element with the id colorBox to the randomly generated HEX color when the button is clicked. Ensure that the HEX color is always 6 characters long, and there is no error in the randomHexColor function.