import React from "react";

class Inputs extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
    skills: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckBox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  };

  handleSkillChange = (event) => {
    if (event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value],
      });
    } else {
      const skills = this.state.skills.filter(skill => skill !== event.target.value)
      this.setState({skills})
    }
  };

  render() {
    //distructure
    const { name, country, bio, birthDay, agree, skills } = this.state;

    return (
      <div>
        <h1>Input Field event</h1>
        <input
          onChange={this.handleChange}
          className="form-control my-2"
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name..."
        />
        <select
          name="country"
          id=""
          value={country}
          className="form-control my-2"
          onChange={this.handleChange}
        >
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="Germany">Germany</option>
        </select>
        <textarea
          name="bio"
          id="bio"
          value={bio}
          placeholder="Tell me about yourself"
          className="form-control my-2"
          onChange={this.handleChange}
        ></textarea>
        <input
          type="date"
          name="birthDay"
          value={birthDay}
          className="form-control my-2"
          onChange={this.handleChange}
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={this.handleChange}
          />
          Other
        </div>
        <div>
          Skills: <br />
          <input
            type="checkbox"
            name="skills"
            value="Java"
            checked={skills.includes("Java")}
            onChange={this.handleSkillChange}
          />{" "}
          Java
          <input
            type="checkbox"
            name="skills"
            value="Python"
            checked={skills.includes("Python")}
            onChange={this.handleSkillChange}
          />{" "}
          Python
          <input
            type="checkbox"
            name="skills"
            value="JS"
            checked={skills.includes("JS")}
            onChange={this.handleSkillChange}
          />{" "}
          JS
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleCheckBox}
          />{" "}
          Agree
        </div>
        <button onClick={() => console.log(this.state)}>Submit</button>
      </div>
    );
  }
}

export default Inputs;
