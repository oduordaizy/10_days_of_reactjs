import React from 'react'

const Navbar: React.FC = () => {   //React.FC just means react functional component
  return (

    <nav className='navbar'>
      <div className='logo'>Dashboard</div>
        <ul>
          <li>Home</li>
          <li>My Courses</li>
          <li>Certificates</li>
          <li>Challenges</li>
          <li>Badges</li>
        </ul>

    </nav>
  )
}

export default  Navbar