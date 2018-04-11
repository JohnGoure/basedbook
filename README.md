# Basedbook a Facebook clone
[BasedBook](https://basedbook.herokuapp.com) is a mock clone of the social network
[Facebook](https://www.facebook.com). This project is a social network template. 

## Technologies Used
The frontend uses React.js for rendering, babel for compiling, webpack for bundling. Npm proxies the backend. The backend uses express for RESTful API, routing, validation, sanitization and server side rendering, bcrypt is used for password encryption and mongoose is used to create collections of datarecords in MongoDB. The server is hosted on [Heroku.com](https://www.heroku.com/) with a MongoDB on [Mlab.com](https://mlab.com/). Also I host basedbook on my personal Gcloud compute server, [Tallyrow.com](https://www.tallyrow.com), using Nginx.

## Nearly Complete Login and create account page
![BasedBook, Facebook Clone](/public/images/FacebookClone.png)

#### To do
1. Make user Schema model.
2. ~~Setup index.js routes.~~
3. ~~Setup userController.js.~~
4. ~Change client side rendering form pug to React.js~ 
6. Fix the css to match Facebook.
7. ~~Create the login and create account View~~
8. Encrypt password.
9. Add user Authentication.
10. Setup Heroku for production.
11. Add sessions.

This website is built with a MongoDB using Express for routing, sessions, authentication, validation and sanitization. The package.json lists all of the dependencies used in this app.