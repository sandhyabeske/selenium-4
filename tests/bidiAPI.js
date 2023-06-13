
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const path = require('path')

describe("CDP", async function () {
    let driver;
    this.timeout(0);
    this.beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().maximize();
    });
    this.afterEach(async function () {
        await driver.quit();
    });

    it("register basic auth", async function () {
        const pageCdpConnection = await driver.createCDPConnection('page');
        await driver.register('username', 'password', pageCdpConnection);
        await driver.get('https://the-internet.herokuapp.com/basic_auth');
        await driver.sleep(3000)
    })
    it("retrive console logs", async function () {
        const cdpConnection = await driver.createCDPConnection('page');
        await driver.onLogEvent(cdpConnection, function (event) {
            console.log(event['args'][0]['value']);
        });
        await driver.executeScript('console.log("here")')
        await driver.sleep(3000)
    })

    
    it('Emulate coordinates of Tokyo', async function() {
        const cdpConnection = await driver.createCDPConnection('page');

        // Latitude and longitude of Tokyo, Japan
        const coordinates = {
            latitude: 35.689487,
            longitude: 139.691706,
            accuracy: 100,
        };

        await cdpConnection.execute(
            "Emulation.setGeolocationOverride",
            coordinates
        );
        await driver.get("https://kawasaki-india.com/dealer-locator/");
        await driver.sleep(300000)

    });
      it('Emulating Slow Internet using Chrome DevTools', async function() {

        const devTools = await driver.getDevTools()

        devTools.createSession()

        devTools.send(Network.emulateNetworkConditions())
        await driver.get("https://kawasaki-india.com/dealer-locator/");
        await driver.sleep(300000)

    });
})
