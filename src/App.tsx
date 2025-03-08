import './App.css'
import Navbar from './components/Navbar'
import Pomodoro from './components/Pomodoro'
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
    </>
  )
}

export default App
