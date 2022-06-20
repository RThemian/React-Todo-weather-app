import React, {useEffect, useState} from "react";
import {Form, Button} from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function App() {

  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const [temp, setTemp] = useState('');
  const [location, setLocation] = useState("")
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




  return (
    <>
    <div className="container mt-2">
      <h1 className="text-white bg-dark w-75">Hello World! {temp}</h1>
      
      
    
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

</div>

    </>
  );

};