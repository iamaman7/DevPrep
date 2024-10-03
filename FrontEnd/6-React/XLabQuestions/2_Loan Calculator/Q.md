Loan Calculator
In this lab, you'll create a simple application using React that calculates the Equated Monthly Installment (EMI) based on the total loan amount and the number of monthly payments.

Objective
Your task is to build an EMI calculator that takes two inputs - the total loan amount and the number of payments - and displays the amount to be paid each month.

Steps to Build the App
Setup Your Environment: Create a new React application and set up the necessary components.
Create Input Fields:
Create an input field for the total loan amount. Assign it the ID totalCost.
Add another input field for the number of monthly payments. This should have the ID numberOfIntervals.
Implement the Calculate Button: Add a button that, when clicked, calculates the monthly payment. This button must have the ID calculate.
Display Output: Show the result of the calculation in a div element. The ID of this element should be output. The monthly installment should be displayed as a floating-point number, rounded to two decimal places.
Testing IDs
Your implementation will be tested using these specific IDs:

totalCost for the total loan amount input field.
numberOfIntervals for the number of payments input field.
calculate for the calculate button.
output for the div displaying the calculated monthly installment.
Challenges
Challenge 1: Create Required Input Elements and Button
Input for Total Cost: Create an input element for entering the total loan amount. This input must have the ID totalCost.
Input for Number of Payments: Add another input for specifying the number of monthly payments. Assign it the ID numberOfIntervals.
Calculate Button: Implement a button that triggers the EMI calculation. This button should be identifiable with the ID calculate.
Challenge 2: Implement Calculation and Display Output
Calculate Monthly Payment: On clicking the calculate button, the application should compute the monthly installment. The installment is calculated by dividing the total cost by the number of intervals.
Display Result: Show the calculated monthly installment in a div element with the ID output. The amount should be displayed as a floating-point number with two decimal places.

-----------------------------------
Challenge 1: Create Input Fields and Button - Ensure the presence of two input fields with IDs 'totalCost' and 'numberOfIntervals', and a calculate button with ID 'calculate'.

Challenge 2: Calculation and Output - Implement the functionality to calculate and display the monthly installment in a 'div' with ID 'output', formatted to two decimal places.