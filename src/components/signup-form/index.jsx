import React from "react";
import Form from './form';
import PropTypes from 'prop-types';


const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

class SignupForm extends React.Component {
  state = {
    values: initValues,
    agreement: false,
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (event) => {
    this.setState({ agreement: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {isValid, errors} = this.validate()
    console.log(errors)
    if(isValid){
      this.props.createUser(this.state.values)
      console.log(this.state.values)
      event.target.reset();
      this.setState({values: initValues, agreement: false, errors: {}})
    } else {
      // console.error(errors);
      this.setState({
        errors
      })
    }
  };

  validate = () => {
    const errors = {};
    const {values: {name, email, password, gender, birthDate}, agreement} = this.state
    console.log(gender)
    if(!name){
      errors.name = 'Please provide your name';
    } else if(name.length < 10){
      errors.name = "Name should be at least more than 10 length"
    }
    if(!email){
      errors.email = 'Please provide your email';
    }
    if(!password){
      errors.password = 'Please provide your password';
    }
    if(!birthDate){
      errors.birthDate = 'Please provide your BirthDate';
    }
    if(!gender){
      errors.gender = 'Please select your gender';
    }
    if(agreement === false){
      errors.agreement = 'To Signup you have to agree with us.';
    }

    return {
      errors,
      // this will return a keys in a list way of errors
      isValid: Object.keys(errors).length === 0,
    }
  }

  render() {
    return(
      <div>
        <h1>Signup Form</h1>
        <Form 
          values={this.state.values}
          errors={this.state.errors}
          agreement={this.state.agreement}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleAgreement={this.handleAgreement}
        />
      </div>
    )
  }
}

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
}

export default SignupForm;
