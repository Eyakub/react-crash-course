import React from 'react';
import './profile.style.css';

import Bio from './bio';
import Skills from './skills';
import Links from './links';

class Profile extends React.Component{
  info = {
    name: 'MD Eyakub Sorkar',
    title: 'Fullstack Software Engineer',
    skillA: 'Python',
    skillB: 'Java',
    skillC: 'C++',
  }
  render(){
    console.log('Profile - ', this.props)
    return(
      <div className="container">
        <Bio name="MD Eyakub Sorkar" title="Fullstack Software Engineer"/>
        <Skills
          skillA={this.info.skillA}
          skillB={this.info.skillB}
          skillC={this.info.skillC}
        />
        <Links/>
      </div>
    );
  }
}

export default Profile;