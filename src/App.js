import React from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import { useState, useEffect } from "react";
import schema from './Schema'
import axios from 'axios'
import * as yup from 'yup'
// const initialValues = {

//   name: '',
//   size: '',
//   toppings: '',
//   special: '',
// }
// const initialErrors ={
//   name: '',
//   size: '',
//   toppings: '',
//   special: '',
// }
// const initialFormValues = [];
// const initialDisabled = true;





export default function App() {
// const [formValues, setFormValues] = useState(initialValues);
// const [formErrors, setFormErros] = useState(initialErrors);
// const [disabled, setDisabled] = useState(initialDisabled);

// const updateForm = (inputName, inputValue) => {
//   setFormValues({...formValues, [inputName]: inputValue})
// }
// const postOrder = (postNewOrder) => {
//   axios
//   .get('http://localhost:3001/')
// }
// const formSubmit = () => {
//   const newOrder = {
//     name: formValues.name.trim(),
//     size: formValues.size,
//     toppings: formValues.toppings,
//     special: formValues.special.trim()
//   };


// const inputChange = (name, value) =>{
//   yup
//   .reach(schema, name)
//   .validate(value)
//   .then(() => {
//     setFormErros({
//       ...formErrors, [name]: '',
//     });
//   })
//   .catch((err)=>{
//     setFormErros({
//       ...formErrors, [name]: err.errors[0],
//     })
//   })
// }
 return(
<div>
<div>
  <h1>Lambda Eats</h1>
  <nav>
<Link to="/Home">Home</Link>
<Link to="/Form">Form</Link>
  </nav>

  
</div>







<Switch>
  <Route exact path={'/Home'}>
    <Home />
  </Route>
  <Route exact path={'/Form'}>
    <Form />
  </Route>
</Switch>

</div>

 )

};


