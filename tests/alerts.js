const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("alerts", async function () {
  let driver;
  this.timeout(0);
  this.beforeEach(async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
  });
  this.afterEach(async function () {
    await driver.quit();
  });
  it("alerts", async function () {
    await driver.get("https://demoqa.com/alerts");
    await driver.findElement(By.id("alertButton")).click();
    // wait for the alert if it is not present it will fail the test case
    await driver.wait(until.alertIsPresent(), 10000);
    const alerts = await driver.switchTo().alert();
    // accept the alerts
    await alerts.accept();
    // to get the text of the alert
    await console.log(alerts.getText());
  });

  it("confirm alerts", async function () {
    await driver.get("https://demoqa.com/alerts");
    await driver.findElement(By.id("confirmButton")).click();
    // wait for the alert if it is not present it will fail the test case
    await driver.wait(until.alertIsPresent(), 10000);
    const alerts = await driver.switchTo().alert();
    // accept the alerts
    await alerts.accept();

    // to dismiss the alert
    await driver.findElement(By.id("confirmButton")).click();
    // wait for the alert if it is not present it will fail the test case
    await driver.wait(until.alertIsPresent(), 10000);
    await alerts.dismiss();
    // to get the text of the alert
    await console.log(alerts.getText());
  });

  it("prompt alerts", async function () {
    await driver.get("https://demoqa.com/alerts");
    await driver.findElement(By.id("promtButton")).click();
    // wait for the alert if it is not present it will fail the test case
    await driver.wait(until.alertIsPresent(), 10000);
    const alerts = await driver.switchTo().alert();
    // send some input
    await alerts.sendKeys("My name is Sandhya");
    // accept the alerts
    await alerts.accept();
    // validate text is entered

    let result = await driver.findElement(By.id("promptResult")).getText();
    assert.ok(result.toString().includes("You entered My name is Sandhya"));
  });
});
