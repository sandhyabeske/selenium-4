// const { Builder, Browser, By, until, withTagName } = require("selenium-webdriver");

// describe("Homepage validations", async function () {
//     let driver;
//     this.timeout(0);
//     this.beforeEach(async function () {
//         driver = await new Builder().forBrowser(Browser.CHROME).build();
//         await driver.manage().window().maximize();
//     });
//     this.afterEach(async function () {
//         await driver.quit();
//     });
//     it.only("validate user is able to serach the employee", async function () {
//         // navigate to the portal
//         await driver.get("https://aitportalqa.aitglobalindia.com/");
//         let password = driver.findElement(By.id(':r1:'));
//         // by using above we can locate email address field by using password field (email address field is above the password field)
//         let emailAddressField = await driver.findElement(withTagName('input').above(password));
//         // by using sendKeys() we are passing email address to the field
//         await emailAddressField.sendKeys("shantesh.varnal@aitglobalinc.com");
//         // here we pass the password 
//         await password.sendKeys("Shan@007")
//         //by using below we can locate login Btn by using password field (login Btn is below the password field)
//         let loginBtn = await driver.findElement(withTagName('button').below(password));
//         // to login into the aplication we perform click action on login button
//         await loginBtn.click()

//     //  //by using toLeftOf we can locate forgot Password feild by using login button (forgot Password is left to the login button)
//     //     let forgotPassword = await driver.findElement(withTagName('a').toLeftOf(loginBtn));
//     //     await forgotPassword.click()

//     //     // by using toRightOf we can locate logo feild by using email address field (logo feild is right to the email address field)
//     //     let logo = await driver.findElement(withTagName('img').toLeftOf(emailAddressField));
//     //     await logo.click()

//     //     // by using near we can locate password field by using email address field (password field is above the email address field)
//     //     let passwordFeild = await driver.findElement(withTagName('input').near(emailAddressField));
//     //     await passwordFeild.sendKeys("123654") 

// //     // A.select data from dropdown
// //    let addIcon = driver.findElement(By.xpath(`//button[contains(@class,'MuiIconButton')]/..//*[@data-testid="AddIcon"]`))
// //    await addIcon.click()
   
// //    let selectEmployee = driver.findElement(By.xpath(`//input[@placeholder="Select Employee"]`))
// //    await selectEmployee.sendKeys("Sandhya Beske")

// //    await selectEmployee.click()

// //    navigate to admin menu
// await driver.sleep(1000)
// let adminMenu = await driver.findElement(By.xpath(`//*[@data-testid="AdminPanelSettingsIcon"]`))
// await adminMenu.click()

// // click on add user
// // let addUser =  await driver.findElement(By.xpath(`//button[text()='Add User']`))
// // await addUser.click()
// await driver.wait(until.elementLocated(By.xpath(`//button[text()='Add User']`)), 10000).click()

// // select country dropdown
// // let selectCountryDropDown = await driver.findElement(By.xpath(`//label[text()='Select Country']`))
// // await selectCountryDropDown.click()
// await driver.sleep(100000)
// await driver.wait(until.elementLocated(By.id("departments_id")), 10000).click()

// const selectDept = await driver.findElement(By.xpath(`//li[text()='Accounts']`))

//       await driver.actions()
//         .scroll(0, 0, 0, 0, selectDept)
//         .perform()
//     });
// })
