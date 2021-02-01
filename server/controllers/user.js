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
        // console.log('API: User created successfully.')
        res.status(200).json({
            status:"API: User created successfully"
        });
    } catch (e) {
        console.log(e.name);
        if (e.name === "SequelizeUniqueConstraintError") {
            // console.log("API: Username or email already taken.")
            // When the component renders at start, there shouldn't be an error message. If the user inputs an existing name, express will send back a json message that will be tied to a url. Conditionally render the message? Possibly.
            res.status(400).json({
                status: "API: Username or email already taken"
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
            status: "API: Username is not taken"
        })
    } else {
        res.status(400).json({
            status: "API: Username is taken"
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
            status: "API: Email is not taken"
        })
    } else {
        res.status(400).json({
            status: "API: Email is taken"
        })
    }
}

const processLogin = async (req, res) => {
    console.log('API: GETTING INFO FROM REACT')
    const {email, password} = req.body;

    const user = await User.findOne({
        where: {
            email
        }
    })
    console.log('API: GETTING USER FROM DB');
    if (user) {
        const isValid = bcrypt.compareSync(password, user.hash);
        if (isValid) {
            console.log('API: Password Success')
            req.session.user = {
                id: user.id
            }
            req.session.save(() => {
                console.log('API: Login Success');
                res.status(200).json({
                    status: "API: Login successful",
                });
            })
        } else {
            console.log('API: Username or Password is incorrect.');
            res.status(400).json({
                status: 'API: Username or Password is incorrect.'
            })
        }
    
    } else {
        console.log('not a valid user');
        // res.redirect(`${req.baseUrl}/login`);
        console.log("API: invalid username");
        res.status(400).json({
            stauts: "API: Invalid username or password",
        });
        }
}

const logout = (req, res) => {
    console.log('API: Logging Out.')
    req.session.destroy(() => {
        res.status(200).json({
            status: 'API: Logout Success'
        })
        return;
    })
}

const loginStatus = (req, res) => {
    // console.log('API: Checking login status')
    if (req.session.user) {
        res.status(200).json({
            status: "API: Active session"
        })
    } else {
        res.status(400).json({
            status: "API: No active session",
        })
    }
}

const photoUpload = async (req, res) => {
    const { id } = req.session.user;
    const user = await User.findByPk(id);
    
    const {file} = req
    console.log('GOT PHOTO REQ', file.filename);
    const profilePic = "/uploads/"+file.filename
    user.update({profilePic})
    res.status(200).json({
        status: 'API: Photo uploaded'
        // send here 
    })
}

const photo = async (req, res) => {
    const {id} = req.session.user;
    const user = await User.findByPk(id)

    const photo = user
}


module.exports = {
    processSignup,
    processLogin,
    loginStatus,
    photoUpload,
    uniqueEmailCheck,
    uniqueUsernameCheck
}