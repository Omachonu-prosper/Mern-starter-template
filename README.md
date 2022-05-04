# Mern-starter-template
A starter template for creating a new ***MERN*** project

![Image of the base technologies used in the ***MERN*** stack](/public/images/mern.png)

## Getting started

### Download / Set up
When starting a new ***MERN*** stack project we advice you download the code as a zip file instead of cloning the project. Cloning the project using git includes the commit message of this project and you might not want that. You might want to start with an initial commit of yours when initializing git.

### Installing all dependencies
To install all project dependencies and development dependencies run `npm install`

### Starting up your node server
To start your development server run `npm start`. If you go to [localhost on port 3000](http://localhost:3000) You would see the index page of your app.

![Image of the default app that runs when you start your server](/public/images/default-app.JPG)

> For easy reload on file changes we used nodemon. This package enables your server to automatically restart once a file in the ***server*** directory is changed.

### Compiling Babel
To compile your react/jsx code to pure javascript that the browser can understand, run `npm run compile-babel`

> Note: The above compilation should be used when in production to compile jsx to js once. In development you use the `npm run watch-babel` command instead. This makes babel to watch for changes to your code and auto compile them for you.

## Features
This project ia s starter template for ***MERN*** stack and uses the following versions of the core technologies of the stack (M - [mongodb](http://mongodb.com), E - [Express](http://expressjs.com), R - [React](http://react.com), N - [Node.js](http://nodejs.org)).

- Mongodb - __still-to-come__
- Express - @4.18.1
- React - @17 and ReactDOM - @ 17 (React and ReactDOM are loaded from [unpkg](unpkg.com) cdn)
- Node.js - @16.13.0
