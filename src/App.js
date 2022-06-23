import React, {useEffect, useState} from "react";
import {Form, Button, Card, Col, Row} from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import thunderWeather from './assets/thunderWeather.jpg';


export default function App() {

  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const [temp, setTemp] = useState('');
  const [location, setLocation] = useState("")
  const [city1, setCity1] = useState(["city 1", "state 1", "country 1"]);
  const [city2, setCity2] = useState(["city 2", "state 2", "country 2"]);
 // const url = `http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${cityInput}&aqi=yes`


 
  // useEffect(() => {
  // fetch(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location}&aqi=no`)
  // .then(response => response.json())
  // .then(data => {
  // console.log(data)
  // console.log(data.current.temp_f)
  // setTemp(data.current.temp_f)

  //  })
  //    .catch(error => console.error(error))

  //  }, [])
   
  

   //target the input using the event.key

  const [weather, setWeather] = useState('');
  const [weather2, setWeather2] = useState('');

  const searchLocation = (event) => {
      //event.preventDefault();
      console.log(location);
    
    //check is "enter" was hit on the keyboard
     
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location}&aqi=yes`)
    .then((response) => {
    setData(response.data)
    console.log("🌿🍵💚🌱", response.data)
    setTemp(response.data.current.temp_f)
    setWeather(response.data.current.condition.text)
  setCity1([response.data.location.name, response.data.location.region, response.data.location.country])
    
    })
    .catch((error) => console.error(error))
  }

const weatherMatcher = () => {

}
 const weatherConditions = [
     {
       photo: "https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg",
       text: "sunny"
     },
         {
           photo: "https://cdn.pixabay.com/photo/2016/06/22/16/22/clouds-1473311_960_720.jpg",
           text: "cloudy"
         },
         {
          photo: "https://cdn.pixabay.com/photo/2016/06/22/16/22/clouds-1473311_960_720.jpg",
          text: "overcast"
        },
         {
           photo: "https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_960_720.jpg",
           text: "partly cloudy"
         },
         {
           photo: "https://cdn.pixabay.com/photo/2015/05/31/13/59/rain-791893_960_720.jpg",
           text: "rainy"
          },
          {
            photo: "https://cdn.pixabay.com/photo/2015/05/31/13/59/rain-791893_960_720.jpg",
           text: "moderate rain"
          },
          {
            photo: "https://cdn.pixabay.com/photo/2015/05/31/13/59/rain-791893_960_720.jpg",
           text: "light moderate rain"
          }
        ];

      console.log(weatherConditions);

  


     //  <img className="mb-4 mx-4 w-25 h-25" src ={pic.photo} key = {pic.text} />   

  const [location2, setLocation2] = useState('');
  const [temp2, setTemp2] = useState('');

  const cityList1 = city1.map((item) => <li>{item}</li>)

  const cityList2 = city2.map((item) => <li>{item}</li>);
// global var to hold images in url only
  // var weatherImageSources = [
  //   {

  //   }
  // ]
// got to fix that displayWeatherTypes is not being filled permanently after end of mapping
   const displayWeatherTypes = weatherConditions.map((pic) => {
     console.log("🔴",pic)
   
   })

  console.log("🔴🔴🔴", displayWeatherTypes);


  const searchLocation2 = (event) => {
    //event.preventDefault();
    console.log(location2);
  axios.get(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location2}&aqi=yes`)
  .then((response2) => {
  setData(response2.data)
   
  setTemp2(response2.data.current.temp_f)
  console.log(response2.data.current.condition.text);
  setWeather2(response2.data.current.condition.text)
  setCity2([response2.data.location.name, response2.data.location.region, response2.data.location.country])
  })
  .catch((error2) => console.error(error2))
}
//const [defaultWeatherReal, setDefaultWeatherReal] = useState('https://cdn.pixabay.com/photo/2018/06/16/16/17/road-3478977_960_720.jpg');

// store images
//<img className = "mb-4 mx-4 w-25 h-25" src ='https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg' />
  //<img className = "mb-4 mx-4 w-25 h-25" src = "https://cdn.pixabay.com/photo/2016/06/22/16/22/clouds-1473311_960_720.jpg" />
  //<img className = "mb-4 mx-4 w-25 h-25" src = "https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_960_720.jpg" />
  //<img className = "mb-4 mx-4 w-25 h-25" src = "https://cdn.pixabay.com/photo/2015/05/31/13/59/rain-791893_960_720.jpg" />
  

  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);

useEffect(() => {



}, [weather, weather2])


const [weatherImage1, setWeatherImage1] = useState("https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg");
const [weatherImage2, setWeatherImage2] = useState("https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg");




var weatherCheck = [];

function weatherSelector(props) {
    const weatherFormatted = props.toLowerCase();
    let defaultWeather = "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg";
    weatherConditions.forEach(function(element) {
      
      
    if (weatherFormatted === element.text) {
      
      weatherCheck.push(element.photo);
      
        
      }
    });
    
    

  if(weatherCheck.length !== 0) {
    return weatherCheck
  }
  return(
    defaultWeather
  )

  }

 





  return (
    <>
    <div className = "bg-light">
    <div className="container mt-2">
      <h1 className="text-white text-center bg-dark w-100">Which... Where?</h1>
      
    <Row>
   
      <Col>
      <div className="border border-dark rounded px-4 mb-2">
      <h1 className = "text-danger">What's the first city you want to compare?</h1>
      <Form onSubmit={searchLocation}>
      <Form.Group className="mb-3 w-75" controlId="inputLocationWeather">
      <Form.Label>Check the weather</Form.Label>
      <Form.Control value = {location} onChange = {e => setLocation(e.target.value)} type="text" placeholder="Enter location to check weather" onKeyPress = {searchLocation} />
      <Form.Text className="text-muted">
       Enter where you would like to visit
       </Form.Text>
  </Form.Group>

  <Button className ="mb-4 " variant="primary" type="submit" onClick = {searchLocation}>
    Submit
  </Button>
</Form>
</div>
</Col>


<Col>
  
    <div className="bg-info px-4 block-example border border-success border-1 rounded mb-0">
    <h1>Your weather preferences: What's your ideal temperature?</h1>
    </div>


</Col>

<Col>
<div className = "border border-dark rounded px-4 mb-2">
<h1 className = "text-info">What other city do you want to compare?</h1>
<Form onSubmit={searchLocation2}>
  <Form.Group className="mb-3 w-75" controlId="inputLocationWeather2">
    <Form.Label>Check the weather for second city</Form.Label>
    <Form.Control value = {location2} onChange = {e => setLocation2(e.target.value)} type="text" placeholder="Enter second location to check weather" onKeyPress = {searchLocation2} />
    <Form.Text className="text-muted">
      Enter where you would like to visit
    </Form.Text>
  </Form.Group>

  <Button className = "mb-4" variant="primary" type="submit" onClick = {searchLocation2}>
    Submit
  </Button>
</Form>

</div>
</Col>

</Row>
</div>
</div>
<div className = "container">
<Row>
  <Col>
    <h1 className="text-primary">{temp ? `${temp}ºF` : "Find out the temperature of your first place to visit"}</h1>
    <h4 className="text-primary">{cityList1}</h4>
    <Col>
    <h2>{weather ? `Weather condition: ${weather}` : `Weather condition`} </h2>
    <img className = "mb-4 mx-4 w-25 h-25" src = {weatherSelector(weather)} alt ="weather condition" />
    </Col>
  </Col>
 
  
  <Col>
    <h1 className="text-danger">{temp2 ? `${temp2}ºF` : "Find the temperature of the second city!"}</h1>
    <h4 className="text-danger">{cityList2}</h4>
    <Col>
    <h2>{weather2 ? `Weather condition: ${weather2}` : `Weather condition`} </h2>
    <img className = "mb-4 mx-4 w-25 h-25" src = {weatherSelector(weather2)} alt ="weather condition" />
    </Col>

    
   
  </Col>
  <Row>{displayWeatherTypes}</Row>
  
  
</Row>
</div>



    </>
  );

};
