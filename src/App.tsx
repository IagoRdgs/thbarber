import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Scheduling from './components/pages/Scheduling';
import Nav from './components/layout/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route index Component={Main} />
        <Route path='/scheduling' Component={Scheduling} />
      </Routes>
    </Router>
  )
}

export default App
