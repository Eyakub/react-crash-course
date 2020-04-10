import React from "react";
import Form from './form';

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
    console.log(this.state.values);
    event.target.reset();
    this.setState({values: initValues, agreement: false});
  };

  render() {
    return(
      <div>
        <h1>Signup Form</h1>
        <Form 
          values={this.state.values}
          agreement={this.state.agreement}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleAgreement={this.handleAgreement}
        />
      </div>
    )
  }
}

export default SignupForm;
