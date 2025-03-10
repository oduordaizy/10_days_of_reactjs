import React from 'react'
import {Routes, Route } from 'react-router-dom';
import TodoList from '../components/TodoList';
import Pomodoro from '../components/Pomodoro';
import Weather from '../components/Weather';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Quote from '../components/Quote';

const RouterFunction :React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="todo" element={<TodoList/>}/>
        <Route path='pomodoro' element={<Pomodoro/>} />
        <Route path='weather' element={<Weather/>}/>
        <Route path="quotes" element={<Quote/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
  )
}

export default RouterFunction