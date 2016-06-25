# Simple todo widget broken down to 3 services.

A very simple todo widget written to demonstrate micro services use.
This repo has `static`` html/css/js app,
 `api` application which returns todo tasks
  and `entity-access` application that emulates db access to return tasks to the `api` application. 


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:adylevy/node-todo-micro-service.git # or clone your own fork
cd node-todo-micro-service
npm install
npm start
```

Your app should now be running on [localhost:8080](http://localhost:8080/).
The `API` app is accessed via [localhost:7070](http://localhost:7070/)
and the `Entity-Access` app is accessed via [localhost:6060](http://localhost:6060/)
