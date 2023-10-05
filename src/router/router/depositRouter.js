const depositController = require('../controller/depositController');

module.exports = (app) => {
    app.get('/deposit', depositController.getdeposit)
    app.post('/deposit', depositController.postdeposit)
}
