const UserService = require('../service/user.service');

class userController {
    async getAllSites(_req, res) {
        try {
            const users = await UserService.findAllService();
            res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }        
    }

    async create(req, res) {
    try {
        const user = await UserService.create(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    }

    async findOneController(req, res) {
    try {
        const user = await UserService.findOne(req.params.id)
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    }

    async deleteController(req, res) {
    try {
        await UserService.delete(req.params.id)
        return res.json({ message: 'Usuário deletado' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    }

    async editController(req, res) {
    try {
        const user = await UserService.update(req.params.id, req.body)
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    }

}

module.exports = new userController();