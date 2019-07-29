import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'c813788c0a6abc82384af3172cbd3a71'

class App extends React.PureComponent {
  state = {};

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;
 