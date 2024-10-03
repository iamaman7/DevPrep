import fs from 'fs'
import puppeteer from 'puppeteer'

// results is a boolean array of results
const results = []

// launch the headless browser for testing
const browser = await puppeteer.launch({
	executablePath: '/usr/bin/google-chrome',
	headless: true,
	args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-dev-shm-usage',
		'--disable-accelerated-2d-canvas',
		'--no-first-run',
		'--no-zygote',
		'--single-process',
		'--disable-gpu'
	]
})
const page = await browser.newPage()
page.on('console', message => console.log(`Browser log: `, message.text()))

// go to user source code page
await page.goto('http://localhost:1337')

// add jQuery and chai for unit testing support
await Promise.all([
	page.addScriptTag({
		url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
	}),
	page.addScriptTag({
		url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js'
	})
])

// add chai-dom
await page.addScriptTag({
	url: 'https://cdn.jsdelivr.net/npm/chai-dom@1.11.0/chai-dom.min.js'
})

// Test 1: Create a text area with id "textInput" and a div with id "count"
{
	const result = await page.evaluate(async () => {
		const { expect } = window.chai
		try {
			expect(!!document.getElementById('textInput')).to.be.true
			expect(!!document.getElementById('count')).to.be.true
			return true
		} catch (error) {
			console.log(error.message)
			console.log('Test 1 failed: Could not find #textInput and/or #count.')
			return false
		}
	})

	results.push(result)
}

// Test 2: Entering a set of characters in the #textInput should update the #count
{
	// Type some text into the textarea
	await page.type('#textInput', 'codedamn')

	const result = await page.evaluate(async () => {
		const { expect } = window.chai
		try {
			const textLength = document.getElementById('textInput').value.length
			const countValue = parseInt(document.getElementById('count').textContent.trim(), 10)
			expect(textLength).to.equal(countValue)

			return true
		} catch (error) {
			console.log(error.message)
			console.log('Test 2 failed: The character count in #count did not match the number of characters in #textInput.')
			return false
		}
	})

	results.push(result)
}

// write the results array boolean
fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))

await browser.close().catch(err => {})

// Exit the process
process.exit(0)
