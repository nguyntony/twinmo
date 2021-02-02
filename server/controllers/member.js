const {User} = require('../models')
const {Op} = require('sequelize');
const user = require('../models/user');

const findUsers = async (req, res) => {
    const {input} = req.body;

    const users = await User.findAll({
        where: {
            [Op.or]: [
                {
                    first: {
                        [Op.iLike]: '%'+input+'%'
                    }
                },
                {
                    last: {
                        [Op.iLike]: '%'+input+'%'
                    }
                },
                {
                    username: {
                        [Op.iLike]: '%'+input+'%'
                    }
                }
            ]
        },
        attributes: [first, last, username, profilePic]
    })

    res.status(200).json(users)

}

module.exports = {
    findUsers
}