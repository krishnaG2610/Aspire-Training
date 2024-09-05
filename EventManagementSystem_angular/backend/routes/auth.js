const Express = require('express');
const Router = Express.Router();
const UserController = require('../controllers/authcontrollers');
Router.post("/signup", UserController.signup);
Router.post("/login", UserController.login);
Router.post("/final", UserController.final);
Router.post('/CreateEvent', UserController.CreateEvent);
Router.get('/ShowEvent', UserController.ShowEvent);
module.exports = Router;
