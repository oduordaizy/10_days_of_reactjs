import './App.css'
import Navbar from './components/Navbar'
import Pomodoro from './components/Pomodoro'
import TodoList from './components/TodoList'

function App() {
 
  return (
    <>
     <Navbar />
    <div className="prodTools">
      <TodoList />
      <Pomodoro />
    </div>
    
     
    </>
  )
}

export default App
