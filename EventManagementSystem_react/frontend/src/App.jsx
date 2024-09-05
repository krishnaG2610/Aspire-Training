import { Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Register from './pages/register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateEvent from './pages/CreateEvent'
import Book from "./pages/Book"
import Birthday from "./pages/Birthday"
import ShowEvent from './pages/ShowEvent'
import Community from './pages/community'
import Concert from './pages/concert'
import Meetup from './pages/Meetup'
import Sports from './pages/sports'
import Track from './pages/Track'
import Final from './pages/final'
import TicketBooking from './pages/Ticket'
function App() {
 

  return (
    <>
    <Routes>
      < Route path='/' element ={<Home />} />
      < Route path='/register' element ={<Register />} />
      < Route path='/login' element ={<Login />} />
      < Route path='/dashboard' element={<Dashboard />}/>
      < Route path='/createevent' element ={<CreateEvent/>}/>
      < Route path='/showevent' element ={<ShowEvent/>}/>
      < Route path='/book' element ={<Book />}/>
      < Route path='/birthday' element ={<Birthday />}/>
      < Route path='/community' element ={<Community />}/>
      < Route path='/concert' element ={<Concert />}/>
      < Route path='/meetup' element ={<Meetup />}/>
      < Route path='/sports' element ={<Sports />}/>
      < Route path='/track' element ={<Track />}/>
      < Route path='/final' element ={<Final />}/>
      < Route path='/ticket' element ={<TicketBooking />}/>

    </Routes>
    </>
  )
}

export default App;
