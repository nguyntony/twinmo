export default function TestLogin() {
  
  return (
    <section className="contentContainer">
      <h2>this is a test login route</h2>

      <form action="">
        <br/>
        <label htmlFor="email">email</label>
        <input type="text" id="email"/>

        <br/>
        <label htmlFor="password">password</label>
        <input type="text" id="password"/>

        <input type="submit" value='submit'/>
      </form>
    </section>
  )
}