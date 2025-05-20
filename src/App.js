import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Relogio from './pages/Atividade01';
import Atividade02 from './pages/Atividade02';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
