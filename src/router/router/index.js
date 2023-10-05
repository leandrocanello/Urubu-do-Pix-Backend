const user = require('./userRouter');
const deposit = require('./depositRouter');
const withdraw = require('./withdrawRouter');
const dols = require('./dolsRouter');

module.exports = (app) => {
    user(app)
    deposit(app)
    withdraw(app)
    dols(app)
}