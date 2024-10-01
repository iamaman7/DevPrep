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

// add jQuery and chai for unit testing support if you want
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

{
    const result = await page.evaluate(async () => {
        try {
            const { expect } = window.chai
            expect(document.getElementById('counter-btn')).to.exist
            return { status: 'pass' }
        } catch (error) {
            return { status: 'error', error: error.message || 'Challenge failed' }
        }
    })

    testlog.push(result)
}

{
    const result = await page.evaluate(async () => {
        try {
            const { expect } = window.chai
            expect(document.getElementById('count-display')).to.exist
            return { status: 'pass' }
        } catch (error) {
            return { status: 'error', error: error.message || 'Challenge failed' }
        }
    })

    testlog.push(result)
}

{
    const result = await page.evaluate(async () => {
        try {
            const { expect } = window.chai
            expect(document.getElementById('count-display').textContent).to.equal("0")
            return { status: 'pass' }
        } catch (error) {
            return { status: 'error', error: error.message || 'Challenge failed' }
        }
    })

    testlog.push(result)
}

{
    const result = await page.evaluate(async () => {
        try {
            const { expect } = window.chai
            const counterBtn = document.getElementById('counter-btn')
            counterBtn.click()
            expect(document.getElementById('count-display').textContent).to.equal("1")
            return { status: 'pass' }
        } catch (error) {
            return { status: 'error', error: error.message || 'Challenge failed' }
        }
    })

    testlog.push(result)
}

// Write test log and results array
fs.writeFileSync('/home/damner/code/.labtests/testlog.json', JSON.stringify(testlog))
fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(testlog.map(result => result.status === 'pass')))

await browser.close().catch((err) => {})

// Exit the process
process.exit(0)
