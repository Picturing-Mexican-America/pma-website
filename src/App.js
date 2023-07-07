import './App.css';
import { Navbar, Footer } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Stories from './components/pages/Stories'
import MisTerras from './components/pages/MisTerras'
import LaSelfie from './components/pages/LaSelfie'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'


function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/misterras' element={<MisTerras />} />
          <Route path='/laselfie' element={<LaSelfie />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;