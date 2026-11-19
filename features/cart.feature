Feature: Shopping cart

  As a SauceDemo user
  I want to add a product to my cart
  So that I can review it before checkout

  Scenario: Add a product to the cart
    Given user is on the SauceDemo login page
    When user enters valid credentials
    And user clicks on the login button
    Then user should be redirected to the products page
    When user adds the Sauce Labs Backpack to the cart
    Then cart should show 1 item
    When user opens the cart
    Then cart should contain the Sauce Labs Backpack
