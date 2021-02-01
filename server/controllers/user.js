const bcrypt = require('bcryptjs')
const {User} = require('../models')

const processSignup = async(req, res) => {
    const {first, last, email, username, password} = req.body;
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
        const newUser = await User.create({
            first,
            last,
            email,
            username,
            hash
        })
        console.log('API: User created successfully.')
        res.status(200).json({
            message:"Success"
        });
    } catch (e) {
        console.log(e.name);
        if (e.name === "SequelizeUniqueConstraintError") {
            console.log("API: Username or email already taken.")
            // When the component renders at start, there shouldn't be an error message. If the user inputs an existing name, express will send back a json message that will be tied to a url. Conditionally render the message? Possibly.
            res.status(400).json({
                message: "Username or email already taken."
            })
            res.redirect('/user/signup')
        }
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
            console.log('API: Password Success')
            req.session.user = {
                username: user.username,
                id: user.id
            }
            req.session.save(() => {
                console.log('API: Login Success');
                res.status(200).json({
                    message: "Login successful",
                    id: user.id,
                });
            })
        } else {
            console.log('API: Username or Password is incorrect.');
            res.status(400).json({
                message: 'Username or Password is incorrect.'
            })
        }

    }
}

const testData = async (req, res) => {
    res.json({
        status: 'okay'
    })
}

const logout = (req, res) => {
    console.log('API: Logging Out.')
    req.session.destroy(() => {
        res.status(200).json({
            message: 'API: Logout Success'
        })
        return;
    })
}

const loginStatus = (req, res) => {
    console.log('API: Checking login status')
    if (req.session.user) {
        res.status(200).json({
            status: "OK"
        })
    } else {
        res.status(400).json({
            status: "API: No active session",
        })
    }
}

module.exports = {
    processSignup,
    processLogin,
    testData,
    loginStatus
}