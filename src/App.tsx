import './App.css'
import { BrowserRouter} from 'react-router-dom'
import RouterFunction from './routes'
import { ThemeProvider } from './components/ThemeContext'

function App() {
 
  return (
    <ThemeProvider>
   <BrowserRouter>
    <RouterFunction/>
   
   </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
