import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import Login from './Component/Pages/Login'
import Logout from './Component/Pages/Logout'
import InputField from './Component/Pages/InputField'
import Admin from './Component/Pages/Admin'


  function App() {
    return (
        <>
          <Router>
  
            <Switch>
              <Route exact path='/add-student' component={InputField}/>
              <Route exact path='/' component={Login}/>
              <Route exact path='/admin' component={Admin}/>
              <Route exact path='/logout' component={Logout}/>
              
            </Switch>
          </Router>
        </>
    );
    
  }


export default App;
