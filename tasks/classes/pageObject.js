/**
 * 1. Install Playwright: https://playwright.dev/docs/intro#installing-playwright
 * 2. After installation check version using following command: npx playwright --version
 * 3. Inside the tests folder create a file with the name first-e2e-test.spec.ts
 * 4. Using Playwright documentation create a test scenario that executes:
 *    1) Open https://app.dev-esurance.ch/gastrosuisse
 *    2) Select any product and continue to the product page
 *    3) Select any price parameters if needed and proceed to the product config page
 *    4) On the product config page activate any additional coverage and add product to the basket
 *    5) Retrieve product price value and save to the variable
 *    5) Verify that product are added to the basket (check product name)
 *    6) Verify that prices in the basket and product config page are exactly the same
 *    7) Install VS code extension Playwright Test for VSCode
 *    8) Run you test and make sure it's passed
 *    9) Also run test from terminal using command npx playwright test first-e2e-test.spec.ts
 *    10) Run command npx playwright show-report to see test run report
 */


/**
 * 1. Write a page-object for landing page
 * 2. Write a page-object for product page
 * 3. Write a page-object for config page
 * 4. Write a page-object for basket page
 * 5. Write aditional test that will performe the following:
 *    1) Choose product and add them to the basket
 *    2) Check that these products are displayed in the basket
 *    3) Verify that prices in the basket and product config page are exactly the same
 *    4) Open Physical Offer modal window 
 *    5) Fill all the fields
 *    6) Click download button
 *    7)* Verify that Physical Offer request return 200 OK
 *    8) Complete checkout 
 *    9) Verify display of pop-up Confirmation
 *    10) Verify Submit 200
 *    11) Verify analyse responce status (draft or active)
 */
