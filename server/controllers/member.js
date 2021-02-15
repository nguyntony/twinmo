const {User} = require('../models')
const {Op} = require('sequelize');
const {Friend} = require('../models');
const { Sequelize } = require('sequelize');

const userData = async (req, res) => {
    const {id} = req.session.user;

    const user = await User.findOne({
        where: {
            id
        },
        attributes: ['first', 'last', 'username', 'profilePic', 'funds']
    })

    res.status(200).json(user)
}

const userFunds = async (req, res) => {
    const {id} = req.session.user;

    const user = await User.findOne({
        where:{
            id
        },
        attributes: ['funds']
    })

    res.status(200).json(user)
}

const findUsers = async (req, res) => {
    const {id} = req.session.user;
    let {input} = req.body;
    let users = []

    // In the case a user inputs two names, we can use both to check between first/last, last/first, or username.
    if (input.includes(' ')) {
        input = input.split(' ')
        
        users = await User.findAll({
            where: {
                id: {
                    [Op.not]: id,
                },
                [Op.or]: [
                    {
                        first: {
                            [Op.iLike]: '%'+input[0]+'%'
                        },
                        last: {
                            [Op.iLike]: '%'+input[1]+'%'
                        }
                    },
                    {
                        first: {
                            [Op.iLike]: '%'+input[1]+'%'
                        },
                        last: {
                            [Op.iLike]: '%'+input[0]+'%'
                        }
                    },
                ],
            }

        })
        // If the user just inputs one name.
    } else {
        users = await User.findAll({
            where: {
                id: {
                    [Op.not]: id,
                },
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
    }
    // It looks through the searched users and checks to see if they are friends.
    for (i of users) {
        const isFriend = await Friend.findOne({
            where: {
                [Op.or]: [
                    {
                        userID: id,
                        friendID: i.id
                    },
                    {
                        userID: i.id,
                        friendID: id
                    }
                ]
            }
        });

        // Everyone is added a new key:value pair that is dynamically adjusted depending on who is searching for friends. That way react can easily utilize data and generate an "already friends" or "add friends" option.
        if (isFriend) {
            i.dataValues.friendship = true
        } else {
            i.dataValues.friendship = false
        }
    }
    res.status(200).json(users)  
}

const addFriend = async (req, res) => {
    const {id} = req.session.user;
    const {friendID} = req.body;

    const createFriendship = await Friend.create({
        userID: id,
        friendID
    })

    res.status(200).json({
        status: true,
        message: "Friendship created"
    })
}

const findAllFriends = async (req, res) => {
    const {id} = req.session.user;

    // Searches for the friendships in the table.
    const friendship = await Friend.findAll({
        where: {
            [Op.or]: [
                {
                    userID: id
                },
                {
                    friendID: id
                }
            ]
        },
    })
    
    const friendIDs = []
    // Sifts through the friendships to only pull the ID that doesn't match the user, which is the friend's ID.
    for (i of friendship) {
        if (i.userID !== id) {
            friendIDs.push(i.userID)
        }
        if (i.friendID !== id) {
            friendIDs.push(i.friendID)
        }
    }
    
    // Pulls specific user data that corresponds to the sifted friend IDs.
    if (friendIDs.length > 0) {
        const friendList = await User.findAll({
            where: {
                id: {
                    [Op.or]: friendIDs
                }
            },
            attributes: ['id', 'first', 'last', 'username', 'profilePic']
        })
        
    
        res.status(200).json(friendList)
    } else {
        res.status(200).json([])
    }
}



module.exports = {
    userData,
    userFunds,
    findUsers,
    addFriend,
    findAllFriends
}