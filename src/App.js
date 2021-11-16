import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCovidData } from './redux/covid';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
