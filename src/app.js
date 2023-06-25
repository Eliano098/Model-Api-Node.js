const express = require('express');
const userRoutes = require('./routes');

class App {

    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.routes();
    }

    routes() {
        this.server.use('/api', userRoutes);
    }
}

module.exports = new App;






