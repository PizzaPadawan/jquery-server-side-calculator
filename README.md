# Server-side Calculator


## Description



## TO DO:

SETUP: 
- [x] server folder
    - [x] server.js
    - [] modules folder
    - [x] public folder
        - [x] client.js
        - [x] jquery.js
        - [x] index.html
        - [x] style.css
- [] npm init --yes
- [] npm i express
- [] package.json > "start:" "node server/server.js"


BASE MODE:
- [] Create 2 input elements and a type of mathematical operation to select. 
    - [] SERVER: POST to '/history' that takes equation objects
    - [] TEST IN POSTMAN
- [] Create a submit button that will send the equation object to the server via POST.
    - [] SERVER: GET request to return the actual calculation.
    - [] TEST IN POSTMAN
- [] Create a C button that will clear user input fields.
- [] Keep a historical record of all problems and solutions on the server to be displayed on the DOM.
    - [] SERVER: '/history' will store all equation objects

STRETCH GOALS:
- [] Convert the interface to look and behave like an actual calculator
- [] Only allow POST to happen if all necessary input is ready.
- [] Allow a user to clear history section with a button (DELETE request)
- [] Allow a user to click on an entry in the history list to re-run that calculation.

BONUS ADD / CREATIVE IDEAS:
- [] Use CSS to more accurately make it look like a calculator.

ETHOS / RULES:
- don't even THINK about touching the front end until you have your server-side all planned out. Create the files, sure, but 