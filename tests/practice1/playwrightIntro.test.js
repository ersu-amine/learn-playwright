//regular js extention files are not treated as test case

//const { test } = require('@playwright/test');

import { test } from '@playwright/test';

//curly brackets used to declare set by passing individiual elements to it
//@ used for tag in description
test('Google search test @google55', async ({ page }) => {

    await page.goto('https://www.google.com');//deal with promise by using await keyword

    //locate element
    let searchInputBox = page.locator("//textarea[@class='gLFyf']");

    await page.waitForTimeout(2000);

    searchInputBox.fill("Coffee Beans");
    await page.waitForTimeout(2000);

    //searchInputBox.type("Coffee Beans"); // types letter one by one
    await searchInputBox.press("Enter"); //await used b/c returnjing promise
    await page.waitForTimeout(2000);

});

test("Amazon seach @amazon34", async ({ page }) => {

    //not working because of captcha
    await page.goto("https://www.amazon.ca");
    await page.reload(); //did not work

    let searchArea = page.locator("//input[@id='twotabsearchtextbox']");
    await page.waitForTimeout(2000);
    await searchArea.fill("Coffee Beans");
    await page.waitForTimeout(2000);
    await searchArea.press("Enter");
    await page.waitForTimeout(2000);

});


