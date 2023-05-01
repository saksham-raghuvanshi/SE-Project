const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config/key");

exports.loginCheck = (req, res, next) => {
    try {
        let token = req.headers.token;
        if (!token) {
            token = req.headers.authorization;
        }
        token = token.replace("Bearer ", "");
        decode = jwt.verify(token, JWT_SECRET);
        req.userDetails = decode;
        next();
        return req.userDetails._id;
    } catch (err) {
        res.json({
            error: "You must be logged in",
        });
    }
};

