import React , {useEffect} from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css' 

const Info = () => {

  useEffect(()=>{
    Aos.init({duration: 2000 })
  } , []) 

  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="tittleDiv flex">
          <h2 data-aos="fade-right" data-aos-duration='2500'>travel to make memories all around the world </h2>
          <button  data-aos="fade-left" data-aos-duration='2500' className="btn">view all</button>
        </div>
        <div className="cardsDiv grid">

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTittle">
              book & relax
            </span>
            <p>
              you can also call airlines from your phone and book 
              a flight ticket ! 
            </p>
          </div>
          
          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTittle">
              smart checklist
            </span>
            <p>
              you can also call airlines from your phone and book 
              a flight ticket ! 
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTittle">
              save more 
            </span>
            <p>
              you can also call airlines from your phone and book 
              a flight ticket ! 
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info
