import { test, expect } from '@playwright/test';

test.describe('Test for internet page', () => {
    let context; //browser?
    let page;
    //each time the vrwoser should be at the main page
    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage(); //opens empty tab
        await page.setViewportSize({ width: 1920, height: 1080 });

        await page.goto('https://the-internet.herokuapp.com');
    });

    test('@smoke key pressing test', async () => {

        const element = page.locator("//a[contains(text(),'Key Presses')]");


        // Scroll to key press links
        await element.scrollIntoViewIfNeeded();

        // Open the key presses page
        await element.click({ force: true });

        //await page.mouse.wheel(0, 300); //alternative scrolling
        await page.waitForTimeout(1000);

        // Locate input box
        let inputBox = page.locator("//input[@id='target']");
        await page.waitForTimeout(1000);

        // Fill in the input box with 'Hello'
        await inputBox.fill("Hello");
        await page.waitForTimeout(1000);

        // Confirm the last the value entered is 'Hello'
        let expectedValue = "Hello";
        //assertion
        await expect(await inputBox.inputValue(), "Expect the input value to be Hello").toBe(expectedValue);

    });

    test('Hover test', async () => {
        // Test implementation
        const element = page.locator("//*[text()='Hovers']");
        await element.click();
        await page.waitForTimeout(1000);

        const middleUser = page.locator("(//img[@alt='User Avatar'])[2]");
        await middleUser.hover();
        await page.waitForTimeout(1000);

    });

    test('Checkbox test', async () => {
        //navigate to the checkboxes page
        const link = page.locator("//a[@href='/checkboxes']");
        await link.click();

        //store the checkboxes
        const elements = page.locator("//form[@id='checkboxes']/input");
        //const elements = page.locator("//form[@id='checkboxes']/input").all(); //returns array and don't have nth
        await page.waitForTimeout(1000);

        //nth is for locator
        const checkbox1 = elements.nth(0);
        const checkbox2 = elements.nth(1);

        await checkbox1.click();
        await checkbox2.click();
        await page.waitForTimeout(1000);

        //assert that first checkbox is checked and that second checkbox is unchecked
        await expect(await checkbox1.isChecked(), "Message").toBe(true);
        await expect(await checkbox2.isChecked()).toBe(false);

    });

    test('Select dropdown test', async () => {
        //navigate to the dropdown page
        await page.locator("//a[text()='Dropdown']").click();
        // select by value
        await page.locator('select#dropdown').selectOption('1');
        await page.waitForTimeout(1000);
        await page.locator('select#dropdown').selectOption({ label: 'Option 2' });
        await page.waitForTimeout(1000);

        //add option:checked after the locater to indicate verification for the selected option
        await expect(page.locator('select#dropdown option:checked'), "Expect option 2 to be selected").toHaveText('Option 2');
    });

    test.afterEach(async () => {
        await context.close();
    });
});
