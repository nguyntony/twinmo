import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from 'react-router-dom'

export default function Protected(props) {
  const {isLoggedIn, setIsLoggedIn} = props
  const [fetching, setFetching] = useState(true)

  const getStatus = async () => {
    const resp = await axios.get('/api/login-status')
    if (resp.data.status) {
      setIsLoggedIn(true)
      setFetching(false)
    } else {
      setFetching(false)
      setIsLoggedIn(false)
    }
  }

  useEffect(()=> {
    getStatus()
  }, [])

  return (
    <>
      {!fetching && isLoggedIn && props.children}
      {!fetching && !isLoggedIn && <Redirect to='/user/login'/>}
    </>
  )
}