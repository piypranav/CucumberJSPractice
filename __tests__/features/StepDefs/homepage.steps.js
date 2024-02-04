import { defineFeature, loadFeature } from "jest-cucumber";
import webdriver, { By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
testURL = "https://www.tutorialsteacher.com/";
const feature = loadFeature('automationTest/features/homePage.feature', { loadRelativePath: true });
// const feature = loadFeature('automationTest/features/homePage.feature');
await clock.tickAsync(1000);

defineFeature(feature, test => {
    test('User lands on Home Page', ({given, when, then}) => {

        given('user enters url', async () => {
            await driver.get(testURL);
        });

        then('verify user is on home Page', async () => {
            await driver.findElement(By.xpath("//input[@id='login']")).sendKeys('piy.pranav');
            driver.findElement(By.xpath("//input[@id='password']")).sendKeys('P12345@');
            driver.findElement(By.xpath("//input[@id='clkBtn' and @name='clkBtn']")).click;
        });

        then('user exits the browser', async () => {
            await driver.exit();
        });
    });
});
