require('dotenv').config();    // don't forget to require dotenv

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { homeController } = require('./controllers')

const routes = require('./routers')

const {requireLogin} = require('./auth')

const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const app = express()
const server = http.createServer(app)

const PORT = 4000;
const HOST = 'localhost';

const logger = morgan('tiny')

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

app.use(
	session({
		store: new FileStore(),
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: true,
		rolling: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
	})
);

app.use(logger)

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(routes);

// app.get('/member/', requireLogin, (req, res) => {
//     console.log(req.session.user);
//     const { username } = req.session.user
// })

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});