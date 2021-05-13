import './App.css';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
          <CountriesList />
          <Route exact path="/:countryId" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
