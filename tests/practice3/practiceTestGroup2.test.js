import { test } from '@playwright/test';

//group insert with the help of AI prompt
test.describe('Test for internet page', () => {
    let context;
    let page;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage(); //opens empty tab
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://the-internet.herokuapp.com'); //opens in another tab
               

    });

    test('@smoke key pressing test', async ({ page }) => {
        const element = page.locator("//a[contains(text(),'Key Presses')]");

        // Scroll to key press links
        await element.scrollIntoViewIfNeeded();//does not scroll because of new empty tab

        // Open the key presses page
        await element.click();

        // Locate input box
        let inputBox = page.locator("//input[@id='target']");

        // Fill in the input box with 'Hello'
        await inputBox.fill('Hello');

        // Confirm the last key pressed is 'o'
        // Add your assertion here
    });

    test('Test2', async ({ page }) => {
        // Test implementation
    });

    test('Test3', async ({ page }) => {
        // Test implementation
    });

    test('Test4', async ({ page }) => {
        // Test implementation
    });

    test.afterAll(async () => {
        await context.close();
    });
});
