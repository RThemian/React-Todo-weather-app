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

  const [location2, setLocation2] = useState('');
  const [temp2, setTemp2] = useState('');

  const cityList2 = city2.map((item) => <h4>{item}</h4>);


  const searchLocation2 = (event) => {
    
    console.log(location2);
  axios.get(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location2}&aqi=yes`)
  .then((response2) => {
  setData(response2.data)
  console.log("🌿🍵💚🌱", response2.data)
  setTemp2(response2.data.current.temp_f)
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

<div className="row">
  <div class = "col-lg-6">
    <h1 className="text-primary">{temp ? temp : "Find out the temperature of your first place to visit"}</h1>
  </div>
  <div class = "col-lg-6">
    <h1 className="text-danger">{temp2 ? temp2 : "Find the temperature of the second city!"}</h1>
    {cityList2}
    <h3 className="text-danger">{city2 ? city2 : "Enter another city"}</h3>
  </div>
</div>




    </>
  );

};