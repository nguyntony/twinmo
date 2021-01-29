import hero from '../assets/hero.png'

export default function Home() {
  return (

    <section className="contentContainer">
      <div className="heroImg">
        <img src={hero} alt="woman interacting with phone to send money"/>
      </div>
      <div className="mainContentContainer">
        <h2>twinnmo</h2>
      </div>
    </section>

  )
}