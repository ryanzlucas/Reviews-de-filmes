const  {generateToken} = require('../utils/jwt')

class jwtService{
    async auth(payload){
        return generateToken(payload)
    }
}

module.exports = new jwtService();

