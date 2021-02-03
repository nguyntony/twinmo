const {User} = require('../models')
const {Op} = require('sequelize');
const {Friend} = require('../models')

const findUsers = async (req, res) => {
    // const {input} = req.body;
    const input = 'nguyen'

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
        attributes: ['id', 'first', 'last', 'username', 'profilePic']
    })

    res.status(200).json(users)
}

const addFriend = async (req, res) => {
    const {id} = req.session.user;
    // const {friendID} = req.body;
    const friendID = 16

    const createFriendship = await Friend.create({
        userID: id,
        friendID
    })

    res.status(200).json({
        status: true,
        message: "Friendship created"
    })
}

module.exports = {
    findUsers,
    addFriend
}