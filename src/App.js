import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ProjectRoutes from './components/ProjectRoutes';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {
  return (
      <Router>
        <div className='app-container'>
        <Navbar />
        <ProjectRoutes />
        <Footer/>
        </div>
      </Router>

  );
}

export default App;
