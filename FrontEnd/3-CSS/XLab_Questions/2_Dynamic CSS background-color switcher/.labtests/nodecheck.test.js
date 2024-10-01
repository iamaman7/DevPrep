import fs from 'fs'
import puppeteer from 'puppeteer'

// testlog is a log of test results
const testlog = [];

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
});
const page = await browser.newPage();

// go to user source code page
await page.goto('http://localhost:1337');

// add jQuery and chai for unit testing support if you want
await Promise.all([
  page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
  }),
  page.addScriptTag({
    url: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js',
  }),
]);

// add chai-dom
await page.addScriptTag({
  url:
    'https://cdn.jsdelivr.net/npm/chai-dom@1.11.0/chai-dom.min.js',
});

// Start your tests here in individual blocks

{
  const result = await page.evaluate(async () => {
    try {
      const { expect } = window.chai;
      expect(document.getElementById('switchBtn')).to.exist;
      expect(document.getElementById('colorBox')).to.exist;
      return { status: 'pass' };
    } catch (error) {
      return { status: 'error', error: error.message || 'Challenge failed' };
    }
  });

  testlog.push(result);
}

{
  const result = await page.evaluate(async () => {
    try {
      const { expect } = window.chai;
      const colorBox = document.getElementById('colorBox');
      const computedStyle = window.getComputedStyle(colorBox);
      expect(computedStyle.width).to.equal('300px');
      expect(computedStyle.height).to.equal('300px');
      return { status: 'pass' };
    } catch (error) {
      return { status: 'error', error: error.message || 'Challenge failed' };
    }
  });

  testlog.push(result);
}

{
  const result = await page.evaluate(async () => {
    try {
      const { expect } = window.chai;
      expect(typeof window.randomHexColor).to.equal('function');
      const generatedColor = window.randomHexColor();
      expect(generatedColor).to.match(
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
      );
      return { status: 'pass' };
    } catch (error) {
      return { status: 'error', error: error.message || 'Challenge failed' };
    }
  });

  testlog.push(result);
}

{
  const result = await page.evaluate(async () => {
    try {
      const { expect } = window.chai;
      const switchBtn = document.getElementById('switchBtn');
      const colorBox = document.getElementById('colorBox');
      const initialColor = window.getComputedStyle(colorBox).backgroundColor;
      switchBtn.click();
      const newColor = window.getComputedStyle(colorBox).backgroundColor;
      expect(initialColor).not.to.equal(newColor);
      return { status: 'pass' };
    } catch (error) {
      return { status: 'error', error: error.message || 'Challenge failed' };
    }
  });

  testlog.push(result);
}

// Very important for the final length of the `testlog` array to match the number of challenges, in this case - 4.

// Write the test log
fs.writeFileSync(
  '/home/damner/code/.labtests/testlog.json',
  JSON.stringify(testlog)
);

// Write the results array boolean. This will map to passed or failed challenges depending on the boolean value at the challenge index
fs.writeFileSync(
  process.env.UNIT_TEST_OUTPUT_FILE,
  JSON.stringify(testlog.map((result) => result.status === 'pass'))
);

await browser.close().catch((err) => {});

// Exit the process
process.exit(0);
