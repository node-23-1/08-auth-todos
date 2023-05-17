const express = require('express');
const userRouter = require('./user.router');
const toDoRouter = require('./toDo.router');
const verifyJWT = require('../utils/verifyJWT');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);

// rutas protegidas
router.use(verifyJWT);
router.use('/todos', toDoRouter);

module.exports = router;