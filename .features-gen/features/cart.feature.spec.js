// Generated from: features\cart.feature
import { test } from "../../fixtures/login.fixture.ts";

test.describe('Shopping cart', () => {

  test('Add a product to the cart', async ({ Given, When, Then, And, loginPage, productsPage }) => { 
    await Given('user is on the SauceDemo login page', null, { loginPage }); 
    await When('user enters valid credentials', null, { loginPage }); 
    await And('user clicks on the login button', null, { loginPage }); 
    await Then('user should be redirected to the products page', null, { loginPage }); 
    await When('user adds the Sauce Labs Backpack to the cart', null, { productsPage }); 
    await Then('cart should show 1 item', null, { productsPage }); 
    await When('user opens the cart', null, { productsPage }); 
    await Then('cart should contain the Sauce Labs Backpack', null, { productsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user enters valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the products page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user adds the Sauce Labs Backpack to the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then cart should show 1 item","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user opens the cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then cart should contain the Sauce Labs Backpack","stepMatchArguments":[]}]},
]; // bdd-data-end