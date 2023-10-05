const dolsController = require('../controller/dolsController');

module.exports = (app) => {
    app.get('/dols', dolsController.getdols)
    app.post('/dols', dolsController.postdols)
}
