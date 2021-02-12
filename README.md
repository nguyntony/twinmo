# twinmo
![twinmo homepage](https://github.com/nguyntony/twinmo/blob/main/user-guide/homepage.png)
- - - -

## 💸 Summary
twinmo is a Venmo clone that uses Express and React. It is one of the apps that [Tyler](https://github.com/nguyntyler) and I have created, feel free to also check out our finance tracker ([Demo](https://twintracker.me/) | [Repo](https://github.com/nguyntony/finance-tracker)).

🌟 Fun fact: the name ‘twinmo’ comes from our name. **T** for Tyler and Tony and **win** from our last name, ‘Nguyen’ (which is pronounced as win)! And no, we are not related 😅

## 🌱 Inspiration
Our first app dealt with personal finances. We created a focused dashboard where the user is able to keep track of their expenses and maintain saving goals! We wanted to continue with that theme so we decided to create a clone of Venmo. When thinking about Venmo, we both agreed that we like the social aspect of it (ie. having friends, sending money back and forth) but we didn’t care too much for the posts and comments that other users are able to create on your transaction. 

twinmo is a reflection of that, similar to our finance tracker, we designed a focused view for the user while maintaining the ‘social-ness’ of Venmo. Users are able to send/request money from their friends but it feels more personal and tailored to the user. 

## 🚀 Technology

| Client-Side                                            | Server-Side                   |
|--------------------------------------------------------|-------------------------------|
| React                                                  | [Bcryptjs](https://www.npmjs.com/package/bcryptjs) (password encyption) |
| [React Router Dom](https://reactrouter.com/)                                       | [Dotenv](https://www.npmjs.com/package/dotenv)                        |
| [React Number Format](https://github.com/s-yadav/react-number-format) (format forms to display currency) | Express/Node                  |
| [React Spring](https://www.react-spring.io/) (animation)                               | [Express Session](https://www.npmjs.com/package/express-session)               |
| [React Spinners](https://github.com/davidhu2000/react-spinners) (loading animation)                     | [Sequelize](https://sequelize.org/)                     |
| [Moment](https://momentjs.com/docs/) (format dates)                                  | [Multer](https://www.npmjs.com/package/multer) (upload user photo)    |
| [Numeral](https://www.npmjs.com/package/numeral) (format currency)                              | [Morgan](https://www.npmjs.com/package/morgan)                        |


## 💥 Features
- Account creation
- Update profile
- Profile picture upload
- Send/Request money
- Add/Search users 
- History log 
- Notifications

## ☄️ Future Features
- Split payment
- Add rejection comment

## 🥵 Challenges 
- In the beginning, communicating from our server to our client was a bit challenging but we took it one step at a time. We created test data that the client would send from forms and began building the pieces that we needed in order to save it to our database. 
- Incorporating new libraries that we never used before was intimidating. The best way that we went about it is doing a lot of research to ensure that the library that we chose can do what we want but also being mindful of time. We were on a tight schedule so we had to prioritize our features. 

## 📖 User Guide 
Check out our awesome user guide on how to use twinmo [here](https://github.com/nguyntony/twinmo/blob/main/user-guide/user-guide.md).

## ✊🏼 Team
[Tyler Nguyen](https://github.com/nguyntyler) | [Tony Nguyen](https://github.com/nguyntony)
