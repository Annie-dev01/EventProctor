const userServices =  require ("../services/user.services");

const  createUser = async (req, res) => {
    try {
        const data = await userServices.createUser(req.body);
        res.status(data.statusCode).json(data)

    } catch (error) {
        res.status(500).send(error);
        
    }
}

const  login = async (req, res) => {
    try {
        const data = await userServices.login(req.body);
        res.status(data.statusCode).json(data)

    } catch (error) {
        res.status(500).send(error);
        
    }
}


module.exports = {
    createUser,
    login
}