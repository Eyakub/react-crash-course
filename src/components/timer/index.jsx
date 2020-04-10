import React from 'react';

class TimerApp extends React.Component{
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1})
  };
  decrementCount = () => {
    this.setState({count: this.state.count - 1})
  };

  render(){
    return (
      <div className="app">
        <hr/>
        <h1>Timer</h1>
        
      </div>
    )
  }
}