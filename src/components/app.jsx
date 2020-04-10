import React from 'react';
import Profile from './profile';
import MyProps from './props';
import Bio from './profile/bio';
import Counter from './counter';
import Inputs from '../components/inputs';
import UncontrolledForm from '../components/uncontrolled_form';
import ControlledForm from '../components/controlled_form';

import classes from './app.module.css';
import SplitForm from './split-form';

class App extends React.Component{
  // Data and logic layer
  /**
   * 1. State
   * 2. Variable or properties
   * 3. Functions or Methods
   * 4. Life Cycle methods
   */

  // Representation layer (required)
  /**
   * 5. JSX
   */
  state = {
    name: ''
  }

  handleButtonClick = (event) => {
    console.log("Clicked on - ", event.target);
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
    console.log(event.target.value)
  }

  // checking input field focused or not
  handleFocus = (event) =>  {
    console.log('im focus event')
  }

  // Blur checks on outside of your event
  handleBlur = (event) => {
    if(!this.state.name){
      alert('Please enter your name')
    }
    console.log('im blur event')
  }
  render(){
    return (
      <div className="App">
        {/* <Profile/>
        <MyProps name="MD Eyakub Sorkar" />
        <hr/>
        <Counter /> */}
        <div className={classes.wrapper}>
          <h1 className={classes.heading}>Events in React</h1>
          <button className={classes.button} onClick={this.handleButtonClick}>Click me</button>
          <br/>
          <input className={classes.text} 
            type="text" 
            placeholder="Enter some text..."
            value={this.state.name}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
        </div>
        <br/>
        {this.state.name && <h1>Welcome, {this.state.name}</h1>}
        {/* <hr/>
        <div className={classes.wrapper}>
         <Inputs/>
        </div> */}
        <hr/>
        <div className={classes.wrapper}>
          <UncontrolledForm />
        </div>
        <hr/>
        <div className={classes.wrapper}>
          {/* <ControlledForm /> */}
          <SplitForm />
        </div>
      </div>
    )
  }
}

export default App;