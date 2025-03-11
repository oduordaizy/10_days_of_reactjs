import React from 'react'
import { Link } from 'react-router-dom'
import { LiaStudiovinari } from "react-icons/lia";

const Navbar: React.FC = () => {   //React.FC just means react functional component
  return (

    <div className='navbar'>
      <Link to='/'><div className='logo'> <LiaStudiovinari />focusly</div></Link>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/todo'>Todo List</Link>
          <Link to='/pomodoro'>Pomodoro</Link>
          <Link to='/weather'>Weather</Link>
          <Link to='/quotes'>Quotes</Link>
        </nav>

    </div>
  )
}

export default  Navbar