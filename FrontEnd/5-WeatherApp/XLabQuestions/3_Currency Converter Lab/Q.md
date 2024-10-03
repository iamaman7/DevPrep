Currency Converter Lab
In this lab, you'll create a simple currency converter using HTML, CSS, JavaScript, and a 3rd-party API for fetching current exchange rates. You'll start by building a basic user interface with two input fields - one for the amount and the other for the selected currency. Additionally, you'll have a button to trigger the currency conversion and a paragraph element to display the result. You'll use fetch in JavaScript to make an API request to retrieve the exchange rate for the selected currency.

With the use of event listeners, you'll be able to detect when the button is clicked, and based on the input values, you'll use the exchange rate received from the API to perform the conversion and display the result in the paragraph element.

This lab requires knowledge of basic HTML, CSS, JavaScript, event handling, fetching data using APIs, and basic DOM manipulation.

-------------------------------------------

Create necessary HTML elements - Create two input fields with IDs amount and currency, a button with ID convert, and a paragraph element with ID result to display the conversion result.

Style the currency converter UI - Style the input fields, button, and result paragraph to look like a clean and nice user interface. You can use any colors, margins, and padding that you prefer.

Fetch exchange rate from API - When the user clicks the convert button, fetch the exchange rates from https://api.exchangerate-api.com/v4/latest/USD` and store the rates in a variable.

Perform currency conversion and display result - On clicking the convert button, perform the currency conversion using the selected currency and amount, then display the converted value in the result paragraph.