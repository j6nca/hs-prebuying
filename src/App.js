import logo from './logo.svg';
import './App.css';
import MasterForm from './components/MasterForm'
import { SearchPage } from './search/searchPage'
import NavBar from './components/NavBar'
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <NavBar></NavBar>
            <MasterForm></MasterForm>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
