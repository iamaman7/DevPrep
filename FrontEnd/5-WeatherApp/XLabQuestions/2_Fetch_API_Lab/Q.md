Fetch API Lab
In this lab, you will practice using the Fetch API to make an HTTP request to a publicly available REST API. The goal is to build a simple web application to search and display user details from GitHub using their API.

To complete this lab, create an index.html file with a form containing an input field with the id username and a submit button with the id search. The form should submit to a Javascript function called getUserInfo which uses the Fetch API to call the GitHub API (https://api.github.com/users/{username})

On successful submission, display the username and the public repository count on the index.html page. Create a div with an id results where the output will be displayed.

In case of any error or if the user is not available, show 'User not found' in the results div.

Concepts:
Fetch API
Async/await
DOM manipulation
Dealing with API errors
Use of GitHub API

----------------------------
Display username and public repositories count - Upon successful submission, display the fetched user's username and their public repositories count within the results div. Make sure the usernames and repositories count are within separate <p> elements.