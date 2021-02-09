const {User} = require('../models')
const {Op} = require('sequelize');
const {Friend} = require('../models')
const {Transaction} = require('../models')
const numeral = require('numeral')
const moment = require('moment');
const e = require('express');

const paymentList = async (req, res) => {
    const {id} = req.session.user;

    const payments = await Transaction.findAll({
        where: {
            [Op.or]: [
                {
                    senderID: id,
                    type: 'request',
                    status: true
                },
                {
                    recipientID: id,
                    type: 'payment',
                    status: true
                },
                {
                    senderID: id,
                    type: 'request',
                    status: false
                }
            ]
        },
        order: [["createdAt", "desc"]],
        attributes: ['id', 'amount', 'createdAt', 'description', 'status', 'recipientID', 'senderID', 'archived', 'approved', 'type']
    })

    for (i of payments) {
        if (i.type === 'request'){
            const getPaymentFriend = await User.findOne({
                where: {
                    id: i.recipientID,
                }
            })
    
            i.dataValues.friendName = getPaymentFriend.first+" "+getPaymentFriend.last
            i.dataValues.friendProfilePic = getPaymentFriend.profilePic
            i.dataValues.friendUsername = getPaymentFriend.username
        }
        
    }
    for (i of payments) {
        if (i.type === 'payment') {
            const getPaymentFriend = await User.findOne({
                where: {
                    id: i.senderID,
                }
            })
    
            i.dataValues.friendName = getPaymentFriend.first+" "+getPaymentFriend.last
            i.dataValues.friendProfilePic = getPaymentFriend.profilePic
            i.dataValues.friendUsername = getPaymentFriend.username
        }
    }

    res.status(200).json(payments)
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
            friend.update({funds: Number(friend.funds) + amount})

            const newTransaction = await Transaction.create({
                senderID: id,
                recipientID,
                type,
                description,
                amount,
                month: moment(new Date()).format('MMMM'),
                year: moment(new Date()).format('YYYY'),
                status: true,
                archived: false,
                approved: true,
            })

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

const enoughFunds = async (req, res) => {
    const {id} = req.session.user;
    let {amount} = req.body;
    amount = Number(numeral(amount).format('0.00'))
    const user = await User.findByPk(id);
    if (user.funds - amount < 0) {
        res.status(200).json({
            status: false
        })
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

const archive = async (req, res) => {
    const {ids} = req.body;
    if (ids.length > 0) {
        for (id of ids) {
            let transaction = await Transaction.findByPk(id);

            transaction.update({archived: true})
        }
        res.status(200).json({
            status: true,
            message: 'Items archived!'
        })
    } else {
        res.status(200).json({
            status: false,
            message: 'No items to archive!'
        })
    }
}

const archivedList = async (req, res) => {
    const {id} = req.session.user;
}

module.exports = {
    paymentList,
    requestList,
    processTransaction,
    enoughFunds,
    processUserApprove,
    processUserDeny,
    archive
}
