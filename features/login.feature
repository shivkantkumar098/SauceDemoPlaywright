
Feature: SauceDemo Login

  As a registered SauceDemo user
  I want to log in to the application
  So that I can access the products page

  Scenario: Successful login with valid credentials
    Given user is on the SauceDemo login page
    When user enters valid credentials
    And user clicks on the login button
    Then user should be redirected to the products page
    And user should see the products heading