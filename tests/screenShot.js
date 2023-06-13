const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const fs = require('fs')

describe("Relative Locators", async function () {
    let driver;
    this.timeout(0);
    this.beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().maximize();
    });
    this.afterEach(async function () {
        await driver.quit();
    });

    it("screenshot", async function () {
        await driver.get("https://the-internet.herokuapp.com/upload");

        const image = await driver.takeScreenshot()
         fs.writeFileSync(process.cwd()+'/Files/Test.png',image,"base64")
    })

    it.only("element screenshot", async function () {
        await driver.get("https://the-internet.herokuapp.com/upload");
        const ele = await driver.findElement(By.name("file"))
        const image = await ele.takeScreenshot(true)
         fs.writeFileSync(process.cwd()+'/Files/Test1.png',image,"base64")
    })
})