import fs from 'fs'
import puppeteer from 'puppeteer'

const testlog = []

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

await page.goto('http://localhost:1337')

await Promise.all([
    page.addScriptTag({
        url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
    }),
    page.addScriptTag({
        url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js',
    })
])

await page.addScriptTag({
	url: 'https://cdn.jsdelivr.net/npm/chai-dom@1.11.0/chai-dom.min.js'
})

{
    const result = await page.evaluate(async () => {
        try {
            const { expect } = window.chai
            const input = document.getElementById('input-text')
            const uppercaseBtn = document.getElementById('uppercase-btn')
            input.value = 'example'
            uppercaseBtn.click()
            expect(input.value).to.equal('EXAMPLE')
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
            const input = document.getElementById('input-text')
            const lowercaseBtn = document.getElementById('lowercase-btn')
            input.value = 'EXAMPLE'
            lowercaseBtn.click()
            expect(input.value).to.equal('example')
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
            const input = document.getElementById('input-text')
            const resetBtn = document.getElementById('reset-btn')
            input.value = 'example'
            resetBtn.click()
            expect(input.value).to.equal('')
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
            expect(document.getElementById('output')).to.exist
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
            const input = document.getElementById('input-text')
            const output = document.getElementById('output')
            const uppercaseBtn = document.getElementById('uppercase-btn')
            input.value = 'example'
            uppercaseBtn.click()
            expect(output.textContent).to.equal('EXAMPLE')
            return { status: 'pass' }
        } catch (error) {
            return { status: 'error', error: error.message || 'Challenge failed' }
        }
    })

    testlog.push(result)
}

fs.writeFileSync('/home/damner/code/.labtests/testlog.json', JSON.stringify(testlog))

fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(testlog.map(result => result.status === 'pass')))

await browser.close().catch((err) => {})

process.exit(0)
