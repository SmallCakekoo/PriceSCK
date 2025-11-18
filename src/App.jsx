import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import Home from './pages/Home';
import Photoshop from './pages/Photoshop';
import Academicos from './pages/Academicos';
import Motion from './pages/Motion';
import Programacion from './pages/Programacion';
import UxUi from './pages/UxUi';
import Contacto from './pages/Contacto';
import Otros from './pages/Otros';

function App() {
  return (
    <Router>
      <InteractiveBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photoshop" element={<Photoshop />} />
        <Route path="/academicos" element={<Academicos />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/uxui" element={<UxUi />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;