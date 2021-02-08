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

    amount = Number(numeral(amount).format('0.00'))

    if (type === 'request') {
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
    } else if (type === 'payment') {
        const user = await User.findByPk(id);
        const friend = await User.findByPk(recipientID)
        if (user.funds - amount > 0) {
            user.update({funds: Number(user.funds) - amount})
            friend.update({funds: Number(user.funds) + amount})

            res.status(200).json({
                status: true,
                message: 'Payment Processed!'
            })
        } else if (user.funds - amount < 0) {
            console.log('Not enough money!', user.funds, amount, user.funds-amount)
            res.status(200).json({
                status: false,
                message: 'Not enough funds!',
                missingAMT: amount - Number(user.funds)
            })
        }
    }
}

const processUserApprove = async (req, res) => {
    const {id} = req.session.user;
    let {transactionID, friendID, amount} = req.body;
    console.log(transactionID, friendID, amount)

    amount = Number(numeral(amount).format('0.00'))
    
    const user = await User.findByPk(id);
    const friend = await User.findByPk(friendID);
    const transaction = await Transaction.findByPk(transactionID);

    if (user.funds - amount > 0) {
        user.update({funds: Number(user.funds) - amount})
        friend.update({funds: Number(user.funds) + amount})

        transaction.update({status: true, approved: true})

        res.status(200).json({
            status: true,
            message: 'Payment Processed!'
        })
    } else if (user.funds - amount < 0) {
        console.log('Not enough money!', user.funds, amount, user.funds-amount)
        res.status(200).json({
            status: false,
            message: 'Not enough funds!',
            missingAMT: amount - Number(user.funds)
        })
    }
}

const processUserDeny = async (req, res) => {
    const {transactionID} = req.body;

    console.log(transactionID);

    const transaction = await Transaction.findByPk(transactionID);

    transaction.update({status: true})
    res.status(200).json({
        message: 'Action processed!'
    })
}

module.exports = {
    pendingList,
    requestList,
    processTransaction,
    processUserApprove,
    processUserDeny
}
