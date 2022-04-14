
import { useEffect, useState   } from 'react';
import './App.css';
import './utils/styles.css'
import { getWeather } from './utils/getWeather';
import { WeatherCard } from './components/WeatherCard';


function App() {
  const [data, setdata] = useState()
  
  useEffect(() => {
    getWeather(setdata)
    
  }, [])
  

  
  return (
    <div className="App app " >
      
      
      {data &&
      <>
    
      <WeatherCard city={data.name}   country={data.sys.country} weather={data.weather[0].description} temp={data.main.temp} icon={data.weather[0].icon} />
      </>      
      }
    </div>
  );
}

export default App;
