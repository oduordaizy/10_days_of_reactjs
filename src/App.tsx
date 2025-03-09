import './App.css'
import Navbar from './components/Navbar'
import Pomodoro from './components/Pomodoro'
import Quote from './components/Quote'
import TodoList from './components/TodoList'
import Weather from './components/Weather'

function App() {
 
  return (
    <>
     <Navbar />
    <div className="prodTools">
      <TodoList />
      <Pomodoro />
    </div>
    <Weather/>
    <Quote/>
    </>
  )
}

export default App
