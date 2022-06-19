import React from "react";

import "./App.css";
import { Button, Card, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



//span element passes through text some attribute


function Todo({ todo, text, index, markTodo, removeTodo, editTodo }) {
  function getLocation() {
    return;
  }

  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant ='outline-warning' onClick={() => editTodo(index)}>✍️</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>{' '}
        <Button variant = "outline-info" onClick ={getLocation}>⛈</Button>

        
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
   
    setValue("");
  };



  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>

      <Form.Control 
        type="text" 
        className="input" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        placeholder="Add new todo" 
      />

    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {

  const [temp, setTemp] = React.useState('');
  const [location, setLocation] = React.useState('london');

  const getLocation = (text) => {
    setLocation(text);
  }

 React.useEffect(() => {

  fetch(`http://api.weatherapi.com/v1/current.json?key=a389c7cedf1e4ac494e140828220806&q=${location}&aqi=no`)
     .then(response => response.json())
     .then(data => {
       console.log(data)
       console.log(data.current.temp_f)
       setTemp(data.current.temp_f)
       setLocation(data.location.name)
     })
     .catch(error => console.log(error))

   }, [])




  const [todos, setTodos] = React.useState([
    {
      text: "Where do you want to go?",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    console.log("🐸🐸🐸", index);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log("🐸", index);
  };
  const [modalIndex, setModalIndex] = React.useState(0);
  const [edit, setEdit] = React.useState('')
  const editTodo = index => {
    console.log("🐸🐸", index);
    setModalIndex(index);
    setOpen(true);

    const newTodos = [...todos];
    //newTodos.splice(index, 1);
    //I give up for today, here I can't figure out how to edit on my own, so i'll copy and paste
    setTodos(newTodos)
    
    
  }




  const [open, setOpen] = React.useState(false);
  console.log('🍎', modalIndex); 

  

  return (

    <>
 
    {/* <div>
      <h1>I'm a modal</h1>
      <button onClick = {e => setOpen(false)}></button>
    </div> */}

      <div className = "app">
  
      <div className = "container">
     
        <h1 className="text-center mb-4">Travel Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                editTodo ={editTodo}
                
                />
              </Card.Body>
            </Card>
          ))}
        </div>
        
        <Modal
         show = {open}
         onOpen = {e => setOpen(true)}
         onClose = {e => setOpen(false)}
         className="text-center mb-4"
        > 
      <Modal.Title  >Edit Todo</Modal.Title>
      <Modal.Body>
      {todos[modalIndex].text.toString() ? todos[modalIndex].text.toString() : "What now?" }
    <Form > 
    <Form.Group>
      <Form.Label><b>change your todo</b></Form.Label>
      <Form.Control  type="text" className="input" value={edit} onChange={e => setEdit(e.target.value)} placeholder={todos[modalIndex].text.toString() ? todos[modalIndex].text.toString() : "What now?" } />
    </Form.Group>
  </Form>
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'warning' onClick = {e => setOpen(false)} >Cancel</Button>
        <Button variant = 'success' onClick = {e => {addTodo(edit)} }>Save and Close Todo</Button>
        
      </Modal.Footer>

    </Modal>
      </div>
    </div>
    </>
  );
}

export default App;