const { signUpUser, logInUser, logOutUser } = require('../Controller/auth.controller');

const authRouter = require('express').Router();


authRouter.post('/signup', signUpUser );
authRouter.post('/login', logInUser );
authRouter.delete('/:id', logOutUser);

module.exports = {authRouter};
