const user = require("../../models/User");

class UserController {
    index(req, res, next) {
        res.send("Hello guys")
    }

    signUp(req, res, next) {
        const newUser = new user(req.body);
        newUser.save();
        res.status(200);
    }

    checkuser(req, res, next) {
        user.findOne({ username: req.params.username })
            .then((user) => {
                if (user)
                    res.status(200).json({
                        username: user.username,
                    });
                else res.status(201).json(user);
            })
            .catch(next);
    }
}

module.exports = new UserController();
