import React , {useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {

useEffect(()=>{
    Aos.init({duration: 2000 })
  } , [])

  return (
    <div  className='subscriber section'>
      <div  data-aos="fade-up" data-aos-duration='2500' className="sectionContainer container">
        <h2>subscriber newsletters & get latest news</h2>

        <div className="inputDiv flex">
          <input type="text" placeholder='enter your email address' />
          <button className="btn">
            subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers
