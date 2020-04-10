import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      className="form-control my-2"
      type={props.type}
      name={props.name}
      id={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextInput.defaultProps ={
  type: 'text',
  label: '',
}

const Form = props => (
  ''
);

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
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Controlled Form (by React)</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput 
            name='name'
            label='Enter name'
            placeholder='Enter your name'
            value={name}
            onChange={this.handleChange}
          />
          <TextInput 
            name='email'
            type='email'
            label='Enter email'
            placeholder='Enter your email'
            value={email}
            onChange={this.handleChange}
          />
          <TextInput 
            name='password'
            label='Enter password'
            placeholder='Enter your password'
            value={password}
            type='password'
            onChange={this.handleChange}
          />

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default SplitForm;
/**
 * Index -> state and logic (submit handler, change handler, blur handler, validation)
 * Form -> form jsx
 */
