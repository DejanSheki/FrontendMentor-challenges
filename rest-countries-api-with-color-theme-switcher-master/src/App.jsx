import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import data from './data.json';

import Navbar from "./components/Navbar";
import MainPage from './components/MainPage';
import CountryDetails from "./components/CountryDetails";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage data={data} />} />
        <Route path='/country/:alpha3Code' element={<CountryDetails data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
