import React  from 'react'
import logo from '../img/logo.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'> 

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="logo" />
            <p>your mind should be stronger than your feelings , fly! </p>
            <div className="socialIcon flex">
              <div className="iconDiv">
              <TiSocialFacebook className='icon'/>
              </div>

              <div className="iconDiv">
              <TiSocialTwitter className='icon'/>
              </div>

              <div className="iconDiv">
              <BsInstagram className='icon' />
              </div>

              <div className="iconDiv">
              <BsPinterest className='icon' />
              </div>

            </div>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">information</span>

          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">explore</a>
          </li>
          <li>
            <a href="">flight status</a>
          </li>
          <li>
            <a href="">check-In</a>
          </li>
          <li>
            <a href="">manage your booking</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">quick guide</span>

          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">how to</a>
          </li>
          <li>
            <a href="">features</a>
          </li>
          <li>
            <a href="">baggage </a>
          </li>
          <li>
            <a href="">route map</a>
          </li>
          <li>
            <a href="">our communities</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">information</span>

          <li>
            <a href="">chauffeur</a>
          </li>
          <li>
            <a href="">our partners</a>
          </li>
          <li>
            <a href="">destination</a>
          </li>
          <li>
            <a href="">careers</a>
          </li>
          <li>
            <a href="">transportation</a>
          </li>
          <li>
            <a href="">programme rules</a>
          </li>
        </div>
      </div>

    </div>
  )
}

export default Footer
