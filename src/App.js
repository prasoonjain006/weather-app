import React from 'react';
import './App.css';
import Weather from './components/Weather';
import 'weather-icons/css/weather-icons.css';
import Form from './Form'

const APIkey ="2126665e2906fef1ae7a71865ea23584";


// api.openweathermap.org/data/2.5/weather?q=London,uk


class App extends React.Component{

  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      calsius:undefined,
      tempMAX:undefined,
      tempMIN:undefined,
      description:"",
      error:false,
    };
    
    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog",


    };
  }
  
  convertInCelcius=(temp)=>{
    return Math.floor(temp-273.15);
  }
  getWeatherIcon(icon,rangeID){
    switch(true){
      case rangeID >=200 && rangeID <=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      case rangeID >=300 && rangeID <=321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeID >=500 && rangeID <=531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
      case rangeID >=600 && rangeID <=622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeID >=701 && rangeID <=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
      case rangeID ===800:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeID >=801 && rangeID<=804 :
        this.setState({icon:this.weatherIcon.Snow});
        break;
      default:
        this.setState({icon:this.weatherIcon.Atmosphere}); 
    }
  }

  getWeather =async(event) => {
    event.preventDefault();
    const city=event.target.elements.city.value;
    const country=event.target.elements.country.value;

    if(city && country){
      const apiCall = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`);
      const response =await apiCall.json();
      console.log(response);
      if(response.cod==="404"){
        this.setState({error:true})
      }else{
        this.setState({
      
          city:`${response.name} , ${response.sys.country}`,
          celcius:this.convertInCelcius(response.main.temp),
          tempMIN:this.convertInCelcius(response.main.temp_min),
          tempMAX:this.convertInCelcius(response.main.temp_max),
          description:response.weather[0].description,
          error:false,
          });
          this.getWeatherIcon(this.weatherIcon, response.weather[0].id)
        }
      }else{
        this.setState({error:true})
    }
  }
 
    
    
  
  render(){
    return (
      <div className="App">
        <h1 className="yellow bt bb pa2"   >Weather App</h1>
        <Form  loadWeather={this.getWeather}  error={this.state.error}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          celcius={this.state.celcius}
          tempMIN={this.state.tempMIN}
          tempMAX={this.state.tempMAX}
          description={this.state.description}
          weatherIcon={this.state.icon}
          />
      </div>
    );
  }
}




export default App;
