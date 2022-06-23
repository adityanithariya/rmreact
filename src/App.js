// components
import Navbar from './components/Navbar';
import Srijan from './components/Srijan';
import Home from './components/Home';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// css
import './components/utility.css';
import './App.css';

function App () {
  return (
    <Router>
      <div id='body-div'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/srijan' element={<Srijan />} />
          <Route exact path='/reports' element={<Reports />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;