/*
 *title: Uptime Monitoring Application
 *Description: A RESTFul API to monitor up or down time of user defined links
 *Date: 24-02-2023
 *
 */

// dependencies
const http = require('node:http');
const { handleRequest } = require('./helpers/HandleReqRes');
const environment = require('./helpers/environments');

// app-object Module saffolding
const app = {};

// testing file system
// data.delete('test', 'newFile', (err, data) => {
//     console.log(err, data);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleRequest);
    server.listen(environment.port, () => {
        console.log(`listening port ${environment.port}`);
    });
};

// handle Request Response
app.handleRequest = handleRequest;

// start the server
app.createServer();
