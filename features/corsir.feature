Feature: Order Feature 

    Scenario Outline: (001) As a user I can create order with the Corsair application
        Given I am on the Corsair Login page
        When I am Logging into Corsair application with <u_name> and <u_password>
        Then I am Selecting the Domain
        Then I am Clicking the Order Button
        Then I am Creating the New Order
        Then I am Adding the Quote Details
        Then I am Clicking Select Rate Button
        Then I am Clicking Add Pick Up Button 
        Then I am Clicking Add Delivery Button 
        Examples:
            | u_name          | u_password   |
            | Wolfie          | aiOn8cylbF   | 