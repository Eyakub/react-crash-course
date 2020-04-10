import React from "react";

class ControlledForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.dir(event.target)
    console.log(this.state);
    event.target.reset();
    this.setState({name: '', email: '', password: ''})
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Controlled Form (by React)</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control my-2"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter your name..."
          />
          <input
            className="form-control my-2"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter your email..."
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter your password..."
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default ControlledForm;
/**
 * Index -> state and logic (submit handler, change handler, blur handler, validation)
 * Form -> form jsx
 */