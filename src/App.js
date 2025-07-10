import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ProjectRoutes from './components/ProjectRoutes';

function App() {
  return (
      <Router>
        <ProjectRoutes />
      </Router>

  );
}

export default App;
