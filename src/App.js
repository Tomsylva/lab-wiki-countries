import './App.css';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
