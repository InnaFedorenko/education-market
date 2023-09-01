
# ![UniVersIty](client/public/images/logos/logoUniVersIty.svg) - Decentralized Education Platform
## Table of Contents
- [Description](#description)
- [Requirements](#requirements)
- [Technologies](#technologies)

- [Installation]( #installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) 
##  Description
[UniVersIty](https://education-marketplace-73fae374fc3f.herokuapp.com/learn) - Decentralized Education Platform developed by [Inna Fedorenko, ](https://stellular-starburst-3938dc.netlify.app/)

## Project details:
- [GiHub Link](https://github.com/InnaFedorenko/education-market)
- [Tasks management](https://github.com/users/InnaFedorenko/projects/1/views/1)
- [App Link](https://education-marketplace-73fae374fc3f.herokuapp.com/learn)
- [VideoLink](https://drive.google.com/file/d/1e9xcgvObIwHyrtrnd0tbMA-4rq2tFXpZ/view)
- [Deck](https://docs.google.com/presentation/d/1eyhYimdM2db1TDg_wJ_B2iN4-scUUq3fq9ro5HFazi8/edit?usp=sharing)
- [Portfolio Link](https://stellular-starburst-3938dc.netlify.app/)
- Date: 09-02-2023
#
Imagine a future where education is truly decentralized. The UniVersIty platform is a proof-of-concept (POC) project that brings passionate educators directly together with curious learners, eliminating intermediaries and barriers to learning. With UniVersIty, you can collaborate, share knowledge, and learn freely, fostering a community-driven educational ecosystem.

### Disclaimer
UniVersIty is a proof-of-concept (POC) project and may have limited functionality. It is intended to showcase the potential of a decentralized education platform. As a POC, it might not have all the features of a fully developed platform but serves as a starting point for further development and exploration.  
 We welcome contributions and feedback from the community to help shape the future of decentralized education.
      
        In Scope: 
        - User Login  / SignUP
        - Marketplace for Learn and Teach
        - Ability to manage verses (courses): add and cancel orders
        - Additional Backend implementation: API to manage Users Profiles
        Future  scope:
        - Review / Update profile 
        - Add / Update / Delete Verses
        - Integration with Payment system
        - Web3 integration (wallet auth and payment)


## Requirements
### Feature: Guest User
`Scenario: Not Logged-in User Access`

    Given the user is not logged in
    When the user visits the landing page
    Then the user should see a "Sign Up" button
    And the user should not see a "Log Out" button

  `Scenario: Explore Marketplace`

    Given the user is not logged in
    When the user clicks on "Learn" or "Teach" in the navigation
    Then the user should be able to access the respective marketplace
    And the user should see a list of available courses
    And each course should display its title, description, author, and price
    And the user should not see the "Order" button


### Feature: User Management

  `Scenario: User Registration`

    Given the user is on the landing page
    When the user clicks "Sign Up"
    And enters their name, email, and password
    And clicks "Sign Up"
    Then the user account should be created
    And the user should be redirected to the dashboard

  `Scenario: User Login`
  
    Given the user is on the landing page
    When the user clicks "Log In"
    And enters their email and password
    And clicks "Log In"
    Then the user should be logged in
    And the user should be redirected to the dashboard
### Feature: User Authentication

 ` Scenario: Logged-in User Access`

    Given the user is logged in
    When the user visits the landing page
    Then the user should see a "Log Out" button
    And the user should not see a "Sign Up" button

 ` Scenario: Access Profile`

    Given the user is logged in
    When the user clicks on the "Profile" section
    Then the user should be able to access their profile
    And the user should see options to edit their profile, view orders, and log out

  `Scenario: Explore Marketplace`

    Given the user is logged in
    When the user clicks on "Learn" or "Teach" in the navigation
    Then the user should be able to access the respective marketplace
    And the user should see a list of available courses
    And each course should display its title, description, author, and price
    And the user should see an "Order" button for each course

 `Scenario: View Course Details`

    Given the user is logged in
    When the user clicks on a course from the marketplace
    Then the user should be able to view course details
    And the user should see an "Order" button to place an order for the course

 `Scenario: Order from Navigation`

    Given the user is logged in
    When the user clicks on the "Order" button in the navigation
    Then the user should be taken to a page where they can view and manage their orders

### Feature: Learn / Teach Marketplace

  `Scenario: Explore Courses to Learn / Teach`

    Given the user is on the dashboard
    When the user clicks on "Learn" / "Teach"
    Then the user should see a list of available courses
    And each course should display its title, description, author, and price
    And the user can see count of orders for this course
    And user can see Order button to order the course


### Feature: Learner - Order and Manage Courses

  `Scenario: Order a Course`

    Given the user is on the course details page
    When the user clicks the "Order" button
    Then the user should place an order for the course
    And the course should be added to the user's order list

  `Scenario: Educator - Manage Orders`

    Given the user navigates to the "Orders" section
    Then the user should see a list of their orders 
    And each order should display the learner's name, email, course title, course price and order date
    And the user should have the option to cancel an order

## Technologies
    - React.js
    - Node.js
    - Express.js
    - MongoDB
    - GraphQL
    - Apollo Client/Server
    - Bootstrap
    - HTML/CSS

## Installation

To get started with the Education Marketplace project, follow these steps:

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/InnaFedorenko/education-market 
   ```

2. **Navigate to the project directory:**

   ```bash
   cd education-marketplace
   ```

3. **Install the server dependencies:**

   ```bash
   cd server
   npm install
   ```

4. **Install the client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

5. **Create a `.env` file in the `server` directory and configure your environment variables. You can use the `.env.example` file as a template.**

6. **Seed the database with sample data (optional):**

   ```bash
   cd ../server
   npm run seed
   ```

7. **Build the client application:**

   ```bash
   cd ../client
   npm run build
   ```

8. **Start the development server:**

   ```bash
   npm run develop
   ```

9. **The application should now be running. You can access it in your web browser at `http://localhost:3001` API server running on port 3002!, Use GraphQL at `http://localhost:3002/graphql`**


11. **Explore the Learn and Teach marketplaces, create an account, and enjoy the Education Marketplace!**

##  Usage
To use the [Education Marketplace](https://education-marketplace-73fae374fc3f.herokuapp.com/), follow these steps:

1. **Sign Up or Log In:**

   - If you're a new user, click the "Sign Up" button on the landing page and fill in your details to create an account.
   - If you're an existing user, click the "Log In" button to access your account.

2. **Explore the Marketplace:**

   - Once you're logged in, you can explore the Learn and Teach marketplaces.

3. **Order Courses:**

   - To order a course, simply click the "Order" button on the course page.
   - Your orders will be visible in your Orders list.

5. **Log Out:**

   - If you want to log out, click the "Log Out" button in the navigation panel.

For a detailed walkthrough and demonstration of the Education Marketplace, please refer to our [video tutorial](https://drive.google.com/file/d/1e9xcgvObIwHyrtrnd0tbMA-4rq2tFXpZ/view).

Enjoy learning and teaching in the Education Marketplace!

[![Watch the demo](client/public/demo.png)](https://drive.google.com/file/d/1e9xcgvObIwHyrtrnd0tbMA-4rq2tFXpZ/view)

​
## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)  
  This application is covered under the [MIT License](https://opensource.org/licenses/MIT).
##  Contributing
Contributors are welcome.
##  Tests
Test are not implemented yet. Manual API testing is available via GraphQL.
##  Questions
If you have any questions, you can reach out to us at 
[ivf.fedorenko@gmail.com](mailto:ivf.fedorenko@gmail.com).

