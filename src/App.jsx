import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project';

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
