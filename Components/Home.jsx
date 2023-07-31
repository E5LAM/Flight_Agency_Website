import React , {useEffect} from 'react'

import video from "../img/sky.mp4"
import img from '../img/plane.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // UseEffect to set animation  duration ======>
  useEffect(()=>{
    Aos.init({duration: 2000 })
  } , [])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration='2500'>
          Create Ever-lasting Memories With Us </h1>
      </div>
      <div data-aos="fade-down" data-aos-duration='1500' className="homeImage flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video' typeof='video.mov'></video>
        
        <img src={img}  className="plane" />
        </div>
      </div>
    </div>
  )
}

export default Home
