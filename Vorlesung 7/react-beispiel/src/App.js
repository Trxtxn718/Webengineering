import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import News from './pages/news';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
