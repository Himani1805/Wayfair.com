const { readAllUser, readSingleUser, updateUser, deleteUser } = require('../Controller/user.controller');

const userRouter = require('express').Router();


userRouter.get('/', readAllUser);
userRouter.get('/:id', readSingleUser );
userRouter.patch('/:id', updateUser );
userRouter.delete('/:id', deleteUser );

module.exports = {userRouter};

