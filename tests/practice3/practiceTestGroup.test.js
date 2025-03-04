import { test } from "@playwright/test"

test.describe("ticket number @ABC23", async () => {
    test.beforeAll(async() =>{
        console.log("Before all is running");
    });

    test.afterAll(async() =>{
        console.log("After all is running");
    });

    test("test case01", async () => {
        console.log("Test case 01 is running");

    });

    test("test case02", async () => {
        console.log("Test case 02 is running");

    });

    test("test case03", async () => {
        console.log("Test case 03 is running");

    });
});