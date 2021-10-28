import './App.css';
import SplashScreen from './components/splashscreen/splashscreen';
import React, {useState, useEffect} from 'react';
import AppRouter from './components/router/router';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);


  return (
    <div className="App">
      <div className="container">
        {loading ?
        <SplashScreen/>
        :
        <AppRouter/>} 
      </div>
    </div>
  );
}

export default App;
