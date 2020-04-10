import React from "react";
import PropTypes from 'prop-types';
import Form from '../split-form/form';

class SplitForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.dir(event.target)
    console.log(this.state);
    event.target.reset();
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Controlled Form (by React)</h1>
        <Form 
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default SplitForm;
/**
 * Index -> state and logic (submit handler, change handler, blur handler, validation)
 * Form -> form jsx
 */
