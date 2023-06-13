const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const path = require('path')

describe("action class", async function () {
    let driver;
    this.timeout(0);
    this.beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().maximize();
    });
    this.afterEach(async function () {
        await driver.quit();
    });

    it("Drag and drop", async function () {
        await driver.get("https://www.selenium.dev/selenium/web/mouse_interaction.html");
        let srcEle = await driver.findElement(By.id("draggable"))
        let tarEle = await driver.findElement(By.id("droppable"))
        await driver.actions().dragAndDrop(srcEle, tarEle).perform()
        await driver.sleep(2000)
    })

    it("click", async function () {
        await driver.get("https://www.selenium.dev/selenium/web/mouse_interaction.html");
        let element = await driver.findElement(By.id("click"))
        // contextClick(WebElement)
        // This method will replace moveToElement(onElement).contextClick(). It will perform the right click operation.
        await driver.actions().contextClick(element).perform()
        await driver.sleep(2000)

        //click(WebElement)
        // This method is added to Actions class to replace the moveToElement(onElement).click(). It is used to click on a certain web element.
        let clickElement = await driver.findElement(By.id("clickable"))

        await driver.actions().click(clickElement).perform()


        // doubleClick(WebElement)
        // This method is added to replace moveToElement(element).doubleClick(). It will perform a double click on an element.
        await driver.actions().doubleClick(clickElement).perform()
        await driver.sleep(2000)
        let validationText = await driver.findElement(By.id('click-status')).getText()
        assert.ok(validationText.toString() == 'double-clicked')


        //clickAndHold(WebElement)
        // This method will replace the moveToElement(onElement).clickAndHold(). It is used to click on an element without releasing the click.
        await driver.actions().move({ origin: element }).press().perform();
        await driver.sleep(2000)
        // release
        await driver.actions().move({ origin: element }).click().perform();

    })
    it.only("hover", async function () {
        await driver.get("https://www.selenium.dev/selenium/web/mouse_interaction.html");
        let element = await driver.findElement(By.id("hover"))
        await driver.actions().move({ origin: element }).perform();
        let validationText = await driver.findElement(By.id('move-status')).getText()
        assert.ok(validationText.toString() == 'hovered')
        await driver.sleep(2000)
    })
})