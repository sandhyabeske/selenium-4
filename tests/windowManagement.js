const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const path = require("path");

describe("Window management", async function () {
  let driver;
  this.timeout(0);
  this.beforeEach(async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
  });
  this.afterEach(async function () {
    await driver.quit();
  });

  it("Window management", async function () {
    await driver.get("https://the-internet.herokuapp.com/upload");
    // to get the current window id
    const currentWindow = await driver.getWindowHandle();
    console.log("Current Window id is" + currentWindow);
    // switch to new window
    await driver.switchTo().newWindow("window");
    await driver.get("https://www.google.com/");
    // get the new window id
    const newWindow = await driver.getWindowHandle();
    console.log("New Window id is" + newWindow);
    // switch between window
    await driver.switchTo().window(currentWindow);
    // switch to new window using id
    await driver.switchTo().window(newWindow);
    await driver.navigate().to("https://www.amazon.in/");
  });
  it("tab management", async function () {
    await driver.get("https://the-internet.herokuapp.com/upload");
    // to get current tab id
    const currentTab = await driver.getWindowHandle();
    console.log("Current tab id is" + currentTab);
    //switch to the new tab
    await driver.switchTo().newWindow("tab");
    await driver.get("https://www.google.com/");
    // get id of new tab
    const newTab = await driver.getWindowHandle();
    console.log("New tab id is" + newTab);
    // switch between tabs
    await driver.switchTo().window(currentTab);
    await driver.navigate().to("https://www.amazon.in/");
  });
  it.only("window size management", async function () {
    await driver.get("https://the-internet.herokuapp.com/upload");
    // to set window size
    // await driver.manage().window().setRect({ width: 375, height: 667 });
    //    to get the window height and width
    let windowSize = await driver.manage().window().getRect();
    console.log(windowSize.width+' '+windowSize.height)
  });
});
