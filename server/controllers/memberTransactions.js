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

    // For every payment, we get the friend's data to display. Needs to check if the user is the sender or recipient.
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
        res.status(200).json({
            status: false,
            message: 'Not enough funds!',
            missingAMT: amount - Number(user.funds)
        })
    }
}

const processUserDeny = async (req, res) => {
    const {transactionID} = req.body;

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

const monthlyCache = async (req, res) => {
    const {id} = req.session.user;
    const transactions = await Transaction.findAll({
        where: {
            [Op.or]: [
                {
                    recipientID: id,
                    type: 'request',
                    status: true
                },
                {
                    recipientID: id,
                    type: 'payment',
                    status: true,
                    archived: true
                },
                {
                    senderID: id,
                    type: 'request',
                    status: true,
                    archived: true
                }
            ]
        },
        order: [["createdAt", "desc"]],
        attributes: ['month', 'year']
    })

    cache = [];
    const uniqueDates = transactions.map(t => {
        const editedDate = (t.month+ ' '+ t.year)
        if (!cache.includes(editedDate)) {
            cache.push(editedDate)
        }
    })

    res.status(200).json(cache)
}

const archivedList = async (req, res) => {
    const {id} = req.session.user;
    const {month, year} = req.body;

    const transactions = await Transaction.findAll({
        where: {
            month,
            year,
            [Op.or]: [
                {
                    recipientID: id,
                    type: 'request',
                    status: true
                },
                {
                    recipientID: id,
                    type: 'payment',
                    status: true,
                    archived: true
                },
                {
                    senderID: id,
                    type: 'payment',
                    status: true,
                },
                {
                    senderID: id,
                    type: 'request',
                    status: true,
                    archived: true
                }
            ]
        },
        order: [["createdAt", "desc"]],
        attributes: ['id', 'amount', 'createdAt', 'description', 'status', 'recipientID', 'senderID', 'archived', 'approved', 'type', 'month', 'year']
    })

    for (i of transactions) {
        if (i.type === 'request' && i.senderID === id){
            const getPaymentFriend = await User.findOne({
                where: {
                    id: i.recipientID,
                }
            })
    
            i.dataValues.friendName = getPaymentFriend.first+" "+getPaymentFriend.last
            i.dataValues.friendProfilePic = getPaymentFriend.profilePic
            i.dataValues.friendUsername = getPaymentFriend.username

        } else if (i.type === 'request' && i.recipientID === id) {
            const getSenderFriend = await User.findOne({
                where: {
                    id: i.senderID,
                }
            })
    
            i.dataValues.friendName = getSenderFriend.first+" "+getSenderFriend.last
            i.dataValues.friendProfilePic = getSenderFriend.profilePic
            i.dataValues.friendUsername = getSenderFriend.username

        }
    }

    for (i of transactions) {
        if (i.type === 'payment' && i.recipientID === id) {
            const getPaymentFriend = await User.findOne({
                where: {
                    id: i.senderID,
                }
            })
    
            i.dataValues.friendName = getPaymentFriend.first+" "+getPaymentFriend.last
            i.dataValues.friendProfilePic = getPaymentFriend.profilePic
            i.dataValues.friendUsername = getPaymentFriend.username
        } else if (i.type === 'payment' && i.senderID === id) {
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
    for (i of transactions) {
        if (i.type === 'payment') {
            if (i.senderID === id) {
                i.dataValues.archivedIcon = 'sent'
                i.dataValues.transactionDetail = 'You sent a payment to'
            } else if (i.recipientID === id) {
                i.dataValues.archivedIcon = 'received'
                i.dataValues.transactionDetail = 'sent you a payment'
            }
        } else if (i.type === 'request') {
            if (i.approved === true) {
                if (i.senderID === id) {
                    i.dataValues.archivedIcon = 'received'
                    i.dataValues.transactionDetail = 'You sent a request to'
                } else if (i.recipientID === id) {
                    i.dataValues.archivedIcon = 'sent'
                    i.dataValues.transactionDetail = 'sent you a request'
                }
            } else if (i.approved === false) {
                if (i.senderID === id) {
                    i.dataValues.archivedIcon = 'declined'
                    i.dataValues.transactionDetail = 'You sent a request to'
                } else if (i.recipientID === id) {
                    i.dataValues.archivedIcon = 'declined'
                    i.dataValues.transactionDetail = 'sent you a request'
                }
            }
        }
    }

    res.status(200).json(transactions)
}

module.exports = {
    paymentList,
    requestList,
    processTransaction,
    processUserApprove,
    processUserDeny,
    archive,
    archivedList,
    monthlyCache
}
