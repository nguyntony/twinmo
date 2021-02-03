const {User} = require('../models')
const {Op} = require('sequelize');
const {Friend} = require('../models')
const {Transaction} = require('../models')

const pendingList = async (req, res) => {
    const {id} = req.session.user;

    const pendings = await Transaction.findAll({
        where: {
            senderID: id,
            type: 'request'
        },
        order: [["createdAt", "desc"]],
        attributes: ['amount', 'createdAt', 'description', 'status', 'recipientID']
    })

    for (i of pendings) {
        const getFriend = await User.findOne({
            where: {
                id: i.recipientID
            }
        })

        i.dataValues.friendName = getFriend.first+" "+getFriend.last
        i.dataValues.friendProfilePic = getFriend.profilePic
        i.dataValues.friendUsername = getFriend.username
    }

    res.status(200).json(pendings)
}

const requestList = async (req, res) => {
    const {id} = req.session.user;

    const requests = await Transaction.findAll({
        where: {
            recipientID: id,
            type: 'request'
        },
        order: [["createdAt", "desc"]],
        attributes: ['amount', 'createdAt', 'description', 'status', 'recipientID']
    })

    for (i of requests) {
        const getFriend = await User.findOne({
            where: {
                id: i.senderID
            }
        })

        i.dataValues.friendName = getFriend.first+" "+getFriend.last
        i.dataValues.friendProfilePic = getFriend.profilePic
        i.dataValues.friendUsername = getFriend.username
    }

    res.status(200).json(requests)
}

module.exports = {
    pendingList,
    requestList
}
