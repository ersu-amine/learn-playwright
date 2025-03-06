import { test } from '@playwright/test';

//group insert with the help of AI prompt
test.describe('', () => {
    test.beforeAll(async (page) => {
        page.goto('https://the-internet.herokuapp.com');
    });

    test('@smoke key pressing test', async ({ page }) => {
        //open the key presses page
        page.locator("//a[contains(text(),'Key Presses')]").click();
        
        //locate input box
        let inputBox = page.locator("//input[@id='target']");

        //fill in the input box with 'Hello'
         await inputBox.fill('Hello');

        //confirm the last key pressed is'o'

    });

    test('Test2', async ({ page }) => {

    });

    test('Test3', async ({ page }) => {

    });    
    
    test('Test4', async ({ page }) => {

    });
});