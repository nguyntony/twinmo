import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


export default function TestLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('')
  const [file, setFile] = useState('')
  const [photo, setPhoto] = useState('')

  // ------------------------------------------------
  const getUsers = async (e) => {
    e.preventDefault();
    const resp = await axios.get('/api/member/get-users');
    console.log(resp.data)
  } 

  const addFriend = async (e) => {
    e.preventDefault();
    const resp = await axios.post('/api/member/friend/add');
    console.log(resp.data.message)
  }

  const listFriend = async (e) => {
    e.preventDefault();
    const resp = await axios.get('/api/member/friend/find-all');
    console.log(resp.data)
  }
  
  // ------------------------------------------------

  const allPending = async (e) => {
    e.preventDefault();
    const resp = await axios.get('/api/member/pending/list');
    console.log(resp.data)
  }


  const processLogin = async (e) => {
    e.preventDefault();
    const resp = await axios.post('/api/user/login', {
      email,
      password
    })

    console.log(resp.data)
    if (resp.data.loginStatus) {
    } else {
      console.log('login failed')
      setMessage(resp.data.status)
    }
  }

  const processPicUpload = async (e) => {
    e.preventDefault()
    // console.log(file)
    // const resp = await axios.put('/api/user/profile-picture', file)

    const data = new FormData();
    data.append('file', file)
    try {
      const resp = await axios.put('/api/user/profile-picture', data)
      console.log('PHOTO RES SUCCESS')
    } catch (e) {
      console.log('Cant upload')
    }
  }

  const getPhoto = async () => {
    const resp = await axios.get('/api/user/profile-pic')
    // console.log(resp.data.photo)
    setPhoto(resp.data.photo)
  }

  // we can add that state as a dependency to this use effect hook, it will be set to false and whenever the user clicks on button to log in, we can register that event to manually change something, in the event the user failed to log in, we will render a message
  // useEffect(() => {
  //   setLoginFailed("")
  //   async function checkLogin() {
  //     try {
  //       const resp = await axios.get('/api/login-status');
  //       console.log('You are logged in')
  //       setIsLoggedIn(true)
  //     } catch (e) {
  //       console.log('You are not logged in')
  //       setIsLoggedIn(false)
  //     }
  //   }
  //   checkLogin()
  // }, [loginFailed])

  // useEffect(()=> {
  //   async function getPhoto() {
  //     const photoName = await axios.get('/api/user/profile-pic');
  //     console.log(photo.data)
  //     setPhoto(photoName.data.photo)
  //   }
  //   getPhoto()
  // }, [])
  
  return (
    <>
    <section className="contentContainer">
      <h2>this is a test login route</h2>

      {message && <h1>{message}</h1>}

      <form onSubmit={processLogin}>
        <br/>
        <label htmlFor="email">email</label>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)}/>

        <br/>
        <label htmlFor="password">password</label>
        <input type="text" id="password" onChange={e => setPassword(e.target.value)}/>

        <input type="submit" value='submit'/>

      </form>
    </section>
    <section>
      <form onSubmit={processPicUpload}>
        <label htmlFor="file-upload">Hello</label>
        <input id='file-upload' type="file" name="content" onChange={e => setFile(e.target.files[0])}/>
        <input type="submit" value="Submit"/>
      </form>
      <h1>Photo under</h1>
      <button onClick={getPhoto}>PHTOT</button>
      {photo && <img src={photo} alt=""/> }
    </section>
    <button onClick={getUsers}>GET USERS</button>
    <br/>
    <button onClick={addFriend}>ADD FRIEND</button>
    <br/>
    <button onClick={listFriend}>LIST ALL FRIENDS</button>
    <br/>
    <button onClick={allPending}>ALL PENDING (USER SENT)</button>
    </>
  )
}