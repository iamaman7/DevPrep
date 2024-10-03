import fs from 'fs'
import puppeteer from 'puppeteer'

const results = []

// Launch the headless browser for testing
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

// Go to user source code page
await page.goto('http://localhost:1337')

// Add jQuery and Chai for unit testing support
await Promise.all([
    page.addScriptTag({
        url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
    }),
    page.addScriptTag({
        url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js'
    })
])

// Add chai-dom
await page.addScriptTag({
    url: 'https://cdn.jsdelivr.net/npm/chai-dom@1.11.0/chai-dom.min.js'
})

// Challenge 1: Test for Select Input Elements
{
    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            expect(document.getElementById('fromUnit')).to.exist
            expect(document.getElementById('toUnit')).to.exist
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 1 failed: Could not find #fromUnit or #toUnit.')
            return false
        }
    })
    results.push(result)
}

// Challenge 2: Test for Number Input Element
{
    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            expect(document.getElementById('fromValue')).to.exist
            expect(document.getElementById('fromValue').getAttribute('type')).to.equal('number')
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 2 failed: Could not find #fromValue or it is not a number input.')
            return false
        }
    })
    results.push(result)
}

// Challenge 3: Test for Convert Button
{
    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            expect(document.getElementById('convert')).to.exist
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 3 failed: Could not find #convert button.')
            return false
        }
    })
    results.push(result)
}

// Challenge 4: Test Conversion Logic
{
    await page.type('#fromValue', '100').catch(() => {})
    await page.select('#fromUnit', 'centimeters')
    await page.select('#toUnit', 'inches')
    await page.click('#convert')
    await page.waitForTimeout(1000) // Wait for React to update

    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            const outputValue = parseFloat(document.getElementById('outputValue').textContent)
            expect(outputValue).to.be.closeTo(39.3701, 0.001) // Assuming 100 cm to inches conversion
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 4 failed: Conversion logic is incorrect.')
            return false
        }
    })
    results.push(result)
}

// Challenge 5: Test Output Precision
{
    const result = await page.evaluate(async () => {
        const { expect } = window.chai
        try {
            const outputText = document.getElementById('outputValue').textContent
            const decimalPlaces = (outputText.split('.')[1] || []).length
            expect(decimalPlaces).to.equal(3)
            return true
        } catch (error) {
            console.log(error.message)
            console.log('Challenge 5 failed: Output value does not have 3 decimal places.')
            return false
        }
    })
    results.push(result)
}

// Write the results array boolean
fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(results))

await browser.close().catch(err => {})

// Exit the process
process.exit(0)
