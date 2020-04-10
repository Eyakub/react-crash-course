import React from "react";

class CounterApp extends React.Component {
  state = {
    count: 0,
  };
  intervalId = null;
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer Finished");
            clearInterval(this.intervalId);
            console.log('starttimer - ', this.intervalId)
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };
  stopTimer = () => {
    if(this.intervalId){
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  };

  resetTimer = () => {
    this.setState({count: 0})
    clearInterval(this.intervalId)
    console.log('reset - ', this.intervalId)
    this.intervalId = null;
  }
  render() {
    return (
      <div>
        <h3>Why Do we need state?</h3>
        <div style={{ display: "inline" }}>
          <button onClick={this.decrementCount}>-</button>
          <h3>{this.state.count}</h3>
          <button onClick={this.incrementCount}>+</button>
        </div>
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>

        {/* <button 
          onClick={() => {
            // this.setState({count: this.state.count + 1})
            this.setState(
              prev => {
                return{
                  count: prev.count + 1
                };
              },
              // if we want any operation after completing the state value
              // we can pass obj this way, and a CALLBACK function as 2nd PARAM after returning
              // data we'll get the exact output
              () => {
                console.log('Clicked - ', this.state.count);
              }
            );
          }}>
          Increase
        </button> */}
      </div>
    );
  }
}

export default CounterApp;
