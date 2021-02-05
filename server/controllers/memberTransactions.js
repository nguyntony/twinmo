const {User} = require('../models')
const {Op} = require('sequelize');
const {Friend} = require('../models')
const {Transaction} = require('../models')
const numeral = require('numeral')
const moment = require('moment')

const pendingList = async (req, res) => {
    const {id} = req.session.user;

    const pendings = await Transaction.findAll({
        where: {
            senderID: id,
            type: 'request'
        },
        order: [["createdAt", "desc"]],
        attributes: ['id', 'amount', 'createdAt', 'description', 'status', 'recipientID', 'senderID', 'archived', 'approved']
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
            type: 'request',
            status: false,
        },
        order: [["createdAt", "desc"]],
        attributes: ['id', 'amount', 'createdAt', 'description', 'status', 'recipientID', 'senderID', 'archived', 'approved']
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

const processTransaction = async (req, res) => {
    const {id} = req.session.user;
    let {amount, description, type, recipientID} = req.body;
    console.log(amount, description, type, recipientID)

    amount = Number(numeral(amount).format('0.00'))
    console.log(amount)
    console.log(moment(new Date()).format('MMMM'));

    const newTransaction = await Transaction.create({
        senderID: id,
        recipientID,
        type,
        description,
        amount,
        month: moment(new Date()).format('MMMM'),
        year: moment(new Date()).format('YYYY'),
        status: false,
        archived: false,
        approved: false,
    })
    res.status(200).json({
        status: true,
        message: "Transaction processed"
    });
}

module.exports = {
    pendingList,
    requestList,
    processTransaction
}
