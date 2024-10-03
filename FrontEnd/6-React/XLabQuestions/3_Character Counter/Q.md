Character Counter
In this lab, you're tasked with creating a simple React application that allows users to type text into a textarea. As users type, the application will display the number of characters entered in real-time. It's a basic yet effective exercise to test your understanding of React states, events, and DOM manipulation.

Overview:
Initialize React Component: Start by setting up the primary structures you'll need - a textarea and a div.

Link Textarea with Character Count: Implement logic to detect when the content of the textarea changes and compute the character count in real-time.

Display the Count: Showcase the character count dynamically by updating a separate div element.

Steps to Complete the Lab:
Create a Textarea Element: Instantiate a <textarea> within your React component. Ensure this element has an id attribute set as textInput.

Create a Character Count Display: Below the textarea, add a <div> element which will be responsible for displaying the number of characters typed into the textarea. This element should have an id attribute set as count. Initially, this should display 0, indicating no characters have been typed yet.

Implement Real-Time Character Count Logic: Set up an event listener or another mechanism to detect changes in the #textInput textarea. This should consider both typed and deleted characters. Each time there's an alteration in the textarea's content, compute the number of characters present.

Update Character Count Display: Ensure the #count div updates instantly with the new character count whenever the textarea's content changes. Avoid using direct DOM manipulation like .value = . Instead, rely on React's mechanisms such as setState or the useState hook.

Test Your Implementation: Enter some text into your textarea. The character count displayed should update in real-time, accurately reflecting the number of characters you've typed.

Challenges
Challenge 1: Setting Up the Elements
Objective: Create the primary structures required for the lab.

Within your React component, instantiate a <textarea> element where users will input text. Ensure this textarea has an id attribute set as textInput.
Below the textarea, set up a <div> element which will display the number of characters typed into the textarea. Assign this div an id attribute of count.
The #count div should initially display 0, indicating no characters have been typed yet.
Challenge 2: Dynamic Character Count
Objective: Link the textarea to the div to show the real-time character count of the text entered into the textarea.

Set up a mechanism, such as an event listener, to detect any changes in the #textInput textarea. This includes any characters being typed or deleted.
Every time there's a change in the textarea, calculate the number of characters currently present.
Update the #count div to display the new character count instantly.
Do not use direct DOM manipulation to set values (like .value =). Utilize React mechanisms like setState or the useState hook.
----------------------

Setup a textarea (#textInput) and character count div (#count).

Display real-time character count in #count based on #textInput changes.