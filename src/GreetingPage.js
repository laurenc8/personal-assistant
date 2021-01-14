import React, { useReducer } from 'react';
import { Title} from './styles';
import { Container, Row, Col } from 'react-grid-system';

const GreetingPage = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'success':
        return {weather: action.data, hasRequested: true};
      case 'fail':
        return {weather: null, hasRequested: true};
      default:
        return state;
    }
  }
  const [{weather, hasRequested}, dispatch] = useReducer(reducer, {weather: null, hasRequested: false});
  if (!hasRequested) {
    new Promise((resolve, reject) => {navigator.geolocation.getCurrentPosition(resolve)})
    .then((loc) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
      .then(result => result.json())
      .then(result => dispatch({type: 'success', data: result}))
    })
    .catch(() => dispatch({type: 'fail'}));
  }
  console.log(weather);
  let weatherPic = null;
  if (weather !== null) {
    const pics = {
      'Clear': <img src='/assets/sun.png' alt='clear' width='30%'/>,
      'Rain': <img src='/assets/rain.png' alt='rain' width='30%'/>,
      'Snow': <img src='/assets/snow.webp' alt='snow' width='30%'/>
    };
    weatherPic = pics[weather.weather[0].main];
  }
  return (
    <div>
      <Title>Hello!</Title>
      <Container >
          <Row>
            <Col sm={8} offset={{ sm: 2 }} style={{backgroundColor: '#ffffff', borderRadius: '10px'}}>
              <center>
                <h2>Today's Weather</h2>
                {weather !== null ? <h3>{weather.weather[0].main}, {weather.clouds.all}% Cloudiness</h3> : <h3>Sorry, no weather data.</h3>}
                {weatherPic}
                {weather !== null ? <h1>{Math.round(weather.main.temp)}°F</h1> : null }
                {weather !== null ? <h3>Feels Like {Math.round(weather.main.feels_like)}°F</h3> : null }
                {weather !== null ? <h3>Low {Math.round(weather.main.temp_min)}°F, High {Math.round(weather.main.temp_max)}°F</h3> : null }
              </center>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default GreetingPage;