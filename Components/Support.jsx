import React , {useEffect} from 'react'
import img1 from '../img/flight1.jfif'
import img2 from '../img/flight2.webp'
import img3 from '../img/flight3.webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

  useEffect(()=>{
    Aos.init({duration: 2000 })
  } , [])

  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="tittleDiv">
          <p> travel <br />
            support </p>
          <h2>plane your travel with confidence</h2>
          <p>Find help with booking and travel planes, see what to expect along the 
            journey! </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div data-aos="fade-down" data-aos-duration='2500' className="singleInfo">
              <span className="number">01</span>
              <h4>travel requirements for Dubai</h4>
              <p>Find help with booking and travel planes, see what to expect along the 
                journey! </p>
            </div>

            <div data-aos="fade-down " data-aos-duration='3500' className="singleInfo">
              <span className="number">02</span>
              <h4>chauffeur services at your arrival</h4>
              <p>Find help with booking and travel planes, see what to expect along the 
                journey! </p>
            </div>

            <div data-aos="fade-down" data-aos-duration='4500' className="singleInfo">
              <span className="number">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel planes, see what to expect along the 
                journey! </p>
            </div>
          
          </div>
          <div data-aos="fade-left" data-aos-duration='3000' className="imgDiv">
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support
