// Generated from: features\login.feature
import { test } from "../../fixtures/login.fixture.ts";

test.describe('SauceDemo Login', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, And, loginPage }) => { 
    await Given('user is on the SauceDemo login page', null, { loginPage }); 
    await When('user enters valid credentials', null, { loginPage }); 
    await And('user clicks on the login button', null, { loginPage }); 
    await Then('user should be redirected to the products page', null, { loginPage }); 
    await And('user should see the products heading', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given user is on the SauceDemo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When user enters valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the products page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And user should see the products heading","stepMatchArguments":[]}]},
]; // bdd-data-end