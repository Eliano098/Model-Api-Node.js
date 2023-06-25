const express = require('express');
const router = express.Router();

//Controllers
const userController = require('./app/controllers/UserController');

//User
router.post('/user/CreateUser', userController.CreateUser);
router.patch('/user/UpdateUser/:id', userController.UpdateUser);
router.delete('/user/DeleteUser/:id', userController.DeleteUser);
router.get('/user/GetByIdUser/:id', userController.GetByIdUser);
router.get('/user/GetAllUsers', userController.GetAllUsers);

module.exports = router;

