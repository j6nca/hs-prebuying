import logo from './logo.svg';
import './App.css';
import MasterForm from './components/MasterForm'
import { SearchPage } from './search/searchPage'
import NavBar from './components/NavBar'
import {
  Switch,
  BrowserRouter as Router,
  HashRouter,
  Route
} from 'react-router-dom'
import {DetailsPage} from "./search/detailsPage";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <MasterForm></MasterForm>
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/page/:mlsNumber'>
            <DetailsPage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
