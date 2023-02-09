Feature: Table Reservation
  As a user
  I want to book a table when I provide my information
  Scenario: Book a table
    Given User is in Reservation Page
    When  User provide the username 'Lee', the phoneNumber '18516192104', the arriveTime '2023-02-09 12:00', the tableSize 'L'
    And   User click on the book button
    Then  User should see the status of the reservation 'Booked'