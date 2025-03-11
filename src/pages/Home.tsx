import React from 'react'
import Navbar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <div className="home">
        <div className='textContent'>Manage your tasks, <br></br>and <br></br>track your productivity</div>
        </div>

    </div>
  )
}

export default Home