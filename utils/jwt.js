const jwt = require('jsonwebtoken');

const SECRET = "ryan"

function generateToken(payload) {
    return jwt.sign(payload,SECRET, {expiresIn : "1d"})
}
function verifyToken(token) {
    return jwt.verify(token,SECRET);
}

module.exports ={ generateToken,verifyToken};
