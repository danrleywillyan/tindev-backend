const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://ninja:Ninj4@cluster0-y3qpm.mongodb.net/rocketseat?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors);//tem que tá antes de routes
server.use(express.json());
server.use(routes);

server.listen(4000);