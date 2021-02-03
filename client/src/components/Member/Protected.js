import axios from "axios"
import { useEffect } from "react"

export default function Protected(props) {
  const {isLoggedIn, setIsLoggedIn} = props

  // may need it's own piece of state like 'fetching', by default it's true 'I'm trying to grab information' 

  // then I need a conditional 
  const getStatus = async () => {
    const resp = await axios.get('/api/login-status')
    if (resp.data.status) {
      setIsLoggedIn(true)
      // setFetching to false bc we are done with that
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
      {/* we need &&, !fetching && !isLoggedIn <Redirect/> */}
    </>
  )
}