const { Builder, Browser, By, Key, until } = require('selenium-webdriver');


describe("wait ", async function () {
    let driver;
    this.timeout(0)

    it("implicit wait", async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://www.amazon.in/');
        await driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        await driver.findElement(By.xpath('//a[text()="Amazon miniTV"]'))
        await driver.findElement(By.xpath('//a[text()="Sell"]'));

    })

    it("explicit wait", async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://www.amazon.in/');
        await driver.findElement(By.xpath('//a[text()="Amazon miniTV"]'));
        await driver.wait(until.elementLocated(By.xpath('//a[text()="Sell"]')), 1000)
        await driver.wait(until.elementTextIs(driver.findElement(By.xpath('//a[text()="Sell"]')), "Sell"), 1000)
        await driver.wait(until.titleIs("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"), 1000)
    })
    this.afterEach(async function () {
        await driver.quit()
    })
})