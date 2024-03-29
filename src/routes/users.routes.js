const { Router } = require('express');
const { UserController } = require('../controllers');

const usersRouter = Router();

usersRouter.get('/', UserController.getUsers);
usersRouter.post('/', UserController.createUser); // TODO

// usersRouter.get('/:id', UserController.sendTask); // TODO
// usersRouter.put('/:id', UserController.sendTask); // TODO
// usersRouter.patch('/:id', UserController.sendTask); // TODO

module.exports = usersRouter;
