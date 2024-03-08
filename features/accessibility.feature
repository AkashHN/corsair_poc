Feature: Accessibility Test

    Scenario Outline: As a user I can create order with the Corsair application
        Given I am on the Corsair Login page for a11y_test
        When I am Logging into Corsair application with the for a11y_test
        Then I am Selecting the Domain for a11y_test
        Then I am Clicking the Order Button for a11y_test
        Then I am Creating the New Order for a11y_test
        Then I am Adding the Quote Details for a11y_test
        Examples:
            | u_name          | u_password   |
            | Wolfie          | **********   | 