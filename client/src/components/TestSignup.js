export default function TestSignup() {
  
  return (
    <section className="contentContainer">
      <h2>this is a test signup route</h2>

      <form action="">
        <br/>
        <label htmlFor="first">First</label>
        <input type="text" id="first"/>
  
        <br/>
        <label htmlFor="last">Last</label>
        <input type="text" id="last"/>
  
        <br/>
        <label htmlFor="email">email</label>
        <input type="text" id="email"/>
  
        <br/>
        <label htmlFor="username">username</label>
        <input type="text" id="username"/>
  
        <br/>
        <label htmlFor="password">password</label>
        <input type="text" id="password"/>

        <input type="submit" value='submit'/>
      </form>
    </section>
  )
}