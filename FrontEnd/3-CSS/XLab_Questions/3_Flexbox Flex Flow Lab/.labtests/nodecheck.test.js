import fs from 'fs'
import puppeteer from 'puppeteer'

// testlog is a log of test results
const testlog = []

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
		'--disable-gpu',
	],
})
const page = await browser.newPage()

// go to user source code page
await page.goto('http://localhost:1337')

// add jQuery and chai for unit testing support
await Promise.all([
	page.addScriptTag({
		url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
	}),
	page.addScriptTag({
		url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js',
	})
])

// add chai-dom
await page.addScriptTag({
	url: 'https://cdn.jsdelivr.net/npm/chai-dom@1.11.0/chai-dom.min.js'
})

// Start your tests here in individual blocks

// Challenge 1
{
	const result = await page.evaluate(async () => {
		const { expect } = window.chai
		try {
			const containerStyle = getComputedStyle(document.querySelector('.container'))
			expect(containerStyle.display).to.equal('flex')
			return { status: 'pass' }
		} catch(error) {
			return { status: 'error', error: error.message || 'Challenge failed' }
		}
	})
	
	testlog.push(result)
}

// Challenge 2
{
	const result = await page.evaluate(async () => {
		const { expect } = window.chai
		try {
			const containerStyle = getComputedStyle(document.querySelector('.container'))
			expect(containerStyle.flexFlow.toLowerCase()).to.equal('row nowrap')
			return { status: 'pass' }
		} catch(error) {
			return { status: 'error', error: error.message || 'Challenge failed' }
		}
	})

	testlog.push(result)
}

// Challenge 3
{
	const result = await page.evaluate(async () => {
		const { expect } = window.chai
		try {
			const containerStyle = getComputedStyle(document.querySelector('.container.column-wrap'))
			expect(containerStyle.flexFlow.toLowerCase()).to.equal('column wrap')
			return { status: 'pass' }
		} catch(error) {
			return { status: 'error', error: error.message || 'Challenge failed' }
		}
	})

	testlog.push(result)
}

// Challenge 4
{
	const result = await page.evaluate(async () => {
		const { expect } = window.chai
		try {
			const containerStyle = getComputedStyle(document.querySelector('.container.row-reverse-wrap-reverse'))
			expect(containerStyle.flexFlow.toLowerCase()).to.equal('row-reverse wrap-reverse')
			return { status: 'pass' }
		} catch(error) {
			return { status: 'error', error: error.message || 'Challenge failed' }
		}
	})

	testlog.push(result)
}

// very important for the final length of `testlog` array to match the number of challenges, in this case - 4.

// write the test log
fs.writeFileSync('/home/damner/code/.labtests/testlog.json', JSON.stringify(testlog))

// write the results array boolean. this will map to passed or failed challenges depending on the boolean value at the challenge index
fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(testlog.map(result => result.status === 'pass')))

await browser.close().catch((err) => {})

// Exit the process
process.exit(0)
