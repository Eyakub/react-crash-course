import React from 'react';

class UncontrolledForm extends React.Component{
  handleSubmit = event => {
    event.preventDefault();
    // console.dir(event.target)
    const data = {};
    data.name = event.target.name.value
    data.email = event.target.email.value
    data.password = event.target.password.value
    event.target.reset();
    console.log(data)
  }
  render(){
    return(
      <div>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input className='form-control my-2' type="text" name='name' placeholder='Enter your name...' />
          <input className='form-control my-2' type="text" name='email' placeholder='Enter your email...' />
          <input className='form-control my-2' type="password" name='password' placeholder='Enter your password...' />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
export default UncontrolledForm;