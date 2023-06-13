const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const path = require('path')

describe("file upload", async function () {
    let driver;
    this.timeout(0);
    this.beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().maximize();
    });
    this.afterEach(async function () {
        await driver.quit();
    });

    it("file upload", async function () {
        await driver.get("https://the-internet.herokuapp.com/upload");
        await driver.findElement(By.name("file")).sendKeys(process.cwd() + path.join('/Files/Testing.pdf'))
    })
})