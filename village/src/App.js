import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
componentDidMount(){
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    // console.log(res);
    this.setState({ smurfs: res.data });
  })
  .catch(error => {
    console.error('Server Error', error);
  });
}


    
  

  render() {
    return (
      <div className="App">
        <div>
<NavLink to="/">Smurfs</NavLink>
<NavLink to="/smurf-form">Add Smurfs</NavLink>
        </div>
        
        <div>
        <Route  path="/smurf-form" render={props => <SmurfForm {...props} />}/>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
        
        </div>
      </div>
    );
  }
}

export default App;
