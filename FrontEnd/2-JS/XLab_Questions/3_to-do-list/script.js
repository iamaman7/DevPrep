// Add your JavaScript code here
const inputElem = document.getElementById('task-input')
const btnElem = document.getElementById('add-task-btn')
const uLElem = document.getElementById('task-list')
const clrBtnElem = document.getElementById('clear-tasks-btn')

btnElem.addEventListener('click', () => {
	let text = inputElem.value
	if (text.length == 0) return
	const liElem = document.createElement('li')
	liElem.textContent = text
	liElem.addEventListener('click', () => {
		liElem.remove()
	})
	liElem.classList.add('task-item')
	uLElem.appendChild(liElem)
	inputElem.value = ''
})

clrBtnElem.addEventListener('click', () => {
	while (uLElem.children.length > 0) {
		uLElem.removeChild(uLElem.children[0])
	}
})
