import React from 'react'
import Navbar from '../components/Navbar'
import Themetoggle from '../components/Themetoggle'

const Home: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <Themetoggle/>
        <div className="home">
        <div className='textContent'>Manage your tasks, <br></br>and <br></br>track your productivity</div>
        </div>
        <Themetoggle/>
    </div>
  )
}

export default Home