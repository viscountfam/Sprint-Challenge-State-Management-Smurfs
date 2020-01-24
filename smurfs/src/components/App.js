import React, { Component } from "react";
import SmurfList from './SmurfList'
import NewSmurfForm from './NewSmurfForm'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <NewSmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
