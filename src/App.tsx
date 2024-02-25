import './App.css'
import {NaviHeader} from './components/NaviHeader'

function App() {

  return (
    <div className='overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl'>
      <div className='hidden flex-col md:flex'>
        <div className='border-b'><NaviHeader></NaviHeader></div>
        <div className='flex-1 space-y-4 p-8 pt-6'></div>
      </div>
      
    </div>
  )
}

export default App
