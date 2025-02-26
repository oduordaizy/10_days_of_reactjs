import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
     <Navbar />

     <div className='mainContent'>
        <Card title='Section 1' content='Information about section 1'/>
        <Card title='Section 2' content='Details about section 2'/>
        <Card title='Section 3' content='Information about section 3'/>
     </div>
     
     
    </>
  )
}

export default App
