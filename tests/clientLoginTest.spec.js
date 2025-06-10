const { test, expect } = require("@playwright/test");
const { log } = require("console");
 
test.only('TestLogin', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client");

    // await page.locator('[class="text-reset"]').click();

    // await page.locator('#firstName').fill("Kandasamy");
    // await page.locator("#lastName").fill("Balamurugan");
    // await page.locator('#userEmail').fill("kandasamy1998@gmail.com");
    // await page.locator('#userMobile').fill("9696969696");

    // await page.locator('[value="Male"]').click();

    // await page.locator('#userPassword').fill("Login123");
    // await page.locator('#confirmPassword').fill("Login123");

    // await page.locator('[type="checkbox"]').click();

    // await page.locator('#login').click();

   //  await page.locator('[class="btn btn-primary"]').click();

     await page.locator('#userEmail').fill("kandasamy1998@gmail.com");
     await page.locator('#userPassword').fill("Login123");

     await page.locator('#login').click();

     console.log (await page.locator('[class="card-body"]').nth(1).textContent());



     


    await page.pause();

})