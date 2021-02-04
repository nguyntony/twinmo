const {User} = require('../models')
const {Op} = require('sequelize');
const {Friend} = require('../models');
const { Sequelize } = require('sequelize');

const userData = async (req, res) => {
    const {id} = req.session.user;
    console.log('USER DATA:', id);

    const user = await User.findOne({
        where: {
            id
        },
        attributes: ['first', 'last', 'username', 'profilePic']
    })

    res.status(200).json(user)
}

const findUsers = async (req, res) => {
    const {id} = req.session.user;
    let {input} = req.body;
    // let input = 'ruby facet'
    console.log(input)
    let users = []

    if (input.includes(' ')) {
        input = input.split(' ')
        
        users = await User.findAll({
            where: {
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
                ]
            }
        })
    //     for (i of users) {
    //         const isFriend = await Friend.findOne({
    //             where: {
    //                 [Op.or]: [
    //                     {
    //                         userID: id,
    //                         friendID: i.id
    //                     },
    //                     {
    //                         userID: i.id,
    //                         friendID: id
    //                     }
    //                 ]
    //             }
    //         });

    //     // Everyone is added a new key:value pair that is dynamically adjusted depending on who is searching for friends. That way react can easily utilize data and generate an "already friends" or "add friends" option.
    //     if (isFriend) {
    //         i.dataValues.friendship = true
    //     } else {
    //         i.dataValues.friendship = false
    //     }
    // }
    // res.status(200).json(users)  
    } else {
        users = await User.findAll({
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
    }
    // Used to tell a component whether or not a user is friends with someone or not. When searching for a friend, if that 
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
    // const friendID = id+4

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
    const friendList = await User.findAll({
        where: {
            id: {
                [Op.or]: friendIDs
            }
        },
        attributes: ['id', 'first', 'last', 'username', 'profilePic']
    })
    

    res.status(200).json(friendList)
}



module.exports = {
    userData,
    findUsers,
    addFriend,
    findAllFriends
}