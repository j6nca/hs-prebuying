import logo from './logo.svg';
import './App.css';
import MasterForm from './components/MasterForm'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
          <Route path='/'>
            <MasterForm></MasterForm>
          </Route>
          <Route path='/search'>

          </Route>
      </div>
    </Router>
  );
}

export default App;
