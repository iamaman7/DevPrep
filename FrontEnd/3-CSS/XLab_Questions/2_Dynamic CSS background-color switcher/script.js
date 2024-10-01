function randomHexColor() {
	let hex = '#'
	const characters = '0123456789ABCDEF'

	for (let i = 0; i < 6; i++) {
		hex += characters[Math.floor(Math.random() * 16)]
	}

	return hex
}

const switchBtn = document.getElementById('switchBtn')
const colorBox = document.getElementById('colorBox')

switchBtn.addEventListener('click', () => {
	const newColor = randomHexColor()
	colorBox.style.backgroundColor = newColor
})
