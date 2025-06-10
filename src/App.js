import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Relogio from './pages/Atividade01';
import Atividade02 from './pages/Atividade02';
import Gallery from './pages/Atividade03';
import Atividade04 from './pages/Atividade04';
import Atividade05 from './pages/Atividade05';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
          <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Home</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atividade01" element={<Relogio />} />
          <Route path="/atividade02" element={<Atividade02 />} />
          <Route path="/atividade03" element={<Gallery />} />
          <Route path="/atividade04" element={<Atividade04 />} />
          <Route path="/atividade05" element={<Atividade05 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
