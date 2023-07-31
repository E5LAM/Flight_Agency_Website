import React , {useEffect} from 'react'

import paris from '../img/paris.jpg'
import traveler1 from '../img/Eslam.jpg'
import london from '../img/london.jpg'
import traveler2 from '../img/traveler2.jfif'
import newYork from '../img/new york.jpg'
import traveler3 from '../img/traveler3.jpg'
import dubai from '../img/dubai.jpg'
import traveler4 from '../img/traveler4.avif'

import Aos from 'aos'
import 'aos/dist/aos.css'

const traveler = [
  {
    id : 1 ,
    destinationImage : paris , 
    travelerImage : traveler1 ,
    travelerName : 'eslam' , 
    socialLink : '@eslam'
  } ,
  {
    id : 2 ,
    destinationImage : london , 
    travelerImage : traveler2 ,
    travelerName : 'wilson' , 
    socialLink : '@wilson'
  } ,
  {
    id : 3 ,
    destinationImage : newYork , 
    travelerImage : traveler3 ,
    travelerName : 'nicole' , 
    socialLink : '@nicole'
  } ,
  {
    id : 4 ,
    destinationImage : dubai , 
    travelerImage : traveler4 ,
    travelerName : 'max' , 
    socialLink : '@max'
  } ,
]


const Travelers = () => {

useEffect(()=>{
    Aos.init({duration: 2000 })
  } , [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>top travelers of this month!</h2>

        <div data-aos="fade-up" data-aos-duration='3000' className="travelersContainer grid">

          {
            traveler.map(({id , destinationImage , travelerImage ,
            travelerName , socialLink })=>{
              return(
                <div key={id} className="singleTraveler">
                  <img src={destinationImage}  className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers
