import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project';
import Details from './Components/Project-details/Details';

function App() {
  return (
    <div className="main">
      <Router basename='/portfolio'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project-details/:id' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;