Feature: Post CRUD Operations

Background: Valid user login
    Given User must launch login page
    When User enters valid credentials
    Then Should display Home page

 Scenario: View post details
        Given Post must be  listed
        When User select the post 
        Then Should display the post details

     
    