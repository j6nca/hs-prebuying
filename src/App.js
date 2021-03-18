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
import {DetailsPage} from "./search/detailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/page/:mlsNumber'>
            <DetailsPage />
          </Route>
          <Route path='/'>
            <MasterForm></MasterForm>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
