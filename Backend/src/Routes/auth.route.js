const { signUpUser, logInUser, logOutUser, testUser } = require('../Controller/auth.controller');

const authRouter = require('express').Router();


authRouter.post('/signup', signUpUser );
authRouter.post('/login', logInUser );
authRouter.delete('/logout', logOutUser);
authRouter.post('/test', testUser);

module.exports = {authRouter};
