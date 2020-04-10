import React from "react";
import TextInput from "./text-input";
import PropTypes from 'prop-types';


// distucturing data
// const Form = ({values, handleChange}) =>

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        className="form-group"
        name="name"
        label="Name"
        placeholder="Eyakub Sorkar"
        value={props.values.name}
        onChange={props.handleChange}
      />
      <TextInput
        className="form-group"
        name="email"
        type="email"
        label="Email"
        placeholder="eyakubsorkar@gmail.com"
        value={props.values.email}
        onChange={props.handleChange}
      />
      <TextInput
        className="form-group"
        name="password"
        type="password"
        label="Password"
        placeholder="*****"
        value={props.values.password}
        onChange={props.handleChange}
      />
      <TextInput
        className="form-group"
        name="birthDate"
        type="date"
        label="BirthDate"
        value={props.values.birthDate}
        onChange={props.handleChange}
      />
      <div className="form-group">
        <label className='mr-4'>
          <input
            className="form-group mr-2"
            type="radio"
            name="gender"
            value="Male"
            onChange={props.handleChange}
          />
          Male
        </label>
        <label className='mr-4'>
          <input
            className="form-group mr-2"
            type="radio"
            name="gender"
            value="Female"
            onChange={props.handleChange}
          />
          Female
        </label>
        <label className='mr-4'>
          <input
            className="form-group mr-2"
            type="radio"
            name="gender"
            value="Other"
            onChange={props.handleChange}
          />
          Other
        </label>
      </div>
      <div className="form-group">
        <label className='mr-4'>
          <input
            className="form-group mr-2"
            type="checkbox"
            name="agreement"
            checked={props.agreement}
            onChange={props.handleAgreement}
          />
          I agree
        </label>
      </div>

      <button className="btn btn-primary" type="submit" disabled={!props.agreement}>
        Create User
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default Form;
