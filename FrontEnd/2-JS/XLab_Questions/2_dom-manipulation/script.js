document.getElementById('uppercase-btn').addEventListener('click', function () {
	let inputText = document.getElementById('input-text')
	let output = document.getElementById('output')
	inputText.value = inputText.value.toUpperCase()
	output.innerHTML = inputText.value
})

document.getElementById('lowercase-btn').addEventListener('click', function () {
	let inputText = document.getElementById('input-text')
	let output = document.getElementById('output')
	inputText.value = inputText.value.toLowerCase()
	output.innerHTML = inputText.value
})

document.getElementById('reset-btn').addEventListener('click', function () {
	let inputText = document.getElementById('input-text')
	let output = document.getElementById('output')
	inputText.value = ''
	output.innerHTML = ''
})
