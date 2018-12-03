![CF](http://i.imgur.com/7v5ASc8.png) Week 7 Project - Full Stack React
=======================================================================

## Description
Build a full stack application.
* A web server that serves content (a JSON representation of content)
* A React app that connects to the server to fetch said content and render it.

## Requirements

### Web Server
This simple server is setup solely to serve a JSON object, which you will require into the server code from a provided file.

* Create an Express HTTP Server
* Listens on `process.env.PORT`
* Serves static files from a folder called `./public`
* Has a separate `routes.js` file for serving custom routes
  * handles a GET on '/' with a simple response of 'Server Home'
  * handles a GET on '/content' with a .json() response containing the object contained within content.json 
* Handles 404's by serving the usera a custom page (.ejs)
* Handles Errors by serving the user a custom page (.ejs)
  * log the actual error to the console
* Write tests for each route, the 404 page, and a simulated error
  * Use supertest, not supergoose

### React Application
Build a React application on your machine (not in code sandbox) using create-react app, and connect it to your server using superagent to request the JSON object from the server's /content route

* Using create-react-app, build a new React app called `my-website` 
* In the app, in the `<App />` component, make a superagent call to the server's `/content` route to fetch the JSON object.
* Send that to a `<Page />` component, which will then render out `<Deck />` and `<Card />` components as needed to properly organize the content in that object.
* Style it like a boss!
* **Strong Suggestion:** Edit the content.json file and give it more meaningful content so that your rendered site looks amazing.

## Submission Instructions
* Deploy your server to Heroku, via your master branch
* Confirm server and react tests passing at Travis, via your master branches
* Deploy your server to Heroku
* Deploy your React app folder to AWS S3 using the .yml template and cloud formation

* Submit a link to your updated README which should contain:
  * Deployed Site Link
  * Link to your Repos
  * Your UML Drawing with Code and Data Flow


