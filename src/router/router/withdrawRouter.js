const withdrawController = require('../controller/withdrawController');

module.exports = (app) => {
    app.get('/withdraw', withdrawController.getwithdraw)
    app.post('/withdraw', withdrawController.postwithdraw)
}