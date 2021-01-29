import React from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Home from './Home'
import Form from './Form'







export default function App() {

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


