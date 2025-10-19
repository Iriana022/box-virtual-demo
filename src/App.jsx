import 'bootstrap/dist/css/bootstrap.min.css'
import BoxList from './components/BoxList'
import Home from "./pages/Home";
import BoxDetail from "./pages/BoxDetail";
import NotFound from "./pages/NotFound";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/box/:id" element={<BoxDetail />} /> {/* détail d'une box */}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
