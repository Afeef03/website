import { Route , Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
import About from './Routes/About';
import './index.css'
import BackToTopButton from './components/Back';

function App() {
  return (
    <div className="App">
      <BackToTopButton />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
