import React , {useEffect} from 'react'
import img from '../img/grid.jpg'
import img2 from '../img/grid2.webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration: 2000 })
  } , [])

  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div data-aos="fade-left" data-aos-duration='2500' className="imgDiv">
          <img src={img} alt="" />
          <img src={img2} alt="" />
        </div>

        <div className="textDiv">
          <h2 data-aos="fade-right" data-aos-duration='2500'>unaccompanied minor  lounge</h2>

        <div className="grids grid">

          <div data-aos="fade-down" data-aos-duration='2500' className="singleGrid">
            
          <span className='girdTittle'>
            help through the airpot
          </span>
          <p>
            you can also call airlines from your phone and book a 
            flight ticket to one of your favorite destinations . 
          </p>

          </div>

          <div data-aos="fade-down" data-aos-duration='3500' className="singleGrid">
            
          <span className='girdTittle'>
            priority boarding 
          </span>
          <p>
            you can also call airlines from your phone and book a 
            flight ticket to one of your favorite destinations . 
          </p>

          </div>

          <div data-aos="fade-down" data-aos-duration='4500' className="singleGrid">

          <span className='girdTittle'>
            care on the flight 
          </span>
          <p>
            you can also call airlines from your phone and book a 
            flight ticket to one of your favorite destinations . 
          </p>

          </div>

          <div data-aos="fade-down" data-aos-duration='5500' className="singleGrid">

          <span className='girdTittle'>
            chauffeur-drive service
          </span>
          <p>
            you can also call airlines from your phone and book a 
            flight ticket to one of your favorite destinations . 
          </p>

          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
