const { test, expect } = require("@playwright/test");

// test('Test1',async function(){

// test('Test1', async ({ browser }) => {
//     const context = await browser.newContext();// ()=> we can pass some specific parameter 

//     const page = await context.newPage();
//     await page.goto("https://www.flipkart.com/");
// })

test('Test2', async ({ browser, page }) => { 
    // const context= await browser.newContext(); // if we dont have any specific in browser then 

    // const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   // console.log("Page Title " + (await page.title()))
    //    await expect(page).toHaveTitle("Google");

    await page.locator('[name="username"]').fill("rahulshettyacademy");

    await page.locator('[id="password"]').fill("learning");

    await page.locator('[name="signin"]').click();


    //webdriver wait
    // console.log(await page.locator("[style*='block']").textContent());

  //  await page.pause();

  console.log(await page.locator('.card-body a').first().textContent());

    console.log(await page.locator('.card-body a').nth(1).textContent());




})