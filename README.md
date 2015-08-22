# Simple Chat Server

## Tools Used
+ Gulp
+ Express.js
+ MongoDB (with the mongoose ORM)
+ Mocha and a few others for testing
+ ECMASCRIPT6 (Transpiled with Babel)

## Prerequisites
1. Node.js >= v0.12.7
1. MongoDB >= v3.0.5
1. MongoDB running on port 27017 (*Configurable in src/config/mongoose.js*)
1. Gulp >= v3.9.0 for task running

## Running the project
1. Simply run `npm install` to install dependencies
1. Once that's finished, run `gulp`
1. The project should be running locally on port 3000

## Testing
1. Run `npm install` if you haven't already
1. Make sure MongoDB is running on port 27017
1. Run `gulp test` and the source files will be compiled, the server started, and the test suites will be executed
