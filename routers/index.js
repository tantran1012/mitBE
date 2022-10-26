const userRouter = require('../components/users/users.router')

function route(app) {
    app.use('/', userRouter)
}

module.exports = route