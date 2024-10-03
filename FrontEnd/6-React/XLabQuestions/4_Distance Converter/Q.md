Distance Converter
In this lab, you'll build a simple React application to convert distances between various units: centimeters, inches, miles, feet, kilometers, and meters. Your task is to create a user interface with select elements for unit conversion, an input field for the value, a convert button, and a display area for the result.

Steps to Build the App
Create Select Elements: Implement two dropdown select elements to allow users to choose the units for conversion. Use IDs fromUnit and toUnit for these dropdowns. Include options for all six units.

Add Number Input Field: Include an input field where users can enter the distance they want to convert. This should be of type 'number' and have the ID fromValue.

Implement Convert Button: Add a button that triggers the conversion process. Assign this button the ID convert.

Conversion Logic: Write the logic to calculate the conversion based on the selected units and the input value. When the convert button is clicked, the result should be displayed.

Display Result: Show the converted value in a dedicated div with the ID outputValue. The result should be rounded to three decimal places.

Example Markup
Here's a simple markup example to get you started:

<div>
    <select id="fromUnit">
        <option value="centimeters">Centimeters</option>
        <!-- Add other units here -->
    </select>
    <select id="toUnit">
        <option value="inches">Inches</option>
        <!-- Add other units here -->
    </select>
    <input type="number" id="fromValue" />
    <button id="convert">Convert</button>
    <div id="outputValue"></div>
</div>
Challenges
Challenge 1: Implement Select Input Elements
Objective: Create two dropdown select elements for unit conversion.
Requirements:
The first select element, with the ID fromUnit, allows the user to choose the unit they are converting from.
The second select element, with the ID toUnit, allows the user to choose the unit they are converting to.
Both elements should include options for 'centimeters', 'inches', 'miles', 'feet', 'kilometers', and 'meters'.
Challenge 2: Create a Number Input Field
Objective: Add an input field for users to enter the numerical value for conversion.
Requirements:
The input field should be of type 'number'.
Assign the ID fromValue to this input field.
Challenge 3: Add a Convert Button
Objective: Include a button to initiate the conversion process.
Requirements:
The button should be labeled in a way that indicates its function (e.g., 'Convert').
Assign the ID convert to the button.
Challenge 4: Implement Conversion and Display Logic
Objective: Develop the logic to perform the conversion and display the result upon button click.
Requirements:
When the 'Convert' button (ID convert) is clicked, the app should convert the value from fromValue according to the selected units in fromUnit and toUnit.
The result should be displayed in a div with the ID outputValue.
Challenge 5: Ensure Output Precision
Objective: Format the output value to always have three decimal places.
Requirements:
The output displayed in the outputValue div should be a number rounded to three decimal places.
Remember to style your elements for better user experience. You can use simple CSS to add color and layout. For example, style the convert button with a bright color like blue or green to make it stand out. Your Styling for the lab won't be tested.

-------------------------------
Select Unit Inputs: Create two dropdowns with IDs fromUnit and toUnit for unit selection.

Number Input Field: Add a 'number' type input field with ID fromValue for the conversion value.

Conversion Button: Implement a button with ID convert to initiate the conversion process.

Conversion Logic: Develop logic to convert and display the result in outputValue div upon clicking the convert button.

Output Precision: Ensure the converted value in outputValue is rounded to three decimal places.