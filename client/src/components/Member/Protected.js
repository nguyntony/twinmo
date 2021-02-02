import axios from "axios"
import { useEffect } from "react"

export default function Protected(props) {
  const {isLoggedIn, setIsLoggedIn} = props

  const getStatus = async () => {
    const resp = await axios.get('/api/login-status')
    if (resp.data.status) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }

  useEffect(()=> {
    getStatus()
  }, [])

  return (
    <>
      {isLoggedIn && props.children}
    </>
  )
}