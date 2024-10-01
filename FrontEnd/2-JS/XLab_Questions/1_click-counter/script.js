// Add the click event listener here

let counterButton = document.querySelector('#counter-btn')

counterButton.addEventListener('click', function () {
    
	const countDisplay = document.querySelector('#count-display')
    countDisplay.textContent = parseInt(countDisplay.textContent) + 1

})