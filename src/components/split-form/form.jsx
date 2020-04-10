import React from "react";
import PropTypes from "prop-types";
import TextInput from "../split-form/text-input";

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <TextInput
      name="name"
      label="Enter name"
      placeholder="Enter your name"
      value={props.values.name}
      onChange={props.handleChange}
    />
    <TextInput
      name="email"
      type="email"
      label="Enter email"
      placeholder="Enter your email"
      value={props.values.email}
      onChange={props.handleChange}
    />
    <TextInput
      name="password"
      label="Enter password"
      placeholder="Enter your password"
      value={props.values.password}
      type="password"
      onChange={props.handleChange}
    />

    <button className="btn btn-primary" type="submit">
      Submit
    </button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
