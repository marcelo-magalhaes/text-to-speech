const express = require('express');
const routes = express.Router();
const ComentarioController = require('./Controllers/ComentarioController');


routes.post("/post", ComentarioController.postar);
routes.get("/list",ComentarioController.listar);
routes.get("/convert/:message",ComentarioController.convert);


module.exports = routes;
