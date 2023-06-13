const { Builder, Browser, By, Key, until, withTagName } = require("selenium-webdriver");
const assert = require("assert");

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
    it.only("Relative Locators", async function () {
        await driver.get("https://aitportalqa.aitglobalindia.com/");
        // let email = driver.findElement(By.id(':r0:'));
        let password = driver.findElement(By.id(':r1:'));
        // above
        let emailAddressField = await driver.findElement(withTagName('input').above(password));
        await emailAddressField.sendKeys("sandhyaBeske@gmail.com");

        // below
        let passwordFeild = await driver.findElement(withTagName('input').below(emailAddressField));
        await passwordFeild.sendKeys("123654")

        let loginBtn = await driver.findElement(withTagName('button').below(password));
        await loginBtn.click()
        
        // toLeftOf
        let forgotPassword = await driver.findElement(withTagName('a').toLeftOf(loginBtn));
        await forgotPassword.click()

        // toRightOf
        let logo = await driver.findElement(withTagName('img').toLeftOf(emailAddressField));
        await logo.click()
        // near
        // let passwordFeild = await driver.findElement(withTagName('input').near(emailAddressField));
        // await passwordFeild.sendKeys("123654")
  });
})
