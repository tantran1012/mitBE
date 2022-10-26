const user = require("../../models/User");
const bcrypt = require('bcrypt');

class UserController {
    index(req, res, next) {
        res.json({
            "status" : 200
        })
    }

    signUp(req, res, next) {
        let nUser = req.body
        nUser.password = bcrypt.hashSync(nUser.password, 10);
        const newUser = new user(nUser);
        
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
