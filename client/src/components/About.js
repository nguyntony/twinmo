// this component will briefly explain the app but also showcase the members 
// it will contain different css to the home component
import tonyHeadshot from '../assets/tony-headshot.jpg'
import tylerHeadshot from '../assets/tyler-headshot.jpg'
import {useState} from 'react'

export default function About() {

  const [contentID, setContentID] = useState(0)

  const content = [
    {
      title: 'What is twinmo?',
      description: `Imagine if Venmo and Zelle had a baby. A more focused view of Venmo but redesigning the look and feel of Zelle. Keep track of your payments and requests. Check out our sister app for `,
      link: true,
      subtitle: null,
      contact: null,
    },
    {
      title: 'Tony Nguyen',
      description: `Passionate individual that loves creating, learning and designing. I am naturally curious, quietly confident and constantly improving myself each day. If I am not programming, I am either hanging out with my adorable dogs 🐶 or playing video games 🎮!`,
      link: null,
      subtitle: 'Lead Front End Developer',
      contact: ['http://nguyntony.com/', 'https://www.linkedin.com/in/nguyntony/', 'https://github.com/nguyntony']
    },
    {
      title: 'Tyler Nguyen',
      description: `Avid Full-Stack developer looking to make great things. I'm always looking to learn something new and immerse myself into uncharted territory. My dogs are my life and my goal is to give them all the things they never knew they wanted. In my spare time, you'll definitely find me with them. 🐕🚶🏻`,
      link: null,
      subtitle: 'Lead Back End Developer',
      contact: ['http://nguyntyler.com/', 'https://www.linkedin.com/in/nguyntyler/', 'https://github.com/nguyntyler']
    }
  ]

  const clickTony = () => {
    setContentID(1)
  }

  const clickTyler = () => {
    setContentID(2)
  }

  const defaultInfo = () => {
    setContentID(0)
  }


  return (
    <section className="aboutContainer">


      <div className="profileContainer">
        <div className="headshot one">
          <img src={tonyHeadshot} alt="tony" onClick={clickTony}/>
        </div>
        <div className="headshot two">
          <img src={tylerHeadshot} alt="tyler" onClick={clickTyler}/>
        </div>
        <div className="three" onClick={defaultInfo}>
        <img src="https://img.icons8.com/plasticine/100/000000/bank-card-back-side.png"/>
        </div>
      </div>

      <div className="aboutContentContainer">
        <div className="aboutCard">
          <div className="aboutContent">
            
              <div className="titleHeading">
                <h1>{content[contentID].title}</h1>
                {content[contentID].subtitle && <h3>{content[contentID].subtitle}</h3>}
              </div>

              <p className="profileDescription">
                

                {content[contentID].description} 
              
                {content[contentID].link && <a href="https://twintracker.me/">personal finance.</a>}
              {content[contentID].contact && 
              <nav className="profileNav">
                <ul>
                  <li><a href={content[contentID].contact[0]} target="_blank" rel="noreferrer"><i className="fas fa-address-card"></i></a></li>
                  <li><a href={content[contentID].contact[1]} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href={content[contentID].contact[2]} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>

                </ul>
              </nav>}
              </p>
          </div>
        </div>

      </div>
    </section>
  )
}