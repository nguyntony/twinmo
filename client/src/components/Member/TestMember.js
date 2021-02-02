import axios from "axios"
import { useEffect, useState } from "react"
import {Switch, Route, Redirect} from 'react-router-dom'


export default function TestMember() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const getStatus = async () => {
    try {
      const resp = await axios.get('/api/login-status')
      setIsLoggedIn(true)
      console.log('user loggedin')
    } catch (e) {
      setIsLoggedIn(false)
      console.log('user not logged in')
    }
  }

  useEffect(()=> {
    getStatus()
  }, [])

  return (
    <>
    <h1>checking to see if you are logged in?</h1>
    <Switch>
      <Route path='/member'>
        {isLoggedIn ? <Redirect to='/member/dashboard'/> : <Redirect to='/'/>}
      </Route>
    </Switch>
    </>
  )
}