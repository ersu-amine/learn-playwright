import { test } from '@playwright/test';

test('', async ({ page }) => {

    //Go to https://youtube.com
    await page.goto('https://youtube.com');

    let search = page.locator("//input[@name='search_query']");
    
    await search.fill("How to grind coffee beans");
    //press enter to search for coffee beans
    await search.press("Enter");
    //pause for 1/2 seconds 
    await page.waitForTimeout(500);

    //click on the 5th video
    page.locator("(//a[@id='video-title'])[5]").click();

    //pause for 5 seconds
    await page.waitForTimeout(5000);

});




