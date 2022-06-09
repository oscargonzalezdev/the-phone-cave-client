import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PhonesList from './components/PhonesList';

function App() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    fetchPhones();
  }, []);

  const fetchPhones = () => {
    axios.get('http://localhost:5005/phones')
      .then(response => {
        setPhones(response.data);
        console.log(response.data);
      })
      .catch(e => console.log("error getting phones from API...", e))
  }
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/phones' element={<PhonesList phones={phones} updatePhones={fetchPhones} />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
