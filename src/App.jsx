import React from 'react' 
// import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from '/Components/Navbar.jsx'
import Home from '/Components/Home.jsx'
import Search from '/Components/Search.jsx'
import Support from '/Components/Support.jsx'
import Info from "/Components/Info.jsx"
import Lounge from "/Components/Lounge.jsx"
import Subscribers from "/Components/Subscribers.jsx"
import Travelers from "/Components/Travelers.jsx"
import Footer from "/Components/Footer.jsx"

const App = () => {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer/>
    </div>
  )
}

export default App
