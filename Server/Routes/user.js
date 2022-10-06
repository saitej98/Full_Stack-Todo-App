const express = require('express');
const { getAllUsers, createUser, userLogin, checkUserByToken } = require('../Controllers/user');

const userRouter = express.Router();

userRouter.get('/getAllUsers', getAllUsers);
userRouter.post('/createUser', createUser);
userRouter.post('/login', userLogin);
userRouter.post('/checkUserByToken', checkUserByToken);


module.exports = {userRouter};