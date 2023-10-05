const userController = require('../controller/userController');

module.exports = (app) => {
    app.get('/user', userController.getusers)
    app.post('/user', userController.postusers)
}