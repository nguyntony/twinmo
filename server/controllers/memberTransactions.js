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
        attributes: ['id', 'amount', 'createdAt', 'description', 'status', 'recipientID', 'senderID']
    })

    for (i of pendings) {
        const getPendingFriend = await User.findOne({
            where: {
                id: i.recipientID
            }
        })

        i.dataValues.friendName = getPendingFriend.first+" "+getPendingFriend.last
        i.dataValues.friendProfilePic = getPendingFriend.profilePic
        i.dataValues.friendUsername = getPendingFriend.username
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
        attributes: ['id', 'amount', 'createdAt', 'description', 'status', 'recipientID', 'senderID']
    })

    for (i of requests) {
        const getRequestFriend = await User.findOne({
            where: {
                id: i.senderID
            }
        })

        i.dataValues.friendName = getRequestFriend.first+" "+getRequestFriend.last
        i.dataValues.friendProfilePic = getRequestFriend.profilePic
        i.dataValues.friendUsername = getRequestFriend.username
    }

    res.status(200).json(requests)
}

module.exports = {
    pendingList,
    requestList
}
