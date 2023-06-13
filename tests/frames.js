const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("frames", async function () {
    let driver;
    this.timeout(0);
    this.beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().maximize();
    });
    this.afterEach(async function () {
        await driver.quit();
    });

    it("frames", async function () {
        await driver.get("https://demoqa.com/frames");
        // await driver.switchTo().frame(await driver.findElement(By.id('frame1')));
        await driver.wait(until.ableToSwitchToFrame(By.id('frame1')), 10000)
        let frametext = await driver.findElement(By.id('sampleHeading')).getText()
        assert.ok(frametext.toString()=='This is a sample page')
        // switch to main page
        await driver.switchTo().frame(null)
        await driver.findElement(By.xpath("//div[contains(text(), 'Elements')]")).click()
    })
    it.only("handle frame with indexes", async function () {
        await driver.get("https://the-internet.herokuapp.com/iframe");
        // await driver.switchTo().frame(await driver.findElement(By.id('frame1')));
        await driver.wait(until.ableToSwitchToFrame(By.id('mce_0_ifr')), 10000)
        let frametext = await driver.findElement(By.id('tinymce')).getText()
        await driver.sleep(20000)
        assert.ok(frametext.toString()=='Your content goes here.')
        await driver.findElement(By.id('tinymce')).sendKeys("My name is Sandhya")
        assert.ok(frametext.toString()=='Your content goes here.My name is Sandhya')
        await driver.sleep(20000)
        // // awitch to main page
        // await driver.switchTo().frame(null)
        // await driver.findElement(By.xpath("//div[contains(text(), 'Elements')]")).click()
    })
})