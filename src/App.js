import React, {useEffect, useState} from "react";
import {Form, Button, Card, Col, Row} from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function App() {

  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const [temp, setTemp] = useState('');
  const [location, setLocation] = useState("")
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState(["city", "state", "country"]);
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
    
      console.log(location);
    
    //check is "enter" was hit on the keyboard
     
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location}&aqi=yes`)
    .then((response) => {
    setData(response.data)
    console.log("🌿🍵💚🌱", response.data)
    setTemp(response.data.current.temp_f)
    
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
           photo: "https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_960_720.jpg",
           text: "partly cloudy"
         },
         {
           photo: "https://cdn.pixabay.com/photo/2015/05/31/13/59/rain-791893_960_720.jpg",
           text: "rainy"
          },
        ]

      console.log(weatherConditions);

    const [weatherImage2, setWeatherImage2] = useState("https://cdn.pixabay.com/photo/2018/06/16/16/17/road-3478977_960_720.jpg")


        

  const [location2, setLocation2] = useState('');
  const [temp2, setTemp2] = useState('');

  const cityList2 = city2.map((item) => <li>{item}</li>);


  const searchLocation2 = (event) => {
    
    console.log(location2);
  axios.get(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location2}&aqi=yes`)
  .then((response2) => {
  setData(response2.data)
   
  setTemp2(response2.data.current.temp_f)
  console.log("💚", response2.data.current.condition.text);
  setWeather2(response2.data.current.condition.text)
  setCity2([response2.data.location.name, response2.data.location.region, response2.data.location.country])
  })
  .catch((error2) => console.error(error2))
}




  return (
    <>
    <div className="container mt-2">
      <h1 className="text-white bg-dark w-75">Hello World!</h1>
      
    <Row>
      <Col>
    <Form  onSubmit={searchLocation}>
  <Form.Group className="mb-3 w-50" controlId="inputLocationWeather">
    <Form.Label>Check the weather</Form.Label>
    <Form.Control value = {location} onChange = {e => setLocation(e.target.value)} type="text" placeholder="Enter location to check weather" onKeyPress = {searchLocation} />
    <Form.Text className="text-muted">
      Enter where you would like to visit
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {searchLocation}>
    Submit
  </Button>
</Form>
</Col>

<Col>
  <h1>Your weather preferences</h1>
<Form onSubmit={searchLocation2}>
  <Form.Group className="mb-3 w-50" controlId="inputLocationWeather2">
    <Form.Label>What's your ideal temperature?</Form.Label>
    <Form.Control value = {location2} onChange = {e => setLocation2(e.target.value)} type="text" placeholder="Enter second location to check weather" onKeyPress = {searchLocation2} />
    <Form.Text className="text-muted">
      Use the slider to position your ideal temperature range
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {searchLocation2}>
    Submit
  </Button>
</Form>


</Col>

<Col>This is the 3rd column
<Form onSubmit={searchLocation2}>
  <Form.Group className="mb-3 w-50" controlId="inputLocationWeather2">
    <Form.Label>Check the weather for second city</Form.Label>
    <Form.Control value = {location2} onChange = {e => setLocation2(e.target.value)} type="text" placeholder="Enter second location to check weather" onKeyPress = {searchLocation2} />
    <Form.Text className="text-muted">
      Enter where you would like to visit
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {searchLocation2}>
    Submit
  </Button>
</Form>


</Col>

</Row>
</div>
<div className = "container">
<Row>
  <Col>
    <h1 className="text-primary">{temp ? temp : "Find out the temperature of your first place to visit"}</h1>
  </Col>
  <Col></Col>
  <Row>
  <Col>
    <h1 className="text-danger">{temp2 ? `${temp2}º : "Find the temperature of the second city!"}</h1>
    <h4 className="text-danger">{cityList2}</h4>
    <Col>
    <h2>{weather2 ? `Weather condition: ${weather2}` : `Weather condition`} </h2>
    <img className = "mb-4 mx-4 w-25 h-25" src = {weatherImage2} />
    </Col>

    
   
  </Col>
  </Row>
  <img className = "mb-4 mx-4 w-25 h-25" src ='https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg' />
  <img className = "mb-4 mx-4 w-25 h-25" src = "https://cdn.pixabay.com/photo/2016/06/22/16/22/clouds-1473311_960_720.jpg" />
  <img className = "mb-4 mx-4 w-25 h-25" src = "https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_960_720.jpg" />
  <img className = "mb-4 mx-4 w-25 h-25" src = "https://cdn.pixabay.com/photo/2015/05/31/13/59/rain-791893_960_720.jpg" />
</Row>
</div>



    </>
  );

};