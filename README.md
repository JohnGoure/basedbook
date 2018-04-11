# Basedbook a Facebook clone
[BasedBook](https://basedbook.herokuapp.com) is a mock clone of the social network
[Facebook](https://www.facebook.com). This project is a social network template. 

## Technologies Used
The frontend uses React.js for rendering, babel for compiling, webpack for bundling. Npm proxies the backend. The backend uses express for RESTful API, routing, validation, sanitization and server side rendering, bcrypt is used for password encryption and mongoose is used to create collections of datarecords in MongoDB. The server is hosted on [Heroku.com](https://www.heroku.com/) with a MongoDB on [Mlab.com](https://mlab.com/). Also I host basedbook on my personal Gcloud compute server, [Tallyrow.com](https://www.tallyrow.com), using Nginx.

## Nearly Complete Login and create account page
![BasedBook, Facebook Clone](/public/images/FacebookClone.png)

#### Tasks
1. Implement and test Models.
    * ~~User~~
    * Friend
    * Post
    * Image
    * Comment Stack
2. Implement and test routes.
3. Implement and test controllers.
4. ~~Refactor client side rendering from pug to React.js~~ 
5. Implement and test Views.
    * Admin
    * Logged out
    * Logged in
6. Implement and test validation/sanitization
6. Refactor the css to match Facebook.
8. Implement and test password encryption.
9. Implement and test user authentication.
10. Add sessions.
11. Setup Heroku hosting for production.
12. Setup Nginx for production.

#### License MIT