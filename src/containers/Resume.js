import React, { Component } from 'react';
import EducationList from '../components/Education/EducationList';
import WorkHistory from '../components/WorkHistory/JobList';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';
const resume = require('../../public/resume.json');

export default class Resume extends Component {
 

  render() {
    if(this.props.resume){
      let work = this.props.resume.work.map(function(work){
        return (<div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>);
      });
      var skills = this.props.resume.skills.map(function(skills){
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (<li key={skills.name}><span className={className}></span><em>{skills.name}</em></li>);
      });
    }

    return (
      <>
        <Contact />
        <EducationList />
        <WorkHistory />
        <Skills />
      </>
    );
  }
}
