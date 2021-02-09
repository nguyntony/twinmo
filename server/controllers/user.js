const bcrypt = require('bcryptjs')
const {User} = require('../models')

const processSignup = async(req, res) => {
    let {first, last, email, username, password} = req.body;
    console.log(345345, 'Got info');

    first = first.charAt(0).toUpperCase() + first.slice(1);
    last = last.charAt(0).toUpperCase() + last.slice(1);
    username = username.toLowerCase();
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(234423, 'GENERATED HASH');
    try {
        console.log(234234, 'Started try block');
        const newUser = await User.create({
            first,
            last,
            email,
            username,
            hash,
            funds: 0,
            profilePic: '/uploads/defaultProfile.jpg'
        })
        console.log('API: User created successfully.')
        res.status(200).json({
            status: true,
            message: "User created successfully"
        });
    } catch (e) {
        console.log(e.name);
        if (e.name === "SequelizeUniqueConstraintError") {
            res.status(200).json({
                status: false,
                message: "Username or email is already taken"
            })
        }
    }
}

const uniqueUsernameCheck = async (req, res) => {
    const {username} = req.body;
    const user = await User.findOne({
        where: {
            username
        }
    })

    if (user) {
        res.status(200).json({
            status: true,
            message: "Username is not taken"
        })
    } else {
        res.status(200).json({
            status: false,
            message: "Username is taken"
        })
    }
}

const uniqueEmailCheck = async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({
        where: {
            email
        }
    })
    console.log(user)
    if (user) {
        res.status(200).json({
            status: true,
            message: "Email is taken"
        })
    } else {
        res.status(200).json({
            status: false,
            message: "Email is not taken"
        })
    }
}

const processLogin = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
        const isValid = bcrypt.compareSync(password, user.hash);
        if (isValid) {
            // console.log('API: Password Success')
            req.session.user = {
                id: user.id
            }
            req.session.save(() => {
                // console.log('API: Login Success');
                res.status(200).json({
                    message: "Login successful",
                    status: true
                });
            })
        } else {
            // console.log('API: Email or Password is incorrect.');
            res.status(200).json({
                message: 'Email or Password is incorrect',
                status: false
            })
        }
    
    } else {
        // console.log("API: invalid email");
        res.status(200).json({
            message: "User does not exist",
            status: false
        });
        }
}

const logout = (req, res) => {
    console.log('API: Logging Out')
    req.session.destroy(() => {
        res.status(200).json({
            message: 'Logout success'
        })
    })
}

const loginStatus = (req, res) => {
    // console.log('API: Checking login status')
    if (req.session.user) {
        res.status(200).json({
            status: true,
            message: "Active session"
        })
    } else {
        res.status(200).json({
            status: false,
            message: "No active session",
        })
    }
}

const photoUpload = async (req, res) => {
    const { id } = req.session.user;
    const user = await User.findByPk(id);
    
    const {file} = req
    const profilePic = "/uploads/"+file.filename
    user.update({profilePic})
    res.status(200).json({
        status: true
    })
}

const photo = async (req, res) => {
    const {id} = req.session.user;
    const user = await User.findByPk(id)
    const photo = user.profilePic
    res.status(200).json({
        photo
    })
}


module.exports = {
    processSignup,
    processLogin,
    loginStatus,
    photoUpload,
    uniqueEmailCheck,
    uniqueUsernameCheck,
    photo,
    logout
}